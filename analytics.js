// Analytics Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
    initializeOpportunities();
    setupAdvancedEventListeners();
    initializeTabNavigation();
});

// NIL Company Data
const nilCompanyData = {
    'Local Businesses': 67000000,
    'Nike': 45000000,
    'Adidas': 32000000,
    'Under Armour': 28000000,
    'Gatorade': 15000000,
    'McDonald\'s': 12000000,
    'Coca-Cola': 10000000
};

// NIL by Sport Data
const nilBySportData = {
    'Football': 89000000,
    'Basketball': 67000000,
    'Baseball': 23000000,
    'Soccer': 12000000,
    'Swimming': 8000000,
    'Wrestling': 5000000,
    'Tennis': 3000000,
    'Volleyball': 2000000
};

// NIL Opportunities by Sport
const nilOpportunities = {
    football: [
        {
            company: 'Nike',
            type: 'Equipment Partnership',
            value: '$15K - $50K',
            description: 'Exclusive gear deals for standout players',
            requirements: 'D1 starter, 10K+ social media followers',
            contact: 'partnerships@nike.com',
            urgency: 'high'
        },
        {
            company: 'Local Car Dealerships',
            type: 'Endorsement',
            value: '$5K - $25K',
            description: 'Local advertising and social media promotion',
            requirements: 'Regional recognition, clean record',
            contact: 'Contact through TrueRoute',
            urgency: 'medium'
        },
        {
            company: 'Gatorade',
            type: 'Performance Partnership',
            value: '$20K - $100K',
            description: 'Training and nutrition partnerships',
            requirements: 'Elite performance metrics, team captain',
            contact: 'athlete.partnerships@gatorade.com',
            urgency: 'high'
        }
    ],
    basketball: [
        {
            company: 'Adidas',
            type: 'Shoe Deal',
            value: '$10K - $75K',
            description: 'Signature shoe promotions and gear',
            requirements: 'Conference player of the year potential',
            contact: 'basketball@adidas.com',
            urgency: 'high'
        },
        {
            company: 'Local Restaurants',
            type: 'Social Media',
            value: '$2K - $10K',
            description: 'Food delivery and restaurant partnerships',
            requirements: '5K+ followers, active social media',
            contact: 'Contact through TrueRoute',
            urgency: 'low'
        }
    ],
    baseball: [
        {
            company: 'Under Armour',
            type: 'Equipment Deal',
            value: '$5K - $30K',
            description: 'Bat and glove endorsements',
            requirements: 'Starting player, good stats',
            contact: 'baseball@underarmour.com',
            urgency: 'medium'
        }
    ],
    soccer: [
        {
            company: 'Puma',
            type: 'Cleat Partnership',
            value: '$3K - $20K',
            description: 'Soccer cleat and apparel deals',
            requirements: 'Conference recognition',
            contact: 'soccer@puma.com',
            urgency: 'medium'
        }
    ],
    other: [
        {
            company: 'Various Local Businesses',
            type: 'General Endorsement',
            value: '$1K - $15K',
            description: 'Local business partnerships and promotions',
            requirements: 'Community involvement, social presence',
            contact: 'Contact through TrueRoute',
            urgency: 'low'
        }
    ]
};

// Investment Trends Data (monthly)
const investmentTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Nike',
            data: [3.2, 3.8, 4.1, 4.5, 4.2, 3.9, 4.3, 4.7, 4.1, 3.8, 4.0, 4.5],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            tension: 0.4
        },
        {
            label: 'Local Businesses',
            data: [4.5, 5.2, 5.8, 6.1, 6.7, 7.2, 7.8, 8.1, 8.5, 8.9, 9.2, 9.8],
            borderColor: '#4ECDC4',
            backgroundColor: 'rgba(78, 205, 196, 0.1)',
            tension: 0.4
        },
        {
            label: 'Adidas',
            data: [2.1, 2.3, 2.8, 3.1, 2.9, 2.7, 3.2, 3.5, 3.1, 2.8, 3.0, 3.2],
            borderColor: '#45B7D1',
            backgroundColor: 'rgba(69, 183, 209, 0.1)',
            tension: 0.4
        }
    ]
};

