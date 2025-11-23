// Programs page functionality with LinkedIn-style filtering

// Sample programs data
const programsData = [
    {
        id: 1,
        name: "Duke University",
        sport: "basketball",
        gender: "male",
        location: "Durham, North Carolina",
        division: "D1",
        conference: "ACC",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.8,
        reviews: 156,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 2,
        name: "University of Kentucky",
        sport: "basketball",
        gender: "male",
        location: "Lexington, Kentucky",
        division: "D1",
        conference: "SEC",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.7,
        reviews: 203,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 3,
        name: "Stanford University",
        sport: "basketball",
        gender: "male",
        location: "Stanford, California",
        division: "D1",
        conference: "Pac-12",
        nil: "50000+",
        scholarship: "academic",
        overallRating: 4.6,
        reviews: 89,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 4,
        name: "Gonzaga University",
        sport: "basketball",
        gender: "male",
        location: "Spokane, Washington",
        division: "D1",
        conference: "WCC",
        nil: "10001-20000",
        scholarship: "partial",
        overallRating: 4.5,
        reviews: 127,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 5,
        name: "University of Connecticut",
        sport: "basketball",
        gender: "female",
        location: "Storrs, Connecticut",
        division: "D1",
        conference: "Big East",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.9,
        reviews: 178,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 6,
        name: "University of South Carolina",
        sport: "basketball",
        gender: "female",
        location: "Columbia, South Carolina",
        division: "D1",
        conference: "SEC",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.7,
        reviews: 145,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 7,
        name: "Williams College",
        sport: "basketball",
        gender: "male",
        location: "Williamstown, Massachusetts",
        division: "D3",
        conference: "NESCAC",
        nil: "0",
        scholarship: "academic",
        overallRating: 4.4,
        reviews: 67,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 8,
        name: "University of California, Los Angeles",
        sport: "basketball",
        gender: "male",
        location: "Los Angeles, California",
        division: "D1",
        conference: "Pac-12",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.5,
        reviews: 234,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 9,
        name: "Boston College",
        sport: "basketball",
        gender: "male",
        location: "Chestnut Hill, Massachusetts",
        division: "D1",
        conference: "ACC",
        nil: "10001-20000",
        scholarship: "partial",
        overallRating: 4.2,
        reviews: 89,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 10,
        name: "University of California, Berkeley",
        sport: "basketball",
        gender: "male",
        location: "Berkeley, California",
        division: "D1",
        conference: "Pac-12",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.3,
        reviews: 156,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 11,
        name: "Harvard University",
        sport: "basketball",
        gender: "male",
        location: "Cambridge, Massachusetts",
        division: "D1",
        conference: "Ivy League",
        nil: "1-5000",
        scholarship: "academic",
        overallRating: 4.1,
        reviews: 67,
        sports: ["Basketball"],
        scholarships: true
    },
    // FOOTBALL PROGRAMS - D1
    {
        id: 12,
        name: "University of Alabama",
        sport: "football",
        gender: "male",
        location: "Tuscaloosa, Alabama",
        division: "D1",
        conference: "SEC",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.9,
        reviews: 342,
        sports: ["Football"],
        scholarships: true
    },
    {
        id: 13,
        name: "Ohio State University",
        sport: "football",
        gender: "male",
        location: "Columbus, Ohio",
        division: "D1",
        conference: "Big Ten",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.8,
        reviews: 298,
        sports: ["Football"],
        scholarships: true
    },
    {
        id: 14,
        name: "University of Texas",
        sport: "football",
        gender: "male",
        location: "Austin, Texas",
        division: "D1",
        conference: "Big 12",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.7,
        reviews: 267,
        sports: ["Football"],
        scholarships: true
    },
    {
        id: 15,
        name: "University of Oregon",
        sport: "football",
        gender: "male",
        location: "Eugene, Oregon",
        division: "D1",
        conference: "Pac-12",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.5,
        reviews: 189,
        sports: ["Football"],
        scholarships: true
    },
    // WOMEN'S BASKETBALL - D1
    {
        id: 16,
        name: "University of Connecticut",
        sport: "basketball",
        gender: "female",
        location: "Storrs, Connecticut",
        division: "D1",
        conference: "Big East",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.9,
        reviews: 178,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 17,
        name: "University of South Carolina",
        sport: "basketball",
        gender: "female",
        location: "Columbia, South Carolina",
        division: "D1",
        conference: "SEC",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.7,
        reviews: 145,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 18,
        name: "Stanford University",
        sport: "basketball",
        gender: "female",
        location: "Stanford, California",
        division: "D1",
        conference: "Pac-12",
        nil: "50000+",
        scholarship: "academic",
        overallRating: 4.6,
        reviews: 123,
        sports: ["Basketball"],
        scholarships: true
    },
    // SOCCER PROGRAMS
    {
        id: 19,
        name: "University of North Carolina",
        sport: "soccer",
        gender: "female",
        location: "Chapel Hill, North Carolina",
        division: "D1",
        conference: "ACC",
        nil: "10001-20000",
        scholarship: "partial",
        overallRating: 4.8,
        reviews: 156,
        sports: ["Soccer"],
        scholarships: true
    },
    {
        id: 20,
        name: "University of California, Los Angeles",
        sport: "soccer",
        gender: "male",
        location: "Los Angeles, California",
        division: "D1",
        conference: "Pac-12",
        nil: "10001-20000",
        scholarship: "partial",
        overallRating: 4.4,
        reviews: 89,
        sports: ["Soccer"],
        scholarships: true
    },
    {
        id: 21,
        name: "Indiana University",
        sport: "soccer",
        gender: "male",
        location: "Bloomington, Indiana",
        division: "D1",
        conference: "Big Ten",
        nil: "5001-10000",
        scholarship: "partial",
        overallRating: 4.3,
        reviews: 76,
        sports: ["Soccer"],
        scholarships: true
    },
    // BASEBALL PROGRAMS
    {
        id: 22,
        name: "Vanderbilt University",
        sport: "baseball",
        gender: "male",
        location: "Nashville, Tennessee",
        division: "D1",
        conference: "SEC",
        nil: "20001-50000",
        scholarship: "partial",
        overallRating: 4.7,
        reviews: 134,
        sports: ["Baseball"],
        scholarships: true
    },
    {
        id: 23,
        name: "University of Miami",
        sport: "baseball",
        gender: "male",
        location: "Coral Gables, Florida",
        division: "D1",
        conference: "ACC",
        nil: "20001-50000",
        scholarship: "partial",
        overallRating: 4.6,
        reviews: 112,
        sports: ["Baseball"],
        scholarships: true
    },
    {
        id: 24,
        name: "University of Southern California",
        sport: "baseball",
        gender: "male",
        location: "Los Angeles, California",
        division: "D1",
        conference: "Pac-12",
        nil: "20001-50000",
        scholarship: "partial",
        overallRating: 4.5,
        reviews: 98,
        sports: ["Baseball"],
        scholarships: true
    },
    // D2 PROGRAMS
    {
        id: 25,
        name: "University of Tampa",
        sport: "baseball",
        gender: "male",
        location: "Tampa, Florida",
        division: "D2",
        conference: "Sunshine State",
        nil: "1-5000",
        scholarship: "partial",
        overallRating: 4.3,
        reviews: 67,
        sports: ["Baseball"],
        scholarships: true
    },
    {
        id: 26,
        name: "Grand Valley State University",
        sport: "football",
        gender: "male",
        location: "Allendale, Michigan",
        division: "D2",
        conference: "GLIAC",
        nil: "1-5000",
        scholarship: "partial",
        overallRating: 4.2,
        reviews: 89,
        sports: ["Football"],
        scholarships: true
    },
    {
        id: 27,
        name: "University of Central Missouri",
        sport: "basketball",
        gender: "male",
        location: "Warrensburg, Missouri",
        division: "D2",
        conference: "MIAA",
        nil: "1-5000",
        scholarship: "partial",
        overallRating: 4.0,
        reviews: 45,
        sports: ["Basketball"],
        scholarships: true
    },
    // D3 PROGRAMS
    {
        id: 28,
        name: "Williams College",
        sport: "basketball",
        gender: "male",
        location: "Williamstown, Massachusetts",
        division: "D3",
        conference: "NESCAC",
        nil: "0",
        scholarship: "academic",
        overallRating: 4.4,
        reviews: 67,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 29,
        name: "Middlebury College",
        sport: "soccer",
        gender: "female",
        location: "Middlebury, Vermont",
        division: "D3",
        conference: "NESCAC",
        nil: "0",
        scholarship: "academic",
        overallRating: 4.3,
        reviews: 54,
        sports: ["Soccer"],
        scholarships: true
    },
    {
        id: 30,
        name: "University of Chicago",
        sport: "baseball",
        gender: "male",
        location: "Chicago, Illinois",
        division: "D3",
        conference: "UAA",
        nil: "0",
        scholarship: "academic",
        overallRating: 4.2,
        reviews: 43,
        sports: ["Baseball"],
        scholarships: true
    },
    // MORE D1 VARIETY
    {
        id: 31,
        name: "University of Michigan",
        sport: "football",
        gender: "male",
        location: "Ann Arbor, Michigan",
        division: "D1",
        conference: "Big Ten",
        nil: "50000+",
        scholarship: "full",
        overallRating: 4.6,
        reviews: 234,
        sports: ["Football"],
        scholarships: true
    },
    {
        id: 32,
        name: "University of Florida",
        sport: "basketball",
        gender: "male",
        location: "Gainesville, Florida",
        division: "D1",
        conference: "SEC",
        nil: "20001-50000",
        scholarship: "full",
        overallRating: 4.4,
        reviews: 178,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 33,
        name: "Baylor University",
        sport: "basketball",
        gender: "female",
        location: "Waco, Texas",
        division: "D1",
        conference: "Big 12",
        nil: "10001-20000",
        scholarship: "full",
        overallRating: 4.5,
        reviews: 123,
        sports: ["Basketball"],
        scholarships: true
    },
    {
        id: 34,
        name: "University of Washington",
        sport: "soccer",
        gender: "female",
        location: "Seattle, Washington",
        division: "D1",
        conference: "Pac-12",
        nil: "5001-10000",
        scholarship: "partial",
        overallRating: 4.2,
        reviews: 87,
        sports: ["Soccer"],
        scholarships: true
    },
    {
        id: 35,
        name: "Rice University",
        sport: "baseball",
        gender: "male",
        location: "Houston, Texas",
        division: "D1",
        conference: "American Athletic",
        nil: "10001-20000",
        scholarship: "partial",
        overallRating: 4.3,
        reviews: 76,
        sports: ["Baseball"],
        scholarships: true
    }
];

