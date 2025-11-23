// Program Analytics JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    initializeCharts();
    setupEventListeners();
});

// Sample program data - in a real app, this would come from an API
const programData = {
    'University of Alabama': {
        'football': {
            avgNIL: 45000,
            scholarshipRate: 78,
            financialAidRate: 65,
            nilDistribution: [15, 25, 35, 20, 5], // $0-10K, $10-25K, $25-50K, $50-100K, $100K+
            scholarshipBreakdown: [45, 33, 22], // Full, Partial, Walk-on
            financialAid: { need: 42, merit: 28, federal: 35 }
        },
        'baseball': {
            avgNIL: 18000,
            scholarshipRate: 65,
            financialAidRate: 72,
            nilDistribution: [35, 40, 20, 4, 1],
            scholarshipBreakdown: [25, 45, 30],
            financialAid: { need: 48, merit: 32, federal: 38 }
        }
    },
    'University of Georgia': {
        'football': {
            avgNIL: 52000,
            scholarshipRate: 76,
            financialAidRate: 68,
            nilDistribution: [12, 22, 38, 23, 5],
            scholarshipBreakdown: [48, 31, 21],
            financialAid: { need: 45, merit: 25, federal: 32 }
        }
    }
};

function initializePage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const schoolName = urlParams.get('school');
    const sport = urlParams.get('sport');
    
    if (!schoolName || !sport) {
        // Redirect back if no parameters
        window.location.href = 'index.html';
        return;
    }
    
    // Update page content
    updatePageContent(schoolName, sport);
}

function updatePageContent(schoolName, sport) {
    // Update header information
    document.getElementById('programName').textContent = schoolName;
    document.getElementById('programLogo').textContent = getSchoolInitials(schoolName);
    
    // Get program data
    const data = programData[schoolName]?.[sport] || getDefaultData();
    
    // Update sport and conference info
    const sportInfo = `${capitalizeFirst(sport)} • ${getConference(schoolName)} • Division I`;
    document.getElementById('programSport').textContent = sportInfo;
    
    // Update quick stats
    document.getElementById('avgNIL').textContent = formatCurrency(data.avgNIL);
    document.getElementById('scholarshipRate').textContent = data.scholarshipRate + '%';
    document.getElementById('financialAidRate').textContent = data.financialAidRate + '%';
    
    // Update detailed stats
    document.getElementById('nilMedian').textContent = formatCurrency(data.avgNIL * 0.7);
    document.getElementById('nilTop10').textContent = formatCurrency(data.avgNIL * 2.8) + '+';
    document.getElementById('nilParticipation').textContent = Math.round(data.scholarshipRate * 0.85) + '%';
}

function initializeCharts() {
    createNILDistributionChart();
    createScholarshipChart();
    createTrendsChart();
}

function createNILDistributionChart() {
    const ctx = document.getElementById('nilDistributionChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['$0-10K', '$10-25K', '$25-50K', '$50-100K', '$100K+'],
            datasets: [{
                label: 'Athletes (%)',
                data: [15, 25, 35, 20, 5],
                backgroundColor: [
                    '#e3f2fd',
                    '#bbdefb',
                    '#90caf9',
                    '#42a5f5',
                    '#1976d2'
                ],
                borderColor: [
                    '#1976d2',
                    '#1976d2',
                    '#1976d2',
                    '#1976d2',
                    '#1976d2'
                ],
                borderWidth: 1,
                borderRadius: 4
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
                            return `${context.parsed.y}% of athletes`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function createScholarshipChart() {
    const ctx = document.getElementById('scholarshipChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Full Scholarship', 'Partial Scholarship', 'Walk-on'],
            datasets: [{
                data: [45, 33, 22],
                backgroundColor: [
                    '#4caf50',
                    '#ff9800',
                    '#f44336'
                ],
                borderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

function createTrendsChart() {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Average NIL Value',
                data: [0, 12000, 28000, 38000, 45000],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
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
                            return `$${context.parsed.y.toLocaleString()}`;
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

function setupEventListeners() {
    // Trend metric buttons
    const trendBtns = document.querySelectorAll('.trend-btn');
    trendBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            trendBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const metric = this.dataset.metric;
            updateTrendsChart(metric);
        });
    });
}

function updateTrendsChart(metric) {
    // In a real app, this would update the chart with different data
    console.log('Updating trends chart for metric:', metric);
}

// Helper functions
function getSchoolInitials(schoolName) {
    return schoolName.split(' ').map(word => word[0]).join('').substring(0, 2);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatCurrency(amount) {
    if (amount >= 1000) {
        return '$' + Math.round(amount / 1000) + 'K';
    }
    return '$' + amount.toLocaleString();
}

function getConference(schoolName) {
    const conferences = {
        'University of Alabama': 'SEC',
        'University of Georgia': 'SEC',
        'University of Michigan': 'Big Ten',
        'University of Florida': 'SEC',
        'University of North Carolina': 'ACC',
        'University of Southern California': 'Pac-12',
        'Penn State University': 'Big Ten'
    };
    return conferences[schoolName] || 'Conference';
}

function getDefaultData() {
    return {
        avgNIL: 25000,
        scholarshipRate: 60,
        financialAidRate: 55,
        nilDistribution: [25, 35, 25, 12, 3],
        scholarshipBreakdown: [35, 40, 25],
        financialAid: { need: 40, merit: 30, federal: 35 }
    };
}

// Export function
function exportProgramData() {
    alert('Program data export functionality would be implemented here');
}
