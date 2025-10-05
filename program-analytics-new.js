// Program Analytics JavaScript
console.log('program-analytics-new.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    try {
        initializePage();
        initializeTabs();
        initializeSportSelector();
        generateStars();
        generateProgramSpecificReviews();
        console.log('Initialization complete');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Initialize page with URL parameters
function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const program = urlParams.get('program') || 'Stanford University';
    const sport = urlParams.get('sport') || 'basketball';
    const gender = urlParams.get('gender') || 'male';
    
    // Format sport name properly
    const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);
    const genderText = gender === 'male' ? "Men's" : "Women's";
    
    // Update page title and content
    updateProgramInfo(program, sportName, genderText);
    generateStars();
}

// Update program information
function updateProgramInfo(program, sport, gender) {
    const programName = `${program} ${gender} ${sport}`;
    document.getElementById('programName').textContent = programName;
    document.getElementById('pageTitle').textContent = `${programName} - TrueRoute`;
    
    // Update program initials
    const initials = program.split(' ').map(word => word.charAt(0)).join('').substring(0, 2);
    document.getElementById('programInitials').textContent = initials;
    
    // Sample data - in real app, this would come from API
    const sampleData = {
        'Stanford University': {
            location: 'Stanford, CA',
            division: 'Division I',
            conference: 'Pac-12'
        },
        'University of Alabama': {
            location: 'Tuscaloosa, AL',
            division: 'Division I',
            conference: 'SEC'
        },
        'University of Michigan': {
            location: 'Ann Arbor, MI',
            division: 'Division I',
            conference: 'Big Ten'
        }
    };
    
    const schoolData = sampleData[school] || {
        location: 'Location, ST',
        division: 'Division I',
        conference: 'Conference'
    };
    
    document.getElementById('programLocation').textContent = schoolData.location;
    document.getElementById('programDivision').textContent = schoolData.division;
    document.getElementById('programConference').textContent = schoolData.conference;
}

// Generate star ratings
function generateStars() {
    const rating = 4.2;
    const starsContainer = document.getElementById('overallStars');
    
    if (!starsContainer) {
        console.log('Stars container not found, skipping star generation');
        return;
    }
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    starsContainer.innerHTML = starsHTML;
    console.log('Stars generated successfully');
}

// Initialize tab functionality with page navigation
function initializeTabs() {
    console.log('Initializing tabs...');
    const tabButtons = document.querySelectorAll('.tab-btn');
    console.log('Found', tabButtons.length, 'tab buttons');
    
    if (tabButtons.length === 0) {
        console.error('No tab buttons found!');
        return;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get('school') || 'Stanford University';
    const sport = urlParams.get('sport') || 'Baseball';
    console.log('URL params:', { school, sport });
    
    // Set active tab based on current page
    const currentPage = window.location.pathname;
    console.log('Current page:', currentPage);
    
    tabButtons.forEach((button, index) => {
        const targetTab = button.dataset.tab;
        console.log(`Tab ${index}:`, targetTab, button.textContent.trim());
        
        // Check if this is the current page and set active state
        if ((currentPage.includes('program-analytics-new.html') && targetTab === 'insights') ||
            (currentPage.includes('program-financials.html') && targetTab === 'financial') ||
            (currentPage.includes('program-reviews.html') && targetTab === 'reviews')) {
            button.classList.add('active');
            console.log('Set active tab:', targetTab);
        }
        
        // Add click handler for navigation
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Tab clicked:', targetTab);
            
            // Navigate to appropriate page with URL parameters
            let targetPage;
            switch(targetTab) {
                case 'insights':
                    targetPage = 'program-analytics-new.html';
                    break;
                case 'financial':
                    targetPage = 'program-financials.html';
                    break;
                case 'reviews':
                    targetPage = 'program-reviews.html';
                    break;
                default:
                    targetPage = 'program-analytics-new.html';
            }
            
            const newUrl = `${targetPage}?school=${encodeURIComponent(school)}&sport=${encodeURIComponent(sport)}`;
            console.log('Navigating to:', newUrl);
            
            // Navigate with preserved URL parameters
            window.location.href = newUrl;
        });
    });
    
    console.log('Tab initialization complete');
}

// Initialize all charts
function initializeCharts() {
    initializeInsightsCharts();
    // Financial charts will be initialized when tab is clicked
}

