# AthleticInsider - College Athletics Review Platform

A Glassdoor-style website for college athletics that allows current and former student-athletes, recruits, parents, and alumni to share reviews and insights about college sports programs.

## Features

### Core Functionality
- **School/Program Reviews**: Comprehensive reviews of college athletic programs
- **Multi-dimensional Ratings**: Rate coaching staff, facilities, academic support, and overall program
- **User Types**: Support for current athletes, former athletes, alumni, recruits, and parents
- **Financial Transparency**: NIL deal information, scholarship details, and financial aid insights
- **Search & Filter**: Find programs by sport, location, division, and ratings

### Key Pages
- **Homepage**: Hero section with search functionality and featured schools
- **School Profiles**: Detailed program information with ratings breakdown and reviews
- **Review System**: Comprehensive review forms with star ratings and financial information
- **Browse Categories**: Filter by sport, location, division, and financial opportunities

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design inspired by Glassdoor
- **Interactive Elements**: Star ratings, modal windows, and smooth scrolling
- **Sample Data**: Pre-populated with realistic college athletics data

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome 6.0
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser, or
3. Serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if available)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
4. Navigate to `http://localhost:8000` in your browser

## File Structure

```
college-athletics-reviews/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and interactivity
└── README.md           # Project documentation
```

## Features in Detail

### Review System
- **Multi-category Ratings**: Overall program, coaching staff, facilities, academic support
- **User Type Verification**: Different review forms for current athletes, alumni, etc.
- **Financial Information**: Optional NIL and scholarship details for alumni/former athletes
- **Anonymous Reviews**: Protect user privacy while providing valuable insights

### School Profiles
- **Comprehensive Information**: Location, division, conference, sports offered
- **Rating Breakdown**: Visual representation of different rating categories
- **Review Display**: Formatted reviews with user type and date information
- **Financial Insights**: NIL opportunities and scholarship availability

### Search & Discovery
- **Smart Search**: Search by school name, location, or sport
- **Filter Tags**: Quick filtering by popular sports
- **Featured Schools**: Highlight top-rated programs
- **Browse Categories**: Organized discovery by sport, location, division, and financial opportunities

## Sample Data

The application includes sample data for 6 universities with realistic:
- School information (name, location, division, conference)
- Rating data (overall, coaching, facilities, academic support)
- Sports programs and NIL information
- Sample reviews from different user types

## Future Enhancements

### Backend Integration
- User authentication and profiles
- Database storage for schools and reviews
- Review moderation system
- API endpoints for data management

### Advanced Features
- Coach-specific reviews and ratings
- Recruitment timeline tracking
- Photo uploads for facilities
- Comparison tools between programs
- Mobile app development

### Analytics & Insights
- Trending programs and sports
- Regional analysis of opportunities
- NIL deal tracking and trends
- Scholarship availability reports

## Contributing

This is a prototype/MVP version. Future development could include:
- Backend API development
- User authentication system
- Database integration
- Advanced search and filtering
- Mobile app companion
- Admin/moderation tools

## License

This project is for demonstration purposes. All school names and data are used for educational/prototype purposes only.
