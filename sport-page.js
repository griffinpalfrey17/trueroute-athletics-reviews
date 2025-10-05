// Sport-specific page functionality
let currentSportName = '';
let filteredPrograms = [];
let currentView = 'card'; // 'card' or 'table'

// Get sport from URL parameters
function getSportFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('sport') || 'football';
}

// Initialize sport page
document.addEventListener('DOMContentLoaded', function() {
    currentSportName = getSportFromURL();
    initializeSportPage();
    setupSportFilters();
    setupViewToggle();
    loadSportPrograms();
    loadAnalytics();
});

// Initialize the sport page with sport-specific content
function initializeSportPage() {
    const sportDisplayName = currentSportName.charAt(0).toUpperCase() + currentSportName.slice(1);
    
    // Update page elements
    document.getElementById('sportBreadcrumb').textContent = sportDisplayName;
    document.getElementById('sportTitle').textContent = `${sportDisplayName} Programs`;
    document.getElementById('resultsTitle').textContent = `Top ${sportDisplayName} Programs`;
    
    // Update page title
    document.title = `TrueRoute - ${sportDisplayName} Programs`;
    
    // Update sport description
    const descriptions = {
        'football': 'Explore top-rated football programs with detailed insights on team culture, academics, and NIL opportunities.',
        'basketball': 'Discover elite basketball programs with comprehensive reviews on coaching, facilities, and player development.',
        'baseball': 'Find the best baseball programs with insights on training, academics, and professional pathways.',
        'soccer': 'Explore soccer programs with detailed reviews on coaching philosophy, facilities, and team culture.',
        'swimming': 'Discover top swimming programs with insights on training facilities, coaching, and academic support.',
        'wrestling': 'Find elite wrestling programs with reviews on training intensity, team culture, and competitive success.',
        'tennis': 'Explore tennis programs with detailed insights on coaching, facilities, and individual development.',
        'volleyball': 'Discover volleyball programs with comprehensive reviews on team dynamics and training quality.'
    };
    
    document.getElementById('sportDescription').textContent = descriptions[currentSportName] || descriptions['football'];
}

// Load and display sport-specific programs
function loadSportPrograms() {
    // Filter schools that have the current sport
    filteredPrograms = sampleSchools.filter(school => 
        school.sports.some(sport => sport.toLowerCase().includes(currentSportName.toLowerCase()))
    );
    
    updateSportStats();
    displaySportPrograms(filteredPrograms);
}

// Update sport statistics
function updateSportStats() {
    const totalPrograms = filteredPrograms.length;
    let totalRating = 0;
    let totalReviews = 0;
    let totalNIL = 0;
    let nilCount = 0;
    
    filteredPrograms.forEach(school => {
        if (school.sportData[currentSportName]) {
            const sportData = school.sportData[currentSportName];
            totalRating += sportData.rating;
            totalReviews += sportData.reviews;
        } else {
            totalRating += school.overallRating;
            totalReviews += school.reviewCount;
        }
        
        // Calculate average NIL (simplified calculation)
        if (school.nilOpportunities === 'Very High') {
            totalNIL += 25000;
            nilCount++;
        } else if (school.nilOpportunities === 'High') {
            totalNIL += 15000;
            nilCount++;
        } else if (school.nilOpportunities === 'Medium') {
            totalNIL += 8000;
            nilCount++;
        }
    });
    
    const avgRating = totalPrograms > 0 ? (totalRating / totalPrograms).toFixed(1) : '0.0';
    const avgNIL = nilCount > 0 ? Math.round(totalNIL / nilCount) : 0;
    
    document.getElementById('totalPrograms').textContent = totalPrograms;
    document.getElementById('avgRating').textContent = avgRating;
    document.getElementById('totalReviews').textContent = totalReviews;
    document.getElementById('nilAvg').textContent = `$${avgNIL.toLocaleString()}`;
}

// Display sport programs
function displaySportPrograms(programs) {
    const grid = document.getElementById('sportProgramsGrid');
    grid.innerHTML = '';
    
    programs.forEach(school => {
        const programCard = createSportProgramCard(school);
        grid.appendChild(programCard);
    });
    
    document.getElementById('resultsCount').textContent = `${programs.length} programs found`;
}

