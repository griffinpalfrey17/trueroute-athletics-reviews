// Reviews Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeReviewsPage();
});

function initializeReviewsPage() {
    setupFilterListeners();
    setupWriteReviewButton();
    setupLoadMoreButton();
    setupReviewActions();
}

function setupFilterListeners() {
    // Sort filter listeners
    const sortRadios = document.querySelectorAll('input[name="sort"]');
    sortRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                applyFilters();
            }
        });
    });

    // Sport filter listener
    const sportFilter = document.getElementById('sportFilter');
    if (sportFilter) {
        sportFilter.addEventListener('change', applyFilters);
    }

    // Rating filter listeners
    const ratingCheckboxes = document.querySelectorAll('.rating-filters input[type="checkbox"]');
    ratingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // School filter listener
    const schoolFilter = document.getElementById('schoolFilter');
    if (schoolFilter) {
        schoolFilter.addEventListener('input', debounce(applyFilters, 300));
    }

    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function applyFilters() {
    const sortValue = document.querySelector('input[name="sort"]:checked')?.value || 'recent';
    const sportValue = document.getElementById('sportFilter')?.value || '';
    const schoolValue = document.getElementById('schoolFilter')?.value || '';
    
    // Get selected rating filters
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filters input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    console.log('Applying filters:', {
        sort: sortValue,
        sport: sportValue,
        school: schoolValue,
        ratings: selectedRatings
    });

    // Filter and sort reviews
    filterReviews(sortValue, sportValue, schoolValue, selectedRatings);
    updateResultsCount();
}

function filterReviews(sort, sport, school, ratings) {
    const reviewPosts = document.querySelectorAll('.review-post');
    let visibleCount = 0;

    reviewPosts.forEach(post => {
        let shouldShow = true;

        // Apply sport filter (would need data attributes on posts)
        if (sport && post.dataset.sport && post.dataset.sport !== sport) {
            shouldShow = false;
        }

        // Apply school filter (would need data attributes on posts)
        if (school && post.dataset.school && 
            !post.dataset.school.toLowerCase().includes(school.toLowerCase())) {
            shouldShow = false;
        }

        // Apply rating filter (would need data attributes on posts)
        if (ratings.length > 0 && post.dataset.rating && 
            !ratings.includes(Math.floor(parseFloat(post.dataset.rating)).toString())) {
            shouldShow = false;
        }

        if (shouldShow) {
            post.style.display = 'block';
            visibleCount++;
        } else {
            post.style.display = 'none';
        }
    });

    // Sort visible reviews
    sortReviews(sort);
}

function sortReviews(sortType) {
    const reviewsContainer = document.querySelector('.review-posts');
    const reviews = Array.from(reviewsContainer.querySelectorAll('.review-post[style*="block"], .review-post:not([style])'));

    reviews.sort((a, b) => {
        switch (sortType) {
            case 'recent':
                // Sort by date (would need data attributes)
                return new Date(b.dataset.date || '2024-01-01') - new Date(a.dataset.date || '2024-01-01');
            
            case 'helpful':
                // Sort by helpful count
                const helpfulA = parseInt(a.querySelector('.helpful')?.textContent.match(/\d+/)?.[0] || '0');
                const helpfulB = parseInt(b.querySelector('.helpful')?.textContent.match(/\d+/)?.[0] || '0');
                return helpfulB - helpfulA;
            
            case 'popular':
                // Sort by total interactions (helpful + replies)
                const popularityA = parseInt(a.querySelector('.helpful')?.textContent.match(/\d+/)?.[0] || '0');
                const popularityB = parseInt(b.querySelector('.helpful')?.textContent.match(/\d+/)?.[0] || '0');
                return popularityB - popularityA;
            
            case 'highest':
                // Sort by rating (highest first)
                const ratingA = parseFloat(a.dataset.rating || '0');
                const ratingB = parseFloat(b.dataset.rating || '0');
                return ratingB - ratingA;
            
            case 'lowest':
                // Sort by rating (lowest first)
                const ratingA2 = parseFloat(a.dataset.rating || '0');
                const ratingB2 = parseFloat(b.dataset.rating || '0');
                return ratingA2 - ratingB2;
            
            default:
                return 0;
        }
    });

    // Re-append sorted reviews
    reviews.forEach(review => {
        reviewsContainer.appendChild(review);
    });
}

