/**
 * Apply enhanced theme to all HTML pages
 * This script modifies all HTML files to include the enhanced theme CSS and JS
 */

const fs = require('fs')
const path = require('path')

// Configuration
const rootDir = '.'
const cssLinkToAdd =
  '<link rel="stylesheet" href="css/baish-enhanced-theme.css" />'
const jsScriptToAdd = '<script src="js/animation.js" defer></script>'

// Function to process an HTML file
function processHtmlFile (filePath) {
  console.log(`Processing ${filePath}...`)

  // Read the file
  let html = fs.readFileSync(filePath, 'utf-8')

  // Add CSS link if not already present
  if (!html.includes('baish-enhanced-theme.css')) {
    // Insert after the last CSS link
    const cssLinkPosition = html.lastIndexOf('</link>')
    if (cssLinkPosition !== -1) {
      html =
        html.substring(0, cssLinkPosition + 7) +
        '\n\t\t' +
        cssLinkToAdd +
        html.substring(cssLinkPosition + 7)
    } else {
      // If no </link>, try to insert before </head>
      const headEndPosition = html.indexOf('</head>')
      if (headEndPosition !== -1) {
        html =
          html.substring(0, headEndPosition) +
          '\n\t\t' +
          cssLinkToAdd +
          html.substring(headEndPosition)
      }
    }
  }

  // Add JS script if not already present
  if (!html.includes('animation.js')) {
    // Insert before </body>
    const bodyEndPosition = html.lastIndexOf('</body>')
    if (bodyEndPosition !== -1) {
      html =
        html.substring(0, bodyEndPosition) +
        '\n\t\t' +
        jsScriptToAdd +
        html.substring(bodyEndPosition)
    }
  }

  // Add animation classes to key elements

  // Hero sections
  html = html.replace(
    /<section class="hero">\s*<div class="container">\s*<div class="hero-content">/g,
    '<section class="hero">\n\t\t\t<div class="container">\n\t\t\t\t<div class="hero-content reveal">'
  )

  // Page headers
  html = html.replace(
    /<section class="page-header">\s*<div class="container">/g,
    '<section class="page-header">\n\t\t\t<div class="container reveal">'
  )

  // Section headers (h2 elements)
  html = html.replace(
    /(<div class="container">\s*<h2.*?>)/g,
    '$1'.replace('<h2', '<h2 class="reveal"')
  )

  // Activity cards sections
  html = html.replace(
    /<div class="(.*?-grid)">/g,
    '<div class="$1 stagger-container">'
  )

  // Card elements
  html = html.replace(
    /<div class="(.*?-card)"/g,
    '<div class="$1 stagger-item"'
  )

  // Footer content
  html = html.replace(
    /<div class="footer-content">/g,
    '<div class="footer-content reveal">'
  )

  // Write the modified HTML back to the file
  fs.writeFileSync(filePath, html, 'utf-8')
  console.log(`Enhanced theme applied to ${filePath}`)
}

// Find all HTML files in the root directory
function findHtmlFiles (directory) {
  const files = fs.readdirSync(directory)

  files.forEach(file => {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    if (
      stats.isDirectory() &&
      !filePath.includes('node_modules') &&
      !filePath.includes('.git')
    ) {
      // Recursively search directories
      findHtmlFiles(filePath)
    } else if (stats.isFile() && file.endsWith('.html')) {
      // Process HTML files
      processHtmlFile(filePath)
    }
  })
}

// Start processing files
console.log('Applying enhanced theme to all HTML files...')
findHtmlFiles(rootDir)
console.log('Enhanced theme applied successfully!')
