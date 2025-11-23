$ErrorActionPreference = "Stop"

# Create folders
$folders = @(
  "assets/css/core","assets/css/theme","assets/css/pages","assets/css/components","assets/css/_legacy",
  "assets/js/core","assets/js/pages","assets/js/_legacy",
  "assets/img","docs","archives","data"
)
$folders | ForEach-Object { if (-not(Test-Path $_)) { New-Item -ItemType Directory -Path $_ | Out-Null } }

function Move-IfExists($src,$dst){
  if (Test-Path $src) {
    New-Item -ItemType Directory -Path (Split-Path $dst) -Force | Out-Null
    Move-Item -Force $src $dst
    Write-Host "Moved $src -> $dst"
  }
}

# CSS
Move-IfExists "global.css" "assets/css/global.css"
Move-IfExists "design-system-enhanced.css" "assets/css/core/design-system-enhanced.css"
Move-IfExists "global-unify.css" "assets/css/core/global-unify.css"
Move-IfExists "global-foundation.css" "assets/css/core/global-foundation.css"
Move-IfExists "navy-cohesive-design.css" "assets/css/theme/navy-cohesive-design.css"
Move-IfExists "program-pages-fix.css" "assets/css/pages/program-pages-fix.css"
Move-IfExists "homepage-sports-tech.css" "assets/css/pages/homepage-sports-tech.css"
Move-IfExists "homepage.css" "assets/css/pages/homepage.css"
Move-IfExists "homepage-modern.css" "assets/css/pages/homepage-modern.css"
Move-IfExists "enhanced-cards.css" "assets/css/components/enhanced-cards.css"
Move-IfExists "auth.css" "assets/css/pages/auth.css"
Move-IfExists "write-review-clean.scoped.css" "assets/css/pages/write-review-clean.scoped.css"
Move-IfExists "styles.css" "assets/css/_legacy/styles.css"
Move-IfExists "final-navy-override.css" "assets/css/_legacy/final-navy-override.css"
Move-IfExists "force-navy-everywhere.css" "assets/css/_legacy/force-navy-everywhere.css"
Move-IfExists "homepage-redesign.css" "assets/css/_legacy/homepage-redesign.css"

# JS
Move-IfExists "user-manager.js" "assets/js/core/user-manager.js"
Move-IfExists "email-service.js" "assets/js/core/email-service.js"
Move-IfExists "auth.js" "assets/js/pages/auth.js"
Move-IfExists "analytics.js" "assets/js/pages/analytics.js"
Move-IfExists "cost-chart.js" "assets/js/pages/cost-chart.js"
Move-IfExists "program-analytics.js" "assets/js/pages/program-analytics.js"
Move-IfExists "program-analytics-new.js" "assets/js/pages/program-analytics-new.js"
Move-IfExists "program-financials.js" "assets/js/pages/program-financials.js"
Move-IfExists "program-reviews.js" "assets/js/pages/program-reviews.js"
Move-IfExists "programs.js" "assets/js/pages/programs.js"
Move-IfExists "reviews.js" "assets/js/pages/reviews.js"
Move-IfExists "script.js" "assets/js/_legacy/script.js"
Move-IfExists "search-results.js" "assets/js/pages/search-results.js"
Move-IfExists "sport-page.js" "assets/js/pages/sport-page.js"
Move-IfExists "sport-selection.js" "assets/js/pages/sport-selection.js"
Move-IfExists "transfer-data.loader.js" "assets/js/pages/transfer-data.loader.js"

# Docs & archives
Move-IfExists "README.md" "docs/README.md"
Move-IfExists "GITHUB_UPLOAD_GUIDE.md" "docs/GITHUB_UPLOAD_GUIDE.md"
Move-IfExists "trueroute-github.zip" "archives/trueroute-github.zip"
Move-IfExists "trueroute-site.zip" "archives/trueroute-site.zip"

# Rewrite HTML links/scripts in root HTML files
Get-ChildItem -Filter *.html | ForEach-Object {
  (Get-Content $_.FullName) -replace 'href="global\.css"','href="assets/css/global.css"' `
                            -replace 'href="design-system-enhanced\.css"','href="assets/css/core/design-system-enhanced.css"' `
                            -replace 'href="global-unify\.css"','href="assets/css/core/global-unify.css"' `
                            -replace 'href="navy-cohesive-design\.css"','href="assets/css/theme/navy-cohesive-design.css"' `
                            -replace 'href="program-pages-fix\.css"','href="assets/css/pages/program-pages-fix.css"' `
                            -replace 'href="homepage-sports-tech\.css"','href="assets/css/pages/homepage-sports-tech.css"' `
                            -replace 'href="homepage\.css"','href="assets/css/pages/homepage.css"' `
                            -replace 'href="homepage-modern\.css"','href="assets/css/pages/homepage-modern.css"' `
                            -replace 'href="enhanced-cards\.css"','href="assets/css/components/enhanced-cards.css"' `
                            -replace 'href="auth\.css"','href="assets/css/pages/auth.css"' `
                            -replace 'href="write-review-clean\.scoped\.css"','href="assets/css/pages/write-review-clean.scoped.css"' `
                            -replace 'href="styles\.css"','href="assets/css/_legacy/styles.css"' `
                            -replace 'href="final-navy-override\.css"','href="assets/css/_legacy/final-navy-override.css"' `
                            -replace 'href="force-navy-everywhere\.css"','href="assets/css/_legacy/force-navy-everywhere.css"' `
                            -replace 'src="user-manager\.js"','src="assets/js/core/user-manager.js"' `
                            -replace 'src="email-service\.js"','src="assets/js/core/email-service.js"' `
                            -replace 'src="auth\.js"','src="assets/js/pages/auth.js"' `
                            -replace 'src="analytics\.js"','src="assets/js/pages/analytics.js"' `
                            -replace 'src="cost-chart\.js"','src="assets/js/pages/cost-chart.js"' `
                            -replace 'src="program-analytics-new\.js"','src="assets/js/pages/program-analytics-new.js"' `
                            -replace 'src="program-analytics\.js"','src="assets/js/pages/program-analytics.js"' `
                            -replace 'src="program-financials\.js"','src="assets/js/pages/program-financials.js"' `
                            -replace 'src="program-reviews\.js"','src="assets/js/pages/program-reviews.js"' `
                            -replace 'src="programs\.js"','src="assets/js/pages/programs.js"' `
                            -replace 'src="reviews\.js"','src="assets/js/pages/reviews.js"' `
                            -replace 'src="script\.js"','src="assets/js/_legacy/script.js"' `
                            -replace 'src="search-results\.js"','src="assets/js/pages/search-results.js"' `
                            -replace 'src="sport-page\.js"','src="assets/js/pages/sport-page.js"' `
                            -replace 'src="sport-selection\.js"','src="assets/js/pages/sport-selection.js"' `
                            -replace 'src="transfer-data\.loader\.js"','src="assets/js/pages/transfer-data.loader.js"' `
    | Set-Content $_.FullName
}

Write-Host "Done. Open index.html to verify."