function initializeCharts() {
    createNILSpendingChart();
    createNILBySportChart();
    createInvestmentTrendsChart();
}

function initializeOpportunities() {
    displayOpportunities('football');
    setupSportSelector();
}

function setupSportSelector() {
    const sportBtns = document.querySelectorAll('.sport-btn');
    sportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sportBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const sport = this.dataset.sport;
            displayOpportunities(sport);
        });
    });
}

function displayOpportunities(sport) {
    const opportunitiesGrid = document.getElementById('opportunitiesGrid');
    const opportunities = nilOpportunities[sport] || [];
    
    if (opportunities.length === 0) {
        opportunitiesGrid.innerHTML = '<div class="no-opportunities">No specific opportunities available for this sport yet. Check back soon!</div>';
        return;
    }
    
    opportunitiesGrid.innerHTML = opportunities.map(opp => `
        <div class="opportunity-card ${opp.urgency}">
            <div class="opportunity-header">
                <div class="company-info">
                    <h3>${opp.company}</h3>
                    <span class="opportunity-type">${opp.type}</span>
                </div>
                <div class="opportunity-value">${opp.value}</div>
            </div>
            <div class="opportunity-body">
                <p class="description">${opp.description}</p>
                <div class="requirements">
                    <strong>Requirements:</strong> ${opp.requirements}
                </div>
                <div class="contact-info">
                    <strong>Contact:</strong> ${opp.contact}
                </div>
            </div>
            <div class="opportunity-footer">
                <span class="urgency-badge ${opp.urgency}">${opp.urgency.toUpperCase()} PRIORITY</span>
                <button class="apply-btn" onclick="applyForOpportunity('${opp.company}', '${opp.type}')">
                    Learn More
                </button>
            </div>
        </div>
    `).join('');
}

function createNILSpendingChart() {
    const ctx = document.getElementById('nilSpendingChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(nilCompanyData),
            datasets: [{
                label: 'NIL Spending (Millions)',
                data: Object.values(nilCompanyData).map(val => val / 1000000),
                backgroundColor: [
                    '#64748b',  // Neutral grey
                    '#1e293b',  // Navy
                    '#3b82f6',  // Light blue
                    '#475569',  // Medium grey
                    '#334155',  // Dark grey
                    '#0f172a',  // Deep navy
                    '#60a5fa'   // Lighter blue
                ],
                borderColor: [
                    '#475569',
                    '#0f172a',
                    '#2563eb',
                    '#334155',
                    '#1e293b',
                    '#020617',
                    '#3b82f6'
                ],
                borderWidth: 1,
                borderRadius: 0,  // Sharp corners
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#64748b',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return `$${context.parsed.y.toFixed(1)}M`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#64748b',
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    },
                    grid: {
                        color: '#e2e8f0',
                        lineWidth: 1
                    },
                    border: {
                        color: '#cbd5e1'
                    }
                },
                x: {
                    ticks: {
                        color: '#64748b',
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        maxRotation: 0
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        color: '#cbd5e1'
                    }
                }
            }
        }
    });
}

function createNILBySportChart() {
    const ctx = document.getElementById('nilBySportChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(nilBySportData),
            datasets: [{
                data: Object.values(nilBySportData).map(val => val / 1000000),
                backgroundColor: [
                    '#1e293b',  // Navy
                    '#64748b',  // Neutral grey
                    '#3b82f6',  // Light blue
                    '#475569',  // Medium grey
                    '#334155',  // Dark grey
                    '#0f172a',  // Deep navy
                    '#60a5fa',  // Lighter blue
                    '#94a3b8'   // Light grey
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBorderColor: '#1e293b'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#64748b',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: $${context.parsed.toFixed(1)}M (${percentage}%)`;
                        }
                    }
                }
            },
            elements: {
                arc: {
                    borderRadius: 0  // Sharp edges instead of rounded
                }
            }
        }
    });
}

