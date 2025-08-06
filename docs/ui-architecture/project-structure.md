# Project Structure

```plaintext
/
├── index.html                    # Homepage (Spanish default)
├── about.html                    # About page
├── activities.html               # Activities & programs page
├── resources.html                # Resources & learning paths
├── contact.html                  # Contact form page
├── privacy.html                  # Privacy policy page
├── CNAME                         # GitHub Pages custom domain
├── robots.txt                    # SEO crawler instructions
├── sitemap.xml                   # SEO sitemap
│
├── assets/                       # Static assets
│   ├── css/
│   │   ├── base.css             # Reset, typography, CSS variables
│   │   ├── layout.css           # Grid, flexbox, responsive layouts
│   │   ├── components.css       # Component-specific styles
│   │   ├── theme.css            # Theme variables & dark mode
│   │   ├── animations.css       # Keyframes & transitions
│   │   └── pages/               # Page-specific styles
│   │       ├── home.css
│   │       ├── about.css
│   │       └── ...
│   │
│   ├── js/
│   │   ├── app.js               # Main application entry point
│   │   ├── config.js            # Configuration & constants
│   │   ├── router.js            # Hash-based routing logic
│   │   └── utils/               # Utility functions
│   │       ├── dom.js           # DOM manipulation helpers
│   │       ├── storage.js       # LocalStorage wrapper
│   │       └── events.js        # Event bus/emitter
│   │
│   ├── images/
│   │   ├── team/                # Team member photos
│   │   ├── logos/               # Partner & sponsor logos
│   │   ├── icons/               # UI icons (if not using Feather)
│   │   └── og/                  # Open Graph social images
│   │
│   └── fonts/                   # Local font files (fallback)
│       ├── oxanium/
│       └── space-grotesk/
│
├── components/                   # Web Components
│   ├── base/
│   │   ├── base-component.js    # Abstract base class
│   │   └── component-registry.js # Auto-registration utility
│   ├── layout/
│   │   ├── site-header.js       # <site-header> component
│   │   ├── site-footer.js       # <site-footer> component
│   │   ├── mobile-nav.js        # <mobile-nav> component
│   │   └── language-toggle.js   # <language-toggle> component
│   ├── ui/
│   │   ├── contact-form.js      # <contact-form> component
│   │   ├── newsletter-form.js   # <newsletter-form> component
│   │   ├── team-card.js         # <team-card> component
│   │   ├── resource-card.js     # <resource-card> component
│   │   └── activity-card.js     # <activity-card> component
│   └── embeds/
│       ├── luma-calendar.js     # <luma-calendar> wrapper
│       └── social-links.js      # <social-links> component
│
├── i18n/                         # Internationalization
│   ├── es.json                  # Spanish translations
│   ├── en.json                  # English translations
│   └── i18n.js                  # Translation system
│
├── api/                          # API integration (if needed)
│   ├── config.js                # API endpoints configuration
│   └── services/
│       ├── contact.js           # Contact form submission
│       └── newsletter.js        # Newsletter subscription
│
├── docs/                         # Documentation
│   ├── ui-architecture.md       # This document
│   ├── component-guide.md       # Component usage guide
│   └── deployment.md            # Deployment instructions
│
└── scripts/                      # Development scripts
    ├── serve.js                 # Local dev server
    └── validate-i18n.js         # Check translation completeness
```
