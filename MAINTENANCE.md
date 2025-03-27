# BAISH Website Maintenance Guide

This document provides an overview of the simplified and more maintainable structure of the BAISH website.

## Project Structure

The website has been refactored for better maintainability:

```
baish-website/
├── css/
│   └── main.css       # Consolidated CSS file
├── js/
│   ├── translations/  # Translations organized by language
│   │   ├── en.js      # English translations
│   │   └── es.js      # Spanish translations
│   ├── translations.js # Combines language files
│   └── main.js        # Consolidated JavaScript file
├── img/               # Images and graphics
└── *.html             # HTML pages
```

## Key Improvements

1. **Consolidated CSS**:
   - All styles are now in a single `main.css` file
   - Organized with clear section comments
   - Uses CSS variables for consistent theming

2. **Simplified JavaScript**:
   - Functionality consolidated in `main.js`
   - Code is modular with clear function responsibilities
   - Proper comments and organization

3. **Improved Translation System**:
   - Translations split by language for better maintenance
   - Each language in a separate file (`en.js`, `es.js`)
   - Combined in `translations.js` for the website to use

## How to Maintain

### Adding/Modifying Styles

Add or modify styles in the `main.css` file, keeping to the established organization:

1. Variables under the `:root` selector
2. Follow the established sections:
   - Reset & Base Styles
   - Typography
   - Layout & Containers
   - Components
   - Header & Navigation
   - etc.

### JavaScript Changes

Modify the `main.js` file, maintaining its modular structure:

1. Core functionality is broken down into initialization functions
2. Each feature has its own set of functions
3. Keep the maintainable pattern of function documentation

### Translation Updates

To add or modify translations:

1. Find the appropriate language file in `js/translations/`
2. Add or modify the translation entries
3. Maintain the same object structure across language files

For adding a new language:

1. Create a new file `js/translations/[language-code].js`
2. Copy the structure from an existing language file
3. Update the `translations.js` file to include the new language

### Adding New Pages

When creating new pages:

1. Copy the structure from an existing page
2. Include the same CSS and JS references
3. Make sure to include all required script tags:
   ```html
   <script src="js/translations/en.js"></script>
   <script src="js/translations/es.js"></script>
   <script src="js/translations.js"></script>
   <script src="js/main.js"></script>
   ```

## Performance Considerations

1. The consolidated files improve load performance by reducing HTTP requests
2. All animations use the IntersectionObserver API for better performance
3. JavaScript is modular and includes proper guards to prevent errors

## Browser Compatibility

The website uses modern CSS and JavaScript features that are supported in all current browsers, including:

- CSS variables
- Flexbox and Grid layouts
- ES6+ JavaScript features
- IntersectionObserver API

For older browsers, consider adding appropriate polyfills if needed.
