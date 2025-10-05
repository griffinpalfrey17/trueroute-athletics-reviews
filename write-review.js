// Review form functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeStarRatings();
    initializeFormValidation();
});

// Initialize star rating functionality
function initializeStarRatings() {
    const starRatings = document.querySelectorAll('.star-rating');
    
    starRatings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        const category = rating.dataset.category;
        const hiddenInput = document.getElementById(category);
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const value = parseInt(this.dataset.value);
                hiddenInput.value = value;
                
                // Update visual state
                updateStarDisplay(stars, value);
            });
            
            star.addEventListener('mouseenter', function() {
                const value = parseInt(this.dataset.value);
                updateStarDisplay(stars, value, true);
            });
        });
        
        // Reset to actual value on mouse leave
        rating.addEventListener('mouseleave', function() {
            const currentValue = parseInt(hiddenInput.value) || 0;
            updateStarDisplay(stars, currentValue);
        });
    });
}

// Update star display
function updateStarDisplay(stars, value, isHover = false) {
    stars.forEach((star, index) => {
        const starValue = parseInt(star.dataset.value);
        
        if (starValue <= value) {
            star.textContent = '★';
            star.style.color = isHover ? '#fbbf24' : '#f59e0b';
        } else {
            star.textContent = '☆';
            star.style.color = '#d1d5db';
        }
    });
}

// Form validation and submission
function initializeFormValidation() {
    const form = document.getElementById('reviewForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitReview();
        }
    });
}

// Validate required fields
function validateForm() {
    const requiredFields = ['school', 'sport'];
    let isValid = true;
    
    // Check required dropdowns
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Check that at least some ratings are provided
    const ratingCategories = [
        'academic', 'facilities_general', 'culture_community', 'financial_support',
        'compliance', 'career_support', 'coaching', 'team_culture', 'training_load',
        'sport_facilities', 'playing_time', 'nutrition_medical', 'nil_exposure'
    ];
    
    const hasRatings = ratingCategories.some(category => {
        const input = document.getElementById(category);
        return input && input.value;
    });
    
    if (!hasRatings) {
        alert('Please provide at least one rating to submit your review.');
        isValid = false;
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#ef4444';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = '';
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Submit review
function submitReview() {
    const formData = collectFormData();
    
    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual submission logic)
    setTimeout(() => {
        console.log('Review submitted:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        document.getElementById('reviewForm').reset();
        resetStarRatings();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Redirect after success
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        
    }, 1500);
}

// Collect all form data
function collectFormData() {
    const formData = {
        // Basic info
        school: document.getElementById('school').value,
        sport: document.getElementById('sport').value,
        years: document.getElementById('years').value,
        position: document.getElementById('position').value,
        
        // Ratings
        ratings: {
            academic: parseInt(document.getElementById('academic').value) || 0,
            facilities_general: parseInt(document.getElementById('facilities_general').value) || 0,
            culture_community: parseInt(document.getElementById('culture_community').value) || 0,
            financial_support: parseInt(document.getElementById('financial_support').value) || 0,
            compliance: parseInt(document.getElementById('compliance').value) || 0,
            career_support: parseInt(document.getElementById('career_support').value) || 0,
            coaching: parseInt(document.getElementById('coaching').value) || 0,
            team_culture: parseInt(document.getElementById('team_culture').value) || 0,
            training_load: parseInt(document.getElementById('training_load').value) || 0,
            sport_facilities: parseInt(document.getElementById('sport_facilities').value) || 0,
            playing_time: parseInt(document.getElementById('playing_time').value) || 0,
            nutrition_medical: parseInt(document.getElementById('nutrition_medical').value) || 0,
            nil_exposure: parseInt(document.getElementById('nil_exposure').value) || 0
        },
        
        // Financial info
        financial: {
            nil_amount: document.getElementById('nil_amount').value,
            nil_companies: document.getElementById('nil_companies').value,
            scholarship_type: document.getElementById('scholarship_type').value,
            scholarship_percentage: document.getElementById('scholarship_percentage').value,
            financial_aid_type: document.getElementById('financial_aid_type').value,
            financial_aid_amount: document.getElementById('financial_aid_amount').value
        },
        
        // Written review
        written_review: document.getElementById('written_review').value,
        
        // Metadata
        submitted_at: new Date().toISOString()
    };
    
    return formData;
}

// Reset star ratings
function resetStarRatings() {
    const starRatings = document.querySelectorAll('.star-rating');
    
    starRatings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        const category = rating.dataset.category;
        const hiddenInput = document.getElementById(category);
        
        hiddenInput.value = '';
        updateStarDisplay(stars, 0);
    });
}

// Show success message
function showSuccessMessage() {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const successBox = document.createElement('div');
    successBox.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        max-width: 400px;
        margin: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    `;
    
    successBox.innerHTML = `
        <div style="color: #10b981; font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="margin: 0 0 0.5rem 0; color: #1f2937;">Review Submitted!</h3>
        <p style="margin: 0; color: #6b7280;">Thank you for sharing your experience. You're helping future student-athletes make informed decisions.</p>
    `;
    
    overlay.appendChild(successBox);
    document.body.appendChild(overlay);
    
    // Remove after 2 seconds
    setTimeout(() => {
        overlay.remove();
    }, 2000);
}

// Auto-save functionality (optional)
function initializeAutoSave() {
    const form = document.getElementById('reviewForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            saveFormProgress();
        });
    });
    
    // Load saved progress on page load
    loadFormProgress();
}

// Save form progress to localStorage
function saveFormProgress() {
    const formData = collectFormData();
    localStorage.setItem('reviewFormProgress', JSON.stringify(formData));
}

// Load form progress from localStorage
function loadFormProgress() {
    const savedData = localStorage.getItem('reviewFormProgress');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        // Restore basic fields
        if (formData.school) document.getElementById('school').value = formData.school;
        if (formData.sport) document.getElementById('sport').value = formData.sport;
        if (formData.years) document.getElementById('years').value = formData.years;
        if (formData.position) document.getElementById('position').value = formData.position;
        
        // Restore ratings
        Object.keys(formData.ratings).forEach(category => {
            const value = formData.ratings[category];
            if (value > 0) {
                const input = document.getElementById(category);
                if (input) {
                    input.value = value;
                    const starRating = document.querySelector(`[data-category="${category}"]`);
                    if (starRating) {
                        const stars = starRating.querySelectorAll('.star');
                        updateStarDisplay(stars, value);
                    }
                }
            }
        });
        
        // Restore financial info
        Object.keys(formData.financial).forEach(field => {
            const value = formData.financial[field];
            if (value) {
                const input = document.getElementById(field);
                if (input) input.value = value;
            }
        });
        
        // Restore written review
        if (formData.written_review) {
            document.getElementById('written_review').value = formData.written_review;
        }
    }
}

// Clear saved progress when form is submitted
function clearFormProgress() {
    localStorage.removeItem('reviewFormProgress');
}

// Initialize auto-save (uncomment if desired)
// initializeAutoSave();
