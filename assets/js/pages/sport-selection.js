// Sport Selection Page JavaScript
let selectedGender = '';

// Sports data organized by gender
const sportsData = {
    male: [
        { name: 'Football', icon: 'fas fa-football-ball', participants: '85,000+' },
        { name: 'Basketball', icon: 'fas fa-basketball-ball', participants: '18,000+' },
        { name: 'Baseball', icon: 'fas fa-baseball-ball', participants: '35,000+' },
        { name: 'Soccer', icon: 'fas fa-futbol', participants: '25,000+' },
        { name: 'Wrestling', icon: 'fas fa-fist-raised', participants: '10,000+' },
        { name: 'Swimming', icon: 'fas fa-swimmer', participants: '9,000+' },
        { name: 'Tennis', icon: 'fas fa-tennis-ball', participants: '8,000+' },
        { name: 'Track & Field', icon: 'fas fa-running', participants: '28,000+' },
        { name: 'Golf', icon: 'fas fa-golf-ball', participants: '8,500+' },
        { name: 'Cross Country', icon: 'fas fa-route', participants: '14,000+' },
        { name: 'Lacrosse', icon: 'fas fa-hockey-puck', participants: '15,000+' },
        { name: 'Ice Hockey', icon: 'far fa-snowflake', participants: '4,000+' }
    ],
    female: [
        { name: 'Basketball', icon: 'fas fa-basketball-ball', participants: '16,000+' },
        { name: 'Soccer', icon: 'fas fa-futbol', participants: '28,000+' },
        { name: 'Softball', icon: 'fas fa-baseball-ball', participants: '20,000+' },
        { name: 'Volleyball', icon: 'fas fa-volleyball-ball', participants: '17,000+' },
        { name: 'Swimming', icon: 'fas fa-swimmer', participants: '12,000+' },
        { name: 'Tennis', icon: 'fas fa-tennis-ball', participants: '9,000+' },
        { name: 'Track & Field', icon: 'fas fa-running', participants: '30,000+' },
        { name: 'Golf', icon: 'fas fa-golf-ball', participants: '5,000+' },
        { name: 'Cross Country', icon: 'fas fa-route', participants: '15,000+' },
        { name: 'Lacrosse', icon: 'fas fa-hockey-puck', participants: '12,000+' },
        { name: 'Field Hockey', icon: 'fas fa-hockey-puck', participants: '6,000+' },
        { name: 'Gymnastics', icon: 'fas fa-medal', participants: '1,500+' }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeGenderSelection();
    initializeSportSelection();
});

// Initialize gender selection functionality
function initializeGenderSelection() {
    const genderButtons = document.querySelectorAll('.gender-btn');
    
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gender = this.getAttribute('data-gender');
            selectGender(gender);
        });
    });
}

// Handle gender selection
function selectGender(gender) {
    selectedGender = gender;
    console.log(`Selected gender: ${gender}`);
    
    // Hide gender selection
    const genderSection = document.getElementById('genderSelection');
    const sportSection = document.getElementById('sportSelection');
    
    genderSection.style.display = 'none';
    sportSection.style.display = 'block';
    
    // Update sport selection title
    const title = document.getElementById('sportSelectionTitle');
    const subtitle = document.getElementById('sportSelectionSubtitle');
    
    if (gender === 'male') {
        title.textContent = "Choose Your Sport - Men's Athletics";
        subtitle.textContent = "Select from men's college sports programs";
    } else {
        title.textContent = "Choose Your Sport - Women's Athletics";
        subtitle.textContent = "Select from women's college sports programs";
    }
    
    // Load sports for selected gender
    loadSports(gender);
}

// Initialize sport selection functionality
function initializeSportSelection() {
    const changeGenderBtn = document.getElementById('changeGenderBtn');
    
    if (changeGenderBtn) {
        changeGenderBtn.addEventListener('click', function() {
            // Go back to gender selection
            const genderSection = document.getElementById('genderSelection');
            const sportSection = document.getElementById('sportSelection');
            
            genderSection.style.display = 'block';
            sportSection.style.display = 'none';
            
            selectedGender = '';
        });
    }
}

// Load sports list for selected gender
function loadSports(gender) {
    const sportsList = document.getElementById('sportsList');
    const sports = sportsData[gender] || [];
    
    sportsList.innerHTML = '';
    
    sports.forEach(sport => {
        const sportCard = createSportCard(sport);
        sportsList.appendChild(sportCard);
    });
}

// Create a sport card element
function createSportCard(sport) {
    const card = document.createElement('div');
    card.className = 'sport-card';
    
    card.innerHTML = `
        <div class="sport-icon">
            <i class="${sport.icon}"></i>
        </div>
        <h3>${sport.name}</h3>
        <p class="sport-participants">${sport.participants} student-athletes</p>
    `;
    
    // Add click handler to navigate to programs page
    card.addEventListener('click', function() {
        selectSport(sport.name);
    });
    
    return card;
}

// Handle sport selection
function selectSport(sportName) {
    console.log(`Selected sport: ${sportName} for ${selectedGender}`);
    
    // Navigate to programs page with sport and gender parameters
    const params = new URLSearchParams({
        sport: sportName.toLowerCase().replace(/\s+/g, '-'),
        gender: selectedGender
    });
    
    window.location.href = `programs.html?${params.toString()}`;
}

// Add smooth animations
function addSmoothTransitions() {
    const cards = document.querySelectorAll('.gender-btn, .sport-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// Call animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addSmoothTransitions, 100);
});
