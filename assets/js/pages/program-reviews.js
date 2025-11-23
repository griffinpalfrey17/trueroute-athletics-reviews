// Program Reviews Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Reviews page loaded, initializing...');
    
    try {
        initializePage();
        initializeTabs();
        generateStars();
        
        // Initialize reviews functionality if it exists
        if (typeof initializeReviewsPage === 'function') {
            initializeReviewsPage();
        } else {
            console.log('initializeReviewsPage function not found, skipping');
        }
        
        if (typeof setupEventListeners === 'function') {
            setupEventListeners();
        } else {
            console.log('setupEventListeners function not found, skipping');
        }
        
        if (typeof loadReviews === 'function') {
            loadReviews();
        } else {
            console.log('loadReviews function not found, skipping');
        }
        
        console.log('Reviews page initialization complete');
    } catch (error) {
        console.error('Reviews page initialization error:', error);
    }
});

// Initialize page with URL parameters
function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get('school') || 'Stanford University';
    const sport = urlParams.get('sport') || 'Baseball';
    
    // Update page title and content
    updateProgramInfo(school, sport);
}

// Update program information
function updateProgramInfo(school, sport) {
    const programName = `${school} ${sport}`;
    
    // Update program name if element exists
    const programNameElement = document.getElementById('programName');
    if (programNameElement) {
        programNameElement.textContent = programName;
    } else {
        console.log('programName element not found on Reviews page, skipping');
    }
    
    // Update document title
    document.title = `${programName} - Reviews - TrueRoute`;
    
    // Update program initials if element exists
    const initials = school.split(' ').map(word => word[0]).join('').substring(0, 2);
    const programInitialsElement = document.getElementById('programInitials');
    if (programInitialsElement) {
        programInitialsElement.textContent = initials;
    } else {
        console.log('programInitials element not found on Reviews page, skipping');
    }
    
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
    
    // Update program info elements if they exist
    const locationElement = document.getElementById('programLocation');
    const divisionElement = document.getElementById('programDivision');
    const conferenceElement = document.getElementById('programConference');
    
    if (locationElement) {
        locationElement.textContent = schoolData.location;
    } else {
        console.log('programLocation element not found on Reviews page, skipping');
    }
    
    if (divisionElement) {
        divisionElement.textContent = schoolData.division;
    } else {
        console.log('programDivision element not found on Reviews page, skipping');
    }
    
    if (conferenceElement) {
        conferenceElement.textContent = schoolData.conference;
    } else {
        console.log('programConference element not found on Reviews page, skipping');
    }
}

// Generate star ratings
function generateStars() {
    const rating = 4.2;
    const starsContainer = document.getElementById('overallStars');
    
    if (!starsContainer) {
        console.log('Stars container not found on Reviews page, skipping star generation');
        return;
    }
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    starsContainer.innerHTML = starsHTML;
    console.log('Stars generated successfully on Reviews page');
}

// Initialize tab functionality with page navigation
function initializeTabs() {
    console.log('Initializing tabs on Reviews page...');
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
    
    console.log('Tab initialization complete on Reviews page');
}

// Sample review data
const sampleReviews = [
    {
        id: 1,
        reviewer: {
            name: "Sarah M.",
            position: "Former Pitcher",
            years: "2019-2023",
            verified: true,
            avatar: "SM"
        },
        date: "2 weeks ago",
        overallRating: 4.2,
        title: "Great program with amazing facilities",
        content: "Stanford Baseball provided an incredible experience both athletically and academically. The coaching staff was supportive and the facilities are world-class. The academic support was outstanding and really helped balance the demanding schedule.",
        categories: {
            culture: 4.5,
            academic: 4.8,
            coaching: 4.0,
            facilities: 4.7,
            worklife: 3.8,
            financial: 4.2
        },
        financial: {
            scholarship: { type: "Athletic", amount: "75%" },
            nil: { amount: "$15,000", company: "Local Sports Store" },
            aid: { type: "Academic", amount: "25%" }
        },
        helpful: 12,
        userVoted: false
    },
    {
        id: 2,
        reviewer: {
            name: "Mike R.",
            position: "Former Catcher",
            years: "2018-2022",
            verified: true,
            avatar: "MR"
        },
        date: "1 month ago",
        overallRating: 3.8,
        title: "Solid program but demanding schedule",
        content: "The baseball program at Stanford is competitive and well-organized. Coaches know their stuff and the team culture is generally positive. However, the time commitment is intense and can be challenging to balance with academics, especially during season.",
        categories: {
            culture: 4.0,
            academic: 3.5,
            coaching: 4.2,
            facilities: 4.5,
            worklife: 3.0,
            financial: 3.8
        },
        financial: {
            scholarship: { type: "Athletic", amount: "60%" },
            nil: { amount: "$8,500", company: "Nike" },
            aid: { type: "Need-based", amount: "15%" }
        },
        helpful: 8,
        userVoted: false
    },
    {
        id: 3,
        reviewer: {
            name: "Alex T.",
            position: "Former Outfielder",
            years: "2020-2024",
            verified: true,
            avatar: "AT"
        },
        date: "3 days ago",
        overallRating: 4.6,
        title: "Exceeded expectations in every way",
        content: "Coming from a small town, I wasn't sure what to expect from a D1 program. Stanford Baseball not only met but exceeded my expectations. The support system is incredible, from academic tutoring to mental health resources. The NIL opportunities were a nice bonus too.",
        categories: {
            culture: 4.8,
            academic: 4.5,
            coaching: 4.4,
            facilities: 4.7,
            worklife: 4.2,
            financial: 4.8
        },
        financial: {
            scholarship: { type: "Athletic", amount: "85%" },
            nil: { amount: "$22,000", company: "Adidas" },
            aid: { type: "Academic", amount: "10%" }
        },
        helpful: 15,
        userVoted: true
    }
];

