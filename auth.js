// Authentication JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

function initializeAuth() {
    // Password toggle functionality
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Update icon
            const icon = passwordToggle.querySelector('svg');
            if (type === 'text') {
                icon.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                `;
            } else {
                icon.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                `;
            }
        });
    }

    // Form validation
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    
    if (signInForm) {
        setupSignInValidation(signInForm);
    }
    
    if (signUpForm) {
        setupSignUpValidation(signUpForm);
    }

    // Social authentication buttons
    setupSocialAuth();
}

function setupSignInValidation(form) {
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    
    // Email validation on blur
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail(this);
        });
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = validateEmail(emailInput);
        const passwordValid = validatePassword(passwordInput, false); // false = don't check requirements for sign in
        
        if (emailValid && passwordValid) {
            handleSignIn(form);
        }
    });
}

function setupSignUpValidation(form) {
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const confirmPasswordInput = form.querySelector('#confirmPassword');
    const userTypeInputs = form.querySelectorAll('input[name="userType"]');
    
    // Email validation on blur
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail(this);
            validateEduEmail(this);
        });
    }
    
    // Password validation on input
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            validatePassword(this, true); // true = check requirements for sign up
        });
    }
    
    // Confirm password validation
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('blur', function() {
            validateConfirmPassword(passwordInput, this);
        });
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = validateEmail(emailInput) && validateEduEmail(emailInput);
        const passwordValid = validatePassword(passwordInput, true);
        const confirmPasswordValid = validateConfirmPassword(passwordInput, confirmPasswordInput);
        const userTypeValid = validateUserType(userTypeInputs);
        
        if (emailValid && passwordValid && confirmPasswordValid && userTypeValid) {
            handleSignUp(form);
        }
    });
}

function validateEmail(input) {
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById(input.id + 'Error');
    
    if (!email) {
        showError(errorElement, 'Email is required');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showError(errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function validateEduEmail(input) {
    const email = input.value.trim().toLowerCase();
    const errorElement = document.getElementById(input.id + 'Error');
    
    // Check if user type requires .edu email
    const userTypeInputs = document.querySelectorAll('input[name="userType"]');
    const selectedUserType = Array.from(userTypeInputs).find(input => input.checked)?.value;
    const requiresEduEmail = ['current-athlete', 'former-athlete'].includes(selectedUserType);
    
    if (requiresEduEmail && !email.endsWith('.edu')) {
        showError(errorElement, 'Current and former student-athletes must use a .edu email address');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function validatePassword(input, checkRequirements = false) {
    const password = input.value;
    const errorElement = document.getElementById(input.id + 'Error');
    
    if (!password) {
        showError(errorElement, 'Password is required');
        return false;
    }
    
    if (checkRequirements) {
        // Password requirements for sign up
        if (password.length < 8) {
            showError(errorElement, 'Password must be at least 8 characters long');
            return false;
        }
        
        if (!/(?=.*[a-z])/.test(password)) {
            showError(errorElement, 'Password must contain at least one lowercase letter');
            return false;
        }
        
        if (!/(?=.*[A-Z])/.test(password)) {
            showError(errorElement, 'Password must contain at least one uppercase letter');
            return false;
        }
        
        if (!/(?=.*\d)/.test(password)) {
            showError(errorElement, 'Password must contain at least one number');
            return false;
        }
    }
    
    hideError(errorElement);
    return true;
}

function validateConfirmPassword(passwordInput, confirmInput) {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    const errorElement = document.getElementById(confirmInput.id + 'Error');
    
    if (!confirmPassword) {
        showError(errorElement, 'Please confirm your password');
        return false;
    }
    
    if (password !== confirmPassword) {
        showError(errorElement, 'Passwords do not match');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function validateUserType(inputs) {
    const errorElement = document.getElementById('userTypeError');
    const selected = Array.from(inputs).some(input => input.checked);
    
    if (!selected) {
        showError(errorElement, 'Please select your user type');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

function hideError(element) {
    if (element) {
        element.classList.remove('show');
        element.textContent = '';
    }
}

function setupSocialAuth() {
    const googleBtn = document.querySelector('.google-btn');
    const appleBtn = document.querySelector('.apple-btn');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            // In a real implementation, this would integrate with Google OAuth
            alert('Google sign-in would be implemented here with OAuth 2.0');
        });
    }
    
    if (appleBtn) {
        appleBtn.addEventListener('click', function() {
            // In a real implementation, this would integrate with Apple Sign In
            alert('Apple sign-in would be implemented here with Sign in with Apple');
        });
    }
}

async function handleSignIn(form) {
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe');
    
    // Show loading state
    const submitBtn = form.querySelector('.auth-submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing In...';
    submitBtn.disabled = true;
    
    try {
        // Sign in using UserManager
        const result = await window.userManager.signIn(email, password);
        
        if (result.success) {
            // Show success message
            alert(result.message);
            
            // Redirect to homepage
            window.location.href = 'index.html';
        }
    } catch (error) {
        // Show error message
        alert('Error: ' + error.message);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function handleSignUp(form) {
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const userType = formData.get('userType');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    
    // Show loading state
    const submitBtn = form.querySelector('.auth-submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;
    
    try {
        // Create account using UserManager
        const result = await window.userManager.createAccount({
            email,
            password,
            firstName,
            lastName,
            userType
        });
        
        if (result.success) {
            // Show success message
            alert(result.message);
            
            // Redirect to email verification page
            window.location.href = 'verify-email.html?email=' + encodeURIComponent(email);
        }
    } catch (error) {
        // Show error message
        alert('Error: ' + error.message);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Password strength indicator (for sign up page)
function updatePasswordStrength(password) {
    const strengthIndicator = document.getElementById('passwordStrength');
    if (!strengthIndicator) return;
    
    let strength = 0;
    let feedback = [];
    
    if (password.length >= 8) strength++;
    else feedback.push('At least 8 characters');
    
    if (/[a-z]/.test(password)) strength++;
    else feedback.push('One lowercase letter');
    
    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('One uppercase letter');
    
    if (/\d/.test(password)) strength++;
    else feedback.push('One number');
    
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    const strengthLevels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#16a34a'];
    
    strengthIndicator.textContent = strengthLevels[strength] || 'Very Weak';
    strengthIndicator.style.color = strengthColors[strength] || '#ef4444';
    
    // Update requirements list
    const requirementsList = document.getElementById('passwordRequirements');
    if (requirementsList && feedback.length > 0) {
        requirementsList.innerHTML = feedback.map(req => `<li>${req}</li>`).join('');
        requirementsList.style.display = 'block';
    } else if (requirementsList) {
        requirementsList.style.display = 'none';
    }
}