// Create sport-specific program card
function createSportProgramCard(school) {
    const card = document.createElement('div');
    card.className = 'school-card';
    card.onclick = () => openSchoolModal(school, currentSportName);
    
    const initials = school.name.split(' ').map(word => word[0]).join('').substring(0, 2);
    
    // Get sport-specific data if available
    let displayRating, displayReviews, sportData;
    if (school.sportData[currentSportName]) {
        sportData = school.sportData[currentSportName];
        displayRating = sportData.rating;
        displayReviews = sportData.reviews;
    } else {
        displayRating = school.overallRating;
        displayReviews = school.reviewCount;
        sportData = school.ratings;
    }
    
    card.innerHTML = `
        <div class="school-header">
            <div class="school-logo">${initials}</div>
            <div class="school-info">
                <h3>${school.name}</h3>
                <p>${school.location} • ${school.division} • ${school.conference}</p>
                <span class="sport-badge">${currentSportName.charAt(0).toUpperCase() + currentSportName.slice(1)}</span>
            </div>
        </div>
        <div class="school-rating">
            <div class="stars">
                ${generateStars(displayRating)}
            </div>
            <span class="rating-text">${displayRating}/5 (${displayReviews} reviews)</span>
        </div>
        <div class="category-snippets">
            <div class="snippet">
                <span class="snippet-label">Culture:</span>
                <div class="snippet-stars">${generateStars(sportData.culture || school.ratings.culture)}</div>
            </div>
            <div class="snippet">
                <span class="snippet-label">Academic:</span>
                <div class="snippet-stars">${generateStars(sportData.academic || school.ratings.academic)}</div>
            </div>
            <div class="snippet">
                <span class="snippet-label">Balance:</span>
                <div class="snippet-stars">${generateStars(sportData.burnout || school.ratings.burnout)}</div>
            </div>
            <div class="snippet">
                <span class="snippet-label">Financial:</span>
                <div class="snippet-stars">${generateStars(sportData.financial || school.ratings.financial)}</div>
            </div>
        </div>
        <div class="school-stats">
            <div class="stat">
                <span class="stat-number">${school.conference}</span>
                <span class="stat-label">Conference</span>
            </div>
            <div class="stat">
                <span class="stat-number">${school.nilOpportunities}</span>
                <span class="stat-label">NIL</span>
            </div>
            <div class="stat">
                <span class="stat-number">${(sportData.facilities || school.ratings.facilities).toFixed(1)}</span>
                <span class="stat-label">Facilities</span>
            </div>
        </div>
    `;
    
    return card;
}

// Setup sport filters
function setupSportFilters() {
    const conferenceFilter = document.getElementById('conferenceFilter');
    const divisionFilter = document.getElementById('divisionFilter');
    const locationFilter = document.getElementById('locationFilter');
    const nilFilter = document.getElementById('nilFilter');
    const scholarshipFilter = document.getElementById('scholarshipFilter');
    const nilOpportunityFilter = document.getElementById('nilOpportunityFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    [conferenceFilter, divisionFilter, locationFilter, nilFilter, scholarshipFilter, nilOpportunityFilter, sortFilter].forEach(filter => {
        if (filter) filter.addEventListener('change', applySportFilters);
    });
}

// Setup view toggle functionality
function setupViewToggle() {
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    
    if (cardViewBtn) {
        cardViewBtn.addEventListener('click', () => switchView('card'));
    }
    
    if (tableViewBtn) {
        tableViewBtn.addEventListener('click', () => switchView('table'));
    }
}

// Switch between card and table view
function switchView(viewType) {
    currentView = viewType;
    
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const programsGrid = document.getElementById('sportProgramsGrid');
    const comparisonTableView = document.getElementById('comparisonTableView');
    
    // Update button states
    cardViewBtn.classList.toggle('active', viewType === 'card');
    tableViewBtn.classList.toggle('active', viewType === 'table');
    
    // Show/hide appropriate views
    if (viewType === 'card') {
        programsGrid.style.display = 'grid';
        comparisonTableView.style.display = 'none';
    } else {
        programsGrid.style.display = 'none';
        comparisonTableView.style.display = 'block';
        displayComparisonTable(filteredPrograms);
    }
}