function initializeReviewsPage() {
    // Get program info from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const programName = urlParams.get('program') || 'Stanford Baseball';
    const sport = urlParams.get('sport') || 'Baseball';
    
    // Update page title and program info
    document.title = `${programName} Reviews - TrueRoute`;
    updateProgramHeader(programName, sport);
    
    // Set active navigation
    const reviewsNavBtn = document.querySelector('.analytics-nav-btn[href*="reviews"]');
    if (reviewsNavBtn) {
        reviewsNavBtn.classList.add('active');
    }
}

function updateProgramHeader(programName, sport) {
    const programTitle = document.querySelector('.program-info-compact h1');
    const programLogo = document.querySelector('.program-logo-small');
    
    if (programTitle) {
        programTitle.textContent = programName;
    }
    
    if (programLogo) {
        const initials = programName.split(' ').map(word => word[0]).join('').substring(0, 2);
        programLogo.textContent = initials;
    }
    
    // Update breadcrumb
    const breadcrumb = document.querySelector('.program-breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <i class="fas fa-chevron-right"></i>
            <a href="program-analytics-new.html?program=${encodeURIComponent(programName)}&sport=${encodeURIComponent(sport)}">${programName}</a>
            <i class="fas fa-chevron-right"></i>
            <span>Reviews</span>
        `;
    }
}

function setupEventListeners() {
    // Filter event listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortFilter = document.getElementById('sortFilter');
    const positionFilter = document.getElementById('positionFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', filterReviews);
    if (ratingFilter) ratingFilter.addEventListener('change', filterReviews);
    if (sortFilter) sortFilter.addEventListener('change', filterReviews);
    if (positionFilter) positionFilter.addEventListener('change', filterReviews);
    
    // Rating filter buttons
    const ratingButtons = document.querySelectorAll('.rating-filter-btn');
    ratingButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle active state
            ratingButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterReviews();
        });
    });
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreReviews);
    }
}

function loadReviews() {
    const reviewsList = document.querySelector('.reviews-list');
    if (!reviewsList) return;
    
    // Clear existing reviews
    reviewsList.innerHTML = '';
    
    // Render reviews
    sampleReviews.forEach(review => {
        const reviewElement = createReviewPost(review);
        reviewsList.appendChild(reviewElement);
    });
    
    // Update stats
    updateQuickStats();
}

function createReviewPost(review) {
    const reviewPost = document.createElement('div');
    reviewPost.className = 'review-post';
    reviewPost.dataset.reviewId = review.id;
    
    // Generate stars
    const generateStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    };
    
    // Create category ratings grid
    const categoryRatings = Object.entries(review.categories).map(([category, rating]) => {
        const categoryLabels = {
            culture: 'Culture',
            academic: 'Academic',
            coaching: 'Coaching',
            facilities: 'Facilities',
            worklife: 'Work-Life',
            financial: 'Financial'
        };
        
        return `
            <div class="category-rating-item">
                <div class="category-label">${categoryLabels[category]}</div>
                <div class="category-stars">${generateStars(rating)}</div>
                <div class="category-score">${rating.toFixed(1)}</div>
            </div>
        `;
    }).join('');
    
    // Create financial badges
    const financialBadges = [];
    if (review.financial.scholarship) {
        financialBadges.push(`
            <div class="financial-badge scholarship">
                <i class="fas fa-graduation-cap"></i>
                ${review.financial.scholarship.amount} ${review.financial.scholarship.type} Scholarship
            </div>
        `);
    }
    if (review.financial.nil) {
        financialBadges.push(`
            <div class="financial-badge nil">
                <i class="fas fa-dollar-sign"></i>
                ${review.financial.nil.amount} NIL (${review.financial.nil.company})
            </div>
        `);
    }
    if (review.financial.aid) {
        financialBadges.push(`
            <div class="financial-badge aid">
                <i class="fas fa-hand-holding-usd"></i>
                ${review.financial.aid.amount} ${review.financial.aid.type} Aid
            </div>
        `);
    }
    
    reviewPost.innerHTML = `
        <div class="review-post-header">
            <div class="reviewer-avatar">
                <div class="avatar-circle">${review.reviewer.avatar}</div>
            </div>
            <div class="reviewer-info">
                <div class="reviewer-details">
                    <span class="reviewer-position">${review.reviewer.position}</span>
                    <span class="reviewer-years">${review.reviewer.years}</span>
                    ${review.reviewer.verified ? '<div class="verified-badge"><i class="fas fa-check-circle"></i> Verified</div>' : ''}
                </div>
                <div class="review-meta">
                    <div class="review-date">${review.date}</div>
                    <div class="review-rating-header">
                        <div class="stars">${generateStars(review.overallRating)}</div>
                        <span class="rating-number">${review.overallRating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="review-post-content">
            <h3 class="review-title">${review.title}</h3>
            <p class="review-text">${review.content}</p>
            
            <div class="review-categories-grid">
                ${categoryRatings}
            </div>
            
            <div class="review-financial-info">
                ${financialBadges.join('')}
            </div>
        </div>
        
        <div class="review-post-actions">
            <button class="action-btn helpful-btn ${review.userVoted ? 'voted' : ''}" onclick="toggleHelpful(${review.id})">
                <i class="fas fa-thumbs-up"></i>
                Helpful (${review.helpful})
            </button>
            <button class="action-btn reply-btn" onclick="replyToReview(${review.id})">
                <i class="fas fa-reply"></i>
                Reply
            </button>
            <button class="action-btn share-btn" onclick="shareReview(${review.id})">
                <i class="fas fa-share"></i>
                Share
            </button>
            <button class="action-btn report-btn" onclick="reportReview(${review.id})">
                <i class="fas fa-flag"></i>
                Report
            </button>
        </div>
    `;
    
    return reviewPost;
}

function filterReviews() {
    // Get filter values
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const ratingFilter = document.getElementById('ratingFilter')?.value || 'all';
    const sortFilter = document.getElementById('sortFilter')?.value || 'newest';
    const positionFilter = document.getElementById('positionFilter')?.value || 'all';
    
    // Get active rating button
    const activeRatingBtn = document.querySelector('.rating-filter-btn.active');
    const minRating = activeRatingBtn ? parseFloat(activeRatingBtn.dataset.rating) : 0;
    
    // Filter reviews
    let filteredReviews = sampleReviews.filter(review => {
        // Rating filter
        if (minRating > 0 && review.overallRating < minRating) return false;
        
        // Position filter
        if (positionFilter !== 'all' && !review.reviewer.position.toLowerCase().includes(positionFilter.toLowerCase())) return false;
        
        return true;
    });
    
    // Sort reviews
    filteredReviews.sort((a, b) => {
        switch (sortFilter) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'highest':
                return b.overallRating - a.overallRating;
            case 'lowest':
                return a.overallRating - b.overallRating;
            case 'helpful':
                return b.helpful - a.helpful;
            default:
                return 0;
        }
    });
    
    // Re-render reviews
    const reviewsList = document.querySelector('.reviews-list');
    if (reviewsList) {
        reviewsList.innerHTML = '';
        filteredReviews.forEach(review => {
            const reviewElement = createReviewPost(review);
            reviewsList.appendChild(reviewElement);
        });
    }
}

function updateQuickStats() {
    const stats = {
        totalReviews: sampleReviews.length,
        averageRating: (sampleReviews.reduce((sum, review) => sum + review.overallRating, 0) / sampleReviews.length).toFixed(1),
        verifiedReviews: sampleReviews.filter(review => review.reviewer.verified).length,
        recentReviews: sampleReviews.filter(review => review.date.includes('week') || review.date.includes('day')).length
    };
    
    // Update stat values
    const statElements = document.querySelectorAll('.stat-value');
    if (statElements.length >= 4) {
        statElements[0].textContent = stats.totalReviews;
        statElements[1].textContent = stats.averageRating;
        statElements[2].textContent = stats.verifiedReviews;
        statElements[3].textContent = stats.recentReviews;
    }
}

function loadMoreReviews() {
    // Simulate loading more reviews
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        
        setTimeout(() => {
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More Reviews';
            // In a real app, you would fetch more reviews here
        }, 1000);
    }
}

// Action functions
function toggleHelpful(reviewId) {
    const review = sampleReviews.find(r => r.id === reviewId);
    if (review) {
        review.userVoted = !review.userVoted;
        review.helpful += review.userVoted ? 1 : -1;
        
        // Update button
        const btn = document.querySelector(`[data-review-id="${reviewId}"] .helpful-btn`);
        if (btn) {
            btn.classList.toggle('voted');
            btn.innerHTML = `<i class="fas fa-thumbs-up"></i> Helpful (${review.helpful})`;
        }
    }
}

function replyToReview(reviewId) {
    // Placeholder for reply functionality
    alert('Reply functionality would be implemented here');
}

function shareReview(reviewId) {
    // Placeholder for share functionality
    const url = `${window.location.origin}${window.location.pathname}#review-${reviewId}`;
    navigator.clipboard.writeText(url).then(() => {
        alert('Review link copied to clipboard!');
    });
}

function reportReview(reviewId) {
    // Placeholder for report functionality
    if (confirm('Are you sure you want to report this review?')) {
        alert('Review reported. Thank you for helping keep our community safe.');
    }
}
