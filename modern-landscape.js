// Modern Landscape Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeModernLandscape();
});

function initializeModernLandscape() {
    // Initialize animations and interactions
    setupScrollAnimations();
    setupLiveStats();
    setupInteractiveElements();
    
    // Add page transition effect
    document.body.classList.add('page-transition');
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Live statistics updates
function setupLiveStats() {
    const liveStatElement = document.querySelector('.stat-highlight .stat-number');
    if (liveStatElement && liveStatElement.textContent === '8,247') {
        // Simulate live portal count updates
        let currentCount = 8247;
        
        setInterval(() => {
            // Random fluctuation between -5 and +15 (more entries than exits)
            const change = Math.floor(Math.random() * 20) - 5;
            currentCount = Math.max(8200, currentCount + change); // Keep it realistic
            liveStatElement.textContent = currentCount.toLocaleString();
        }, 30000); // Update every 30 seconds
    }
}

// Scroll-triggered animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
    });

    // Observe cards
    document.querySelectorAll('.intersection-card, .story-card, .necessity-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Interactive elements
function setupInteractiveElements() {
    // Add hover effects to story cards
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for CTA buttons
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Track the click (for analytics)
            console.log('CTA clicked:', this.textContent.trim());
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .page-transition {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .page-transition.loaded {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Enhanced NIL Market Data with Real Context
const nilMarketData = {
    totalMarketValue: 1200000000, // $1.2B
    averageDealValue: {
        football: 25000,
        basketball: 18000,
        baseball: 8500,
        other: 4200
    },
    topDeals: [
        { athlete: "QB at Major SEC School", value: 150000, type: "Collective + Endorsements" },
        { athlete: "Star Basketball Player", value: 120000, type: "Shoe Deal + Local Sponsors" },
        { athlete: "Social Media Influencer Gymnast", value: 85000, type: "Brand Partnerships" }
    ],
    trends: {
        collectiveGrowth: 340, // 340% growth in collective deals
        socialMediaDeals: 180, // 180% increase in social media deals
        localBusinessPartnerships: 220 // 220% increase in local business deals
    }
};

// Transfer Portal Insights with Context
const transferPortalData = {
    currentActive: 8247,
    yearOverYearGrowth: 255, // 255% increase since 2020
    byDivision: {
        d1: 6800,
        d2: 1200,
        d3: 247
    },
    bySport: {
        football: 2100,
        basketball: 1800,
        baseball: 950,
        soccer: 680,
        other: 2717
    },
    peakPeriods: [
        { period: "Spring Portal Window", percentage: 45 },
        { period: "Winter Portal Window", percentage: 35 },
        { period: "Graduate Transfer Period", percentage: 20 }
    ]
};

// Make data available globally for other scripts
window.ModernLandscapeData = {
    nil: nilMarketData,
    transfers: transferPortalData
};

// Export functions for external use
window.ModernLandscape = {
    initializeModernLandscape,
    setupLiveStats,
    setupScrollAnimations
};
