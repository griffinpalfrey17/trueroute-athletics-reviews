// User Management System for TrueRoute
// This simulates a backend user management system using localStorage

class UserManager {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = this.loadCurrentUser();
        this.verificationCodes = this.loadVerificationCodes();
    }

    // Load users from localStorage
    loadUsers() {
        const users = localStorage.getItem('trueroute_users');
        return users ? JSON.parse(users) : {};
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('trueroute_users', JSON.stringify(this.users));
    }

    // Load current user session
    loadCurrentUser() {
        const currentUser = localStorage.getItem('trueroute_current_user');
        return currentUser ? JSON.parse(currentUser) : null;
    }

    // Save current user session
    saveCurrentUser(user) {
        if (user) {
            localStorage.setItem('trueroute_current_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('trueroute_current_user');
        }
        this.currentUser = user;
    }

    // Load verification codes
    loadVerificationCodes() {
        const codes = localStorage.getItem('trueroute_verification_codes');
        return codes ? JSON.parse(codes) : {};
    }

    // Save verification codes
    saveVerificationCodes() {
        localStorage.setItem('trueroute_verification_codes', JSON.stringify(this.verificationCodes));
    }

    // Generate verification code
    generateVerificationCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    // Create new user account
    async createAccount(userData) {
        const { email, password, firstName, lastName, userType } = userData;

        // Check if user already exists
        if (this.users[email]) {
            throw new Error('An account with this email already exists');
        }

        // Validate .edu email only for current and former athletes
        const requiresEduEmail = ['current-athlete', 'former-athlete'].includes(userType);
        if (requiresEduEmail && !email.toLowerCase().endsWith('.edu')) {
            throw new Error('Current and former student-athletes must use a valid .edu email address');
        }

        // Create user object
        const user = {
            id: this.generateUserId(),
            email: email.toLowerCase(),
            firstName,
            lastName,
            userType,
            password: this.hashPassword(password), // In real app, use proper hashing
            createdAt: new Date().toISOString(),
            emailVerified: false,
            manualVerified: false,
            verificationStatus: 'pending_email',
            profile: {
                sport: null,
                school: null,
                graduationYear: null,
                position: null
            }
        };

        // Generate verification code
        const verificationCode = this.generateVerificationCode();
        this.verificationCodes[email] = {
            code: verificationCode,
            expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes
            type: 'email_verification'
        };

        // Save user
        this.users[email] = user;
        this.saveUsers();
        this.saveVerificationCodes();

        // Send verification email using EmailService
        console.log('About to send verification email for:', email, 'with code:', verificationCode);
        this.sendVerificationEmail(email, verificationCode, { firstName, lastName, userType });

        return {
            success: true,
            user: this.sanitizeUser(user),
            message: 'Account created successfully! Please check your email for verification.'
        };
    }

    // Send verification email using EmailService
    async sendVerificationEmail(email, code, userInfo) {
        console.log(`📧 Email Verification for ${email}`);
        console.log(`Verification Code: ${code}`);
        console.log(`This code expires in 30 minutes.`);
        
        // Store for fallback access
        window.lastVerificationCode = code;
        window.lastVerificationEmail = email;
        
        try {
            // Use EmailService if available
            if (window.emailService) {
                const result = await window.emailService.sendVerificationEmail(email, code, userInfo);
                console.log('Email service result:', result);
                return result;
            } else {
                // Fallback to alert if EmailService not loaded
                throw new Error('EmailService not available');
            }
        } catch (error) {
            console.error('Email service failed, using fallback:', error);
            // Fallback alert
            alert(`📧 Verification Email Sent!\n\nTo: ${email}\nVerification Code: ${code}\n\n(In production, this would be sent via email)`);
            return { success: true, method: 'Fallback Alert' };
        }
    }

    // Verify email with code
    async verifyEmail(email, code) {
        const storedCode = this.verificationCodes[email];
        
        if (!storedCode) {
            throw new Error('No verification code found for this email');
        }

        if (new Date() > new Date(storedCode.expiresAt)) {
            delete this.verificationCodes[email];
            this.saveVerificationCodes();
            throw new Error('Verification code has expired');
        }

        if (storedCode.code !== code.toUpperCase()) {
            throw new Error('Invalid verification code');
        }

        // Mark email as verified
        const user = this.users[email];
        if (user) {
            user.emailVerified = true;
            user.verificationStatus = this.needsManualVerification(user.userType) ? 'pending_manual' : 'verified';
            this.saveUsers();
        }

        // Clean up verification code
        delete this.verificationCodes[email];
        this.saveVerificationCodes();

        return {
            success: true,
            user: this.sanitizeUser(user),
            message: 'Email verified successfully!',
            needsManualVerification: this.needsManualVerification(user.userType)
        };
    }

    // Check if user type needs manual verification
    needsManualVerification(userType) {
        return ['current-athlete', 'former-athlete'].includes(userType);
    }

    // Sign in user
    async signIn(email, password) {
        const user = this.users[email.toLowerCase()];
        
        if (!user) {
            throw new Error('No account found with this email address');
        }

        if (!this.verifyPassword(password, user.password)) {
            throw new Error('Incorrect password');
        }

        if (!user.emailVerified) {
            throw new Error('Please verify your email address before signing in');
        }

        // Save current user session
        this.saveCurrentUser(this.sanitizeUser(user));

        return {
            success: true,
            user: this.sanitizeUser(user),
            message: 'Signed in successfully!'
        };
    }

    // Sign out user
    signOut() {
        this.saveCurrentUser(null);
        return { success: true, message: 'Signed out successfully!' };
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is signed in
    isSignedIn() {
        return this.currentUser !== null;
    }

    // Resend verification code
    async resendVerificationCode(email) {
        const user = this.users[email.toLowerCase()];
        
        if (!user) {
            throw new Error('No account found with this email address');
        }

        if (user.emailVerified) {
            throw new Error('Email is already verified');
        }

        // Generate new verification code
        const verificationCode = this.generateVerificationCode();
        this.verificationCodes[email] = {
            code: verificationCode,
            expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
            type: 'email_verification'
        };

        this.saveVerificationCodes();
        this.simulateEmailVerification(email, verificationCode);

        return {
            success: true,
            message: 'Verification code sent successfully!'
        };
    }

    // Helper methods
    generateUserId() {
        return 'user_' + Math.random().toString(36).substring(2, 15);
    }

    hashPassword(password) {
        // Simple hash for demo - use proper hashing in production (bcrypt, etc.)
        return btoa(password + 'trueroute_salt');
    }

    verifyPassword(password, hash) {
        return this.hashPassword(password) === hash;
    }

    sanitizeUser(user) {
        const { password, ...sanitizedUser } = user;
        return sanitizedUser;
    }

    // Get all users (admin function)
    getAllUsers() {
        return Object.values(this.users).map(user => this.sanitizeUser(user));
    }

    // Update user profile
    async updateProfile(email, profileData) {
        const user = this.users[email.toLowerCase()];
        
        if (!user) {
            throw new Error('User not found');
        }

        user.profile = { ...user.profile, ...profileData };
        this.saveUsers();

        // Update current user session if it's the same user
        if (this.currentUser && this.currentUser.email === email) {
            this.saveCurrentUser(this.sanitizeUser(user));
        }

        return {
            success: true,
            user: this.sanitizeUser(user),
            message: 'Profile updated successfully!'
        };
    }
}

// Create global instance
window.userManager = new UserManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserManager;
}