// Apply sport filters
function applySportFilters() {
    const conferenceFilter = document.getElementById('conferenceFilter').value;
    const divisionFilter = document.getElementById('divisionFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const nilFilter = document.getElementById('nilFilter').value;
    const scholarshipFilter = document.getElementById('scholarshipFilter').value;
    const nilOpportunityFilter = document.getElementById('nilOpportunityFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    let filtered = [...filteredPrograms];
    
    // Apply filters
    if (conferenceFilter) {
        filtered = filtered.filter(school => school.conference === conferenceFilter);
    }
    
    if (divisionFilter) {
        filtered = filtered.filter(school => school.division === divisionFilter);
    }
    
    if (locationFilter) {
        filtered = filtered.filter(school => school.state === locationFilter);
    }
    
    if (nilFilter) {
        filtered = filtered.filter(school => school.nilOpportunities === nilFilter);
    }
    
    if (scholarshipFilter) {
        const hasScholarships = scholarshipFilter === 'yes';
        filtered = filtered.filter(school => {
            // Assume D1 schools typically have scholarships, D3 typically don't
            const schoolHasScholarships = school.division === 'D1' || school.division === 'D2';
            return schoolHasScholarships === hasScholarships;
        });
    }
    
    if (nilOpportunityFilter) {
        filtered = filtered.filter(school => {
            const nilLevel = school.nilOpportunities;
            if (nilOpportunityFilter === 'high') return nilLevel === 'Very High' || nilLevel === 'High';
            if (nilOpportunityFilter === 'medium') return nilLevel === 'Medium';
            if (nilOpportunityFilter === 'low') return nilLevel === 'Low' || nilLevel === 'Very Low';
            return true;
        });
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        let aValue, bValue;
        
        if (a.sportData[currentSportName] && b.sportData[currentSportName]) {
            const aSport = a.sportData[currentSportName];
            const bSport = b.sportData[currentSportName];
            
            switch(sortFilter) {
                case 'rating':
                    aValue = aSport.rating;
                    bValue = bSport.rating;
                    break;
                case 'culture':
                    aValue = aSport.culture;
                    bValue = bSport.culture;
                    break;
                case 'academic':
                    aValue = aSport.academic;
                    bValue = bSport.academic;
                    break;
                case 'burnout':
                    aValue = aSport.burnout;
                    bValue = bSport.burnout;
                    break;
                case 'financial':
                    aValue = aSport.financial;
                    bValue = bSport.financial;
                    break;
                case 'facilities':
                    aValue = aSport.facilities;
                    bValue = bSport.facilities;
                    break;
                default:
                    aValue = aSport.rating;
                    bValue = bSport.rating;
            }
        } else {
            // Fallback to overall school ratings
            switch(sortFilter) {
                case 'rating':
                    aValue = a.overallRating;
                    bValue = b.overallRating;
                    break;
                case 'culture':
                    aValue = a.ratings.culture;
                    bValue = b.ratings.culture;
                    break;
                case 'academic':
                    aValue = a.ratings.academic;
                    bValue = b.ratings.academic;
                    break;
                case 'burnout':
                    aValue = a.ratings.burnout;
                    bValue = b.ratings.burnout;
                    break;
                case 'financial':
                    aValue = a.ratings.financial;
                    bValue = b.ratings.financial;
                    break;
                case 'facilities':
                    aValue = a.ratings.facilities;
                    bValue = b.ratings.facilities;
                    break;
                default:
                    aValue = a.overallRating;
                    bValue = b.overallRating;
            }
        }
        
        return bValue - aValue; // Sort descending
    });
    
    displaySportPrograms(filtered);
    
    // Update table view if currently active
    if (currentView === 'table') {
        displayComparisonTable(filtered);
    }
}

// Display programs in comparison table format
function displayComparisonTable(programs) {
    const tableBody = document.getElementById('comparisonTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = programs.map(school => {
        const sportData = school.sportData[currentSportName] || {
            rating: school.overallRating,
            coaching: school.ratings.coaching || 4.0,
            culture: school.ratings.culture || 4.0,
            academic: school.ratings.academic || 4.0,
            facilities: school.ratings.facilities || 4.0,
            burnout: school.ratings.burnout || 4.0
        };
        
        // Helper function to get rating class with new color scheme
        const getRatingClass = (rating) => {
            if (rating >= 4.5) return 'rating-excellent';  // Green
            if (rating >= 3.5) return 'rating-good';       // Yellow
            return 'rating-poor';                           // Red
        };
        
        // Helper function to get NIL level class
        const getNilClass = (level) => {
            if (level === 'Very High' || level === 'High') return 'nil-high';
            if (level === 'Medium') return 'nil-medium';
            return 'nil-low';
        };
        
        // Helper function to get NIL level text
        const getNilText = (level) => {
            if (level === 'Very High') return 'High';
            if (level === 'Very Low') return 'Low';
            return level;
        };
        
        // Determine scholarship availability
        const hasScholarships = school.division === 'D1' || school.division === 'D2';
        
        return `
            <tr>
                <td>
                    <div class="program-name-cell">
                        <div class="program-logo-mini">
                            ${school.name.charAt(0)}
                        </div>
                        <div class="program-details">
                            <div class="program-name">${school.name}</div>
                            <div class="program-conference">${school.conference} • ${school.division}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.rating)}">
                        ${sportData.rating.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.coaching)}">
                        ${sportData.coaching.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.culture)}">
                        ${sportData.culture.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.academic)}">
                        ${sportData.academic.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.facilities)}">
                        ${sportData.facilities.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(sportData.burnout)}">
                        ${sportData.burnout.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="nil-level-badge ${getNilClass(school.nilOpportunities)}">
                        ${getNilText(school.nilOpportunities)}
                    </span>
                </td>
                <td>
                    <div class="scholarship-status ${hasScholarships ? 'scholarship-available' : 'scholarship-unavailable'}">
                        <i class="fas ${hasScholarships ? 'fa-check' : 'fa-times'}"></i>
                        ${hasScholarships ? 'Available' : 'Limited'}
                    </div>
                </td>
                <td>
                    <span class="location-text">${school.city}, ${school.state}</span>
                </td>
            </tr>
        `;
    }).join('');
}

