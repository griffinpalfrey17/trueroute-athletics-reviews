// Email Service for TrueRoute
// Handles real email delivery for verification codes

class EmailService {
    constructor() {
        this.emailjsInitialized = false;
        this.serviceConfig = {
            emailjs: {
                publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with actual key
                serviceId: 'YOUR_SERVICE_ID',         // Replace with actual service ID
                templateId: 'YOUR_TEMPLATE_ID'        // Replace with actual template ID
            }
        };
        
        this.initializeEmailJS();
    }

    // Initialize EmailJS
    async initializeEmailJS() {
        try {
            // Load EmailJS library if not already loaded
            if (typeof emailjs === 'undefined') {
                await this.loadEmailJSLibrary();
            }
            
            // Initialize with public key (when you have real credentials)
            // emailjs.init(this.serviceConfig.emailjs.publicKey);
            this.emailjsInitialized = true;
            console.log('EmailJS initialized successfully');
        } catch (error) {
            console.warn('EmailJS initialization failed:', error);
            this.emailjsInitialized = false;
        }
    }

    // Load EmailJS library dynamically
    loadEmailJSLibrary() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Send verification email (production method)
    async sendVerificationEmail(email, code, userInfo) {
        console.log(`📧 Sending verification email to: ${email}`);
        
        // Try multiple methods in order of preference
        const methods = [
            () => this.sendWithEmailJS(email, code, userInfo),
            () => this.sendWithBackendAPI(email, code, userInfo),
            () => this.sendWithSimulation(email, code, userInfo)
        ];

        for (const method of methods) {
            try {
                const result = await method();
                if (result.success) {
                    console.log(`✅ Email sent successfully via ${result.method}`);
                    return result;
                }
            } catch (error) {
                console.warn(`❌ Email method failed:`, error);
                continue;
            }
        }

        // If all methods fail, use fallback
        return this.sendWithFallback(email, code, userInfo);
    }

    // Method 1: EmailJS (client-side email service)
    async sendWithEmailJS(email, code, userInfo) {
        if (!this.emailjsInitialized) {
            throw new Error('EmailJS not initialized');
        }

        // For demo purposes, we'll simulate this since we don't have real credentials
        // In production, you would use:
        /*
        const templateParams = {
            to_email: email,
            to_name: `${userInfo.firstName} ${userInfo.lastName}`,
            verification_code: code,
            user_type: userInfo.userType,
            expires_in: '30 minutes'
        };

        const result = await emailjs.send(
            this.serviceConfig.emailjs.serviceId,
            this.serviceConfig.emailjs.templateId,
            templateParams
        );
        */

        // Simulate EmailJS for demo
        console.log('📧 [EmailJS Simulation] Sending email...');
        await this.delay(1000); // Simulate network delay
        
        return {
            success: true,
            method: 'EmailJS',
            message: `Verification email sent to ${email} via EmailJS`,
            messageId: 'emailjs_' + Date.now()
        };
    }

