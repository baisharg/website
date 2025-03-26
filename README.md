# BAISH Website

The official website for BAISH (Buenos Aires AI Safety Hub), a student-led organization focused on AI safety research and education.

## Project Overview

This is a static website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages. The site features a responsive design with a dark theme, bilingual support (English and Spanish), and a modular component structure.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for different screen sizes
- **Bilingual Support**: Toggle between English and Spanish with persistent language preference
- **Dark Theme**: Modern dark aesthetic with purple and blue accent colors
- **Component-Based Structure**: Modular components for easy maintenance and updates
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support

## Technical Implementation

### Folder Structure

- **`/`**: HTML pages (index.html, about.html, activities.html, etc.)
- **`/css/`**: Style sheets (style.css, styles.css, language-toggle.css)
- **`/js/`**: JavaScript files (translations.js, language-toggle.js, mobile-nav.js)
- **`/img/` & `/images/`**: Image assets and graphics

### Language Toggle System

The website includes a bilingual support system that allows visitors to switch between English and Spanish, implemented without server-side processing.

#### How It Works

1. **Language Selection**: Users click the language toggle (EN/ES) in the site header
2. **Translation System**: All text content is stored in `translations.js` as key-value pairs
3. **Data Attributes**: HTML elements use `data-i18n` attributes to specify which translation key to use
4. **Persistence**: Selected language is saved in localStorage and retrieved on subsequent visits

#### Adding New Translations

1. Add the text to `js/translations.js` in both English and Spanish
2. Add the appropriate `data-i18n` attribute to the HTML element:

```html
<h1 data-i18n="section.title">Default text</h1>
```

For form elements or elements with attributes that need translation:

```html
<input
  type="text"
  data-i18n="form.email"
  data-i18n-attr="placeholder"
  placeholder="Default placeholder"
>
```

## Design System

### Color Scheme

The website uses a dark theme with the following color palette:

#### Base Colors
- **Background (Dark)**: `#161624` - Main page background
- **Surface Background**: `#1e1e30` - Cards, sections, and component backgrounds
- **Primary**: `#9275e5` - Purple, main accent color for buttons and highlights
  - Light: `#a68eee`
  - Dark: `#7c63c7`
- **Secondary**: `#4a93fb` - Blue, secondary accent for links and highlights
  - Light: `#6ba6ff`
  - Dark: `#3e7dd3`
- **Accent**: `#dd85f7` - Pink/purple for special highlights and accents

#### Text Colors
- **Primary Text**: `#f0f2f5` - Main text color
- **Secondary Text**: `#c0c5d0` - Subtitles and less emphasized text
- **Muted Text**: `#8792a8` - Subtle text elements like captions and metadata

#### UI Elements
- **Border**: `#2a2a40` - Border color for cards and sections
- **Divider**: `#232336` - Subtle separators
- **Hover State**: `#2a2a45` - Background for hover states
- **Active State**: `#312d56` - Background for active/selected states

#### State Colors
- **Success**: `#65ddb7` - Green for success messages
- **Warning**: `#ffbe4d` - Yellow for warning messages
- **Error**: `#ff6e8d` - Red for error messages
- **Info**: `#4a93fb` - Blue for informational messages

### Typography

- **Primary Font**: "Inter", sans-serif - Used for most text
- **Secondary Font**: "Source Serif Pro", serif - Used for quotes and special sections
- **Base Font Size**: 16px
- **Line Height**: 1.5

### Spacing System

A consistent spacing scale is used throughout the site:
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 2rem (32px)
- **XL**: 3rem (48px)
- **XXL**: 5rem (80px)

### Component Styling

#### Buttons
Three primary button styles:
- **Primary**: Solid purple background with white text
- **Secondary**: Outlined button with accent color
- **Tertiary**: Text-only button with hover effect

#### Cards
Cards are used for various content types:
- **Project Cards**: Display research projects
- **Team Member Cards**: Display team profiles
- **Resource Cards**: Display educational resources
- **Event Cards**: Display upcoming events

#### Forms
Form elements are styled consistently:
- **Inputs**: Dark background with light text and accent focus states
- **Checkboxes/Radios**: Custom styled for dark theme
- **Selects**: Custom dropdown styling

## Enhanced Theme Implementation

The website features an enhanced theme with modern styling techniques and interactions:

### New Typography System

- **Heading Font**: Oxanium - A modern, technical typeface for headings, titles, and UI elements
- **Body Font**: Manrope - A clean, readable sans-serif for body text and general content

### Visual Enhancements

#### Glassmorphism

Components use a glassmorphism effect with:
- Translucent backgrounds with `rgba(30, 30, 48, 0.8)`
- Subtle background blur with `backdrop-filter: blur(8px)`
- Defined border-radius of 12px
- Refined shadow system

#### Gradients & Accents

- **Primary Gradient**: `linear-gradient(135deg, #9275e5 0%, #6050aa 100%)`
- **Alternate Gradient**: `linear-gradient(135deg, #9275e5 0%, #4a93fb 100%)`
- Applied to buttons, section accents, and interactive elements

### Animations & Interactions

The enhanced theme includes a comprehensive animation system:

- **Reveal Animations**: Elements fade and slide in as they enter the viewport
- **Staggered Animations**: Grid items appear sequentially with delays
- **Hover Effects**: Subtle elevation changes, brightness adjustments, and shadow enhancements
- **Implemented with**: Intersection Observer API for performance

### Using the Enhanced Theme

All HTML pages have been updated to use the enhanced theme CSS and JS files:

```html
<link rel="stylesheet" href="css/baish-enhanced-theme.css">
<script src="js/animation.js" defer></script>
```

To apply animations to new elements:
- Use `class="reveal"` for fade-in animations
- Use `class="stagger-container"` for parent elements with multiple child items
- Use `class="stagger-item"` for child elements that should animate sequentially

### Applying to New Pages

For new pages, include the enhanced theme files and use the animation classes. Alternatively, you can run the helper script:

```
node js/apply-enhanced-theme.js
```

This will automatically add the required files and animation classes to all HTML pages.

## Development and Maintenance

### Adding New Pages

1. Create a new HTML file using an existing page as a template
2. Add language toggle implementation
3. Link the page in the navigation menu
4. Add page-specific translations to `translations.js`

### Updating Content

1. Find the appropriate HTML file for the section you want to update
2. Update the content, making sure to maintain the `data-i18n` attributes
3. Add any new translation keys to `translations.js`

### Updating Styles

The styling system uses CSS variables defined in `:root` in `style.css`. To modify the theme:

1. Update the CSS variables in the `:root` selector
2. Test changes across different screen sizes
3. Verify accessibility with contrast checkers