// Initialize insights tab charts
function initializeInsightsCharts() {
    // Category Radar Chart
    const radarCtx = document.getElementById('categoryRadarChart');
    if (radarCtx) {
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Culture', 'Coaching', 'Facilities', 'Academic Support', 'Work-Life Balance', 'Financial Support'],
                datasets: [{
                    label: 'Program Rating',
                    data: [4.3, 4.5, 4.8, 4.6, 3.5, 4.1],
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Trends Chart
    const trendsCtx = document.getElementById('trendsChart');
    if (trendsCtx) {
        new Chart(trendsCtx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Overall Rating',
                    data: [3.8, 4.0, 4.1, 4.2, 4.2],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 3,
                        max: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Initialize financial tab charts
function initializeFinancialCharts() {
    // NIL Distribution Chart
    const nilCtx = document.getElementById('nilDistributionChart');
    if (nilCtx) {
        new Chart(nilCtx, {
            type: 'doughnut',
            data: {
                labels: ['$0', '$1-5K', '$5-15K', '$15-30K', '$30K+'],
                datasets: [{
                    data: [32, 28, 25, 12, 3],
                    backgroundColor: [
                        '#e5e7eb',
                        '#93c5fd',
                        '#3b82f6',
                        '#1d4ed8',
                        '#1e3a8a'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Scholarship Chart
    const scholarshipCtx = document.getElementById('scholarshipChart');
    if (scholarshipCtx) {
        new Chart(scholarshipCtx, {
            type: 'pie',
            data: {
                labels: ['Full Scholarship', 'Partial Scholarship', 'Walk-on'],
                datasets: [{
                    data: [15, 63, 22],
                    backgroundColor: [
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Financial Aid Chart
    const aidCtx = document.getElementById('financialAidChart');
    if (aidCtx) {
        new Chart(aidCtx, {
            type: 'bar',
            data: {
                labels: ['Need-based', 'Merit-based', 'Federal Aid', 'No Aid'],
                datasets: [{
                    data: [45, 32, 28, 15],
                    backgroundColor: [
                        '#8b5cf6',
                        '#06b6d4',
                        '#84cc16',
                        '#e5e7eb'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Initialize review filters
function initializeReviewFilters() {
    const categoryFilter = document.getElementById('reviewCategoryFilter');
    const ratingFilter = document.getElementById('reviewRatingFilter');
    const sortFilter = document.getElementById('reviewSortFilter');
    
    [categoryFilter, ratingFilter, sortFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', filterReviews);
        }
    });
    
    // Initialize helpful buttons
    const helpfulButtons = document.querySelectorAll('.helpful-btn');
    helpfulButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentCount = parseInt(this.textContent.match(/\d+/)[0]);
            this.innerHTML = `<i class="fas fa-thumbs-up"></i> Helpful (${currentCount + 1})`;
            this.classList.add('voted');
        });
    });
}

// Filter reviews based on selected criteria
function filterReviews() {
    const categoryFilter = document.getElementById('reviewCategoryFilter').value;
    const ratingFilter = document.getElementById('reviewRatingFilter').value;
    const sortFilter = document.getElementById('reviewSortFilter').value;
    
    const reviews = document.querySelectorAll('.review-card');
    
    reviews.forEach(review => {
        let showReview = true;
        
        // Category filter logic would go here
        // Rating filter logic would go here
        
        review.style.display = showReview ? 'block' : 'none';
    });
    
    // Sort logic would go here based on sortFilter value
}

// Utility function to format numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Initialize circular progress indicators
function initializeCircularProgress() {
    const circles = document.querySelectorAll('.stat-circle');
    circles.forEach(circle => {
        const percentage = circle.style.getPropertyValue('--percentage');
        const circumference = 2 * Math.PI * 45; // radius = 45
        const offset = circumference - (percentage / 100) * circumference;
        
        // This would be used with SVG circles for animated progress
        // Implementation would depend on the specific circular progress design
    });
}

// Initialize sport selector functionality
function initializeSportSelector() {
    const sportSelector = document.getElementById('sportSelector');
    const loadAnalyticsBtn = document.getElementById('loadAnalyticsBtn');
    
    if (!sportSelector || !loadAnalyticsBtn) {
        console.log('Sport selector elements not found');
        return;
    }
    
    // Enable/disable load button based on sport selection
    sportSelector.addEventListener('change', function() {
        const selectedSport = this.value;
        loadAnalyticsBtn.disabled = !selectedSport;
        
        if (selectedSport) {
            loadAnalyticsBtn.classList.remove('disabled');
        } else {
            loadAnalyticsBtn.classList.add('disabled');
        }
    });
    
    // Handle load analytics button click
    loadAnalyticsBtn.addEventListener('click', function() {
        const selectedSport = sportSelector.value;
        if (!selectedSport) return;
        
        // Get current school from URL or page
        const urlParams = new URLSearchParams(window.location.search);
        const school = urlParams.get('school') || 'Stanford University';
        
        // Update the page content for the selected sport
        updateProgramInfo(school, selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1));
        
        // Show success message
        showNotification(`Analytics loaded for ${selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)}`);
        
        // Scroll to analytics content
        document.querySelector('.tab-navigation').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// Show notification message
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Generate program-specific reviews
function generateProgramSpecificReviews() {
    const urlParams = new URLSearchParams(window.location.search);
    const program = urlParams.get('program') || urlParams.get('school') || 'Stanford University';
    const sport = urlParams.get('sport') || 'basketball';
    const gender = urlParams.get('gender') || 'male';
    
    console.log('URL search params:', window.location.search);
    console.log('All URL params:', Object.fromEntries(urlParams));
    console.log('Generating reviews for:', program, sport, gender);
    
    // Sport-specific positions
    const sportPositions = {
        'basketball': ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
        'football': ['Quarterback', 'Running Back', 'Wide Receiver', 'Linebacker', 'Defensive Back'],
        'baseball': ['Pitcher', 'Catcher', 'Infielder', 'Outfielder'],
        'soccer': ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'],
        'volleyball': ['Outside Hitter', 'Middle Blocker', 'Setter', 'Libero'],
        'tennis': ['Singles Player', 'Doubles Specialist'],
        'track': ['Sprinter', 'Distance Runner', 'Jumper', 'Thrower'],
        'swimming': ['Freestyle', 'Backstroke', 'Breaststroke', 'Butterfly'],
        'golf': ['Player'],
        'softball': ['Pitcher', 'Catcher', 'Infielder', 'Outfielder']
    };
    
    const positions = sportPositions[sport.toLowerCase()] || ['Player'];
    
    // Generate 3 program-specific reviews
    const reviewsData = generateReviewsForProgram(program, sport, positions);
    
    // Update the reviews section
    updateReviewsSection(reviewsData, program, sport);
    
    // Update position filter dropdown
    updatePositionFilter(positions);
}

// Generate reviews data for specific program
function generateReviewsForProgram(program, sport, positions) {
    const schoolName = program.replace('University of ', '').replace(' University', '');
    const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);
    
    const reviews = [
        {
            position: positions[0],
            period: '2020-2024',
            avatar: getInitials(positions[0]),
            title: `Outstanding ${sportName} program with top-tier coaching`,
            content: `${program}'s ${sportName} program exceeded all my expectations. The coaching staff is incredibly knowledgeable and supportive, and the team culture is fantastic. The facilities are world-class and the academic support helped me maintain my GPA while competing at the highest level.`,
            rating: 4.5,
            categories: {
                Culture: 4.7,
                Academic: 4.8,
                Coaching: 4.6,
                Facilities: 4.9,
                'Work-Life': 4.0,
                Financial: 4.3
            },
            financial: {
                scholarship: '80% Athletic Scholarship',
                nil: '$22,000 NIL (Local Dealership)',
                aid: '15% Academic Aid'
            },
            helpful: 18,
            timestamp: '3 weeks ago'
        },
        {
            position: positions[1] || positions[0],
            period: '2019-2023',
            avatar: getInitials(positions[1] || positions[0]),
            title: `Great experience but demanding schedule`,
            content: `Playing ${sportName} at ${program} was challenging but rewarding. The competition level is intense and the time commitment is significant. However, the coaching staff really cares about player development both on and off the field. The academic resources are excellent.`,
            rating: 4.1,
            categories: {
                Culture: 4.2,
                Academic: 4.5,
                Coaching: 4.3,
                Facilities: 4.4,
                'Work-Life': 3.2,
                Financial: 4.0
            },
            financial: {
                scholarship: '60% Athletic Scholarship',
                nil: '$8,500 NIL (Apparel Deal)',
                aid: '25% Need-based Aid'
            },
            helpful: 12,
            timestamp: '2 months ago'
        },
        {
            position: positions[2] || positions[0],
            period: '2021-2024',
            avatar: getInitials(positions[2] || positions[0]),
            title: `Solid program with room for improvement`,
            content: `${program} has a good ${sportName} program overall. The facilities are decent and most coaches are helpful. The team chemistry varies by year but generally positive. Academic support is available but you need to be proactive about using it.`,
            rating: 3.8,
            categories: {
                Culture: 3.9,
                Academic: 4.1,
                Coaching: 3.7,
                Facilities: 4.0,
                'Work-Life': 3.5,
                Financial: 3.6
            },
            financial: {
                scholarship: '45% Athletic Scholarship',
                nil: '$3,200 NIL (Social Media)',
                aid: 'No Additional Aid'
            },
            helpful: 8,
            timestamp: '1 month ago'
        }
    ];
    
    return reviews;
}

// Get initials from position name
function getInitials(position) {
    return position.split(' ').map(word => word.charAt(0)).join('').substring(0, 2);
}

// Update reviews section with generated data
function updateReviewsSection(reviewsData, program, sport) {
    const reviewsContainer = document.querySelector('.review-posts');
    if (!reviewsContainer) return;
    
    const reviewsHTML = reviewsData.map(review => `
        <div class="review-post">
            <div class="review-post-header">
                <div class="reviewer-avatar">${review.avatar}</div>
                <div class="reviewer-info">
                    <div class="reviewer-meta">
                        <span class="reviewer-title">Former ${review.position}</span>
                        <span class="review-period">${review.period}</span>
                        <span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>
                    </div>
                    <div class="review-timestamp">${review.timestamp}</div>
                </div>
                <div class="review-rating-display">
                    <div class="rating-stars">${generateStarDisplay(review.rating)}</div>
                    <span class="rating-score">${review.rating}</span>
                </div>
            </div>
            
            <h3 class="review-title">${review.title}</h3>
            
            <div class="review-content">
                <p>${review.content}</p>
            </div>
            
            <div class="review-categories-grid">
                ${Object.entries(review.categories).map(([category, score]) => `
                    <div class="category-rating-item">
                        <div class="category-name">${category}</div>
                        <div class="category-stars">${generateStarDisplay(score)}</div>
                        <div class="category-score">${score}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="review-financial-info">
                <div class="financial-badge scholarship">
                    <i class="fas fa-graduation-cap"></i>
                    <span>${review.financial.scholarship}</span>
                </div>
                <div class="financial-badge nil">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${review.financial.nil}</span>
                </div>
                <div class="financial-badge aid">
                    <i class="fas fa-hand-holding-usd"></i>
                    <span>${review.financial.aid}</span>
                </div>
            </div>
            
            <div class="review-actions">
                <button class="action-btn helpful">
                    <i class="fas fa-thumbs-up"></i>
                    <span>Helpful (${review.helpful})</span>
                </button>
                <button class="action-btn reply">
                    <i class="fas fa-reply"></i>
                    <span>Reply</span>
                </button>
                <button class="action-btn share">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </button>
                <button class="action-btn report">
                    <i class="fas fa-flag"></i>
                    <span>Report</span>
                </button>
            </div>
        </div>
    `).join('');
    
    reviewsContainer.innerHTML = reviewsHTML;
    
    // Update header description
    const headerDescription = document.querySelector('#reviews-tab .section-header p');
    if (headerDescription) {
        const schoolName = program.replace('University of ', '').replace(' University', '');
        const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);
        headerDescription.textContent = `Authentic feedback and experiences from current and former ${schoolName} ${sportName} players`;
    }
}

// Generate star display for rating
function generateStarDisplay(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Update position filter dropdown
function updatePositionFilter(positions) {
    const positionFilter = document.getElementById('positionFilter');
    if (!positionFilter) return;
    
    const optionsHTML = '<option value="">All Positions</option>' + 
        positions.map(position => `<option value="${position.toLowerCase()}">${position}</option>`).join('');
    
    positionFilter.innerHTML = optionsHTML;
}

// Export functions for external use
window.ProgramAnalytics = {
    initializePage,
    updateProgramInfo,
    initializeCharts,
    filterReviews,
    initializeSportSelector,
    generateProgramSpecificReviews
};
