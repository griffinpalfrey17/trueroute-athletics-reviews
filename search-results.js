// Search Results Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Wait for script.js to load first
    setTimeout(() => {
        initializeSearchResults();
    }, 100);
});

function initializeSearchResults() {
    // Get search query from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display search query
    document.getElementById('searchQuery').textContent = query;
    
    // Perform search and display results
    performSearchAndDisplay(query);
}

function performSearchAndDisplay(query) {
    const results = searchPrograms(query);
    displaySearchResults(results, query);
}

function searchPrograms(query) {
    const searchTerm = query.toLowerCase().trim();
    const matchingPrograms = [];
    
    // Check if schoolsData is available
    if (typeof schoolsData === 'undefined') {
        console.error('schoolsData not available');
        return [];
    }
    
    // Search through all schools and their programs
    schoolsData.forEach(school => {
        // Check if query matches school name
        if (school.name.toLowerCase().includes(searchTerm)) {
            // Add all sports for this school
            school.sports.forEach(sport => {
                matchingPrograms.push({
                    school: school,
                    sport: sport,
                    matchType: 'school'
                });
            });
            return;
        }
        
        // Check if query matches location/state
        if (school.location.toLowerCase().includes(searchTerm)) {
            school.sports.forEach(sport => {
                matchingPrograms.push({
                    school: school,
                    sport: sport,
                    matchType: 'location'
                });
            });
            return;
        }
        
        // Check if query matches division
        if (school.division.toLowerCase().includes(searchTerm) || 
            (searchTerm.includes('division') && school.division.toLowerCase().includes(searchTerm.replace('division', '').trim()))) {
            school.sports.forEach(sport => {
                matchingPrograms.push({
                    school: school,
                    sport: sport,
                    matchType: 'division'
                });
            });
            return;
        }
        
        // Check if query matches conference
        if (school.conference && school.conference.toLowerCase().includes(searchTerm)) {
            school.sports.forEach(sport => {
                matchingPrograms.push({
                    school: school,
                    sport: sport,
                    matchType: 'conference'
                });
            });
            return;
        }
        
        // Check if query matches any sport offered by this school
        school.sports.forEach(sport => {
            if (sport.toLowerCase().includes(searchTerm)) {
                matchingPrograms.push({
                    school: school,
                    sport: sport,
                    matchType: 'sport'
                });
            }
        });
    });
    
    return matchingPrograms;
}