// Load analytics data
function loadAnalytics() {
    loadTopCompanies();
    // Charts would be implemented with a charting library like Chart.js
    loadChartPlaceholders();
}

// Load top companies for this sport
function loadTopCompanies() {
    const topCompaniesContainer = document.getElementById('topCompanies');
    
    // Filter companies relevant to this sport
    const relevantCompanies = nilCompanyData.filter(company => 
        company.topSport.toLowerCase() === currentSportName.toLowerCase() || 
        company.topSport === 'Various'
    ).sort((a, b) => b.totalSpend - a.totalSpend);
    
    topCompaniesContainer.innerHTML = relevantCompanies.slice(0, 5).map(company => `
        <div class="company-item">
            <span class="company-name">${company.company}</span>
            <span class="company-amount">$${(company.totalSpend / 1000000).toFixed(1)}M</span>
        </div>
    `).join('');
}

// Load chart placeholders (would be replaced with actual charts)
function loadChartPlaceholders() {
    const nilChart = document.getElementById('nilChart');
    const regionChart = document.getElementById('regionChart');
    
    if (nilChart) {
        const ctx = nilChart.getContext('2d');
        ctx.fillStyle = '#64748b';
        ctx.font = '16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('NIL Opportunities Chart', nilChart.width / 2, nilChart.height / 2);
        ctx.fillText('(Coming Soon)', nilChart.width / 2, nilChart.height / 2 + 25);
    }
    
    if (regionChart) {
        const ctx = regionChart.getContext('2d');
        ctx.fillStyle = '#64748b';
        ctx.font = '16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Regional Distribution', regionChart.width / 2, regionChart.height / 2);
        ctx.fillText('(Coming Soon)', regionChart.width / 2, regionChart.height / 2 + 25);
    }
}
