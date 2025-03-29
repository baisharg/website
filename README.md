# BAISH - Buenos Aires AI Safety Hub

## About

BAISH (Buenos Aires AI Safety Hub) is a website for an AI safety community based in Buenos Aires, Argentina. The site serves as a platform for sharing information about the hub's activities, research, resources, and providing ways for interested individuals to get involved.

The website is built using HTML, CSS, and JavaScript, with a responsive design that works across desktop and mobile devices. It incorporates modern design principles including glassmorphism, subtle animations, and a dark theme with accent colors.

## Site Structure

```
aisafetysite/
├── css/
│   ├── baish-enhanced-theme.css    # Enhanced theming and components
│   ├── style.css                   # Core styling
│   ├── styles.css                  # Additional styles
│   └── language-toggle.css         # Styling for language toggle feature
├── js/
│   ├── translations.js             # Multilingual content (ES/EN)
│   ├── language-toggle.js          # Language switching functionality
│   ├── animation.js                # Page animations and effects
│   ├── apply-enhanced-theme.js     # Theme application
│   ├── mobile-nav.js               # Mobile navigation menu
│   └── update-all-pages.js         # Utility for site-wide updates
├── img/                            # Image assets
├── images/                         # Additional image assets
├── mech-interp/                    # Mechanistic Interpretability course materials
├── handbook/                       # Handbook resources
├── index.html                      # Homepage
├── about.html                      # About page
├── activities.html                 # Activities page
├── research.html                   # Research page
├── resources.html                  # Resources page
├── contact.html                    # Contact page
├── mech-interp-course.html         # Mechanistic Interpretability course page
├── privacy-policy.html             # Privacy policy
└── CNAME                           # Custom domain configuration
```

## Key Features

### Multilingual Support
- Toggle between Spanish (ES) and English (EN)
- Content dynamically updates based on selected language
- Translation managed via the `translations.js` file

### Responsive Design
- Mobile-friendly layout with dedicated navigation for small screens
- Adapts to various screen sizes and device types
- Optimized media elements that scale appropriately

### Modern UI Components
- Glassmorphic cards with blur effects and subtle borders
- Gradient buttons with hover animations
- Reveal animations on scroll
- Staggered loading effects for grid items

### Content Sections
- **About**: Information about the hub, mission, team members
- **Activities**: Events, workshops, courses, and community activities
- **Research**: Research projects, publications, and ongoing initiatives
- **Resources**: Learning materials sorted by difficulty level (beginner, intermediate, advanced)
- **Contact**: Contact information, inquiry form, and ways to get involved
- **Mech-Interp Course**: Dedicated page for the Mechanistic Interpretability course

## Color Palette

The site uses a cohesive dark theme with accent colors:

### Base Colors
- `--bg-dark: #161624;` - Main background color
- `--bg-surface: rgba(30, 30, 48, 0.8);` - Card and surface backgrounds (with transparency)
- `--bg-surface-solid: #1e1e30;` - Solid version of surface color
- `--primary: #9275e5;` - Primary purple color
- `--secondary: #5a9fff;` - Secondary blue color
- `--accent: #dd85f7;` - Accent pink color
- `--tertiary: #56ccf2;` - Tertiary light blue color

### Text Colors
- `--text-primary: #f0f2f5;` - Primary text (white with subtle blue tint)
- `--text-secondary: #c0c5d0;` - Secondary text (lighter gray)
- `--text-muted: #8792a8;` - Muted text (darker gray)

### State Colors
- `--success: #65ddb7;` - Success/confirmation color (teal)
- `--warning: #ffbe4d;` - Warning color (amber)
- `--error: #ff6e8d;` - Error color (pink-red)

### Gradients
- Primary Gradient: `linear-gradient(135deg, #9275e5 0%, #a48eec 100%)`
- Alternate Gradient: `linear-gradient(135deg, #5e72eb 0%, #ff9190 100%)`
- Accent Gradient: `linear-gradient(135deg, #56ccf2 0%, #2d9cdb 100%)`

### Typography
- Headings: "Oxanium", sans-serif
- Body text: "Space Grotesk", sans-serif
- Fallback: system-ui, -apple-system, sans-serif

## Development Guidelines

### Adding New Pages
1. Copy the structure from an existing page
2. Update the metadata, title, and content
3. Ensure the navigation links are correctly set
4. Add translation keys in `translations.js` for multilingual support

### Modifying Styles
- Core styles are in `style.css`
- Enhanced theme components are in `baish-enhanced-theme.css`
- Keep color modifications within the CSS variables in `:root`

### Adding Content
- For new sections that need translations, add entries to `translations.js`
- Follow the existing pattern for HTML structure and class naming
- Use the appropriate components (cards, buttons, etc.) from the design system

### Animations
- Page reveal animations are handled in `animation.js`
- Use the `reveal` class for elements that should animate on scroll
- Use the `stagger-container` and `stagger-item` classes for staggered animations

## Browser Compatibility
The site is optimized for modern browsers including:
- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

Some effects like backdrop-filter may not work in older browsers.

## Credits
- Design and Development: BAISH team
- Icons: Feather icons
- Fonts: Google Fonts (Oxanium, Space Grotesk, Playfair Display)
