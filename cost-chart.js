// Cost Breakdown Chart JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cost breakdown chart when financial tab is active
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            if (targetTab === 'financial') {
                setTimeout(initializeCostChart, 100);
            }
        });
    });
    
    // Initialize on page load if financial tab is already active
    if (document.querySelector('.tab-btn[data-tab="financial"]').classList.contains('active')) {
        initializeCostChart();
    }
});

function initializeCostChart() {
    const costCtx = document.getElementById('costBreakdownChart');
    if (costCtx) {
        // Destroy existing chart if it exists
        if (window.costChart) {
            window.costChart.destroy();
        }
        
        window.costChart = new Chart(costCtx, {
            type: 'doughnut',
            data: {
                labels: ['Tuition & Fees', 'Room & Board', 'Books & Supplies'],
                datasets: [{
                    data: [56169, 17255, 1245],
                    backgroundColor: [
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b'
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
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
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return context.label + ': $' + value.toLocaleString() + ' (' + percentage + '%)';
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
}
