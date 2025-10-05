// Program Financials Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Financial page loaded, initializing...');
    
    try {
        initializePage();
        initializeTabs();
        generateStars();
        
        // Initialize charts if they exist
        if (typeof initializeCharts === 'function') {
            initializeCharts();
        } else {
            console.log('initializeCharts function not found, skipping');
        }
        
        console.log('Financial page initialization complete');
    } catch (error) {
        console.error('Financial page initialization error:', error);
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
        console.log('programName element not found, skipping');
    }
    
    // Update page title if element exists
    const pageTitleElement = document.getElementById('pageTitle');
    if (pageTitleElement) {
        pageTitleElement.textContent = `${programName} - Financial Breakdown - TrueRoute`;
    } else {
        console.log('pageTitle element not found, skipping');
    }
    
    // Update document title
    document.title = `${programName} - Financial Breakdown - TrueRoute`;
    
    // Update program initials if element exists
    const initials = school.split(' ').map(word => word[0]).join('').substring(0, 2);
    const programInitialsElement = document.getElementById('programInitials');
    if (programInitialsElement) {
        programInitialsElement.textContent = initials;
    } else {
        console.log('programInitials element not found, skipping');
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
        console.log('programLocation element not found, skipping');
    }
    
    if (divisionElement) {
        divisionElement.textContent = schoolData.division;
    } else {
        console.log('programDivision element not found, skipping');
    }
    
    if (conferenceElement) {
        conferenceElement.textContent = schoolData.conference;
    } else {
        console.log('programConference element not found, skipping');
    }
}

// Generate star ratings
function generateStars() {
    const rating = 4.2;
    const starsContainer = document.getElementById('overallStars');
    
    if (!starsContainer) {
        console.log('Stars container not found on Financial page, skipping star generation');
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
    console.log('Stars generated successfully on Financial page');
}

// Initialize tab functionality with page navigation
function initializeTabs() {
    console.log('Initializing tabs on Financial page...');
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
    
    console.log('Tab initialization complete on Financial page');
}

function setupEventListeners() {
    // Year filter for scholarship chart
    const scholarshipYear = document.getElementById('scholarshipYear');
    if (scholarshipYear) {
        scholarshipYear.addEventListener('change', updateScholarshipChart);
    }
    
    // Export button
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportFinancialData);
    }
}

function initializeCharts() {
    createScholarshipChart();
    createNILChart();
    createAidChart();
    createCostChart();
}

function createScholarshipChart() {
    const ctx = document.getElementById('scholarshipChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Full Scholarship', 'Partial (75%+)', 'Partial (50-74%)', 'Partial (25-49%)', 'Minimal (<25%)'],
            datasets: [{
                data: [15, 25, 30, 20, 10],
                backgroundColor: [
                    '#10b981',
                    '#3b82f6',
                    '#f59e0b',
                    '#ef4444',
                    '#6b7280'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            family: 'Lato',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function createNILChart() {
    const ctx = document.getElementById('nilChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nike/Adidas', 'Local Business', 'Social Media', 'Restaurants', 'Other'],
            datasets: [{
                label: 'Average Deal Value',
                data: [13000, 4900, 2700, 4200, 3200],
                backgroundColor: '#3b82f6',
                borderRadius: 6,
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
                    callbacks: {
                        label: function(context) {
                            return 'Average: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });
}

function createAidChart() {
    const ctx = document.getElementById('aidChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Academic Merit', 'Need-based', 'State Grants', 'Other'],
            datasets: [{
                data: [45, 35, 15, 5],
                backgroundColor: [
                    '#f59e0b',
                    '#10b981',
                    '#8b5cf6',
                    '#6b7280'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            family: 'Lato',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

function createCostChart() {
    const ctx = document.getElementById('costChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tuition', 'Room & Board', 'Books/Supplies', 'Personal'],
            datasets: [
                {
                    label: 'Total Cost',
                    data: [56000, 18000, 2000, 3000],
                    backgroundColor: '#ef4444',
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Average Support',
                    data: [38000, 12000, 1500, 500],
                    backgroundColor: '#10b981',
                    borderRadius: 6,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        font: {
                            family: 'Lato',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });
}

function updateScholarshipChart() {
    // In a real application, this would fetch new data based on the selected year
    // For now, we'll just show a loading state
    const year = document.getElementById('scholarshipYear').value;
    console.log('Updating scholarship chart for year:', year);
    
    // Simulate data update
    // You would typically make an API call here to get new data
}

function exportFinancialData() {
    // Create CSV data
    const csvData = [
        ['Support Type', 'Recipients', 'Average Amount', 'Range', 'Trend'],
        ['Athletic Scholarship', '85%', '68%', '25% - 100%', '+5%'],
        ['NIL Deals', '72%', '$18,500', '$2,000 - $45,000', '+23%'],
        ['Academic Aid', '42%', '$12,000', '$3,000 - $25,000', '0%'],
        ['Need-based Aid', '28%', '$8,500', '$2,000 - $20,000', '+8%']
    ];
    
    // Convert to CSV string
    const csvString = csvData.map(row => row.join(',')).join('\n');
    
    // Create and download file
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stanford-baseball-financial-breakdown.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success message
    const exportBtn = document.querySelector('.export-btn');
    const originalText = exportBtn.innerHTML;
    exportBtn.innerHTML = '<i class="fas fa-check"></i> Exported!';
    exportBtn.style.background = '#10b981';
    
    setTimeout(() => {
        exportBtn.innerHTML = originalText;
        exportBtn.style.background = '';
    }, 2000);
}

// Add some interactive animations
function animateCards() {
    const cards = document.querySelectorAll('.overview-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    setTimeout(animateCards, 500);
});
