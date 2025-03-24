/**
 * Helper script to update all HTML pages with language toggle functionality
 *
 * This script should be run manually to update all HTML pages with:
 * - Language toggle buttons in the header
 * - CSS and JS file inclusions
 * - data-i18n attributes on required elements
 *
 * How to use:
 * 1. First make sure you have Node.js installed
 * 2. Run this script with: node update-all-pages.js
 */

const fs = require('fs')
const path = require('path')

// List of all pages to update
const pages = [
  'about.html',
  'activities.html',
  'resources.html',
  'contact.html'
]

// Process each page
pages.forEach(page => {
  console.log(`Processing ${page}...`)

  // Read the file
  let content = fs.readFileSync(page, 'utf8')

  // Add CSS link in head
  content = content.replace(
    /<link rel="stylesheet" href="css\/style.css">/,
    '<link rel="stylesheet" href="css/main.css">\n    <link rel="stylesheet" href="css/language-toggle.css">'
  )

  // Add language toggle in header
  content = content.replace(
    /<\/nav>\s+<a href="contact\.html" class="btn btn-primary">Join Us<\/a>/,
    `</nav>
            <div class="language-toggle">
                <button id="lang-en" class="language-toggle-btn active">EN</button>
                <span class="language-toggle-separator">|</span>
                <button id="lang-es" class="language-toggle-btn">ES</button>
            </div>
            <a href="contact.html" class="btn btn-primary" data-i18n="nav.joinUs">Join Us</a>`
  )

  // Update navigation links with data-i18n attributes
  content = content.replace(
    /<li><a href="about\.html"([^>]*)>About<\/a><\/li>/,
    '<li><a href="about.html"$1 data-i18n="nav.about">About</a></li>'
  )

  content = content.replace(
    /<li><a href="activities\.html"([^>]*)>Activities<\/a><\/li>/,
    '<li><a href="activities.html"$1 data-i18n="nav.activities">Activities</a></li>'
  )

  content = content.replace(
    /<li><a href="resources\.html"([^>]*)>Resources<\/a><\/li>/,
    '<li><a href="resources.html"$1 data-i18n="nav.resources">Resources</a></li>'
  )

  content = content.replace(
    /<li><a href="contact\.html"([^>]*)>Contact<\/a><\/li>/,
    '<li><a href="contact.html"$1 data-i18n="nav.contact">Contact</a></li>'
  )

  // Add scripts before closing body tag
  content = content.replace(
    /<\/body>/,
    `    <!-- Scripts -->
    <script src="js/translations.js"></script>
    <script src="js/language-toggle.js"></script>
</body>`
  )

  // Write the updated content back to the file
  fs.writeFileSync(page, content, 'utf8')

  console.log(`✅ Updated ${page}`)
})

console.log('All pages updated!')
console.log(
  'Note: You may need to add specific data-i18n attributes for the content of each page'
)
console.log(
  'Update the translations.js file with translations for each page before deploying'
)
