// Detailed Review Form JavaScript

// Section questions - 5 questions per section
const sectionQuestions = {
    coaching: {
        title: "Coaching & Player Development",
        questions: [
            {
                id: "coaching_quality",
                question: "How would you rate the overall quality of coaching you received?",
                scale: ["Poor", "Below Average", "Average", "Good", "Excellent"]
            },
            {
                id: "coaching_communication",
                question: "How clear and consistent was communication from the coaching staff about your role and expectations?",
                scale: ["Very Unclear", "Unclear", "Somewhat Clear", "Clear", "Very Clear"]
            },
            {
                id: "coaching_development",
                question: "How well did the coaching staff help develop your skills and abilities?",
                scale: ["Not at all", "Slightly", "Moderately", "Well", "Extremely Well"]
            },
            {
                id: "coaching_fairness",
                question: "How fair were the coaches in their treatment of players and playing time decisions?",
                scale: ["Very Unfair", "Unfair", "Somewhat Fair", "Fair", "Very Fair"]
            },
            {
                id: "coaching_support",
                question: "How supportive were the coaches of your academic and personal goals outside of athletics?",
                scale: ["Not Supportive", "Slightly Supportive", "Moderately Supportive", "Supportive", "Very Supportive"]
            }
        ]
    },
    culture: {
        title: "Team Culture & Environment",
        questions: [
            {
                id: "culture_atmosphere",
                question: "How would you describe the overall team atmosphere and locker room environment?",
                scale: ["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"]
            },
            {
                id: "culture_unity",
                question: "How unified and supportive were teammates toward each other?",
                scale: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
            },
            {
                id: "culture_inclusion",
                question: "How inclusive was the team environment for players of different backgrounds and experience levels?",
                scale: ["Not Inclusive", "Slightly Inclusive", "Moderately Inclusive", "Inclusive", "Very Inclusive"]
            },
            {
                id: "culture_upperclassmen",
                question: "How did upperclassmen treat younger or newer players on the team?",
                scale: ["Very Poorly", "Poorly", "Neutrally", "Well", "Very Well"]
            },
            {
                id: "culture_balance",
                question: "How well did the team balance being competitive and focused with having fun and building relationships?",
                scale: ["Very Poorly", "Poorly", "Adequately", "Well", "Very Well"]
            }
        ]
    },
    training: {
        title: "Time Commitment & Training Load",
        questions: [
            {
                id: "training_season_load",
                question: "How manageable was the time commitment during the competitive season?",
                scale: ["Unmanageable", "Very Difficult", "Difficult", "Manageable", "Very Manageable"]
            },
            {
                id: "training_offseason_load",
                question: "How reasonable was the offseason training and time commitment?",
                scale: ["Unreasonable", "Very Demanding", "Demanding", "Reasonable", "Very Reasonable"]
            },
            {
                id: "training_recovery",
                question: "How adequate was the time provided for rest and recovery between training sessions?",
                scale: ["Inadequate", "Poor", "Fair", "Good", "Excellent"]
            },
            {
                id: "training_personal_time",
                question: "How much personal time did you have outside of athletics for other activities and relationships?",
                scale: ["None", "Very Little", "Some", "Adequate", "Plenty"]
            },
            {
                id: "training_flexibility",
                question: "How flexible was the program when you had academic or personal conflicts?",
                scale: ["Not Flexible", "Slightly Flexible", "Moderately Flexible", "Flexible", "Very Flexible"]
            }
        ]
    },
    facilities: {
        title: "Facilities & Travel Experience",
        questions: [
            {
                id: "facilities_quality",
                question: "How would you rate the overall quality and condition of your sport-specific facilities?",
                scale: ["Poor", "Below Average", "Average", "Good", "Excellent"]
            },
            {
                id: "facilities_locker_room",
                question: "How satisfied were you with the locker room and team areas?",
                scale: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]
            },
            {
                id: "facilities_training",
                question: "How adequate were the training and weight room facilities for your needs?",
                scale: ["Inadequate", "Below Needs", "Adequate", "Good", "Excellent"]
            },
            {
                id: "facilities_travel",
                question: "How comfortable and professional was team travel for games and competitions?",
                scale: ["Very Poor", "Poor", "Fair", "Good", "Excellent"]
            },
            {
                id: "facilities_maintenance",
                question: "How well-maintained and clean were the facilities you used regularly?",
                scale: ["Very Poor", "Poor", "Fair", "Good", "Excellent"]
            }
        ]
    },
    "playing-time": {
        title: "Playing Time & Opportunity",
        questions: [
            {
                id: "playing_time_opportunity",
                question: "How fair were the opportunities to earn playing time based on performance?",
                scale: ["Very Unfair", "Unfair", "Somewhat Fair", "Fair", "Very Fair"]
            },
            {
                id: "playing_time_transparency",
                question: "How transparent were coaches about playing time decisions and what you needed to improve?",
                scale: ["Not Transparent", "Slightly Transparent", "Moderately Transparent", "Transparent", "Very Transparent"]
            },
            {
                id: "playing_time_development",
                question: "How well did the program develop players who weren't immediate starters?",
                scale: ["Very Poorly", "Poorly", "Adequately", "Well", "Very Well"]
            },
            {
                id: "playing_time_transfers",
                question: "How did the program handle incoming transfers in terms of roster spots and playing time?",
                scale: ["Very Poorly", "Poorly", "Adequately", "Well", "Very Well"]
            },
            {
                id: "playing_time_promises",
                question: "How honest and realistic were coaches about playing time expectations during recruitment?",
                scale: ["Very Dishonest", "Dishonest", "Somewhat Honest", "Honest", "Very Honest"]
            }
        ]
    },
    medical: {
        title: "Nutrition & Medical Resources",
        questions: [
            {
                id: "medical_nutrition_quality",
                question: "How would you rate the quality and variety of nutrition provided to athletes?",
                scale: ["Poor", "Below Average", "Average", "Good", "Excellent"]
            },
            {
                id: "medical_injury_prevention",
                question: "How effective were the injury prevention programs and resources?",
                scale: ["Ineffective", "Slightly Effective", "Moderately Effective", "Effective", "Very Effective"]
            },
            {
                id: "medical_trainer_access",
                question: "How accessible were athletic trainers when you needed medical attention?",
                scale: ["Not Accessible", "Rarely Accessible", "Sometimes Accessible", "Usually Accessible", "Always Accessible"]
            },
            {
                id: "medical_rehab_support",
                question: "How comprehensive was the rehabilitation support for injuries?",
                scale: ["Very Poor", "Poor", "Fair", "Good", "Excellent"]
            },
            {
                id: "medical_supplements",
                question: "How adequate were the supplements and recovery resources provided?",
                scale: ["Inadequate", "Below Average", "Adequate", "Good", "Excellent"]
            }
        ]
    },
    other: {
        title: "Other Experience",
        questions: [
            {
                id: "other_academic_support",
                question: "How helpful was the academic support provided to student-athletes?",
                scale: ["Not Helpful", "Slightly Helpful", "Moderately Helpful", "Helpful", "Very Helpful"]
            },
            {
                id: "other_financial_support",
                question: "How satisfied were you with the financial support and scholarship management?",
                scale: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]
            },
            {
                id: "other_social_life",
                question: "How well were you able to maintain a social life and relationships outside of athletics?",
                scale: ["Very Poorly", "Poorly", "Adequately", "Well", "Very Well"]
            },
            {
                id: "other_mental_health",
                question: "How adequate were the mental health and counseling resources available?",
                scale: ["Inadequate", "Below Average", "Adequate", "Good", "Excellent"]
            },
            {
                id: "other_overall",
                question: "Overall, how would you rate your experience as a student-athlete at this program?",
                scale: ["Very Poor", "Poor", "Fair", "Good", "Excellent"]
            }
        ]
    }
};

