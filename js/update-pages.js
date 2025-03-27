/**
 * BAISH Website - HTML Page Updater
 *
 * This script updates all HTML files to use the consolidated CSS and JS files.
 * Run with: node js/update-pages.js
 */

const fs = require('fs')
const path = require('path')

// Get all HTML files in the root directory
const rootDir = path.resolve(__dirname, '..')
const htmlFiles = fs.readdirSync(rootDir).filter(file => file.endsWith('.html'))

// CSS patterns to replace
const oldCssPattern =
  /<link rel="stylesheet" href="css\/style\.css"[^>]*>\s*<link rel="stylesheet" href="css\/language-toggle\.css"[^>]*>\s*(<link rel="stylesheet" href="css\/baish-enhanced-theme\.css"[^>]*>)?/g
const newCssReplacement = '<link rel="stylesheet" href="css/main.css">'

// JS patterns to replace
const oldJsPattern =
  /<script src="js\/translations\.js"><\/script>\s*<script src="js\/language-toggle\.js"><\/script>\s*<script src="js\/mobile-nav\.js"><\/script>\s*(<script src="js\/animation\.js"[^>]*><\/script>)?/g
const newJsReplacement = `<script src="js/translations/en.js"></script>
		<script src="js/translations/es.js"></script>
		<script src="js/translations.js"></script>
		<script src="js/main.js"></script>`

// Process each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file)
  console.log(`Processing ${file}...`)

  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8')

  // Replace CSS references
  content = content.replace(oldCssPattern, newCssReplacement)

  // Replace JS references
  content = content.replace(oldJsPattern, newJsReplacement)

  // If Google Fonts are loaded directly, remove them (they're now in the CSS)
  content = content.replace(
    /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"[^>]*>\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*<link href="https:\/\/fonts\.googleapis\.com\/css[^>]*>/g,
    ''
  )

  // Save the updated file
  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`Updated ${file}`)
})

console.log(
  'All HTML files have been updated to use the consolidated CSS and JS files.'
)
