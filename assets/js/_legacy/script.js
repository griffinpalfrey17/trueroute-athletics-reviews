// Active Portal Counter Animation
function animatePortalCounter() {
    const counter = document.getElementById('activePortalCount');
    if (!counter) return;
    
    const targetNumber = 8247;
    const startNumber = 8100;
    const duration = 3000; // 3 seconds
    const increment = (targetNumber - startNumber) / (duration / 50);
    
    let currentNumber = startNumber;
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
            // Add random fluctuation every 10 seconds
            setInterval(() => {
                const variation = Math.floor(Math.random() * 20) - 10; // +/- 10
                counter.textContent = (targetNumber + variation).toLocaleString();
            }, 10000);
        }
        counter.textContent = Math.floor(currentNumber).toLocaleString();
    }, 50);
}

// Initialize homepage animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start portal counter animation after a short delay
    setTimeout(animatePortalCounter, 1000);
});

// Comprehensive School Data - Accurate Division, Location, and Sports Program Information
const schoolsData = [
    {
        id: 1,
        name: "University of Alabama",
        location: "Tuscaloosa, AL",
        division: "D1",
        conference: "SEC",
        overallRating: 4.2,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Baseball", "Track & Field"],
        // Enhanced rating categories
        ratings: {
            culture: 3.8, // Team culture (hazing, transition, inclusion)
            academic: 3.6, // Academic support
            burnout: 3.2, // Work-life balance (lower = more burnout)
            financial: 4.5, // Financial support
            facilities: 4.5
        },
        // Sport-specific data
        sportData: {
            "Football": { rating: 4.3, reviews: 89, culture: 3.9, academic: 3.5, burnout: 2.8, financial: 4.8, facilities: 4.7 },
            "Basketball": { rating: 4.0, reviews: 34, culture: 4.1, academic: 3.8, burnout: 3.5, financial: 4.2, facilities: 4.3 },
            "Baseball": { rating: 4.1, reviews: 22, culture: 4.2, academic: 3.7, burnout: 3.8, financial: 4.0, facilities: 4.2 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 2,
        name: "Stanford University",
        location: "Stanford, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.6,
        reviewCount: 89,
        sports: ["Football", "Basketball", "Swimming", "Tennis"],
        ratings: {
            culture: 4.7,
            academic: 4.9,
            burnout: 4.2,
            financial: 3.8,
            facilities: 4.8
        },
        sportData: {
            "Swimming": { rating: 4.8, reviews: 31, culture: 4.9, academic: 4.9, burnout: 4.5, financial: 3.5, facilities: 4.9 },
            "Basketball": { rating: 4.4, reviews: 28, culture: 4.6, academic: 4.8, burnout: 4.0, financial: 3.8, facilities: 4.7 },
            "Football": { rating: 4.5, reviews: 30, culture: 4.5, academic: 4.9, burnout: 3.8, financial: 4.2, facilities: 4.8 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 3,
        name: "Duke University",
        location: "Durham, NC",
        division: "D1",
        conference: "ACC",
        overallRating: 4.3,
        reviewCount: 124,
        sports: ["Basketball", "Soccer", "Lacrosse", "Golf"],
        ratings: {
            culture: 4.1,
            academic: 4.7,
            burnout: 3.9,
            financial: 4.0,
            facilities: 4.1
        },
        sportData: {
            "Basketball": { rating: 4.5, reviews: 67, culture: 4.0, academic: 4.6, burnout: 3.5, financial: 4.3, facilities: 4.2 },
            "Soccer": { rating: 4.2, reviews: 31, culture: 4.3, academic: 4.8, burnout: 4.2, financial: 3.8, facilities: 4.0 },
            "Lacrosse": { rating: 4.1, reviews: 26, culture: 4.0, academic: 4.7, burnout: 4.1, financial: 3.9, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 4,
        name: "University of Texas",
        location: "Austin, TX",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.1,
        reviewCount: 203,
        sports: ["Football", "Basketball", "Baseball", "Swimming"],
        ratings: {
            culture: 3.9,
            academic: 4.0,
            burnout: 3.1,
            financial: 4.6,
            facilities: 4.3
        },
        sportData: {
            "Football": { rating: 4.2, reviews: 98, culture: 3.8, academic: 3.9, burnout: 2.9, financial: 4.9, facilities: 4.5 },
            "Basketball": { rating: 3.9, reviews: 45, culture: 4.0, academic: 4.1, burnout: 3.4, financial: 4.3, facilities: 4.1 },
            "Baseball": { rating: 4.0, reviews: 35, culture: 4.1, academic: 4.0, burnout: 3.6, financial: 4.2, facilities: 4.2 },
            "Swimming": { rating: 4.3, reviews: 25, culture: 4.2, academic: 4.2, burnout: 4.0, financial: 3.8, facilities: 4.4 }
        },
        nilOpportunities: "Very High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 5,
        name: "UCLA",
        location: "Los Angeles, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.4,
        reviewCount: 167,
        sports: ["Basketball", "Football", "Soccer", "Gymnastics"],
        ratings: {
            culture: 4.3,
            academic: 4.2,
            burnout: 3.8,
            financial: 4.1,
            facilities: 4.6
        },
        sportData: {
            "Basketball": { rating: 4.6, reviews: 72, culture: 4.4, academic: 4.1, burnout: 3.6, financial: 4.4, facilities: 4.7 },
            "Football": { rating: 4.2, reviews: 54, culture: 4.2, academic: 4.2, burnout: 3.5, financial: 4.0, facilities: 4.5 },
            "Soccer": { rating: 4.5, reviews: 28, culture: 4.5, academic: 4.3, burnout: 4.2, financial: 3.8, facilities: 4.6 },
            "Gymnastics": { rating: 4.3, reviews: 13, culture: 4.1, academic: 4.4, burnout: 4.0, financial: 3.9, facilities: 4.5 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 6,
        name: "Villanova University",
        location: "Villanova, PA",
        division: "D1",
        conference: "Big East",
        overallRating: 4.0,
        reviewCount: 78,
        sports: ["Basketball", "Track & Field", "Soccer", "Swimming"],
        ratings: {
            culture: 4.2,
            academic: 4.3,
            burnout: 4.0,
            financial: 3.5,
            facilities: 3.8
        },
        sportData: {
            "Basketball": { rating: 4.1, reviews: 34, culture: 4.0, academic: 4.2, burnout: 3.8, financial: 3.7, facilities: 3.9 },
            "Track & Field": { rating: 4.0, reviews: 22, culture: 4.3, academic: 4.4, burnout: 4.1, financial: 3.4, facilities: 3.8 },
            "Soccer": { rating: 3.9, reviews: 15, culture: 4.4, academic: 4.3, burnout: 4.2, financial: 3.3, facilities: 3.7 },
            "Swimming": { rating: 4.0, reviews: 7, culture: 4.1, academic: 4.4, burnout: 4.0, financial: 3.6, facilities: 3.8 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 7,
        name: "University of Georgia",
        location: "Athens, GA",
        division: "D1",
        conference: "SEC",
        overallRating: 4.1,
        reviewCount: 142,
        sports: ["Football", "Basketball", "Baseball", "Tennis", "Golf"],
        ratings: {
            culture: 4.0,
            academic: 3.9,
            burnout: 3.3,
            financial: 4.3,
            facilities: 4.2
        },
        sportData: {
            "Football": { rating: 4.2, reviews: 78, culture: 3.9, academic: 3.8, burnout: 3.0, financial: 4.6, facilities: 4.4 },
            "Basketball": { rating: 3.9, reviews: 32, culture: 4.1, academic: 4.0, burnout: 3.5, financial: 4.0, facilities: 4.0 },
            "Baseball": { rating: 4.3, reviews: 22, culture: 4.2, academic: 3.9, burnout: 3.8, financial: 4.1, facilities: 4.3 },
            "Tennis": { rating: 4.0, reviews: 10, culture: 4.3, academic: 4.1, burnout: 4.0, financial: 3.8, facilities: 4.0 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 8,
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.3,
        reviewCount: 189,
        sports: ["Football", "Basketball", "Wrestling", "Swimming", "Hockey"],
        ratings: {
            culture: 4.1,
            academic: 4.5,
            burnout: 3.6,
            financial: 4.0,
            facilities: 4.4
        },
        sportData: {
            "Football": { rating: 4.4, reviews: 89, culture: 4.0, academic: 4.4, burnout: 3.2, financial: 4.2, facilities: 4.6 },
            "Basketball": { rating: 4.1, reviews: 45, culture: 4.2, academic: 4.5, burnout: 3.7, financial: 3.9, facilities: 4.3 },
            "Wrestling": { rating: 4.5, reviews: 28, culture: 4.3, academic: 4.6, burnout: 3.8, financial: 3.7, facilities: 4.2 },
            "Swimming": { rating: 4.2, reviews: 27, culture: 4.0, academic: 4.7, burnout: 4.1, financial: 3.8, facilities: 4.5 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 9,
        name: "University of Florida",
        location: "Gainesville, FL",
        division: "D1",
        conference: "SEC",
        overallRating: 4.0,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Baseball", "Gymnastics", "Swimming"],
        ratings: {
            culture: 3.8,
            academic: 4.1,
            burnout: 3.4,
            financial: 4.2,
            facilities: 4.3
        },
        sportData: {
            "Football": { rating: 4.1, reviews: 67, culture: 3.7, academic: 4.0, burnout: 3.1, financial: 4.5, facilities: 4.4 },
            "Basketball": { rating: 3.8, reviews: 41, culture: 3.9, academic: 4.2, burnout: 3.6, financial: 4.0, facilities: 4.2 },
            "Gymnastics": { rating: 4.4, reviews: 23, culture: 4.2, academic: 4.3, burnout: 3.9, financial: 3.9, facilities: 4.5 },
            "Swimming": { rating: 4.2, reviews: 25, culture: 4.0, academic: 4.2, burnout: 4.0, financial: 3.8, facilities: 4.4 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 10,
        name: "University of North Carolina",
        location: "Chapel Hill, NC",
        division: "D1",
        conference: "ACC",
        overallRating: 4.2,
        reviewCount: 134,
        sports: ["Basketball", "Soccer", "Lacrosse", "Field Hockey", "Tennis"],
        ratings: {
            culture: 4.3,
            academic: 4.4,
            burnout: 3.9,
            financial: 3.9,
            facilities: 4.1
        },
        sportData: {
            "Basketball": { rating: 4.4, reviews: 56, culture: 4.2, academic: 4.3, burnout: 3.7, financial: 4.1, facilities: 4.2 },
            "Soccer": { rating: 4.3, reviews: 38, culture: 4.5, academic: 4.5, burnout: 4.1, financial: 3.8, facilities: 4.0 },
            "Lacrosse": { rating: 4.1, reviews: 25, culture: 4.4, academic: 4.4, burnout: 4.0, financial: 3.7, facilities: 4.1 },
            "Field Hockey": { rating: 4.0, reviews: 15, culture: 4.2, academic: 4.5, burnout: 4.2, financial: 3.6, facilities: 3.9 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 11,
        name: "University of Southern California",
        location: "Los Angeles, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.1,
        reviewCount: 123,
        sports: ["Football", "Basketball", "Volleyball", "Water Polo", "Tennis"],
        ratings: {
            culture: 3.9,
            academic: 4.2,
            burnout: 3.5,
            financial: 4.3,
            facilities: 4.4
        },
        sportData: {
            "Football": { rating: 4.0, reviews: 52, culture: 3.8, academic: 4.1, burnout: 3.2, financial: 4.5, facilities: 4.5 },
            "Basketball": { rating: 3.9, reviews: 31, culture: 4.0, academic: 4.2, burnout: 3.6, financial: 4.2, facilities: 4.3 },
            "Volleyball": { rating: 4.3, reviews: 22, culture: 4.1, academic: 4.3, burnout: 3.8, financial: 4.0, facilities: 4.4 },
            "Water Polo": { rating: 4.2, reviews: 18, culture: 4.0, academic: 4.4, burnout: 4.0, financial: 3.9, facilities: 4.3 }
        },
        nilOpportunities: "Very High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 12,
        name: "Pennsylvania State University",
        location: "University Park, PA",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.0,
        reviewCount: 167,
        sports: ["Football", "Wrestling", "Volleyball", "Hockey", "Track & Field"],
        ratings: {
            culture: 4.0,
            academic: 4.1,
            burnout: 3.7,
            financial: 3.8,
            facilities: 4.2
        },
        sportData: {
            "Football": { rating: 4.1, reviews: 73, culture: 3.9, academic: 4.0, burnout: 3.4, financial: 4.0, facilities: 4.3 },
            "Wrestling": { rating: 4.4, reviews: 42, culture: 4.2, academic: 4.2, burnout: 3.9, financial: 3.6, facilities: 4.1 },
            "Volleyball": { rating: 3.9, reviews: 28, culture: 4.1, academic: 4.2, burnout: 4.0, financial: 3.7, facilities: 4.0 },
            "Hockey": { rating: 4.0, reviews: 24, culture: 4.0, academic: 4.1, burnout: 3.8, financial: 3.9, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 13,
        name: "Williams College",
        location: "Williamstown, MA",
        division: "D3",
        conference: "NESCAC",
        overallRating: 4.3,
        reviewCount: 45,
        sports: ["Football", "Basketball", "Soccer", "Tennis", "Track & Field", "Swimming", "Lacrosse"],
        ratings: {
            culture: 4.5,
            academic: 4.8,
            burnout: 4.1,
            financial: 3.2,
            facilities: 4.0
        },
        sportData: {
            "Football": { rating: 4.2, reviews: 12, culture: 4.4, academic: 4.7, burnout: 4.0, financial: 3.0, facilities: 3.9 },
            "Basketball": { rating: 4.1, reviews: 8, culture: 4.3, academic: 4.8, burnout: 4.2, financial: 3.1, facilities: 4.0 },
            "Soccer": { rating: 4.4, reviews: 10, culture: 4.6, academic: 4.9, burnout: 4.3, financial: 3.3, facilities: 4.1 },
            "Tennis": { rating: 4.3, reviews: 6, culture: 4.5, academic: 4.8, burnout: 4.4, financial: 3.2, facilities: 4.0 },
            "Swimming": { rating: 4.5, reviews: 9, culture: 4.7, academic: 4.9, burnout: 4.2, financial: 3.1, facilities: 4.2 }
        },
        nilOpportunities: "None",
        scholarshipAvailability: "Academic Only"
    },
    // Additional SEC Schools
    {
        id: 21,
        name: "Louisiana State University",
        location: "Baton Rouge, LA",
        division: "D1",
        conference: "SEC",
        overallRating: 4.0,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Baseball", "Track & Field", "Gymnastics"],
        ratings: { culture: 3.8, academic: 3.7, burnout: 3.2, financial: 4.3, facilities: 4.2 },
        sportData: {
            "Football": { rating: 4.1, reviews: 78, culture: 3.7, academic: 3.6, burnout: 2.9, financial: 4.6, facilities: 4.3 },
            "Baseball": { rating: 4.4, reviews: 45, culture: 4.1, academic: 3.8, burnout: 3.7, financial: 4.2, facilities: 4.5 },
            "Gymnastics": { rating: 4.2, reviews: 23, culture: 4.0, academic: 3.9, burnout: 3.8, financial: 3.9, facilities: 4.1 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 22,
        name: "University of Kentucky",
        location: "Lexington, KY",
        division: "D1",
        conference: "SEC",
        overallRating: 3.9,
        reviewCount: 134,
        sports: ["Basketball", "Football", "Baseball", "Soccer", "Swimming"],
        ratings: { culture: 3.7, academic: 3.8, burnout: 3.4, financial: 4.1, facilities: 4.0 },
        sportData: {
            "Basketball": { rating: 4.3, reviews: 67, culture: 3.9, academic: 3.7, burnout: 3.2, financial: 4.4, facilities: 4.2 },
            "Football": { rating: 3.6, reviews: 34, culture: 3.5, academic: 3.8, burnout: 3.5, financial: 3.9, facilities: 3.8 },
            "Soccer": { rating: 4.0, reviews: 21, culture: 4.1, academic: 4.0, burnout: 3.9, financial: 3.7, facilities: 3.9 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 23,
        name: "University of Tennessee",
        location: "Knoxville, TN",
        division: "D1",
        conference: "SEC",
        overallRating: 4.1,
        reviewCount: 145,
        sports: ["Football", "Basketball", "Baseball", "Softball", "Track & Field"],
        ratings: { culture: 4.0, academic: 3.9, burnout: 3.3, financial: 4.2, facilities: 4.1 },
        sportData: {
            "Football": { rating: 4.2, reviews: 71, culture: 3.9, academic: 3.8, burnout: 3.0, financial: 4.5, facilities: 4.2 },
            "Basketball": { rating: 3.8, reviews: 38, culture: 4.1, academic: 4.0, burnout: 3.6, financial: 3.9, facilities: 4.0 },
            "Softball": { rating: 4.4, reviews: 26, culture: 4.3, academic: 4.1, burnout: 3.8, financial: 4.0, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 24,
        name: "Auburn University",
        location: "Auburn, AL",
        division: "D1",
        conference: "SEC",
        overallRating: 4.0,
        reviewCount: 132,
        sports: ["Football", "Basketball", "Baseball", "Swimming", "Golf"],
        ratings: { culture: 3.9, academic: 3.8, burnout: 3.4, financial: 4.1, facilities: 4.2 },
        sportData: {
            "Football": { rating: 4.1, reviews: 65, culture: 3.8, academic: 3.7, burnout: 3.1, financial: 4.4, facilities: 4.3 },
            "Basketball": { rating: 3.7, reviews: 29, culture: 4.0, academic: 3.9, burnout: 3.7, financial: 3.8, facilities: 4.0 },
            "Baseball": { rating: 4.2, reviews: 28, culture: 4.1, academic: 3.8, burnout: 3.6, financial: 4.0, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Big Ten Schools
    {
        id: 25,
        name: "Ohio State University",
        location: "Columbus, OH",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.4,
        reviewCount: 234,
        sports: ["Football", "Basketball", "Wrestling", "Swimming", "Track & Field", "Hockey"],
        ratings: { culture: 4.2, academic: 4.1, burnout: 3.5, financial: 4.5, facilities: 4.6 },
        sportData: {
            "Football": { rating: 4.5, reviews: 112, culture: 4.1, academic: 4.0, burnout: 3.2, financial: 4.8, facilities: 4.7 },
            "Basketball": { rating: 4.3, reviews: 56, culture: 4.3, academic: 4.2, burnout: 3.7, financial: 4.3, facilities: 4.5 },
            "Wrestling": { rating: 4.6, reviews: 34, culture: 4.4, academic: 4.1, burnout: 3.8, financial: 4.1, facilities: 4.4 }
        },
        nilOpportunities: "Very High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 26,
        name: "Penn State University",
        location: "University Park, PA",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.2,
        reviewCount: 198,
        sports: ["Football", "Basketball", "Wrestling", "Volleyball", "Hockey"],
        ratings: { culture: 4.1, academic: 4.3, burnout: 3.7, financial: 4.0, facilities: 4.3 },
        sportData: {
            "Football": { rating: 4.3, reviews: 89, culture: 4.0, academic: 4.2, burnout: 3.4, financial: 4.2, facilities: 4.4 },
            "Wrestling": { rating: 4.7, reviews: 45, culture: 4.5, academic: 4.4, burnout: 4.0, financial: 4.0, facilities: 4.5 },
            "Volleyball": { rating: 4.1, reviews: 32, culture: 4.2, academic: 4.4, burnout: 4.1, financial: 3.8, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 27,
        name: "University of Wisconsin",
        location: "Madison, WI",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.1,
        reviewCount: 167,
        sports: ["Football", "Basketball", "Hockey", "Swimming", "Cross Country"],
        ratings: { culture: 4.2, academic: 4.4, burnout: 3.9, financial: 3.8, facilities: 4.0 },
        sportData: {
            "Football": { rating: 4.0, reviews: 67, culture: 4.1, academic: 4.3, burnout: 3.6, financial: 4.0, facilities: 4.1 },
            "Basketball": { rating: 3.9, reviews: 43, culture: 4.3, academic: 4.5, burnout: 4.1, financial: 3.7, facilities: 3.9 },
            "Hockey": { rating: 4.3, reviews: 34, culture: 4.4, academic: 4.4, burnout: 4.0, financial: 3.9, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 28,
        name: "University of Iowa",
        location: "Iowa City, IA",
        division: "D1",
        conference: "Big Ten",
        overallRating: 3.9,
        reviewCount: 143,
        sports: ["Football", "Basketball", "Wrestling", "Field Hockey", "Baseball"],
        ratings: { culture: 3.8, academic: 4.1, burnout: 3.6, financial: 3.7, facilities: 3.9 },
        sportData: {
            "Wrestling": { rating: 4.5, reviews: 56, culture: 4.2, academic: 4.0, burnout: 3.8, financial: 3.9, facilities: 4.1 },
            "Football": { rating: 3.7, reviews: 45, culture: 3.6, academic: 4.1, burnout: 3.4, financial: 3.6, facilities: 3.8 },
            "Field Hockey": { rating: 4.1, reviews: 23, culture: 4.0, academic: 4.3, burnout: 4.0, financial: 3.5, facilities: 3.9 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 29,
        name: "Northwestern University",
        location: "Evanston, IL",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.3,
        reviewCount: 89,
        sports: ["Football", "Basketball", "Lacrosse", "Soccer", "Tennis"],
        ratings: { culture: 4.4, academic: 4.8, burnout: 4.1, financial: 3.6, facilities: 4.1 },
        sportData: {
            "Football": { rating: 4.1, reviews: 34, culture: 4.2, academic: 4.7, burnout: 3.9, financial: 3.8, facilities: 4.0 },
            "Lacrosse": { rating: 4.4, reviews: 28, culture: 4.5, academic: 4.9, burnout: 4.3, financial: 3.5, facilities: 4.2 },
            "Basketball": { rating: 4.0, reviews: 19, culture: 4.3, academic: 4.8, burnout: 4.0, financial: 3.4, facilities: 4.1 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // Additional ACC Schools
    {
        id: 30,
        name: "Clemson University",
        location: "Clemson, SC",
        division: "D1",
        conference: "ACC",
        overallRating: 4.2,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Baseball", "Soccer", "Tennis"],
        ratings: { culture: 4.1, academic: 3.9, burnout: 3.5, financial: 4.3, facilities: 4.4 },
        sportData: {
            "Football": { rating: 4.4, reviews: 78, culture: 4.0, academic: 3.8, burnout: 3.2, financial: 4.6, facilities: 4.6 },
            "Baseball": { rating: 4.1, reviews: 34, culture: 4.2, academic: 4.0, burnout: 3.7, financial: 4.1, facilities: 4.2 },
            "Soccer": { rating: 4.0, reviews: 28, culture: 4.3, academic: 4.1, burnout: 3.9, financial: 3.9, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 31,
        name: "Florida State University",
        location: "Tallahassee, FL",
        division: "D1",
        conference: "ACC",
        overallRating: 4.0,
        reviewCount: 178,
        sports: ["Football", "Basketball", "Baseball", "Softball", "Swimming"],
        ratings: { culture: 3.9, academic: 3.8, burnout: 3.4, financial: 4.2, facilities: 4.1 },
        sportData: {
            "Football": { rating: 4.1, reviews: 89, culture: 3.8, academic: 3.7, burnout: 3.1, financial: 4.5, facilities: 4.2 },
            "Baseball": { rating: 4.3, reviews: 45, culture: 4.1, academic: 3.9, burnout: 3.6, financial: 4.0, facilities: 4.3 },
            "Softball": { rating: 4.2, reviews: 32, culture: 4.0, academic: 3.9, burnout: 3.8, financial: 3.9, facilities: 4.0 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 32,
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        division: "D1",
        conference: "ACC",
        overallRating: 3.8,
        reviewCount: 134,
        sports: ["Football", "Basketball", "Wrestling", "Track & Field", "Swimming"],
        ratings: { culture: 3.7, academic: 4.0, burnout: 3.6, financial: 3.9, facilities: 3.9 },
        sportData: {
            "Football": { rating: 3.9, reviews: 67, culture: 3.6, academic: 3.9, burnout: 3.4, financial: 4.1, facilities: 4.0 },
            "Wrestling": { rating: 4.0, reviews: 34, culture: 3.9, academic: 4.1, burnout: 3.7, financial: 3.7, facilities: 3.8 },
            "Basketball": { rating: 3.6, reviews: 23, culture: 3.8, academic: 4.0, burnout: 3.8, financial: 3.6, facilities: 3.7 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 33,
        name: "University of Miami",
        location: "Coral Gables, FL",
        division: "D1",
        conference: "ACC",
        overallRating: 4.1,
        reviewCount: 123,
        sports: ["Football", "Basketball", "Baseball", "Swimming", "Tennis"],
        ratings: { culture: 4.0, academic: 4.2, burnout: 3.7, financial: 4.0, facilities: 4.2 },
        sportData: {
            "Football": { rating: 4.0, reviews: 56, culture: 3.9, academic: 4.1, burnout: 3.5, financial: 4.2, facilities: 4.3 },
            "Baseball": { rating: 4.4, reviews: 34, culture: 4.2, academic: 4.3, burnout: 3.8, financial: 3.9, facilities: 4.4 },
            "Basketball": { rating: 3.8, reviews: 21, culture: 4.1, academic: 4.2, burnout: 3.9, financial: 3.7, facilities: 4.0 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Additional Pac-12 Schools
    {
        id: 34,
        name: "University of Southern California",
        location: "Los Angeles, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.3,
        reviewCount: 189,
        sports: ["Football", "Basketball", "Swimming", "Track & Field", "Water Polo"],
        ratings: { culture: 4.2, academic: 4.1, burnout: 3.6, financial: 4.2, facilities: 4.5 },
        sportData: {
            "Football": { rating: 4.2, reviews: 78, culture: 4.1, academic: 4.0, burnout: 3.4, financial: 4.4, facilities: 4.6 },
            "Swimming": { rating: 4.6, reviews: 45, culture: 4.4, academic: 4.2, burnout: 4.0, financial: 4.0, facilities: 4.7 },
            "Water Polo": { rating: 4.4, reviews: 23, culture: 4.3, academic: 4.1, burnout: 4.1, financial: 3.9, facilities: 4.5 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 35,
        name: "University of Oregon",
        location: "Eugene, OR",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.1,
        reviewCount: 145,
        sports: ["Football", "Basketball", "Track & Field", "Cross Country", "Golf"],
        ratings: { culture: 4.0, academic: 3.9, burnout: 3.7, financial: 4.1, facilities: 4.4 },
        sportData: {
            "Track & Field": { rating: 4.5, reviews: 56, culture: 4.2, academic: 3.9, burnout: 3.9, financial: 4.2, facilities: 4.6 },
            "Football": { rating: 4.0, reviews: 45, culture: 3.9, academic: 3.8, burnout: 3.5, financial: 4.1, facilities: 4.3 },
            "Cross Country": { rating: 4.3, reviews: 28, culture: 4.1, academic: 4.0, burnout: 4.0, financial: 3.9, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 36,
        name: "University of Washington",
        location: "Seattle, WA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.2,
        reviewCount: 134,
        sports: ["Football", "Basketball", "Rowing", "Swimming", "Soccer"],
        ratings: { culture: 4.1, academic: 4.4, burnout: 3.8, financial: 3.9, facilities: 4.2 },
        sportData: {
            "Rowing": { rating: 4.4, reviews: 34, culture: 4.3, academic: 4.5, burnout: 4.1, financial: 3.7, facilities: 4.3 },
            "Football": { rating: 4.0, reviews: 56, culture: 4.0, academic: 4.3, burnout: 3.6, financial: 4.0, facilities: 4.1 },
            "Swimming": { rating: 4.3, reviews: 28, culture: 4.2, academic: 4.5, burnout: 4.0, financial: 3.8, facilities: 4.4 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 37,
        name: "Arizona State University",
        location: "Tempe, AZ",
        division: "D1",
        conference: "Pac-12",
        overallRating: 3.9,
        reviewCount: 167,
        sports: ["Football", "Basketball", "Baseball", "Swimming", "Golf"],
        ratings: { culture: 3.8, academic: 3.7, burnout: 3.5, financial: 4.0, facilities: 4.1 },
        sportData: {
            "Football": { rating: 3.8, reviews: 67, culture: 3.7, academic: 3.6, burnout: 3.3, financial: 4.2, facilities: 4.0 },
            "Baseball": { rating: 4.2, reviews: 45, culture: 4.0, academic: 3.8, burnout: 3.6, financial: 3.9, facilities: 4.2 },
            "Swimming": { rating: 4.0, reviews: 32, culture: 3.9, academic: 3.8, burnout: 3.8, financial: 3.8, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Big 12 Schools
    {
        id: 38,
        name: "University of Oklahoma",
        location: "Norman, OK",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.2,
        reviewCount: 178,
        sports: ["Football", "Basketball", "Baseball", "Softball", "Gymnastics"],
        ratings: { culture: 4.0, academic: 3.9, burnout: 3.4, financial: 4.3, facilities: 4.2 },
        sportData: {
            "Football": { rating: 4.3, reviews: 89, culture: 3.9, academic: 3.8, burnout: 3.1, financial: 4.6, facilities: 4.4 },
            "Softball": { rating: 4.6, reviews: 45, culture: 4.3, academic: 4.0, burnout: 3.8, financial: 4.1, facilities: 4.3 },
            "Gymnastics": { rating: 4.4, reviews: 28, culture: 4.2, academic: 4.1, burnout: 3.9, financial: 4.0, facilities: 4.2 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 39,
        name: "Baylor University",
        location: "Waco, TX",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.1,
        reviewCount: 134,
        sports: ["Football", "Basketball", "Baseball", "Tennis", "Track & Field"],
        ratings: { culture: 4.2, academic: 4.0, burnout: 3.7, financial: 3.9, facilities: 4.0 },
        sportData: {
            "Basketball": { rating: 4.4, reviews: 56, culture: 4.3, academic: 4.1, burnout: 3.6, financial: 4.1, facilities: 4.2 },
            "Football": { rating: 3.9, reviews: 45, culture: 4.1, academic: 3.9, burnout: 3.5, financial: 3.8, facilities: 3.9 },
            "Tennis": { rating: 4.2, reviews: 21, culture: 4.4, academic: 4.2, burnout: 4.0, financial: 3.7, facilities: 4.0 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Additional Big 12 Schools
    {
        id: 40,
        name: "Texas Tech University",
        location: "Lubbock, TX",
        division: "D1",
        conference: "Big 12",
        overallRating: 3.8,
        reviewCount: 145,
        sports: ["Football", "Basketball", "Baseball", "Track & Field", "Golf"],
        ratings: { culture: 3.7, academic: 3.6, burnout: 3.5, financial: 3.9, facilities: 3.8 },
        sportData: {
            "Football": { rating: 3.9, reviews: 67, culture: 3.6, academic: 3.5, burnout: 3.3, financial: 4.1, facilities: 3.9 },
            "Basketball": { rating: 4.0, reviews: 45, culture: 3.8, academic: 3.7, burnout: 3.6, financial: 3.8, facilities: 3.8 },
            "Baseball": { rating: 3.7, reviews: 23, culture: 3.9, academic: 3.6, burnout: 3.7, financial: 3.7, facilities: 3.7 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 41,
        name: "Kansas State University",
        location: "Manhattan, KS",
        division: "D1",
        conference: "Big 12",
        overallRating: 3.7,
        reviewCount: 123,
        sports: ["Football", "Basketball", "Baseball", "Track & Field"],
        ratings: { culture: 3.6, academic: 3.8, burnout: 3.7, financial: 3.6, facilities: 3.7 },
        sportData: {
            "Football": { rating: 3.8, reviews: 56, culture: 3.5, academic: 3.7, burnout: 3.5, financial: 3.8, facilities: 3.8 },
            "Basketball": { rating: 3.6, reviews: 34, culture: 3.7, academic: 3.9, burnout: 3.8, financial: 3.5, facilities: 3.6 },
            "Baseball": { rating: 3.7, reviews: 21, culture: 3.8, academic: 3.8, burnout: 3.9, financial: 3.4, facilities: 3.7 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // Big East Schools
    {
        id: 42,
        name: "Georgetown University",
        location: "Washington, DC",
        division: "D1",
        conference: "Big East",
        overallRating: 4.2,
        reviewCount: 87,
        sports: ["Basketball", "Soccer", "Lacrosse", "Tennis", "Rowing"],
        ratings: { culture: 4.3, academic: 4.6, burnout: 4.0, financial: 3.4, facilities: 4.0 },
        sportData: {
            "Basketball": { rating: 4.1, reviews: 34, culture: 4.2, academic: 4.5, burnout: 3.8, financial: 3.6, facilities: 4.1 },
            "Soccer": { rating: 4.3, reviews: 28, culture: 4.4, academic: 4.7, burnout: 4.1, financial: 3.3, facilities: 4.0 },
            "Lacrosse": { rating: 4.2, reviews: 19, culture: 4.3, academic: 4.6, burnout: 4.2, financial: 3.2, facilities: 3.9 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Academic Only"
    },
    {
        id: 43,
        name: "Marquette University",
        location: "Milwaukee, WI",
        division: "D1",
        conference: "Big East",
        overallRating: 4.0,
        reviewCount: 76,
        sports: ["Basketball", "Soccer", "Track & Field", "Cross Country"],
        ratings: { culture: 4.1, academic: 4.2, burnout: 3.9, financial: 3.5, facilities: 3.8 },
        sportData: {
            "Basketball": { rating: 4.2, reviews: 34, culture: 4.0, academic: 4.1, burnout: 3.7, financial: 3.7, facilities: 3.9 },
            "Soccer": { rating: 3.9, reviews: 23, culture: 4.2, academic: 4.3, burnout: 4.0, financial: 3.4, facilities: 3.7 },
            "Track & Field": { rating: 4.0, reviews: 15, culture: 4.1, academic: 4.2, burnout: 4.1, financial: 3.3, facilities: 3.8 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // Mountain West Schools
    {
        id: 44,
        name: "Colorado State University",
        location: "Fort Collins, CO",
        division: "D1",
        conference: "Mountain West",
        overallRating: 3.8,
        reviewCount: 134,
        sports: ["Football", "Basketball", "Volleyball", "Cross Country", "Golf"],
        ratings: { culture: 3.9, academic: 3.7, burnout: 3.8, financial: 3.6, facilities: 3.7 },
        sportData: {
            "Football": { rating: 3.7, reviews: 56, culture: 3.8, academic: 3.6, burnout: 3.6, financial: 3.7, facilities: 3.7 },
            "Volleyball": { rating: 4.1, reviews: 34, culture: 4.0, academic: 3.8, burnout: 4.0, financial: 3.5, facilities: 3.8 },
            "Cross Country": { rating: 4.0, reviews: 28, culture: 4.1, academic: 3.8, burnout: 4.1, financial: 3.4, facilities: 3.6 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 45,
        name: "Boise State University",
        location: "Boise, ID",
        division: "D1",
        conference: "Mountain West",
        overallRating: 3.9,
        reviewCount: 145,
        sports: ["Football", "Basketball", "Wrestling", "Track & Field", "Gymnastics"],
        ratings: { culture: 3.8, academic: 3.6, burnout: 3.7, financial: 3.8, facilities: 4.0 },
        sportData: {
            "Football": { rating: 4.1, reviews: 67, culture: 3.7, academic: 3.5, burnout: 3.5, financial: 4.0, facilities: 4.2 },
            "Wrestling": { rating: 4.0, reviews: 34, culture: 3.9, academic: 3.7, burnout: 3.8, financial: 3.7, facilities: 3.9 },
            "Gymnastics": { rating: 3.8, reviews: 23, culture: 4.0, academic: 3.6, burnout: 3.9, financial: 3.6, facilities: 3.8 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // High-Profile Programs for Investor Demo
    {
        id: 100,
        name: "University of Notre Dame",
        location: "Notre Dame, IN",
        division: "D1",
        conference: "Independent",
        overallRating: 4.5,
        reviewCount: 198,
        sports: ["Football", "Basketball", "Soccer", "Lacrosse", "Tennis"],
        ratings: { culture: 4.6, academic: 4.8, burnout: 4.0, financial: 4.2, facilities: 4.4 },
        sportData: {
            "Football": { rating: 4.6, reviews: 89, culture: 4.5, academic: 4.8, burnout: 3.8, financial: 4.4, facilities: 4.5 },
            "Basketball": { rating: 4.3, reviews: 56, culture: 4.6, academic: 4.8, burnout: 4.1, financial: 4.0, facilities: 4.3 },
            "Soccer": { rating: 4.4, reviews: 34, culture: 4.7, academic: 4.9, burnout: 4.2, financial: 3.9, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 101,
        name: "Michigan State University",
        location: "East Lansing, MI",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.1,
        reviewCount: 187,
        sports: ["Football", "Basketball", "Hockey", "Wrestling", "Soccer"],
        ratings: { culture: 4.0, academic: 4.0, burnout: 3.6, financial: 4.1, facilities: 4.2 },
        sportData: {
            "Basketball": { rating: 4.3, reviews: 78, culture: 4.1, academic: 4.0, burnout: 3.5, financial: 4.2, facilities: 4.3 },
            "Football": { rating: 3.9, reviews: 67, culture: 3.9, academic: 4.0, burnout: 3.4, financial: 4.0, facilities: 4.1 },
            "Hockey": { rating: 4.2, reviews: 28, culture: 4.2, academic: 4.1, burnout: 3.8, financial: 3.9, facilities: 4.3 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 102,
        name: "University of Virginia",
        location: "Charlottesville, VA",
        division: "D1",
        conference: "ACC",
        overallRating: 4.4,
        reviewCount: 156,
        sports: ["Basketball", "Football", "Lacrosse", "Soccer", "Tennis"],
        ratings: { culture: 4.3, academic: 4.7, burnout: 4.1, financial: 3.9, facilities: 4.2 },
        sportData: {
            "Basketball": { rating: 4.5, reviews: 67, culture: 4.2, academic: 4.6, burnout: 4.0, financial: 4.1, facilities: 4.3 },
            "Lacrosse": { rating: 4.6, reviews: 45, culture: 4.4, academic: 4.8, burnout: 4.2, financial: 3.8, facilities: 4.4 },
            "Soccer": { rating: 4.3, reviews: 28, culture: 4.4, academic: 4.7, burnout: 4.3, financial: 3.7, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 103,
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.2,
        reviewCount: 178,
        sports: ["Football", "Basketball", "Swimming", "Water Polo", "Rugby"],
        ratings: { culture: 4.1, academic: 4.6, burnout: 3.8, financial: 3.7, facilities: 4.1 },
        sportData: {
            "Swimming": { rating: 4.4, reviews: 56, culture: 4.2, academic: 4.7, burnout: 4.0, financial: 3.8, facilities: 4.3 },
            "Football": { rating: 4.0, reviews: 67, culture: 4.0, academic: 4.5, burnout: 3.6, financial: 3.8, facilities: 4.0 },
            "Water Polo": { rating: 4.3, reviews: 34, culture: 4.1, academic: 4.6, burnout: 4.1, financial: 3.6, facilities: 4.2 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 104,
        name: "University of Connecticut",
        location: "Storrs, CT",
        division: "D1",
        conference: "Big East",
        overallRating: 4.3,
        reviewCount: 167,
        sports: ["Basketball", "Soccer", "Field Hockey", "Baseball"],
        ratings: { culture: 4.2, academic: 4.1, burnout: 3.9, financial: 4.0, facilities: 4.1 },
        sportData: {
            "Basketball": { rating: 4.7, reviews: 89, culture: 4.4, academic: 4.0, burnout: 3.7, financial: 4.3, facilities: 4.4 },
            "Soccer": { rating: 4.1, reviews: 45, culture: 4.1, academic: 4.2, burnout: 4.0, financial: 3.8, facilities: 3.9 },
            "Field Hockey": { rating: 4.2, reviews: 23, culture: 4.3, academic: 4.1, burnout: 4.1, financial: 3.7, facilities: 4.0 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 105,
        name: "Wake Forest University",
        location: "Winston-Salem, NC",
        division: "D1",
        conference: "ACC",
        overallRating: 4.1,
        reviewCount: 134,
        sports: ["Basketball", "Football", "Soccer", "Golf", "Tennis"],
        ratings: { culture: 4.2, academic: 4.5, burnout: 4.0, financial: 3.6, facilities: 3.9 },
        sportData: {
            "Basketball": { rating: 4.0, reviews: 56, culture: 4.1, academic: 4.4, burnout: 3.9, financial: 3.8, facilities: 4.0 },
            "Soccer": { rating: 4.3, reviews: 34, culture: 4.3, academic: 4.6, burnout: 4.1, financial: 3.5, facilities: 3.9 },
            "Golf": { rating: 4.2, reviews: 28, culture: 4.2, academic: 4.5, burnout: 4.2, financial: 3.4, facilities: 3.8 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 106,
        name: "Vanderbilt University",
        location: "Nashville, TN",
        division: "D1",
        conference: "SEC",
        overallRating: 4.3,
        reviewCount: 145,
        sports: ["Baseball", "Basketball", "Football", "Tennis", "Golf"],
        ratings: { culture: 4.4, academic: 4.8, burnout: 4.1, financial: 3.8, facilities: 4.0 },
        sportData: {
            "Baseball": { rating: 4.6, reviews: 67, culture: 4.5, academic: 4.7, burnout: 4.0, financial: 4.0, facilities: 4.2 },
            "Basketball": { rating: 4.1, reviews: 45, culture: 4.3, academic: 4.8, burnout: 4.2, financial: 3.7, facilities: 3.9 },
            "Tennis": { rating: 4.2, reviews: 23, culture: 4.4, academic: 4.9, burnout: 4.3, financial: 3.6, facilities: 3.9 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 107,
        name: "Boston College",
        location: "Chestnut Hill, MA",
        division: "D1",
        conference: "ACC",
        overallRating: 4.0,
        reviewCount: 123,
        sports: ["Football", "Basketball", "Hockey", "Soccer", "Lacrosse"],
        ratings: { culture: 4.1, academic: 4.4, burnout: 3.9, financial: 3.7, facilities: 3.8 },
        sportData: {
            "Hockey": { rating: 4.3, reviews: 45, culture: 4.2, academic: 4.3, burnout: 3.8, financial: 3.8, facilities: 4.0 },
            "Football": { rating: 3.8, reviews: 34, culture: 4.0, academic: 4.4, burnout: 3.7, financial: 3.7, facilities: 3.7 },
            "Basketball": { rating: 3.9, reviews: 28, culture: 4.1, academic: 4.5, burnout: 4.0, financial: 3.6, facilities: 3.8 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 108,
        name: "University of Miami",
        location: "Coral Gables, FL",
        division: "D1",
        conference: "ACC",
        overallRating: 4.2,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Baseball", "Swimming", "Tennis"],
        ratings: { culture: 4.0, academic: 4.2, burnout: 3.7, financial: 4.1, facilities: 4.3 },
        sportData: {
            "Football": { rating: 4.1, reviews: 67, culture: 3.9, academic: 4.1, burnout: 3.5, financial: 4.3, facilities: 4.4 },
            "Baseball": { rating: 4.5, reviews: 45, culture: 4.2, academic: 4.3, burnout: 3.8, financial: 4.0, facilities: 4.5 },
            "Swimming": { rating: 4.0, reviews: 28, culture: 4.0, academic: 4.2, burnout: 3.9, financial: 3.9, facilities: 4.2 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 109,
        name: "University of Arizona",
        location: "Tucson, AZ",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.0,
        reviewCount: 167,
        sports: ["Basketball", "Football", "Baseball", "Golf", "Swimming"],
        ratings: { culture: 3.9, academic: 3.8, burnout: 3.6, financial: 4.0, facilities: 4.1 },
        sportData: {
            "Basketball": { rating: 4.2, reviews: 78, culture: 4.0, academic: 3.7, burnout: 3.4, financial: 4.2, facilities: 4.3 },
            "Baseball": { rating: 4.1, reviews: 45, culture: 3.9, academic: 3.8, burnout: 3.7, financial: 3.9, facilities: 4.0 },
            "Golf": { rating: 4.0, reviews: 28, culture: 3.8, academic: 3.9, burnout: 3.9, financial: 3.8, facilities: 4.1 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Swimming & Water Sports Programs
    {
        id: 110,
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.4,
        reviewCount: 134,
        sports: ["Swimming", "Water Polo", "Diving"],
        ratings: { culture: 4.3, academic: 4.7, burnout: 4.0, financial: 3.9, facilities: 4.5 },
        sportData: {
            "Swimming": { rating: 4.5, reviews: 67, culture: 4.4, academic: 4.8, burnout: 4.1, financial: 4.0, facilities: 4.6 },
            "Water Polo": { rating: 4.3, reviews: 34, culture: 4.2, academic: 4.6, burnout: 3.9, financial: 3.8, facilities: 4.4 },
            "Diving": { rating: 4.4, reviews: 23, culture: 4.3, academic: 4.7, burnout: 4.0, financial: 3.9, facilities: 4.5 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 111,
        name: "University of Texas",
        location: "Austin, TX",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.3,
        reviewCount: 145,
        sports: ["Swimming", "Diving", "Water Polo"],
        ratings: { culture: 4.2, academic: 4.0, burnout: 3.8, financial: 4.1, facilities: 4.4 },
        sportData: {
            "Swimming": { rating: 4.4, reviews: 78, culture: 4.3, academic: 4.0, burnout: 3.7, financial: 4.2, facilities: 4.5 },
            "Diving": { rating: 4.2, reviews: 34, culture: 4.1, academic: 4.0, burnout: 3.9, financial: 4.0, facilities: 4.3 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    // Tennis Programs
    {
        id: 112,
        name: "Stanford University",
        location: "Stanford, CA",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.6,
        reviewCount: 89,
        sports: ["Tennis"],
        ratings: { culture: 4.7, academic: 4.9, burnout: 4.2, financial: 3.8, facilities: 4.5 },
        sportData: {
            "Tennis": { rating: 4.7, reviews: 45, culture: 4.8, academic: 4.9, burnout: 4.3, financial: 3.9, facilities: 4.6 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    {
        id: 113,
        name: "University of Georgia",
        location: "Athens, GA",
        division: "D1",
        conference: "SEC",
        overallRating: 4.2,
        reviewCount: 76,
        sports: ["Tennis"],
        ratings: { culture: 4.1, academic: 3.9, burnout: 3.8, financial: 4.0, facilities: 4.2 },
        sportData: {
            "Tennis": { rating: 4.3, reviews: 34, culture: 4.2, academic: 3.9, burnout: 3.9, financial: 4.1, facilities: 4.3 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Partial"
    },
    // Golf Programs
    {
        id: 114,
        name: "Oklahoma State University",
        location: "Stillwater, OK",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.4,
        reviewCount: 67,
        sports: ["Golf"],
        ratings: { culture: 4.3, academic: 3.8, burnout: 4.1, financial: 4.0, facilities: 4.6 },
        sportData: {
            "Golf": { rating: 4.5, reviews: 34, culture: 4.4, academic: 3.8, burnout: 4.2, financial: 4.1, facilities: 4.7 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 115,
        name: "University of Alabama",
        location: "Tuscaloosa, AL",
        division: "D1",
        conference: "SEC",
        overallRating: 4.3,
        reviewCount: 56,
        sports: ["Golf"],
        ratings: { culture: 4.2, academic: 3.7, burnout: 3.9, financial: 4.2, facilities: 4.5 },
        sportData: {
            "Golf": { rating: 4.4, reviews: 28, culture: 4.3, academic: 3.7, burnout: 4.0, financial: 4.3, facilities: 4.6 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    // Wrestling Programs
    {
        id: 116,
        name: "Iowa State University",
        location: "Ames, IA",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.5,
        reviewCount: 89,
        sports: ["Wrestling"],
        ratings: { culture: 4.6, academic: 4.0, burnout: 4.1, financial: 4.0, facilities: 4.3 },
        sportData: {
            "Wrestling": { rating: 4.6, reviews: 56, culture: 4.7, academic: 4.0, burnout: 4.2, financial: 4.1, facilities: 4.4 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    {
        id: 117,
        name: "Penn State University",
        location: "University Park, PA",
        division: "D1",
        conference: "Big Ten",
        overallRating: 4.7,
        reviewCount: 78,
        sports: ["Wrestling"],
        ratings: { culture: 4.8, academic: 4.3, burnout: 4.2, financial: 4.1, facilities: 4.5 },
        sportData: {
            "Wrestling": { rating: 4.8, reviews: 45, culture: 4.9, academic: 4.3, burnout: 4.3, financial: 4.2, facilities: 4.6 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // Gymnastics Programs
    {
        id: 118,
        name: "University of Oklahoma",
        location: "Norman, OK",
        division: "D1",
        conference: "Big 12",
        overallRating: 4.6,
        reviewCount: 67,
        sports: ["Gymnastics"],
        ratings: { culture: 4.7, academic: 4.0, burnout: 4.0, financial: 4.2, facilities: 4.4 },
        sportData: {
            "Gymnastics": { rating: 4.7, reviews: 34, culture: 4.8, academic: 4.0, burnout: 4.1, financial: 4.3, facilities: 4.5 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 119,
        name: "University of Utah",
        location: "Salt Lake City, UT",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.5,
        reviewCount: 56,
        sports: ["Gymnastics"],
        ratings: { culture: 4.6, academic: 4.1, burnout: 4.1, financial: 4.0, facilities: 4.3 },
        sportData: {
            "Gymnastics": { rating: 4.6, reviews: 28, culture: 4.7, academic: 4.1, burnout: 4.2, financial: 4.1, facilities: 4.4 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Track & Field Programs
    {
        id: 120,
        name: "University of Oregon",
        location: "Eugene, OR",
        division: "D1",
        conference: "Pac-12",
        overallRating: 4.7,
        reviewCount: 123,
        sports: ["Track & Field", "Cross Country"],
        ratings: { culture: 4.6, academic: 4.0, burnout: 4.2, financial: 4.3, facilities: 4.8 },
        sportData: {
            "Track & Field": { rating: 4.8, reviews: 78, culture: 4.7, academic: 4.0, burnout: 4.3, financial: 4.4, facilities: 4.9 },
            "Cross Country": { rating: 4.6, reviews: 45, culture: 4.5, academic: 4.0, burnout: 4.1, financial: 4.2, facilities: 4.7 }
        },
        nilOpportunities: "High",
        scholarshipAvailability: "Full and Partial"
    },
    // American Athletic Conference
    {
        id: 46,
        name: "University of Cincinnati",
        location: "Cincinnati, OH",
        division: "D1",
        conference: "American Athletic",
        overallRating: 3.8,
        reviewCount: 156,
        sports: ["Football", "Basketball", "Soccer", "Swimming", "Track & Field"],
        ratings: { culture: 3.7, academic: 3.9, burnout: 3.6, financial: 3.8, facilities: 3.8 },
        sportData: {
            "Football": { rating: 3.9, reviews: 67, culture: 3.6, academic: 3.8, burnout: 3.4, financial: 4.0, facilities: 3.9 },
            "Basketball": { rating: 4.0, reviews: 45, culture: 3.8, academic: 4.0, burnout: 3.7, financial: 3.7, facilities: 3.8 },
            "Soccer": { rating: 3.7, reviews: 28, culture: 3.9, academic: 4.0, burnout: 3.8, financial: 3.6, facilities: 3.7 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    {
        id: 47,
        name: "University of Houston",
        location: "Houston, TX",
        division: "D1",
        conference: "American Athletic",
        overallRating: 3.9,
        reviewCount: 167,
        sports: ["Football", "Basketball", "Baseball", "Track & Field", "Golf"],
        ratings: { culture: 3.8, academic: 3.7, burnout: 3.5, financial: 4.0, facilities: 3.9 },
        sportData: {
            "Football": { rating: 4.0, reviews: 78, culture: 3.7, academic: 3.6, burnout: 3.3, financial: 4.2, facilities: 4.0 },
            "Basketball": { rating: 4.1, reviews: 56, culture: 3.9, academic: 3.8, burnout: 3.6, financial: 3.9, facilities: 3.9 },
            "Baseball": { rating: 3.8, reviews: 23, culture: 4.0, academic: 3.7, burnout: 3.7, financial: 3.8, facilities: 3.8 }
        },
        nilOpportunities: "Medium",
        scholarshipAvailability: "Full and Partial"
    },
    // Conference USA
    {
        id: 48,
        name: "University of North Texas",
        location: "Denton, TX",
        division: "D1",
        conference: "Conference USA",
        overallRating: 3.6,
        reviewCount: 123,
        sports: ["Football", "Basketball", "Track & Field", "Soccer", "Golf"],
        ratings: { culture: 3.5, academic: 3.7, burnout: 3.6, financial: 3.5, facilities: 3.6 },
        sportData: {
            "Football": { rating: 3.7, reviews: 56, culture: 3.4, academic: 3.6, burnout: 3.4, financial: 3.7, facilities: 3.7 },
            "Basketball": { rating: 3.5, reviews: 34, culture: 3.6, academic: 3.8, burnout: 3.7, financial: 3.4, facilities: 3.5 },
            "Track & Field": { rating: 3.8, reviews: 21, culture: 3.7, academic: 3.7, burnout: 3.8, financial: 3.3, facilities: 3.6 }
        },
        nilOpportunities: "Low",
        scholarshipAvailability: "Partial"
    },
    // Division II Schools
    {
        id: 49,
        name: "Grand Valley State University",
        location: "Allendale, MI",
        division: "D2",
        conference: "GLIAC",
        overallRating: 4.1,
        reviewCount: 89,
        sports: ["Football", "Basketball", "Track & Field", "Cross Country", "Swimming"],
        ratings: { culture: 4.2, academic: 4.0, burnout: 4.0, financial: 3.7, facilities: 3.9 },
        sportData: {
            "Football": { rating: 4.3, reviews: 45, culture: 4.1, academic: 3.9, burnout: 3.8, financial: 3.8, facilities: 4.0 },
            "Basketball": { rating: 4.0, reviews: 23, culture: 4.3, academic: 4.1, burnout: 4.1, financial: 3.6, facilities: 3.8 },
            "Track & Field": { rating: 4.1, reviews: 15, culture: 4.2, academic: 4.0, burnout: 4.2, financial: 3.5, facilities: 3.9 }
        },
        nilOpportunities: "None",
        scholarshipAvailability: "Partial"
    },
    {
        id: 50,
        name: "West Texas A&M University",
        location: "Canyon, TX",
        division: "D2",
        conference: "Lone Star Conference",
        overallRating: 3.9,
        reviewCount: 76,
        sports: ["Football", "Basketball", "Baseball", "Softball", "Track & Field"],
        ratings: { culture: 4.0, academic: 3.8, burnout: 3.9, financial: 3.8, facilities: 3.7 },
        sportData: {
            "Football": { rating: 4.0, reviews: 34, culture: 3.9, academic: 3.7, burnout: 3.7, financial: 3.9, facilities: 3.8 },
            "Basketball": { rating: 3.8, reviews: 21, culture: 4.1, academic: 3.9, burnout: 4.0, financial: 3.7, facilities: 3.6 },
            "Baseball": { rating: 3.9, reviews: 15, culture: 4.0, academic: 3.8, burnout: 4.1, financial: 3.6, facilities: 3.7 }
        },
        nilOpportunities: "None",
        scholarshipAvailability: "Partial"
    },
    // Division III Schools
    {
        id: 51,
        name: "Williams College",
        location: "Williamstown, MA",
        division: "D3",
        conference: "NESCAC",
        overallRating: 4.5,
        reviewCount: 67,
        sports: ["Football", "Basketball", "Soccer", "Tennis", "Swimming", "Lacrosse"],
        ratings: { culture: 4.6, academic: 4.8, burnout: 4.3, financial: 3.2, facilities: 4.2 },
        sportData: {
            "Football": { rating: 4.4, reviews: 23, culture: 4.5, academic: 4.7, burnout: 4.1, financial: 3.1, facilities: 4.1 },
            "Basketball": { rating: 4.3, reviews: 18, culture: 4.6, academic: 4.8, burnout: 4.3, financial: 3.2, facilities: 4.2 },
            "Soccer": { rating: 4.6, reviews: 15, culture: 4.7, academic: 4.9, burnout: 4.4, financial: 3.3, facilities: 4.3 }
        },
        nilOpportunities: "None",
        scholarshipAvailability: "Academic Only"
    },
    {
        id: 52,
        name: "Middlebury College",
        location: "Middlebury, VT",
        division: "D3",
        conference: "NESCAC",
        overallRating: 4.4,
        reviewCount: 54,
        sports: ["Football", "Basketball", "Soccer", "Lacrosse", "Skiing", "Hockey"],
        ratings: { culture: 4.5, academic: 4.7, burnout: 4.2, financial: 3.1, facilities: 4.1 },
        sportData: {
            "Football": { rating: 4.3, reviews: 19, culture: 4.4, academic: 4.6, burnout: 4.0, financial: 3.0, facilities: 4.0 },
            "Skiing": { rating: 4.6, reviews: 12, culture: 4.6, academic: 4.8, burnout: 4.4, financial: 3.2, facilities: 4.3 },
            "Hockey": { rating: 4.4, reviews: 15, culture: 4.5, academic: 4.7, burnout: 4.1, financial: 3.1, facilities: 4.2 }
        },
        nilOpportunities: "None",
        scholarshipAvailability: "Academic Only"
    }
];

// NIL Company Data for Analytics
const nilCompanyData = [
    { company: "Nike", totalSpend: 45000000, schoolsPartnered: 89, topSport: "Football" },
    { company: "Adidas", totalSpend: 32000000, schoolsPartnered: 67, topSport: "Basketball" },
    { company: "Under Armour", totalSpend: 28000000, schoolsPartnered: 45, topSport: "Football" },
    { company: "New Balance", totalSpend: 12000000, schoolsPartnered: 23, topSport: "Track & Field" },
    { company: "Jordan Brand", totalSpend: 25000000, schoolsPartnered: 34, topSport: "Basketball" },
    { company: "Local Businesses", totalSpend: 67000000, schoolsPartnered: 234, topSport: "Various" }
];

// Global state variables
let currentSport = null;
let currentCategory = 'overall';
let displayedSchools = [...sampleSchools];

// Sample reviews data
const sampleReviews = [
    {
        schoolId: 1,
        sport: "Football",
        userType: "former",
        overallRating: 4,
        coachingRating: 4,
        facilitiesRating: 5,
        academicRating: 3,
        reviewText: "Great program with top-notch facilities. Coach Saban demands excellence and the results speak for themselves. Academic support could be better, but the football experience is unmatched.",
        scholarshipAmount: "partial-high",
        nilOpportunities: "Had several local endorsement deals worth $15k total. Program actively helps connect players with opportunities.",
        date: "2024-01-15"
    },
    {
        schoolId: 2,
        sport: "Swimming",
        userType: "current",
        overallRating: 5,
        coachingRating: 5,
        facilitiesRating: 5,
        academicRating: 5,
        reviewText: "Stanford is incredible - world-class academics with elite athletic facilities. Coaches are supportive and understand the academic demands. Perfect balance of athletics and education.",
        scholarshipAmount: "partial-mid",
        nilOpportunities: "Limited NIL opportunities but academic scholarships help significantly.",
        date: "2024-02-20"
    }
];

// DOM elements
const schoolsGrid = document.getElementById('schoolsGrid');
const schoolModal = document.getElementById('schoolModal');
const reviewModal = document.getElementById('reviewModal');
// Enhanced Search and Filtering Elements
const searchInput = document.getElementById('schoolSearch');
const searchSuggestions = document.getElementById('searchSuggestions');
const mainSearchBtn = document.getElementById('mainSearchBtn');
const resultsCount = document.getElementById('resultsCount');
const clearFiltersBtn = document.getElementById('clearFilters');
const advancedFiltersBtn = document.getElementById('advancedFiltersBtn');
const advancedFilters = document.getElementById('advancedFilters');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const activeFilters = document.getElementById('activeFilters');
const activeFiltersList = document.getElementById('activeFiltersList');

// Filter Elements
const sportDropdown = document.getElementById('sportDropdown');
const locationDropdown = document.getElementById('locationDropdown');
const divisionDropdown = document.getElementById('divisionDropdown');
const conferenceDropdown = document.getElementById('conferenceDropdown');
const scholarshipDropdown = document.getElementById('scholarshipDropdown');
const teamSizeDropdown = document.getElementById('teamSizeDropdown');
const ratingDropdown = document.getElementById('ratingDropdown');
const academicDropdown = document.getElementById('academicDropdown');
const cultureDropdown = document.getElementById('cultureDropdown');
const sortDropdown = document.getElementById('sortDropdown');

// View Elements
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

// Legacy Elements
const filterTags = document.querySelectorAll('.tag');
const categoryBtns = document.querySelectorAll('.category-btn');
const reviewForm = document.getElementById('submitReview');
const userTypeSelect = document.getElementById('userType');
const programsTitle = document.getElementById('programsTitle');
const sportContext = document.getElementById('sportContext');
const selectedSport = document.getElementById('selectedSport');
const workLifeSlider = document.getElementById('workLifeBalance');
const athleticsPercent = document.getElementById('athleticsPercent');
const academicsPercent = document.getElementById('academicsPercent');

// Enhanced Search and Filtering State
let currentFilters = {
    search: '',
    sport: '',
    location: '',
    division: '',
    conference: '',
    scholarship: '',
    teamSize: '',
    rating: '',
    academic: '',
    culture: ''
};

let currentSort = 'rating';
let currentView = 'grid';
let filteredSchools = [];
let isAdvancedFiltersOpen = false;

// Search suggestions data
const searchSuggestionsData = {
    schools: [
        'Stanford University', 'Duke University', 'University of Alabama', 'University of Texas',
        'University of California Los Angeles', 'University of North Carolina', 'University of Georgia',
        'Ohio State University', 'University of Michigan', 'University of Florida', 'Penn State University',
        'University of Southern California', 'University of Notre Dame', 'Clemson University',
        'University of Oklahoma', 'University of Oregon', 'Auburn University', 'Louisiana State University'
    ],
    sports: [
        'Football', 'Basketball', 'Baseball', 'Soccer', 'Swimming', 'Wrestling', 'Tennis',
        'Volleyball', 'Track & Field', 'Golf', 'Softball', 'Lacrosse', 'Hockey', 'Gymnastics', 'Cross Country'
    ],
    locations: [
        'California', 'Texas', 'Florida', 'New York', 'North Carolina', 'Georgia', 'Alabama',
        'Ohio', 'Michigan', 'Pennsylvania', 'Northeast Region', 'Southeast Region', 'Midwest Region',
        'Southwest Region', 'West Region'
    ]
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    displaySchools();
    initializeDiscoveryPaths();
    
    // Add direct search initialization as backup
    setTimeout(() => {
        const searchInput = document.getElementById('schoolSearch');
        const searchBtn = document.getElementById('mainSearchBtn');
        
        if (searchInput && searchBtn) {
            console.log('Direct search initialization - elements found');
            
            // Remove any existing listeners first
            searchBtn.replaceWith(searchBtn.cloneNode(true));
            const newSearchBtn = document.getElementById('mainSearchBtn');
            
            newSearchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Search button clicked - direct listener');
                performSearch();
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    console.log('Enter pressed - direct listener');
                    performSearch();
                }
            });
        } else {
            console.log('Search elements not found in direct initialization');
        }
    }, 500);
});

// Initialize the new discovery paths
function initializeDiscoveryPaths() {
    console.log('Initializing discovery paths...');
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize sport selection button
    initializeSportSelection();
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('schoolSearch');
    const searchBtn = document.getElementById('mainSearchBtn');
    
    console.log('Setting up hero search listeners...', { searchInput, searchBtn });
    
    if (searchInput && searchBtn) {
        // Search button click
        searchBtn.addEventListener('click', function() {
            console.log('Hero search button clicked!');
            performSearch();
        });
        
        // Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Enter key pressed in hero search!');
                performSearch();
            }
        });
    } else {
        console.log('Hero search elements not found:', { searchInput, searchBtn });
    }
}

// Initialize sport selection button
function initializeSportSelection() {
    console.log('Initializing sport selection...');
    
    // Wait for DOM to be fully loaded
    setTimeout(() => {
        const chooseSportBtn = document.getElementById('chooseSportBtn');
        console.log('Looking for chooseSportBtn:', chooseSportBtn);
        
        if (chooseSportBtn) {
            console.log('Found chooseSportBtn, adding event listener');
            
            // Remove any existing listeners
            chooseSportBtn.replaceWith(chooseSportBtn.cloneNode(true));
            const newBtn = document.getElementById('chooseSportBtn');
            
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Choose Sport button clicked - navigating to sport-selection.html');
                
                // Navigate to sport selection page
                window.location.href = 'sport-selection.html';
            });
            
            // Also add a direct onclick as backup
            newBtn.onclick = function() {
                console.log('Onclick backup triggered');
                window.location.href = 'sport-selection.html';
            };
            
            console.log('Event listeners added successfully');
        } else {
            console.error('chooseSportBtn not found!');
        }
    }, 500);
}

// Perform program search
function performProgramSearch() {
    const searchInput = document.getElementById('programSearch');
    const query = searchInput ? searchInput.value.trim() : '';
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    console.log(`Searching for: ${query}`);
    
    // Filter schools based on search query
    const filteredSchools = Object.values(schoolsData).filter(school => {
        const searchText = `${school.name} ${school.location} ${school.conference} ${school.sports ? school.sports.join(' ') : ''}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    
    // Show search results
    displaySearchResults(filteredSchools, query);
}

// Display search results
function displaySearchResults(schools, query) {
    const searchResults = document.getElementById('searchResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const resultsGrid = document.getElementById('resultsGrid');
    
    if (!searchResults || !resultsGrid) return;
    
    // Update results info
    if (resultsTitle) {
        resultsTitle.textContent = `Search Results for "${query}"`;
    }
    
    if (resultsCount) {
        resultsCount.textContent = `${schools.length} program${schools.length !== 1 ? 's' : ''} found`;
    }
    
    // Clear and populate results
    resultsGrid.innerHTML = '';
    
    if (schools.length === 0) {
        resultsGrid.innerHTML = `
            <div class="no-results">
                <h3>No programs found</h3>
                <p>Try searching with different keywords or check your spelling.</p>
                <button onclick="clearSearch()" class="btn-primary">Clear Search</button>
            </div>
        `;
    } else {
        schools.forEach(school => {
            const schoolCard = createSearchResultCard(school, query);
            resultsGrid.appendChild(schoolCard);
        });
    }
    
    // Show results section
    searchResults.style.display = 'block';
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

// Create search result card
function createSearchResultCard(school, query) {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    
    // Highlight search terms in school name
    const highlightedName = highlightSearchTerm(school.name, query);
    
    // Build sports list
    const sportsText = school.sports && school.sports.length > 0 
        ? school.sports.slice(0, 3).join(', ') + (school.sports.length > 3 ? '...' : '')
        : 'Various sports';
    
    card.innerHTML = `
        <div class="search-result-header">
            <h3>${highlightedName}</h3>
            <div class="school-rating">
                ${generateStarRating(school.rating || 4.0)}
                <span class="rating-number">${school.rating || 4.0}</span>
            </div>
        </div>
        <div class="search-result-info">
            <p class="school-location">
                <i class="fas fa-map-marker-alt"></i> ${school.location || 'Location TBD'}
            </p>
            <p class="school-division">
                <i class="fas fa-trophy"></i> ${school.division || 'Division TBD'}
            </p>
            <p class="school-conference">
                <i class="fas fa-users"></i> ${school.conference || 'Conference TBD'}
            </p>
            <p class="school-sports">
                <i class="fas fa-football-ball"></i> ${sportsText}
            </p>
        </div>
        <div class="search-result-actions">
            <button class="btn-primary" onclick="viewSchoolDetails('${school.name}')">
                <i class="fas fa-chart-bar"></i> View Analytics
            </button>
            <button class="btn-secondary" onclick="writeReview('${school.name}')">
                <i class="fas fa-edit"></i> Write Review
            </button>
        </div>
    `;
    
    return card;
}

// Highlight search terms
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('programSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.style.display = 'none';
}

// Show search suggestions
function showSearchSuggestions(query) {
    // This could be expanded to show live suggestions
    console.log(`Showing suggestions for: ${query}`);
}

// Hide search results
function hideSearchResults() {
    const searchResults = document.getElementById('searchResults');
    if (searchResults && !searchResults.querySelector('.search-result-card')) {
        searchResults.style.display = 'none';
    }
}

// Enhanced Search and Filtering Functions
function initializeEnhancedSearch() {
    // Initialize search suggestions
    if (searchInput && searchSuggestions) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
    }
    
    // Initialize main search button
    if (mainSearchBtn) {
        mainSearchBtn.addEventListener('click', performSearch);
    }
    
    // Initialize Enter key search
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Simple search handler for onclick
function handleSearchClick() {
    console.log('handleSearchClick called');
    const searchInput = document.getElementById('schoolSearch');
    
    if (!searchInput) {
        alert('Search input not found');
        return;
    }
    
    const query = searchInput.value.trim();
    console.log('Search query:', query);
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    // Direct redirect
    const encodedQuery = encodeURIComponent(query);
    const targetUrl = `search-results.html?q=${encodedQuery}`;
    console.log('Redirecting to:', targetUrl);
    
    window.location.href = targetUrl;
}

// Hero Search Function - Redirects to Search Results Page
function performSearch() {
    handleSearchClick();
}

function setupEnhancedFiltering() {
    // Advanced filters toggle
    if (advancedFiltersBtn) {
        advancedFiltersBtn.addEventListener('click', toggleAdvancedFilters);
    }
    
    // Apply filters button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyAdvancedFilters);
    }
    
    // Reset filters button
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetPrimaryFilters);
    }
    
    // Clear filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // Primary filters (apply immediately)
    const primaryFilterElements = [
        { element: sportDropdown, key: 'sport' },
        { element: locationDropdown, key: 'location' },
        { element: divisionDropdown, key: 'division' }
    ];
    
    primaryFilterElements.forEach(({ element, key }) => {
        if (element) {
            element.addEventListener('change', () => handleFilterChange(key, element.value));
        }
    });
}

function showButtonFeedback(button, text, color) {
    if (!button) return;
    
    const originalText = button.innerHTML;
    const originalColor = button.style.background;
    
    button.innerHTML = `<i class="fas fa-check"></i> ${text}`;
    button.style.background = color;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = originalColor;
    }, 1500);
}

// Instant filtering function that updates the UI immediately
function applyFiltersInstantly() {
    console.log('Applying filters instantly with:', currentFilters);
    
    // Start with all schools from schoolsData
    let filteredSchools = Object.values(schoolsData);
    let activeFiltersCount = 0;
    
    // Apply sport filter (only if not empty)
    if (currentFilters.sport && currentFilters.sport !== '') {
        console.log('Filtering by sport:', currentFilters.sport);
        filteredSchools = filteredSchools.filter(school => {
            if (school.sports && Array.isArray(school.sports)) {
                return school.sports.some(sport => 
                    sport.toLowerCase().includes(currentFilters.sport.toLowerCase())
                );
            }
            return false;
        });
        activeFiltersCount++;
    }
    
    // Apply location filter (only if not empty)
    if (currentFilters.location && currentFilters.location !== '') {
        console.log('Filtering by location:', currentFilters.location);
        filteredSchools = filteredSchools.filter(school => {
            if (school.location) {
                return school.location.toLowerCase().includes(currentFilters.location.toLowerCase());
            }
            return false;
        });
        activeFiltersCount++;
    }
    
    // Apply division filter (only if not empty)
    if (currentFilters.division && currentFilters.division !== '') {
        console.log('Filtering by division:', currentFilters.division);
        filteredSchools = filteredSchools.filter(school => {
            if (school.division) {
                return school.division.toLowerCase() === currentFilters.division.toLowerCase();
            }
            return false;
        });
        activeFiltersCount++;
    }
    
    // Apply conference filter (only if not empty)
    if (currentFilters.conference && currentFilters.conference !== '') {
        console.log('Filtering by conference:', currentFilters.conference);
        filteredSchools = filteredSchools.filter(school => {
            if (school.conference) {
                return school.conference.toLowerCase().includes(currentFilters.conference.toLowerCase());
            }
            return false;
        });
        activeFiltersCount++;
    }
    
    console.log(`Filtered ${filteredSchools.length} schools from ${Object.keys(schoolsData).length} total`);
    
    // Update results count instantly
    updateResultsCountInstantly(filteredSchools.length, activeFiltersCount);
    
    // Display filtered schools instantly
    displaySchoolsInstantly(filteredSchools);
    
    // Show/hide clear button based on active filters
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
        clearBtn.style.display = activeFiltersCount > 0 ? 'inline-block' : 'none';
    }
}

// Show all schools instantly (for reset/clear)
function showAllSchoolsInstantly() {
    console.log('Showing all schools instantly');
    
    const allSchools = Object.values(schoolsData);
    
    // Update results count
    updateResultsCountInstantly(allSchools.length, 0);
    
    // Display all schools
    displaySchoolsInstantly(allSchools);
    
    // Hide clear button
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
        clearBtn.style.display = 'none';
    }
}

// Update results count with instant feedback
function updateResultsCountInstantly(count, activeFiltersCount) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        if (activeFiltersCount === 0) {
            resultsCount.textContent = 'Showing all programs';
        } else {
            resultsCount.textContent = `Showing ${count} programs (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`;
        }
    }
}

// Display schools instantly in the repeating group
function displaySchoolsInstantly(schools) {
    const schoolsGrid = document.getElementById('schoolsGrid');
    if (!schoolsGrid) {
        console.error('Schools grid element not found');
        return;
    }
    
    console.log(`Displaying ${schools.length} schools`);
    
    // Clear current schools
    schoolsGrid.innerHTML = '';
    
    // If no schools match, show a message
    if (schools.length === 0) {
        schoolsGrid.innerHTML = `
            <div class="no-results">
                <h3>No programs found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    // Display each school
    schools.forEach(school => {
        const schoolCard = createSchoolCard(school);
        schoolsGrid.appendChild(schoolCard);
    });
}

// Create a school card element
function createSchoolCard(school) {
    const card = document.createElement('div');
    card.className = 'school-card';
    
    // Build sports list
    const sportsText = school.sports && school.sports.length > 0 
        ? school.sports.slice(0, 3).join(', ') + (school.sports.length > 3 ? '...' : '')
        : 'Various sports';
    
    card.innerHTML = `
        <div class="school-header">
            <h3>${school.name}</h3>
            <div class="school-rating">
                ${generateStarRating(school.rating || 4.0)}
                <span class="rating-number">${school.rating || 4.0}</span>
            </div>
        </div>
        <div class="school-info">
            <p class="school-location">
                <i class="fas fa-map-marker-alt"></i> ${school.location || 'Location TBD'}
            </p>
            <p class="school-division">
                <i class="fas fa-trophy"></i> ${school.division || 'Division TBD'}
            </p>
            <p class="school-conference">
                <i class="fas fa-users"></i> ${school.conference || 'Conference TBD'}
            </p>
            <p class="school-sports">
                <i class="fas fa-football-ball"></i> ${sportsText}
            </p>
        </div>
        <div class="school-actions">
            <button class="btn-primary" onclick="viewSchoolDetails('${school.name}')">
                View Details
            </button>
            <button class="btn-secondary" onclick="writeReview('${school.name}')">
                Write Review
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
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

// Helper functions for school card actions
function viewSchoolDetails(schoolName) {
    console.log(`Viewing details for: ${schoolName}`);
    // For now, just show an alert - this could be expanded to show a modal or navigate to a details page
    alert(`Viewing details for ${schoolName}\n\nThis would typically open a detailed view of the school's programs, facilities, reviews, and more.`);
}

function writeReview(schoolName) {
    console.log(`Writing review for: ${schoolName}`);
    // For now, just show an alert - this could be expanded to show a review form
    alert(`Writing a review for ${schoolName}\n\nThis would typically open a form where you can rate and review the school's programs, coaches, facilities, etc.`);
}

function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        if (count === Object.keys(schoolsData).length) {
            resultsCount.textContent = 'Showing all programs';
        } else {
            resultsCount.textContent = `Showing ${count} programs`;
        }
    }
}

function applyFiltersAndSort() {
    // Start with all schools
    let schools = [...schoolsData];
    
    // Apply search filter
    if (currentFilters.search) {
        const query = currentFilters.search.toLowerCase();
        schools = schools.filter(school => 
            school.name.toLowerCase().includes(query) ||
            school.location.toLowerCase().includes(query) ||
            school.conference.toLowerCase().includes(query) ||
            (school.sports && school.sports.some(sport => sport.toLowerCase().includes(query)))
        );
    }
    
    // Apply other filters
    Object.keys(currentFilters).forEach(filterKey => {
        const filterValue = currentFilters[filterKey];
        if (filterValue && filterKey !== 'search') {
            schools = schools.filter(school => applySpecificFilter(school, filterKey, filterValue));
        }
    });
    
    // Sort schools
    schools = sortSchools(schools, currentSort);
    
    // Update filtered schools
    filteredSchools = schools;
    
    // Update UI
    updateResultsCount(schools.length);
    updateActiveFilters();
    displayFilteredSchools(schools);
}

function applySpecificFilter(school, filterKey, filterValue) {
    switch (filterKey) {
        case 'sport':
            return school.sports && school.sports.some(sport => 
                sport.toLowerCase() === filterValue.toLowerCase()
            );
        case 'location':
            return school.location.toLowerCase().includes(filterValue.toLowerCase()) ||
                   school.state?.toLowerCase() === filterValue.toLowerCase();
        case 'division':
            return school.division?.toLowerCase() === filterValue.toLowerCase();
        case 'conference':
            return school.conference?.toLowerCase() === filterValue.toLowerCase();
        case 'rating':
            const minRating = parseFloat(filterValue);
            return school.overallRating >= minRating;
        case 'scholarship':
            return school.scholarships && school.scholarships.includes(filterValue);
        case 'teamSize':
            return checkTeamSize(school, filterValue);
        case 'academic':
            return checkAcademicSupport(school, filterValue);
        case 'culture':
            return school.culture?.toLowerCase() === filterValue.toLowerCase();
        default:
            return true;
    }
}

function checkTeamSize(school, sizeFilter) {
    const teamSize = school.teamSize || 50; // Default size
    switch (sizeFilter) {
        case 'small': return teamSize <= 30;
        case 'medium': return teamSize > 30 && teamSize <= 60;
        case 'large': return teamSize > 60;
        default: return true;
    }
}

function checkAcademicSupport(school, academicFilter) {
    const academicRating = school.academicSupport || school.overallRating;
    switch (academicFilter) {
        case 'excellent': return academicRating >= 4.5;
        case 'very-good': return academicRating >= 4.0;
        case 'good': return academicRating >= 3.5;
        default: return true;
    }
}

function sortSchools(schools, sortBy) {
    return schools.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'location':
                return a.location.localeCompare(b.location);
            case 'rating':
                return b.overallRating - a.overallRating;
            case 'recent':
                return new Date(b.lastReviewed || '2024-01-01') - new Date(a.lastReviewed || '2024-01-01');
            case 'scholarships':
                return (b.scholarships?.length || 0) - (a.scholarships?.length || 0);
            case 'nil':
                return (b.nilOpportunities || 0) - (a.nilOpportunities || 0);
            default:
                return b.overallRating - a.overallRating;
        }
    });
}

function updateResultsCount(count) {
    if (resultsCount) {
        const totalSchools = schoolsData.length;
        if (count === totalSchools) {
            resultsCount.textContent = `Showing all ${count} programs`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${totalSchools} programs`;
        }
    }
}

function updateActiveFilters() {
    if (!activeFilters || !activeFiltersList) return;
    
    activeFiltersList.innerHTML = '';
    let hasActiveFilters = false;
    
    Object.keys(currentFilters).forEach(filterKey => {
        const filterValue = currentFilters[filterKey];
        if (filterValue) {
            hasActiveFilters = true;
            const filterTag = document.createElement('div');
            filterTag.className = 'active-filter-tag';
            filterTag.innerHTML = `
                ${getFilterDisplayName(filterKey)}: ${filterValue}
                <button onclick="removeFilter('${filterKey}')">&times;</button>
            `;
            activeFiltersList.appendChild(filterTag);
        }
    });
    
    activeFilters.style.display = hasActiveFilters ? 'block' : 'none';
    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
    }
}

function getFilterDisplayName(filterKey) {
    const displayNames = {
        search: 'Search',
        sport: 'Sport',
        location: 'Location',
        division: 'Division',
        conference: 'Conference',
        scholarship: 'Scholarships',
        teamSize: 'Team Size',
        rating: 'Min Rating',
        academic: 'Academic Support',
        culture: 'Team Culture'
    };
    return displayNames[filterKey] || filterKey;
}

function removeFilter(filterKey) {
    currentFilters[filterKey] = '';
    
    // Update corresponding form element
    const elementMap = {
        search: searchInput,
        sport: sportDropdown,
        location: locationDropdown,
        division: divisionDropdown,
        conference: conferenceDropdown,
        scholarship: scholarshipDropdown,
        teamSize: teamSizeDropdown,
        rating: ratingDropdown,
        academic: academicDropdown,
        culture: cultureDropdown
    };
    
    const element = elementMap[filterKey];
    if (element) {
        element.value = '';
    }
    
    applyFiltersAndSort();
}

function displayAllSchools() {
    filteredSchools = [...schoolsData];
    displayFilteredSchools(filteredSchools);
    updateResultsCount(filteredSchools.length);
}

function displayFilteredSchools(schools) {
    if (!schoolsGrid) return;
    
    schoolsGrid.innerHTML = '';
    
    if (schools.length === 0) {
        schoolsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--color-tertiary); margin-bottom: 1rem;"></i>
                <h3>No programs found</h3>
                <p>Try adjusting your search criteria or filters</p>
                <button onclick="clearAllFilters()" class="clear-filters-btn">Clear All Filters</button>
            </div>
        `;
        return;
    }
    
    schools.forEach(school => {
        const schoolCard = currentView === 'grid' 
            ? createEnhancedSchoolCard(school)
            : createSchoolListItem(school);
        schoolsGrid.appendChild(schoolCard);
    });
}

function createEnhancedSchoolCard(school) {
    const card = document.createElement('div');
    card.className = 'school-card enhanced';
    
    const sportsDisplay = school.sports ? school.sports.slice(0, 3).join(', ') + 
        (school.sports.length > 3 ? ` +${school.sports.length - 3} more` : '') : 'Multiple Sports';
    
    card.innerHTML = `
        <div class="school-card-header">
            <h3>${school.name}</h3>
            <div class="school-rating">
                <div class="stars">${generateStars(school.overallRating)}</div>
                <span class="rating-number">${school.overallRating}</span>
            </div>
        </div>
        <div class="school-info">
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${school.location}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-trophy"></i>
                <span>${school.conference} • ${school.division || 'D1'}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-users"></i>
                <span>${sportsDisplay}</span>
            </div>
            ${school.scholarships ? `
                <div class="info-item scholarship-info">
                    <i class="fas fa-dollar-sign"></i>
                    <span>Scholarships Available</span>
                </div>
            ` : ''}
        </div>
        <div class="school-actions">
            <button class="btn-secondary" onclick="viewSchoolProfile('${school.id}')">
                <i class="fas fa-eye"></i> View Details
            </button>
            <button class="btn-primary" onclick="window.location.href='program-analytics-new.html'">
                <i class="fas fa-chart-line"></i> Analytics
            </button>
        </div>
    `;
    
    return card;
}

function createSchoolListItem(school) {
    const item = document.createElement('div');
    item.className = 'school-list-item';
    
    item.innerHTML = `
        <div class="list-item-content">
            <div class="list-item-main">
                <h3>${school.name}</h3>
                <div class="list-item-details">
                    <span class="location">${school.location}</span>
                    <span class="conference">${school.conference}</span>
                    <span class="division">${school.division || 'D1'}</span>
                </div>
            </div>
            <div class="list-item-rating">
                <div class="stars">${generateStars(school.overallRating)}</div>
                <span class="rating-number">${school.overallRating}</span>
            </div>
            <div class="list-item-actions">
                <button class="btn-secondary" onclick="viewSchoolProfile('${school.id}')">
                    View Details
                </button>
                <button class="btn-primary" onclick="window.location.href='program-analytics-new.html'">
                    Analytics
                </button>
            </div>
        </div>
    `;
    
    return item;
}

// Display schools in the grid
function displaySchools(schools) {
    schoolsGrid.innerHTML = '';
    
    // Sort schools based on current category
    const sortedSchools = sortSchoolsByCategory(schools, currentCategory, currentSport);
    
    sortedSchools.forEach(school => {
        const schoolCard = createSchoolCard(school, currentSport);
        schoolsGrid.appendChild(schoolCard);
    });
    
    displayedSchools = sortedSchools;
}

// Display simple school cards (just title and View Analytics)
function displaySimpleSchools(schools) {
    schoolsGrid.innerHTML = '';
    
    schools.forEach(school => {
        const schoolCard = createSimpleSchoolCard(school);
        schoolsGrid.appendChild(schoolCard);
    });
    
    displayedSchools = schools;
}

// Sort schools by category
function sortSchoolsByCategory(schools, category, sport = null) {
    return schools.sort((a, b) => {
        let aValue, bValue;
        
        if (sport && a.sportData[sport] && b.sportData[sport]) {
            // Use sport-specific data if available
            switch(category) {
                case 'overall':
                    aValue = a.sportData[sport].rating;
                    bValue = b.sportData[sport].rating;
                    break;
                case 'culture':
                    aValue = a.sportData[sport].culture;
                    bValue = b.sportData[sport].culture;
                    break;
                case 'academic':
                    aValue = a.sportData[sport].academic;
                    bValue = b.sportData[sport].academic;
                    break;
                case 'burnout':
                    aValue = a.sportData[sport].burnout;
                    bValue = b.sportData[sport].burnout;
                    break;
                case 'financial':
                    aValue = a.sportData[sport].financial;
                    bValue = b.sportData[sport].financial;
                    break;
                case 'facilities':
                    aValue = a.sportData[sport].facilities;
                    bValue = b.sportData[sport].facilities;
                    break;
                default:
                    aValue = a.sportData[sport].rating;
                    bValue = b.sportData[sport].rating;
            }
        } else {
            // Use overall school data
            switch(category) {
                case 'overall':
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
}

// Create individual school card
function createSchoolCard(school, sport = null) {
    const card = document.createElement('div');
    card.className = 'school-card';
    card.onclick = () => openSchoolModal(school, sport);
    
    const initials = school.name.split(' ').map(word => word[0]).join('').substring(0, 2);
    
    // Get appropriate rating and review count
    let displayRating, displayReviews, categorySnippets;
    
    if (sport && school.sportData[sport]) {
        const sportData = school.sportData[sport];
        displayRating = sportData.rating;
        displayReviews = sportData.reviews;
        
        // Create category snippets for sport-specific data
        categorySnippets = `
            <div class="category-snippets">
                <div class="snippet">
                    <span class="snippet-label">Culture:</span>
                    <div class="snippet-stars">${generateStars(sportData.culture)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Academic:</span>
                    <div class="snippet-stars">${generateStars(sportData.academic)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Balance:</span>
                    <div class="snippet-stars">${generateStars(sportData.burnout)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Financial:</span>
                    <div class="snippet-stars">${generateStars(sportData.financial)}</div>
                </div>
            </div>
        `;
    } else {
        displayRating = school.overallRating;
        displayReviews = school.reviewCount;
        
        // Create category snippets for overall school data
        categorySnippets = `
            <div class="category-snippets">
                <div class="snippet">
                    <span class="snippet-label">Culture:</span>
                    <div class="snippet-stars">${generateStars(school.ratings.culture)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Academic:</span>
                    <div class="snippet-stars">${generateStars(school.ratings.academic)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Balance:</span>
                    <div class="snippet-stars">${generateStars(school.ratings.burnout)}</div>
                </div>
                <div class="snippet">
                    <span class="snippet-label">Financial:</span>
                    <div class="snippet-stars">${generateStars(school.ratings.financial)}</div>
                </div>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="school-header">
            <div class="school-logo">${initials}</div>
            <div class="school-info">
                <h3>${school.name}</h3>
                <p>${school.location} • ${school.division} • ${school.conference}</p>
                ${sport ? `<span class="sport-badge">${sport}</span>` : ''}
            </div>
        </div>
        <div class="school-rating">
            <div class="stars">
                ${generateStars(displayRating)}
            </div>
            <span class="rating-text">${displayRating}/5 (${displayReviews} reviews)</span>
        </div>
        ${categorySnippets}
        <div class="school-stats">
            <div class="stat">
                <span class="stat-number">${school.sports.length}</span>
                <span class="stat-label">Sports</span>
            </div>
            <div class="stat">
                <span class="stat-number">${school.nilOpportunities}</span>
                <span class="stat-label">NIL</span>
            </div>
            <div class="stat">
                <span class="stat-number">${school.ratings.facilities.toFixed(1)}</span>
                <span class="stat-label">Facilities</span>
            </div>
        </div>
        <div class="card-actions">
            <button class="analytics-btn" onclick="openProgramAnalytics('${school.name}', '${sport || 'overall'}')">View Analytics</button>
        </div>
    `;
    
    return card;
}

// Create simple school card (just title and View Analytics)
function createSimpleSchoolCard(school) {
    const card = document.createElement('div');
    card.className = 'school-card simple-card';
    
    const initials = school.name.split(' ').map(word => word[0]).join('').substring(0, 2);
    
    card.innerHTML = `
        <div class="school-header">
            <div class="school-logo">
                <div class="logo-placeholder">${initials}</div>
            </div>
            <div class="school-info">
                <h3>${school.name}</h3>
                <p class="school-location">${school.location} • ${school.division} • ${school.conference}</p>
            </div>
        </div>
        <div class="card-actions">
            <button class="analytics-btn" onclick="openProgramAnalytics('${school.name}', 'general')">
                <i class="fas fa-chart-line"></i>
                View Analytics
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Open school profile modal
function openSchoolModal(school) {
    const schoolProfile = document.getElementById('schoolProfile');
    const reviews = sampleReviews.filter(review => review.schoolId === school.id);
    
    schoolProfile.innerHTML = `
        <div class="school-profile-header">
            <h2>${school.name}</h2>
            <p>${school.location} • ${school.division} • ${school.conference}</p>
        </div>
        
        <div class="profile-ratings">
            <div class="rating-breakdown">
                <h3>Ratings Breakdown</h3>
                <div class="rating-item">
                    <span>Overall Program</span>
                    <div class="stars">${generateStars(school.overallRating)}</div>
                    <span>${school.overallRating}/5</span>
                </div>
                <div class="rating-item">
                    <span>Coaching Staff</span>
                    <div class="stars">${generateStars(school.coachingRating)}</div>
                    <span>${school.coachingRating}/5</span>
                </div>
                <div class="rating-item">
                    <span>Facilities</span>
                    <div class="stars">${generateStars(school.facilitiesRating)}</div>
                    <span>${school.facilitiesRating}/5</span>
                </div>
                <div class="rating-item">
                    <span>Academic Support</span>
                    <div class="stars">${generateStars(school.academicRating)}</div>
                    <span>${school.academicRating}/5</span>
                </div>
            </div>
        </div>
        
        <div class="profile-info">
            <div class="info-section">
                <h3>Sports Offered</h3>
                <div class="sports-tags">
                    ${school.sports.map(sport => `<span class="tag">${sport}</span>`).join('')}
                </div>
            </div>
            
            <div class="info-section">
                <h3>Financial Information</h3>
                <p><strong>NIL Opportunities:</strong> ${school.nilOpportunities}</p>
                <p><strong>Scholarship Availability:</strong> ${school.scholarshipAvailability}</p>
            </div>
        </div>
        
        <div class="profile-reviews">
            <h3>Recent Reviews (${reviews.length})</h3>
            ${reviews.length > 0 ? reviews.map(review => createReviewHTML(review)).join('') : '<p>No reviews yet. Be the first to review this program!</p>'}
        </div>
        
        <button class="submit-btn" onclick="openReviewModal('${school.name}')">Write a Review</button>
    `;
    
    schoolModal.style.display = 'block';
}

// Create review HTML
function createReviewHTML(review) {
    const userTypeLabels = {
        'current': 'Current Student-Athlete',
        'former': 'Former Student-Athlete',
        'alumni': 'Alumni'
    };
    
    return `
        <div class="review-card">
            <div class="review-header">
                <div class="review-rating">
                    <div class="stars">${generateStars(review.overallRating)}</div>
                    <span>${review.overallRating}/5</span>
                </div>
                <div class="review-meta">
                    <span>${userTypeLabels[review.userType]} • ${review.sport}</span>
                    <span>${new Date(review.date).toLocaleDateString()}</span>
                </div>
            </div>
            <p class="review-text">${review.reviewText}</p>
            ${review.scholarshipAmount ? `<p class="financial-info"><strong>Scholarship:</strong> ${formatScholarshipAmount(review.scholarshipAmount)}</p>` : ''}
            ${review.nilOpportunities ? `<p class="financial-info"><strong>NIL:</strong> ${review.nilOpportunities}</p>` : ''}
        </div>
    `;
}

// Format scholarship amount for display
function formatScholarshipAmount(amount) {
    const labels = {
        'full': 'Full Scholarship',
        'partial-high': 'Partial (75-99%)',
        'partial-mid': 'Partial (50-74%)',
        'partial-low': 'Partial (25-49%)',
        'minimal': 'Minimal (1-24%)',
        'none': 'No Athletic Scholarship'
    };
    return labels[amount] || amount;
}

// Open review modal
function openReviewModal(schoolName = '') {
    document.getElementById('schoolName').value = schoolName;
    reviewModal.style.display = 'block';
    schoolModal.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            schoolModal.style.display = 'none';
            reviewModal.style.display = 'none';
        };
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === schoolModal) {
            schoolModal.style.display = 'none';
        }
        if (event.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    };
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Dropdown filters
    const sportDropdown = document.getElementById('sportDropdown');
    const conferenceDropdown = document.getElementById('conferenceDropdown');
    const categoryDropdown = document.getElementById('categoryDropdown');
    
    if (sportDropdown) {
        sportDropdown.addEventListener('change', function() {
            applyFilters();
        });
    }
    
    if (conferenceDropdown) {
        conferenceDropdown.addEventListener('change', function() {
            applyFilters();
        });
    }
    
    if (categoryDropdown) {
        categoryDropdown.addEventListener('change', function() {
            applyFilters();
        });
    }
    
    // General analytics link in navigation
    const navAnalytics = document.querySelector('a[href="analytics.html"]');
    if (navAnalytics) {
        navAnalytics.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'analytics.html';
        });
    }
    
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            displaySchools(getFilteredSchools());
            updateProgramsTitle();
        });
    });
    
    // Note: Financial section is now always visible for former athletes only
    
    // Review form submission
    reviewForm.addEventListener('submit', handleReviewSubmission);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Write review button in nav - now redirects to write-review.html
    // Removed conflicting event listener that was preventing navigation
}

// Setup star rating interactions
function setupStarRatings() {
    document.querySelectorAll('.stars').forEach(starContainer => {
        if (starContainer.dataset.rating) {
            const stars = starContainer.querySelectorAll('i');
            stars.forEach((star, index) => {
                star.addEventListener('click', function() {
                    const rating = index + 1;
                    starContainer.dataset.value = rating;
                    
                    // Update visual state
                    stars.forEach((s, i) => {
                        if (i < rating) {
                            s.className = 'fas fa-star active';
                        } else {
                            s.className = 'far fa-star';
                        }
                    });
                });
                
                star.addEventListener('mouseenter', function() {
                    const rating = index + 1;
                    stars.forEach((s, i) => {
                        if (i < rating) {
                            s.className = 'fas fa-star';
                        } else {
                            s.className = 'far fa-star';
                        }
                    });
                });
            });
            
            starContainer.addEventListener('mouseleave', function() {
                const currentRating = parseInt(starContainer.dataset.value) || 0;
                stars.forEach((s, i) => {
                    if (i < currentRating) {
                        s.className = 'fas fa-star active';
                    } else {
                        s.className = 'far fa-star';
                    }
                });
            });
        }
    });
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        schoolsGrid.innerHTML = '<div class="no-results"><p>Search for a program or school (e.g., "Stanford", "University of Alabama", "Duke")</p></div>';
        updateProgramsTitle('', '');
        // Hide sport context
        const sportContext = document.getElementById('sportContext');
        if (sportContext) {
            sportContext.style.display = 'none';
        }
        return;
    }
    
    // Filter schools based on search term (school name or location)
    let filteredSchools = sampleSchools.filter(school => 
        school.name.toLowerCase().includes(searchTerm) ||
        school.location.toLowerCase().includes(searchTerm)
    );
    
    if (filteredSchools.length > 0) {
        displaySimpleSchools(filteredSchools);
        updateProgramsTitle('', '');
        
        // Hide sport context
        const sportContext = document.getElementById('sportContext');
        if (sportContext) {
            sportContext.style.display = 'none';
        }
    } else {
        schoolsGrid.innerHTML = `<div class="no-results"><p>No programs found for "${searchTerm}". Try searching for school names like "Stanford", "Duke", or "University of Alabama".</p></div>`;
        updateProgramsTitle('', '');
        
        // Hide sport context
        const sportContext = document.getElementById('sportContext');
        if (sportContext) {
            sportContext.style.display = 'none';
        }
    }
}

// Filter schools by sport
function filterSchoolsBySport(sport) {
    const filteredSchools = sampleSchools.filter(school => 
        school.sports.some(s => s.toLowerCase().includes(sport.toLowerCase()))
    );
    
    displaySchools(filteredSchools, sport);
    
    // Update title and context
    const programsTitle = document.getElementById('programsTitle');
    const sportContext = document.getElementById('sportContext');
    const selectedSport = document.getElementById('selectedSport');
    
    if (sport) {
        programsTitle.textContent = `Top Rated ${sport.charAt(0).toUpperCase() + sport.slice(1)} Programs`;
        selectedSport.textContent = sport.charAt(0).toUpperCase() + sport.slice(1);
        sportContext.style.display = 'block';
    } else {
        programsTitle.textContent = 'Top Rated Programs';
        sportContext.style.display = 'none';
    }
}

// Apply combined filters
function applyFilters() {
    const sportFilter = document.getElementById('sportDropdown')?.value || '';
    const conferenceFilter = document.getElementById('conferenceDropdown')?.value || '';
    const categoryFilter = document.getElementById('categoryDropdown')?.value || '';
    
    // Only show results if a sport is selected
    if (!sportFilter) {
        schoolsGrid.innerHTML = '<div class="no-results"><p>Please select a sport from the dropdown above to see programs.</p></div>';
        // Hide sport context
        const sportContext = document.getElementById('sportContext');
        if (sportContext) {
            sportContext.style.display = 'none';
        }
        return;
    }
    
    let filteredSchools = sampleSchools;
    
    // Filter by sport (required)
    filteredSchools = filteredSchools.filter(school => 
        school.sports.some(s => s.toLowerCase().includes(sportFilter.toLowerCase()))
    );
    
    // Filter by conference
    if (conferenceFilter) {
        filteredSchools = filteredSchools.filter(school => 
            school.conference === conferenceFilter
        );
    }
    
    // Sort by category if specified
    if (categoryFilter) {
        filteredSchools.sort((a, b) => {
            let aValue, bValue;
            
            switch(categoryFilter) {
                case 'overall':
                    aValue = a.overallRating;
                    bValue = b.overallRating;
                    break;
                case 'culture':
                    aValue = a.ratings.culture;
                    bValue = b.ratings.culture;
                    break;
                case 'burnout':
                    aValue = a.ratings.burnout;
                    bValue = b.ratings.burnout;
                    break;
                case 'academic':
                    aValue = a.ratings.academic;
                    bValue = b.ratings.academic;
                    break;
                case 'facilities':
                    aValue = a.ratings.facilities;
                    bValue = b.ratings.facilities;
                    break;
                default:
                    return 0;
            }
            
            return bValue - aValue; // Sort descending (highest first)
        });
    }
    
    if (filteredSchools.length > 0) {
        displaySchools(filteredSchools, sportFilter);
        updateProgramsTitle(sportFilter, categoryFilter);
        
        // Show sport context
        const sportContext = document.getElementById('sportContext');
        const selectedSport = document.getElementById('selectedSport');
        if (sportContext && selectedSport) {
            selectedSport.textContent = sportFilter.charAt(0).toUpperCase() + sportFilter.slice(1);
            sportContext.style.display = 'block';
        }
    } else {
        schoolsGrid.innerHTML = `<div class="no-results"><p>No programs found for the selected filters. Try adjusting your criteria.</p></div>`;
    }
}

// Update programs title based on filters
function updateProgramsTitle(sportFilter, categoryFilter) {
    const programsTitle = document.getElementById('programsTitle');
    let title = 'Top Rated Programs';
    
    if (categoryFilter) {
        const categoryNames = {
            'overall': 'Overall Rating',
            'culture': 'Team Culture',
            'burnout': 'Work-Life Balance',
            'academic': 'Academic Support',
            'facilities': 'Facilities'
        };
        title = `Top Rated Programs by ${categoryNames[categoryFilter]}`;
    }
    
    if (sportFilter) {
        const sportName = sportFilter.charAt(0).toUpperCase() + sportFilter.slice(1);
        title = categoryFilter ? 
            `Top Rated ${sportName} Programs by ${categoryNames[categoryFilter]}` :
            `Top Rated ${sportName} Programs`;
    }
    
    programsTitle.textContent = title;
}

// Open program-specific analytics
function openProgramAnalytics(schoolName, sport) {
    // Redirect to the new Glassdoor-inspired analytics page
    window.location.href = `program-analytics-new.html?school=${encodeURIComponent(schoolName)}&sport=${encodeURIComponent(sport)}`;
}

// Get currently filtered schools
function getFilteredSchools() {
    if (currentSport) {
        return sampleSchools.filter(school => 
            school.sports.some(s => s.toLowerCase().includes(currentSport.toLowerCase()))
        );
    }
    return sampleSchools;
}

// Update programs title based on current filters
function updateProgramsTitle() {
    const categoryLabels = {
        'overall': 'Top Rated Programs',
        'culture': 'Best Team Culture',
        'academic': 'Best Academic Support', 
        'burnout': 'Best Work-Life Balance',
        'financial': 'Best Financial Support',
        'facilities': 'Best Facilities'
    };
    
    programsTitle.textContent = categoryLabels[currentCategory] || 'Top Rated Programs';
}

// Setup slider functionality
function setupSlider() {
    if (workLifeSlider) {
        workLifeSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            athleticsPercent.textContent = value + '%';
            academicsPercent.textContent = (100 - value) + '%';
        });
    }
}

// Handle review form submission
function handleReviewSubmission(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        schoolName: document.getElementById('schoolName').value,
        sport: document.getElementById('sport').value,
        userType: document.getElementById('userType').value,
        overallRating: document.querySelector('[data-rating="overall"]').dataset.value,
        coachingRating: document.querySelector('[data-rating="coaching"]').dataset.value,
        facilitiesRating: document.querySelector('[data-rating="facilities"]').dataset.value,
        academicRating: document.querySelector('[data-rating="academic"]').dataset.value,
        reviewText: document.getElementById('reviewText').value,
        scholarshipAmount: document.getElementById('scholarshipAmount').value,
        nilOpportunities: document.getElementById('nilOpportunities').value,
        financialAid: document.getElementById('financialAid').value
    };
    
    // Validate required fields
    if (!formData.schoolName || !formData.sport || !formData.userType || !formData.overallRating) {
        alert('Please fill in all required fields and provide ratings.');
        return;
    }
    
    // In a real application, this would be sent to a server
    console.log('Review submitted:', formData);
    
    // Show success message
    alert('Thank you for your review! It will be published after moderation.');
    
    // Reset form and close modal
    reviewForm.reset();
    document.querySelectorAll('.stars[data-rating]').forEach(starContainer => {
        starContainer.dataset.value = '';
        starContainer.querySelectorAll('i').forEach(star => {
            star.className = 'far fa-star';
        });
    });
    reviewModal.style.display = 'none';
    financialSection.style.display = 'none';
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