function displaySearchResults(results, query) {
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const searchQuery = document.getElementById('searchQuery');
    const noResults = document.getElementById('noResults');
    
    // Update search info
    if (searchQuery) searchQuery.textContent = query;
    if (resultsCount) resultsCount.textContent = `Found ${results.length} program${results.length === 1 ? '' : 's'}`;
    
    if (results.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    // Sort results by gender (men's first, then women's)
    const sortedResults = results.sort((a, b) => {
        const genderA = getSportGender(a.sport);
        const genderB = getSportGender(b.sport);
        
        if (genderA === 'men' && genderB === 'women') return -1;
        if (genderA === 'women' && genderB === 'men') return 1;
        return 0;
    });
    
    // Clear previous results
    resultsGrid.innerHTML = '';
    
    // Create and append program cards
    sortedResults.forEach(result => {
        const card = createProgramCard(result);
        resultsGrid.appendChild(card);
    });
    
    resultsGrid.style.display = 'grid';
    noResults.style.display = 'none';
}

function createProgramCard(result) {
    const { school, sport, matchType } = result;
    
    // Get sport-specific data if available
    const sportData = school.sportData && school.sportData[sport] ? school.sportData[sport] : {
        rating: school.overallRating,
        reviews: Math.floor(school.reviewCount / school.sports.length)
    };
    
    // Determine if sport is typically men's or women's (simplified logic)
    const gender = getSportGender(sport);
    const genderClass = gender === 'men' ? 'mens-sport' : 'womens-sport';
    
    const card = document.createElement('div');
    card.className = `program-card-new ${genderClass}`;
    
    // Generate star rating HTML
    const starRating = generateStarRating(sportData.rating);
    
    // Convert NIL to readable format
    const nilLevel = getNILLevel(school.nilOpportunities);
    
    // Get scholarship status
    const scholarshipStatus = school.scholarshipAvailability !== 'None' ? 'Available' : 'Not Available';
    
    card.innerHTML = `
        <div class="program-header">
            <div class="program-title">
                <h3>${school.name} ${sport}</h3>
                <div class="program-badges">
                    <span class="division-badge">${school.division}</span>
                    <span class="gender-badge">${gender === 'men' ? 'Men\'s' : 'Women\'s'}</span>
                </div>
            </div>
            <div class="match-indicator">
                <span class="match-badge ${matchType}">${getMatchBadgeText(matchType)}</span>
            </div>
        </div>
        
        <div class="program-details">
            <div class="school-info">
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${school.location}</span>
                </div>
                <div class="conference">
                    <i class="fas fa-trophy"></i>
                    <span>${school.conference}</span>
                </div>
            </div>
            
            <div class="rating-section">
                <div class="rating-display">
                    <span class="rating-text">${sportData.rating.toFixed(1)} Stars</span>
                    <div class="rating-stars">${starRating}</div>
                </div>
            </div>
            
            <div class="nil-info nil-${nilLevel.toLowerCase()}">
                <i class="fas fa-dollar-sign"></i>
                <span>${nilLevel} NIL Opportunities</span>
            </div>
            
            <div class="scholarship-info">
                <i class="fas fa-graduation-cap"></i>
                <span>Scholarships ${scholarshipStatus}</span>
            </div>
        </div>
        
        <div class="program-actions">
            <button class="action-btn primary" onclick="viewProgramAnalytics('${school.name}', '${sport}')">
                <i class="fas fa-eye"></i>
                View Program
            </button>
        </div>
    `;
    
    return card;
}

// Helper function to determine sport gender (simplified logic)
function getSportGender(sport) {
    // This is a simplified approach - in reality, most sports have both men's and women's teams
    // For demo purposes, we'll use sport-specific logic
    const mensSports = ['Football', 'Baseball', 'Wrestling'];
    const womensSports = ['Softball', 'Volleyball', 'Gymnastics'];
    
    if (mensSports.includes(sport)) {
        return 'men';
    } else if (womensSports.includes(sport)) {
        return 'women';
    } else {
        // For sports that have both, we'll alternate for demo purposes
        // In a real app, this would come from the data
        return Math.random() > 0.5 ? 'men' : 'women';
    }
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
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
    
    return starsHTML;
}

// Helper function to convert NIL opportunities to level
function getNILLevel(nilOpportunities) {
    if (typeof nilOpportunities === 'string') {
        switch(nilOpportunities.toLowerCase()) {
            case 'high': return 'High';
            case 'medium': return 'Medium';
            case 'low': return 'Low';
            case 'none': return 'None';
            default: return nilOpportunities;
        }
    }
    
    // If it's a number, convert to level
    const nilValue = parseInt(nilOpportunities) || 0;
    if (nilValue === 0) return 'None';
    if (nilValue <= 10000) return 'Low';
    if (nilValue <= 20000) return 'Medium';
    return 'High';
}

function getMatchBadgeText(matchType) {
    switch(matchType) {
        case 'school': return 'School Match';
        case 'location': return 'Location Match';
        case 'division': return 'Division Match';
        case 'conference': return 'Conference Match';
        case 'sport': return 'Sport Match';
        default: return 'Match';
    }
}

function viewProgramDetails(schoolName, sport) {
    // Redirect to program analytics page with school and sport parameters
    const encodedSchool = encodeURIComponent(schoolName);
    const encodedSport = encodeURIComponent(sport);
    window.location.href = `program-analytics-new.html?school=${encodedSchool}&sport=${encodedSport}`;
}

function viewProgramAnalytics(schoolName, sport) {
    // Same as view details - both go to analytics page
    viewProgramDetails(schoolName, sport);
}