// Initialize the form when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelectedSections();
    setupFormHandlers();
});

function loadSelectedSections() {
    // Get selected sections from URL parameters or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const selectedSections = urlParams.get('sections') ? urlParams.get('sections').split(',') : [];
    
    // If no sections in URL, try localStorage
    if (selectedSections.length === 0) {
        const storedSections = localStorage.getItem('selectedSections');
        if (storedSections) {
            selectedSections.push(...JSON.parse(storedSections));
        }
    }
    
    if (selectedSections.length === 0) {
        // Redirect back to section selection if no sections selected
        window.location.href = 'write-review.html';
        return;
    }
    
    // Generate form sections
    const dynamicSections = document.getElementById('dynamicSections');
    selectedSections.forEach(sectionKey => {
        if (sectionQuestions[sectionKey]) {
            const sectionHTML = generateSectionHTML(sectionKey, sectionQuestions[sectionKey]);
            dynamicSections.innerHTML += sectionHTML;
        }
    });
}

function generateSectionHTML(sectionKey, sectionData) {
    let html = `
        <div class="form-section" data-section="${sectionKey}">
            <h2><i class="fas fa-star"></i> ${sectionData.title}</h2>
    `;
    
    sectionData.questions.forEach((question, index) => {
        html += `
            <div class="question-group">
                <h4>${question.question}</h4>
                <div class="rating-scale">
        `;
        
        question.scale.forEach((label, scaleIndex) => {
            const value = scaleIndex + 1;
            html += `
                <div class="rating-option" data-question="${question.id}" data-value="${value}">
                    <input type="radio" id="${question.id}_${value}" name="${question.id}" value="${value}" required>
                    <div class="rating-number">${value}</div>
                    <label for="${question.id}_${value}">${label}</label>
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="form-group">
                    <label for="${question.id}_comment">Additional comments (optional):</label>
                    <textarea id="${question.id}_comment" name="${question.id}_comment" rows="2" placeholder="Share any specific details about this aspect of your experience..."></textarea>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    return html;
}

function setupFormHandlers() {
    const form = document.getElementById('detailedReviewForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Setup rating option click handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.rating-option')) {
            const ratingOption = e.target.closest('.rating-option');
            const questionId = ratingOption.getAttribute('data-question');
            const value = ratingOption.getAttribute('data-value');
            
            // Clear previous selections for this question
            const questionGroup = ratingOption.closest('.question-group');
            const allOptions = questionGroup.querySelectorAll('.rating-option');
            allOptions.forEach(option => option.classList.remove('selected'));
            
            // Select this option
            ratingOption.classList.add('selected');
            
            // Update the hidden radio button
            const radioButton = ratingOption.querySelector('input[type="radio"]');
            radioButton.checked = true;
        }
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const reviewData = {};
    
    // Convert FormData to regular object
    for (let [key, value] of formData.entries()) {
        reviewData[key] = value;
    }
    
    // Here you would typically send the data to your backend
    console.log('Review Data:', reviewData);
    
    // Show success message and redirect
    alert('Thank you for your review! Your feedback has been submitted successfully.');
    window.location.href = 'index.html';
}

// Function to be called from write-review.html
function proceedToReview() {
    const selectedSections = [];
    const checkboxes = document.querySelectorAll('.section-checkbox input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const sectionCard = checkbox.closest('.section-card');
        const sectionKey = sectionCard.getAttribute('data-section');
        selectedSections.push(sectionKey);
    });
    
    if (selectedSections.length === 0) {
        alert('Please select at least one section to review.');
        return;
    }
    
    // Store selected sections and navigate to detailed form
    localStorage.setItem('selectedSections', JSON.stringify(selectedSections));
    window.location.href = `detailed-review.html?sections=${selectedSections.join(',')}`;
}