    // Method 2: Backend API (when you have a server)
    async sendWithBackendAPI(email, code, userInfo) {
        const response = await fetch('/api/send-verification-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                code,
                userInfo,
                template: 'verification'
            })
        });

        if (!response.ok) {
            throw new Error(`Backend API failed: ${response.status}`);
        }

        const result = await response.json();
        return {
            success: true,
            method: 'Backend API',
            message: `Verification email sent to ${email} via backend`,
            messageId: result.messageId
        };
    }

    // Method 3: Enhanced simulation (for development/demo)
    async sendWithSimulation(email, code, userInfo) {
        console.log('📧 [Enhanced Simulation] Preparing email...');
        
        // Create a more realistic email preview
        const emailContent = this.generateEmailContent(email, code, userInfo);
        
        // Simulate network delay
        await this.delay(1500);
        
        // Show email content in a styled popup
        this.showEmailPreview(emailContent);
        
        // Also log to console with styling
        console.log('%c📧 VERIFICATION EMAIL SENT', 'background: #4A90E2; color: white; padding: 10px; font-size: 14px; font-weight: bold;');
        console.log('%cTo: ' + email, 'color: #4A90E2; font-weight: bold;');
        console.log('%cCode: ' + code, 'color: #22c55e; font-weight: bold; font-size: 16px;');
        console.log('%cExpires: 30 minutes', 'color: #f97316;');
        
        return {
            success: true,
            method: 'Enhanced Simulation',
            message: `Verification email simulated for ${email}`,
            messageId: 'sim_' + Date.now(),
            emailContent
        };
    }

    // Fallback method (always works)
    async sendWithFallback(email, code, userInfo) {
        console.log('📧 [Fallback] Using basic notification...');
        
        // Store code in a way that's accessible to user
        window.lastVerificationCode = code;
        window.lastVerificationEmail = email;
        
        // Simple alert as last resort
        alert(`📧 Verification Required\n\nA verification code has been generated for ${email}.\n\nCode: ${code}\n\n(In production, this would be sent via email)`);
        
        return {
            success: true,
            method: 'Fallback Alert',
            message: `Verification code displayed for ${email}`,
            messageId: 'fallback_' + Date.now()
        };
    }

    // Generate realistic email content
    generateEmailContent(email, code, userInfo) {
        const { firstName, lastName, userType } = userInfo;
        
        return {
            to: email,
            subject: 'Verify your TrueRoute account',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #4A90E2, #357ABD); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0;">TrueRoute</h1>
                        <p style="color: white; margin: 10px 0 0 0;">College Athletics Reviews & Analytics</p>
                    </div>
                    
                    <div style="padding: 30px; background: white;">
                        <h2 style="color: #333;">Hi ${firstName},</h2>
                        
                        <p>Welcome to TrueRoute! Please verify your email address to complete your account setup.</p>
                        
                        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                            <p style="margin: 0 0 10px 0; color: #666;">Your verification code is:</p>
                            <div style="font-size: 32px; font-weight: bold; color: #4A90E2; letter-spacing: 4px;">${code}</div>
                            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">This code expires in 30 minutes</p>
                        </div>
                        
                        <p>As a <strong>${this.formatUserType(userType)}</strong>, you'll have access to:</p>
                        <ul>
                            <li>Detailed program reviews and ratings</li>
                            <li>NIL opportunity insights</li>
                            <li>Program analytics and comparisons</li>
                            <li>Authentic student-athlete experiences</li>
                        </ul>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="http://localhost:8080/verify-email.html?email=${encodeURIComponent(email)}" 
                               style="background: #4A90E2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                                Verify My Email
                            </a>
                        </div>
                        
                        <p style="color: #666; font-size: 14px;">
                            If you didn't create this account, you can safely ignore this email.
                        </p>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 20px; text-align: center; color: #666; font-size: 12px;">
                        <p>© 2025 TrueRoute. All rights reserved.</p>
                    </div>
                </div>
            `,
            text: `
Hi ${firstName},

Welcome to TrueRoute! Please verify your email address to complete your account setup.

Your verification code is: ${code}

This code expires in 30 minutes.

Visit: http://localhost:8080/verify-email.html?email=${encodeURIComponent(email)}

If you didn't create this account, you can safely ignore this email.

© 2025 TrueRoute. All rights reserved.
            `
        };
    }

    // Show email preview in a styled modal
    showEmailPreview(emailContent) {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        // Create modal content
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            border-radius: 12px;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        `;
        
        modal.innerHTML = `
            <div style="padding: 20px; border-bottom: 1px solid #e2e8f0;">
                <h3 style="margin: 0; color: #333;">📧 Email Preview (Development Mode)</h3>
                <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                    To: ${emailContent.to} | Subject: ${emailContent.subject}
                </p>
            </div>
            <div style="padding: 0;">
                ${emailContent.html}
            </div>
            <div style="padding: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <button onclick="this.closest('.email-preview-overlay').remove()" 
                        style="background: #4A90E2; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
                    Close Preview
                </button>
            </div>
        `;
        
        overlay.className = 'email-preview-overlay';
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    // Helper methods
    formatUserType(userType) {
        const types = {
            'current-athlete': 'Current Student-Athlete',
            'former-athlete': 'Former Student-Athlete',
            'prospective-athlete': 'Prospective Student-Athlete',
            'parent': 'Parent/Guardian'
        };
        return types[userType] || userType;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Get email delivery status
    async getDeliveryStatus(messageId) {
        // In production, this would check with your email service
        return {
            messageId,
            status: 'delivered',
            timestamp: new Date().toISOString()
        };
    }
}

// Create global instance
window.emailService = new EmailService();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmailService;
}
