# BAAISH Website

The official website for BAAISH (Buenos Aires AI Safety Hub), a student-led organization focused on AI safety research and education.

## Language Toggle System

The website includes a bilingual support system that allows visitors to switch between English and Spanish. This implementation works on a static website hosted on GitHub Pages without requiring server-side processing.

### Features

- Toggle between English and Spanish languages
- User language preference persists across sessions using localStorage
- Full translation support across all pages
- Mobile-responsive design

### How It Works

1. **Language Selection**: Users can click the language toggle (EN/ES) in the site header to switch languages.
2. **Translation System**: All text content is stored in a central translations.js file as key-value pairs.
3. **Data Attributes**: HTML elements use `data-i18n` attributes to specify which translation key to use.
4. **Persistence**: The selected language is saved in localStorage and retrieved on subsequent visits.

### Technical Implementation

#### Files Structure

- **js/translations.js**: Contains all translatable text in both English and Spanish
- **js/language-toggle.js**: Core functionality for switching languages and applying translations
- **css/language-toggle.css**: Styling for the language toggle component

#### Adding New Translations

To add new translatable text:

1. Add the text to `js/translations.js` in both English and Spanish
2. Add the appropriate `data-i18n` attribute to the HTML element:

```html
<h1 data-i18n="section.title">Default text</h1>
```

#### Special Elements

For form elements or elements with attributes that need translation:

```html
<input
  type="text"
  data-i18n="form.email"
  data-i18n-attr="placeholder"
  placeholder="Default placeholder"
>
```

### Maintenance

When adding new content to the website:

1. Add new translation keys to `js/translations.js`
2. Add `data-i18n` attributes to new HTML elements
3. Test both languages to ensure all content is translated

## Development

To update all pages with language toggle functionality, run:

```
node js/update-all-pages.js
```

This will add the necessary language toggle buttons, CSS links, and JavaScript includes to all HTML pages.