// Global variables
let currentPrograms = [...programsData];
let displayedPrograms = [];
let currentPage = 1;
const programsPerPage = 6;
let selectedSport = '';
let selectedGender = '';
let currentView = 'card'; // 'card' or 'table'

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    setupViewToggle();
    loadInitialPrograms();
});

function initializePage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    selectedSport = urlParams.get('sport') || 'basketball';
    selectedGender = urlParams.get('gender') || 'male';
    
    // Update page title and content based on parameters
    updatePageTitle();
    
    // Filter programs based on sport and gender
    filterProgramsBySportGender();
}

function updatePageTitle() {
    const sportName = selectedSport.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const genderText = selectedGender === 'male' ? "Men's" : "Women's";
    
    document.getElementById('programsTitle').textContent = `${genderText} ${sportName} Programs`;
    document.getElementById('programsSubtitle').textContent = `Discover ${genderText.toLowerCase()} ${sportName.toLowerCase()} programs that match your goals`;
    document.getElementById('resultsTitle').textContent = `All ${genderText} ${sportName} Programs`;
}

function filterProgramsBySportGender() {
    currentPrograms = programsData.filter(program => 
        program.sport === selectedSport && program.gender === selectedGender
    );
    
    updateResultsCount();
}

function setupEventListeners() {
    // Filter event listeners
    const locationFilter = document.getElementById('locationFilter');
    const divisionFilter = document.getElementById('divisionFilter');
    const conferenceFilter = document.getElementById('conferenceFilter');
    const scholarshipFilter = document.getElementById('scholarshipFilter');
    const nilOpportunityFilter = document.getElementById('nilOpportunityFilter');
    const applyButton = document.getElementById('applyFilters');
    const clearButton = document.getElementById('clearFilters');
    const sortSelect = document.getElementById('sortSelect');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (locationFilter) locationFilter.addEventListener('change', applyFilters);
    if (divisionFilter) divisionFilter.addEventListener('change', applyFilters);
    if (conferenceFilter) conferenceFilter.addEventListener('change', applyFilters);
    if (scholarshipFilter) scholarshipFilter.addEventListener('change', applyFilters);
    if (nilOpportunityFilter) nilOpportunityFilter.addEventListener('change', applyFilters);
    if (applyButton) applyButton.addEventListener('click', applyFilters);
    if (clearButton) clearButton.addEventListener('click', clearFilters);
    if (sortSelect) sortSelect.addEventListener('change', sortPrograms);
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePrograms);
    }

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'f':
                    e.preventDefault();
                    document.getElementById('locationFilter').focus();
                    break;
                case 'r':
                    e.preventDefault();
                    clearFilters();
                    break;
            }
        }
    });
}