function clearAllFilters() {
    // Clear sort filters (reset to "Most Recent")
    const recentRadio = document.querySelector('input[name="sort"][value="recent"]');
    if (recentRadio) {
        recentRadio.checked = true;
    }

    // Clear sport filter
    const sportFilter = document.getElementById('sportFilter');
    if (sportFilter) {
        sportFilter.value = '';
    }

    // Clear rating filters
    const ratingCheckboxes = document.querySelectorAll('.rating-filters input[type="checkbox"]');
    ratingCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear school filter
    const schoolFilter = document.getElementById('schoolFilter');
    if (schoolFilter) {
        schoolFilter.value = '';
    }

    // Show all reviews
    const reviewPosts = document.querySelectorAll('.review-post');
    reviewPosts.forEach(post => {
        post.style.display = 'block';
    });

    updateResultsCount();
}

function updateResultsCount() {
    const visibleReviews = document.querySelectorAll('.review-post[style*="block"], .review-post:not([style*="none"])');
    const resultsCount = document.querySelector('.results-count');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${visibleReviews.length} reviews`;
    }
}

function setupWriteReviewButton() {
    const writeReviewBtn = document.querySelector('.write-review-btn');
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', function() {
            window.location.href = 'write-review.html';
        });
    }
}

function setupLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more reviews
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                // In a real app, this would fetch more reviews from the server
                console.log('Loading more reviews...');
                this.textContent = 'Load More Reviews';
                this.disabled = false;
            }, 1000);
        });
    }
}

function setupReviewActions() {
    // Setup helpful buttons
    const helpfulBtns = document.querySelectorAll('.action-btn.helpful');
    helpfulBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentCount = parseInt(this.textContent.match(/\d+/)?.[0] || '0');
            const newCount = currentCount + 1;
            this.innerHTML = `<i class="fas fa-thumbs-up"></i> Helpful (${newCount})`;
            this.style.background = '#dbeafe';
            this.style.borderColor = '#3b82f6';
            this.style.color = '#3b82f6';
            this.disabled = true;
        });
    });

    // Setup reply buttons
    const replyBtns = document.querySelectorAll('.action-btn.reply');
    replyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would open a reply form
            alert('Reply functionality would be implemented here');
        });
    });

    // Setup share buttons
    const shareBtns = document.querySelectorAll('.action-btn.share');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would open share options
            if (navigator.share) {
                navigator.share({
                    title: 'TrueRoute Review',
                    text: 'Check out this program review on TrueRoute',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        });
    });

    // Setup report buttons
    const reportBtns = document.querySelectorAll('.action-btn.report');
    reportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to report this review?')) {
                // In a real app, this would submit a report
                alert('Review reported. Thank you for helping keep our community safe.');
                this.disabled = true;
                this.textContent = 'Reported';
            }
        });
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add data attributes to existing reviews for filtering (would normally come from backend)
function addReviewDataAttributes() {
    const reviews = document.querySelectorAll('.review-post');
    const sampleData = [
        { sport: 'football', school: 'Stanford University', rating: '4.2', date: '2024-01-15' },
        { sport: 'basketball', school: 'Duke University', rating: '3.8', date: '2024-01-08' },
        { sport: 'soccer', school: 'UCLA', rating: '4.8', date: '2024-01-01' }
    ];

    reviews.forEach((review, index) => {
        const data = sampleData[index] || sampleData[0];
        review.dataset.sport = data.sport;
        review.dataset.school = data.school;
        review.dataset.rating = data.rating;
        review.dataset.date = data.date;
    });
}

// Initialize data attributes when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addReviewDataAttributes, 100);
});