function createInvestmentTrendsChart() {
    const ctx = document.getElementById('investmentTrendsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: investmentTrendsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.parsed.y}M`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Investment (Millions)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });
}

function setupEventListeners() {
    // Timeframe selector
    const nilTimeframe = document.getElementById('nilTimeframe');
    if (nilTimeframe) {
        nilTimeframe.addEventListener('change', function() {
            // Update chart based on timeframe
            console.log('Timeframe changed to:', this.value);
            // In a real app, this would fetch new data and update the chart
        });
    }

    // Program sport filter
    const programSport = document.getElementById('programSport');
    if (programSport) {
        programSport.addEventListener('change', function() {
            updateProgramsList(this.value);
        });
    }

    // Trend period buttons
    const trendBtns = document.querySelectorAll('.trend-btn');
    trendBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            trendBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const period = this.dataset.period;
            updateInvestmentTrends(period);
        });
    });
}

function updateProgramsList(sport) {
    const programsData = {
        'all': [
            { name: 'University of Alabama', sport: 'Football', conference: 'SEC', nil: '$12.4M', logo: 'UA' },
            { name: 'University of Georgia', sport: 'Football', conference: 'SEC', nil: '$11.8M', logo: 'UG' },
            { name: 'University of Michigan', sport: 'Football', conference: 'Big Ten', nil: '$10.9M', logo: 'UM' }
        ],
        'football': [
            { name: 'University of Alabama', sport: 'Football', conference: 'SEC', nil: '$12.4M', logo: 'UA' },
            { name: 'University of Georgia', sport: 'Football', conference: 'SEC', nil: '$11.8M', logo: 'UG' },
            { name: 'University of Michigan', sport: 'Football', conference: 'Big Ten', nil: '$10.9M', logo: 'UM' }
        ],
        'basketball': [
            { name: 'Duke University', sport: 'Basketball', conference: 'ACC', nil: '$8.7M', logo: 'DU' },
            { name: 'University of Kentucky', sport: 'Basketball', conference: 'SEC', nil: '$8.2M', logo: 'UK' },
            { name: 'University of North Carolina', sport: 'Basketball', conference: 'ACC', nil: '$7.9M', logo: 'UN' }
        ],
        'baseball': [
            { name: 'Vanderbilt University', sport: 'Baseball', conference: 'SEC', nil: '$3.2M', logo: 'VU' },
            { name: 'University of Florida', sport: 'Baseball', conference: 'SEC', nil: '$2.8M', logo: 'UF' },
            { name: 'Louisiana State University', sport: 'Baseball', conference: 'SEC', nil: '$2.5M', logo: 'LS' }
        ]
    };

    const programsList = document.querySelector('.programs-list');
    const programs = programsData[sport] || programsData['all'];
    
    programsList.innerHTML = programs.map(program => `
        <div class="program-item">
            <div class="program-info">
                <div class="program-logo">${program.logo}</div>
                <div class="program-details">
                    <h4>${program.name}</h4>
                    <span>${program.sport} • ${program.conference}</span>
                </div>
            </div>
            <div class="program-nil">${program.nil}</div>
        </div>
    `).join('');
}

function updateInvestmentTrends(period) {
    // In a real app, this would fetch new data based on the period
    console.log('Updating trends for period:', period);
    
    // For demo purposes, we'll just log the change
    // The chart would be updated with new data here
}

// New Action Functions
function applyForOpportunity(company, type) {
    alert(`Interested in ${type} opportunity with ${company}? We'll connect you with relevant contacts and help you prepare your application. This feature will be fully implemented soon!`);
}

function filterByHighNIL() {
    // Redirect to programs page with NIL filter
    window.location.href = 'programs.html?filter=high-nil';
}

// Enhanced setup for better interactivity
function setupAdvancedEventListeners() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation for stat cards
function animateStatCards() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isMonetary = finalValue.includes('$');
        const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
        
        let currentValue = 0;
        const increment = numericValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(timer);
            }
            
            if (isMonetary) {
                stat.textContent = '$' + Math.floor(currentValue) + 'M';
            } else {
                stat.textContent = Math.floor(currentValue);
            }
        }, 30);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateStatCards, 500);
});

// Tab Navigation Functionality
function initializeTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Re-initialize charts if switching to insights tab
            if (targetTab === 'insights') {
                setTimeout(() => {
                    initializeCharts();
                }, 100);
            }
        });
    });
}

// Smooth scroll to tab content
function scrollToTabContent() {
    const tabSection = document.querySelector('.tab-content-section');
    if (tabSection) {
        tabSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}