// Setup view toggle functionality
function setupViewToggle() {
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    
    if (cardViewBtn) {
        cardViewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('card');
        });
    }
    
    if (tableViewBtn) {
        tableViewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('table');
        });
    }
}

// Switch between card and table view
function switchView(viewType) {
    currentView = viewType;
    
    const cardViewBtn = document.getElementById('cardViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const programsGrid = document.getElementById('programsGrid');
    const comparisonTableView = document.getElementById('comparisonTableView');
    const loadMoreContainer = document.querySelector('.load-more-container');
    
    // Update button states
    if (cardViewBtn && tableViewBtn) {
        cardViewBtn.classList.remove('active');
        tableViewBtn.classList.remove('active');
        
        if (viewType === 'card') {
            cardViewBtn.classList.add('active');
        } else {
            tableViewBtn.classList.add('active');
        }
    }
    
    // Show/hide appropriate views
    if (viewType === 'card') {
        if (programsGrid) programsGrid.style.display = 'grid';
        if (comparisonTableView) comparisonTableView.style.display = 'none';
        if (loadMoreContainer) loadMoreContainer.style.display = 'block';
    } else {
        if (programsGrid) programsGrid.style.display = 'none';
        if (comparisonTableView) comparisonTableView.style.display = 'block';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        
        // Ensure we have programs to display in table
        if (currentPrograms && currentPrograms.length > 0) {
            displayComparisonTable(currentPrograms);
        } else {
            // Load programs if not already loaded
            loadInitialPrograms();
            setTimeout(() => {
                displayComparisonTable(currentPrograms);
            }, 100);
        }
    }
}

function applyFilters() {
    console.log('Applying filters...');
    
    const locationFilter = document.getElementById('locationFilter').value;
    const divisionFilter = document.getElementById('divisionFilter').value;
    const conferenceFilter = document.getElementById('conferenceFilter').value;
    const scholarshipFilter = document.getElementById('scholarshipFilter').value;
    const nilOpportunityFilter = document.getElementById('nilOpportunityFilter').value;
    
    console.log('Filter values:', { locationFilter, divisionFilter, conferenceFilter, scholarshipFilter, nilOpportunityFilter });
    
    // Start with all programs
    currentPrograms = [...programsData];
    
    // Filter by sport and gender first
    filterProgramsBySportGender();
    
    // Apply location filter
    if (locationFilter) {
        console.log('Applying location filter:', locationFilter);
        console.log('Programs before location filter:', currentPrograms.length);
        currentPrograms = currentPrograms.filter(program => {
            const programLocation = program.location.toLowerCase();
            const matches = programLocation.includes(locationFilter.toLowerCase());
            console.log(`${program.name} (${program.location}) matches ${locationFilter}:`, matches);
            return matches;
        });
        console.log('Programs after location filter:', currentPrograms.length);
    }
    
    // Apply division filter
    if (divisionFilter) {
        currentPrograms = currentPrograms.filter(program => 
            program.division.toLowerCase() === divisionFilter.toLowerCase()
        );
    }
    
    // Apply conference filter
    if (conferenceFilter) {
        currentPrograms = currentPrograms.filter(program => {
            const programConference = program.conference.toLowerCase().replace(/[^a-z0-9]/g, '');
            const filterConference = conferenceFilter.toLowerCase().replace(/[^a-z0-9]/g, '');
            return programConference === filterConference;
        });
    }
    
    // Apply scholarship filter
    if (scholarshipFilter) {
        const hasScholarships = scholarshipFilter === 'yes';
        currentPrograms = currentPrograms.filter(program => {
            // Assume D1 and D2 schools typically have scholarships, D3 typically don't
            const programHasScholarships = program.division === 'D1' || program.division === 'D2';
            return programHasScholarships === hasScholarships;
        });
    }
    
    // Apply NIL opportunity filter (strict filtering)
    if (nilOpportunityFilter) {
        currentPrograms = currentPrograms.filter(program => {
            const nilLevel = getNILLevel(program.nil);
            // Strict filtering: only show exact matches
            if (nilOpportunityFilter === 'high') return nilLevel === 'High';
            if (nilOpportunityFilter === 'medium') return nilLevel === 'Medium';
            if (nilOpportunityFilter === 'low') return nilLevel === 'Low';
            return false; // Should not reach here, but default to false for safety
        });
    }
    
    console.log('Filtered programs:', currentPrograms.length);
    
    // Reset pagination
    currentPage = 1;
    displayedPrograms = [];
    
    // Clear current display and load filtered programs
    const programsGrid = document.getElementById('programsGrid');
    programsGrid.innerHTML = '';
    
    // Load first page of filtered results or update table view
    if (currentView === 'card') {
        loadMorePrograms();
    } else {
        displayComparisonTable(currentPrograms);
    }
    
    // Update results count
    updateResultsCount();
    
    // Show feedback
    showFilterFeedback();
}

function clearFilters() {
    console.log('Clearing all filters...');
    
    // Reset all filter dropdowns
    document.getElementById('locationFilter').value = '';
    document.getElementById('divisionFilter').value = '';
    document.getElementById('conferenceFilter').value = '';
    document.getElementById('scholarshipFilter').value = '';
    document.getElementById('nilOpportunityFilter').value = '';
    
    // Start with all programs and filter by sport/gender
    currentPrograms = [...programsData];
    filterProgramsBySportGender();
    
    // Reset pagination
    currentPage = 1;
    displayedPrograms = [];
    
    // Update both views
    if (currentView === 'card') {
        const grid = document.getElementById('programsGrid');
        grid.innerHTML = '';
        loadMorePrograms();
    } else {
        displayComparisonTable(currentPrograms);
    }
    
    // Update results count
    updateResultsCount();
    
    // Show feedback
    showClearFeedback();
}

function sortPrograms() {
    console.log('sortPrograms function called!');
    const sortBy = document.getElementById('sortSelect').value;
    console.log('Sorting by:', sortBy);
    console.log('Current programs before sort:', currentPrograms.length);
    
    currentPrograms.sort((a, b) => {
        // Generate truly scrambled ratings for each program (using program ID as seed for consistency)
        const getDetailedRatings = (program) => {
            // Create completely independent ratings for each category using different hash functions
            const id = program.id;
            
            // Use different mathematical operations to create truly independent ratings
            const coachingHash = ((id * 17 + 23) * 31) % 1000;
            const cultureHash = ((id * 41 + 67) * 13) % 1000;
            const academicHash = ((id * 73 + 11) * 29) % 1000;
            const facilitiesHash = ((id * 97 + 43) * 19) % 1000;
            const burnoutHash = ((id * 61 + 89) * 37) % 1000;
            const financialHash = ((id * 83 + 7) * 47) % 1000;
            
            // Convert hashes to ratings between 2.5 and 5.0 (realistic range)
            const hashToRating = (hash) => 2.5 + (hash / 1000) * 2.5;
            
            return {
                overall: program.overallRating,
                coaching: Math.round(hashToRating(coachingHash) * 10) / 10,
                culture: Math.round(hashToRating(cultureHash) * 10) / 10,
                academic: Math.round(hashToRating(academicHash) * 10) / 10,
                facilities: Math.round(hashToRating(facilitiesHash) * 10) / 10,
                burnout: Math.round(hashToRating(burnoutHash) * 10) / 10,
                financial: Math.round(hashToRating(financialHash) * 10) / 10
            };
        };
        
        const aRatings = getDetailedRatings(a);
        const bRatings = getDetailedRatings(b);
        
        switch (sortBy) {
            case 'overall':
                return bRatings.overall - aRatings.overall;
            case 'coaching':
                return bRatings.coaching - aRatings.coaching;
            case 'culture':
                return bRatings.culture - aRatings.culture;
            case 'academic':
                return bRatings.academic - aRatings.academic;
            case 'facilities':
                return bRatings.facilities - aRatings.facilities;
            case 'burnout':
                return bRatings.burnout - aRatings.burnout;
            case 'financial':
                return bRatings.financial - aRatings.financial;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'nil':
                // Sort by NIL level (High > Medium > Low > None)
                const nilOrder = { 'High': 4, 'Medium': 3, 'Low': 2, 'None': 1 };
                const aNilLevel = getNILLevel(a.nil);
                const bNilLevel = getNILLevel(b.nil);
                const aNilScore = nilOrder[aNilLevel] || 0;
                const bNilScore = nilOrder[bNilLevel] || 0;
                return bNilScore - aNilScore;
            default:
                return bRatings.overall - aRatings.overall;
        }
    });
    
    // Reset and reload programs
    currentPage = 1;
    displayedPrograms = [];
    
    console.log('Programs after sort:', currentPrograms.length);
    console.log('Current view:', currentView);
    
    // Update both views
    if (currentView === 'card') {
        console.log('Updating card view after sort');
        const grid = document.getElementById('programsGrid');
        grid.innerHTML = '';
        loadMorePrograms();
    } else {
        console.log('Updating comparison table after sort');
        displayComparisonTable(currentPrograms);
    }
}

function loadInitialPrograms() {
    // Clear current display
    const grid = document.getElementById('programsGrid');
    grid.innerHTML = '';
    displayedPrograms = [];
    
    // Load first page
    loadMorePrograms();
}

function loadMorePrograms() {
    const startIndex = (currentPage - 1) * programsPerPage;
    const endIndex = startIndex + programsPerPage;
    const programsToAdd = currentPrograms.slice(startIndex, endIndex);
    
    if (programsToAdd.length === 0) {
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }
    
    // Add programs to display
    displayedPrograms.push(...programsToAdd);
    
    // Render new programs
    const grid = document.getElementById('programsGrid');
    programsToAdd.forEach(program => {
        const programCard = createProgramCard(program);
        grid.appendChild(programCard);
    });
    
    // Update pagination
    currentPage++;
    
    // Hide load more button if no more programs
    if (endIndex >= currentPrograms.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    } else {
        document.getElementById('loadMoreBtn').style.display = 'block';
    }
}

function createProgramCard(program) {
    // Determine gender class for color coding
    const genderClass = program.gender === 'male' ? 'mens-sport' : 'womens-sport';
    
    const card = document.createElement('div');
    card.className = `program-card-new ${genderClass}`;
    
    // Generate star rating HTML
    const starRating = generateStars(program.overallRating);
    
    // Convert NIL to readable format
    const nilLevel = getNILLevel(program.nil);
    
    // Get scholarship status
    const scholarshipStatus = program.scholarships ? 'Available' : 'Not Available';
    
    // Create sport display name
    const sportName = program.sport ? program.sport.charAt(0).toUpperCase() + program.sport.slice(1) : 'Basketball';
    
    card.innerHTML = `
        <div class="program-header">
            <div class="program-title">
                <h3>${program.name} ${sportName}</h3>
                <div class="program-badges">
                    <span class="division-badge">${program.division}</span>
                    <span class="gender-badge">${program.gender === 'male' ? 'Men\'s' : 'Women\'s'}</span>
                </div>
            </div>
        </div>
        
        <div class="program-details">
            <div class="school-info">
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${program.location}</span>
                </div>
                <div class="conference">
                    <i class="fas fa-trophy"></i>
                    <span>${program.conference}</span>
                </div>
            </div>
            
            <div class="rating-section">
                <div class="rating-display">
                    <span class="rating-text">${program.overallRating.toFixed(1)} Stars</span>
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
            <button class="action-btn primary" onclick="viewProgramAnalytics('${program.name}', '${program.sport}', '${program.gender}')">
                <i class="fas fa-eye"></i>
                View Program
            </button>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
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
    
    return starsHTML;
}

function formatNILValue(nilValue) {
    const nilMap = {
        '0': '$0',
        '1-5000': '$1 - $5,000',
        '5001-10000': '$5,001 - $10,000',
        '10001-20000': '$10,001 - $20,000',
        '20001-50000': '$20,001 - $50,000',
        '50000+': '$50,000+'
    };
    return nilMap[nilValue] || nilValue;
}

function formatLocation(location) {
    return location.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatScholarship(scholarship) {
    const scholarshipMap = {
        'full': 'Full Scholarships',
        'partial': 'Partial Scholarships',
        'academic': 'Academic Scholarships',
        'need-based': 'Need-Based Aid'
    };
    return scholarshipMap[scholarship] || scholarship;
}

// Helper function to convert NIL opportunities to level (matching search-results.js)
function getNILLevel(nilOpportunities) {
    if (typeof nilOpportunities === 'string') {
        // Handle string-based NIL ranges
        if (nilOpportunities === '0') return 'None';
        if (nilOpportunities === '1-5000') return 'Low';
        if (nilOpportunities === '5001-10000') return 'Low';
        if (nilOpportunities === '10001-20000') return 'Medium';
        if (nilOpportunities === '20001-50000') return 'Medium';
        if (nilOpportunities === '50000+') return 'High';
        
        // Handle direct level strings
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

function updateResultsCount() {
    const count = currentPrograms.length;
    const totalElement = document.getElementById('totalPrograms');
    const countElement = document.getElementById('resultsCount');
    
    if (totalElement) totalElement.textContent = count;
    if (countElement) countElement.textContent = `Showing ${count} programs`;
}

function showFilterFeedback() {
    // Create temporary feedback message
    const feedback = document.createElement('div');
    feedback.className = 'filter-feedback success';
    feedback.innerHTML = '<i class="fas fa-check"></i> Filters applied successfully!';
    
    const container = document.querySelector('.filters-container');
    container.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

function showClearFeedback() {
    // Create temporary feedback message
    const feedback = document.createElement('div');
    feedback.className = 'filter-feedback info';
    feedback.innerHTML = '<i class="fas fa-refresh"></i> All filters cleared!';
    
    const container = document.querySelector('.filters-container');
    container.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// Program actions
function viewProgramAnalytics(programName, sport, gender) {
    console.log(`Viewing analytics for ${programName} ${sport}`);
    
    // Create URL with program parameters
    const params = new URLSearchParams({
        program: programName,
        sport: sport,
        gender: gender
    });
    
    window.location.href = `program-analytics-new.html?${params.toString()}`;
}

function viewProgram(programId) {
    console.log(`Viewing program ${programId}`);
    window.location.href = 'program-analytics-new.html';
}

function saveProgram(programId) {
    console.log(`Saving program ${programId}`);
    // Add visual feedback
    const button = event.target.closest('.save-program-btn');
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('fas')) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.innerHTML = '<i class="far fa-bookmark"></i> Saved';
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.innerHTML = '<i class="fas fa-bookmark"></i> Save';
    }
}

// Display programs in comparison table format
function displayComparisonTable(programs) {
    console.log('displayComparisonTable called with', programs.length, 'programs');
    
    // Force table headers to be visible - aggressive approach
    const table = document.getElementById('comparisonTable');
    if (!table) {
        console.error('Table not found!');
        return;
    }
    
    // Recreate the entire table structure to ensure headers show
    table.innerHTML = `
        <thead style="display: table-header-group !important; background: #4A90E2 !important;">
            <tr>
                <th class="rank-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Rank</th>
                <th class="program-name-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Program</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Overall</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Coaching</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Culture</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Academics</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Facilities</th>
                <th class="rating-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Work-Life</th>
                <th class="info-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">NIL Level</th>
                <th class="info-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Scholarships</th>
                <th class="info-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Location</th>
                <th class="actions-col" style="background: #4A90E2 !important; color: white !important; padding: 1rem 0.75rem !important;">Actions</th>
            </tr>
        </thead>
        <tbody id="comparisonTableBody">
        </tbody>
    `;
    
    console.log('Table structure recreated');
    
    // Helper function to generate truly scrambled ratings (same as in sortPrograms)
    const getDetailedRatings = (program) => {
        // Create completely independent ratings for each category using different hash functions
        const id = program.id;
        
        // Use different mathematical operations to create truly independent ratings
        const coachingHash = ((id * 17 + 23) * 31) % 1000;
        const cultureHash = ((id * 41 + 67) * 13) % 1000;
        const academicHash = ((id * 73 + 11) * 29) % 1000;
        const facilitiesHash = ((id * 97 + 43) * 19) % 1000;
        const burnoutHash = ((id * 61 + 89) * 37) % 1000;
        const financialHash = ((id * 83 + 7) * 47) % 1000;
        
        // Convert hashes to ratings between 2.5 and 5.0 (realistic range)
        const hashToRating = (hash) => 2.5 + (hash / 1000) * 2.5;
        
        return {
            overall: program.overallRating,
            coaching: Math.round(hashToRating(coachingHash) * 10) / 10,
            culture: Math.round(hashToRating(cultureHash) * 10) / 10,
            academic: Math.round(hashToRating(academicHash) * 10) / 10,
            facilities: Math.round(hashToRating(facilitiesHash) * 10) / 10,
            burnout: Math.round(hashToRating(burnoutHash) * 10) / 10,
            financial: Math.round(hashToRating(financialHash) * 10) / 10
        };
    };
    
    const finalTableBody = document.getElementById('comparisonTableBody');
    if (!finalTableBody) return;
    
    finalTableBody.innerHTML = programs.map((program, index) => {
        // Generate consistent detailed ratings for comparison
        const ratings = getDetailedRatings(program);
        
        // Helper function to get rating class with new color scheme
        const getRatingClass = (rating) => {
            if (rating >= 4.5) return 'rating-excellent';  // Green
            if (rating >= 3.5) return 'rating-good';       // Yellow
            return 'rating-poor';                           // Red
        };
        
        // Helper function to get NIL level class
        const getNilClass = (level) => {
            if (level === 'High') return 'nil-high';
            if (level === 'Medium') return 'nil-medium';
            return 'nil-low';
        };
        
        // Determine scholarship availability
        const hasScholarships = program.division === 'D1' || program.division === 'D2';
        const nilLevel = getNILLevel(program.nil);
        
        return `
            <tr>
                <td class="rank-cell">
                    <div class="rank-number">#${index + 1}</div>
                </td>
                <td>
                    <div class="program-name-cell">
                        <div class="program-logo-mini">
                            ${program.name.charAt(0)}
                        </div>
                        <div class="program-details">
                            <div class="program-name">${program.name}</div>
                            <div class="program-conference">${program.conference} • ${program.division}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.overall)}">
                        ${ratings.overall.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.coaching)}">
                        ${ratings.coaching.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.culture)}">
                        ${ratings.culture.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.academic)}">
                        ${ratings.academic.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.facilities)}">
                        ${ratings.facilities.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="rating-badge ${getRatingClass(ratings.burnout)}">
                        ${ratings.burnout.toFixed(1)}
                    </span>
                </td>
                <td>
                    <span class="nil-level-badge ${getNilClass(nilLevel)}">
                        ${nilLevel}
                    </span>
                </td>
                <td>
                    <div class="scholarship-status ${hasScholarships ? 'scholarship-available' : 'scholarship-unavailable'}">
                        <i class="fas ${hasScholarships ? 'fa-check' : 'fa-times'}"></i>
                        ${hasScholarships ? 'Available' : 'Limited'}
                    </div>
                </td>
                <td>
                    <span class="location-text">${program.location}</span>
                </td>
                <td class="actions-cell" style="text-align: center; padding: 1rem 0.75rem;">
                    <div class="action-buttons" style="display: flex; flex-direction: row; gap: 6px; align-items: center; justify-content: center;">
                        <button class="btn-view-program" onclick="viewProgram(${program.id})" style="padding: 8px 14px; border: none; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); color: white; display: flex; align-items: center; gap: 5px; min-width: 85px; justify-content: center; box-shadow: 0 2px 4px rgba(74, 144, 226, 0.3); transition: all 0.2s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 8px rgba(74, 144, 226, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(74, 144, 226, 0.3)'">
                            <i class="fas fa-eye" style="font-size: 0.7rem;"></i> View
                        </button>
                        <button class="btn-save-program" onclick="saveProgram(${program.id})" style="padding: 8px 14px; border: none; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); color: #495057; border: 1px solid #dee2e6; display: flex; align-items: center; gap: 5px; min-width: 75px; justify-content: center; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: all 0.2s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.15)'; this.style.background='linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'; this.style.background='linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'">
                            <i class="fas fa-bookmark" style="font-size: 0.7rem;"></i> Save
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Function to view program details
function viewProgram(programId) {
    // Redirect to program analytics page
    window.location.href = `program-analytics-new.html?id=${programId}`;
}

// Function to save program
function saveProgram(programId) {
    // Find the program data
    const program = programsData.find(p => p.id === programId);
    if (!program) return;
    
    // Get saved programs from localStorage or initialize empty array
    let savedPrograms = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
    
    // Check if program is already saved
    const isAlreadySaved = savedPrograms.some(p => p.id === programId);
    
    if (isAlreadySaved) {
        // Remove from saved programs
        savedPrograms = savedPrograms.filter(p => p.id !== programId);
        localStorage.setItem('savedPrograms', JSON.stringify(savedPrograms));
        
        // Update button text and style
        const button = document.querySelector(`button[onclick="saveProgram(${programId})"]`);
        if (button) {
            button.innerHTML = '<i class="fas fa-bookmark"></i> Save';
            button.classList.remove('saved');
        }
        
        // Show feedback
        showToast(`${program.name} removed from saved programs`);
    } else {
        // Add to saved programs
        savedPrograms.push(program);
        localStorage.setItem('savedPrograms', JSON.stringify(savedPrograms));
        
        // Update button text and style
        const button = document.querySelector(`button[onclick="saveProgram(${programId})"]`);
        if (button) {
            button.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
            button.classList.add('saved');
        }
        
        // Show feedback
        showToast(`${program.name} saved to your list`);
    }
}

// Simple toast notification function
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}
