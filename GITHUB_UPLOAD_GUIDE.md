# TrueRoute GitHub Upload Guide

## Quick Setup Steps:

### 1. Create GitHub Repository
- Go to [GitHub.com](https://github.com) → New repository
- Name: `trueroute-athletics-reviews`
- Description: `College athletics review platform - Glassdoor for student athletes`
- Set to **Public**
- Add README file ✓
- Create repository

### 2. Upload All Files
In your new repository, click "uploading an existing file" and drag these files:

**Core HTML Pages:**
- index.html (homepage)
- programs.html (program listings)
- analytics.html (analytics dashboard)
- program-analytics-new.html (program details with tabs)
- search-results.html (search results)
- reviews.html (reviews page)
- nil-info.html (NIL information)

**Authentication Pages:**
- sign-in.html
- sign-up.html
- verify-email.html
- write-review.html

**Sport & Program Pages:**
- sport.html
- sport-selection.html
- transfer-data.html
- program-financials.html
- program-reviews.html
- program-analytics.html

**CSS Files:**
- styles.css (main stylesheet)
- auth.css (authentication styling)
- homepage-modern.css (modern homepage design)
- homepage-sports-tech.css (sports tech theme)
- global-unify.css (design unification)
- enhanced-cards.css (card components)

**JavaScript Files:**
- script.js (main functionality)
- programs.js (program listings logic)
- analytics.js (analytics dashboard)
- program-analytics-new.js (program details)
- search-results.js (search functionality)
- reviews.js (reviews page)
- auth.js (authentication)
- user-manager.js (user management)
- write-review.js (review submission)
- sport-selection.js (sport selection)
- sport-page.js (sport pages)
- email-service.js (email simulation)

**Configuration Files:**
- .gitignore
- netlify.toml
- README.md

### 3. Clone on Other Computer
```bash
git clone https://github.com/YOUR_USERNAME/trueroute-athletics-reviews.git
cd trueroute-athletics-reviews
python3 -m http.server 50732
```

Then open: http://localhost:50732

### 4. Alternative: Direct Download
- Click "Code" → "Download ZIP" 
- Extract and run `python3 -m http.server 50732`

## Repository URL Format:
`https://github.com/YOUR_USERNAME/trueroute-athletics-reviews`
