# BAISH Frontend Architecture Document

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-08-06 | 1.0.0 | Initial architecture document | Winston (Architect) |

## Template and Framework Selection

**Current Implementation:** Vanilla HTML/CSS/JavaScript with no build process or frontend framework. This is a deliberate architectural choice for simplicity and GitHub Pages compatibility.

**Technology Analysis:**
- **No Framework**: Pure HTML/CSS/JS (no React, Vue, Angular)
- **No Build Process**: Direct file serving via GitHub Pages
- **No Package Manager**: No npm/yarn dependencies
- **Static Site**: 5 HTML pages with JavaScript for interactivity
- **Bilingual Support**: Custom translation system with translations.js
- **Styling Approach**: Multiple CSS files with glassmorphism theme
- **Third-party Integrations**: Luma calendar, Google Fonts, Feather icons

## Frontend Tech Stack

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Framework | Vanilla JavaScript | ES6+ | Core application logic | No build process needed, direct GitHub Pages deployment |
| UI Library | Web Components | Native | Reusable components | Browser-native, no dependencies, progressive enhancement |
| State Management | LocalStorage + Events | Native | Persist language preference, UI state | Simple, browser-native solution for minimal state needs |
| Routing | Hash-based routing | Native | SPA-like navigation | Works without server configuration on GitHub Pages |
| Build Tool | None | - | - | Direct file serving aligns with GitHub Pages constraints |
| Styling | CSS Custom Properties | CSS3 | Theming and variables | Modern CSS features, no preprocessor needed |
| Testing | Browser DevTools | Native | Manual testing | Lightweight approach for simple site |
| Component Library | Custom Components | - | UI consistency | Build once, reuse across pages |
| Form Handling | Native FormData API | HTML5 | Contact form processing | Browser-native, no library overhead |
| Animation | CSS Animations + Intersection Observer | CSS3/Native | Scroll animations | Performance-optimized, no library needed |
| Dev Tools | VS Code + Live Server | Latest | Local development | Simple setup, hot reload during development |

## Project Structure

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

## Component Standards

### Component Template

```javascript
// components/ui/example-component.js

import { BaseComponent } from '../base/base-component.js';
import { i18n } from '../../i18n/i18n.js';
import { emit } from '../../assets/js/utils/events.js';

class ExampleComponent extends BaseComponent {
  static get observedAttributes() {
    return ['title', 'variant', 'disabled'];
  }

  constructor() {
    super();
    this.#state = {
      isExpanded: false,
      clickCount: 0
    };
    this.#handleClick = this.#handleClick.bind(this);
  }

  #state;
  #handleClick;

  connectedCallback() {
    super.connectedCallback();
    this.#render();
    this.#attachEventListeners();
    i18n.on('languageChanged', () => this.#updateTranslations());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#removeEventListeners();
    i18n.off('languageChanged', this.#updateTranslations);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (oldValue === newValue) return;
    // Handle attribute changes
  }

  #render() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          /* Component styles */
        }
      </style>
      <div class="container">
        <!-- Component HTML -->
      </div>
    `;
    this.shadowRoot = shadow;
  }

  // Additional methods...
}

customElements.define('example-component', ExampleComponent);
export { ExampleComponent };
```

### Naming Conventions

- **Components**: `kebab-case.js` files, `PascalCase` classes, `<kebab-case>` elements
- **Files**: `kebab-case.js/.css/.html`
- **CSS Variables**: `--component-property` format
- **JavaScript**: `camelCase` methods, `UPPER_SNAKE_CASE` constants
- **i18n Keys**: `section.component.element.state`

## State Management

```javascript
// assets/js/store/store.js

class Store {
  constructor(options) {
    this.#state = options.initialState || {};
    this.#listeners = new Set();
    this.#middleware = options.middleware || [];
  }

  getState() {
    return this.#deepFreeze(this.#deepClone(this.#state));
  }

  dispatch(update) {
    // Apply middleware and update state
    const prevState = this.#state;
    this.#state = this.#applyUpdate(this.#state, update);
    
    if (prevState !== this.#state) {
      this.#notifyListeners(update, prevState);
    }
  }

  subscribe(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }
}

// Usage
const store = new Store({
  initialState: {
    language: { current: 'es', available: ['es', 'en'] },
    theme: { mode: 'dark' },
    ui: { loading: false }
  }
});
```

## API Integration

```javascript
// api/services/base-service.js

class BaseService {
  async request(endpoint, config = {}) {
    const { method = 'GET', headers = {}, body, timeout = 30000 } = config;
    
    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: body ? JSON.stringify(body) : undefined
      });
      
      return {
        ok: response.ok,
        data: await response.json(),
        status: response.status
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message
      };
    }
  }
}
```

## Routing

```javascript
// assets/js/router.js

class Router {
  constructor(config) {
    this.routes = new Map();
    this.mode = 'hash'; // For GitHub Pages
    this.#initializeRoutes(config.routes);
  }

  async navigate(path, options = {}) {
    const route = this.#findRoute(path);
    if (!route) return this.fallback(path);
    
    // Update URL
    window.location.hash = path;
    
    // Load page content
    await this.#loadPage(route.page);
    
    // Update state
    this.currentRoute = route;
  }
}

// Route configuration
export const routes = [
  { path: '/', name: 'home', page: '/index.html' },
  { path: '/about', name: 'about', page: '/about.html' },
  { path: '/activities', name: 'activities', page: '/activities.html' },
  { path: '/resources', name: 'resources', page: '/resources.html' },
  { path: '/contact', name: 'contact', page: '/contact.html' }
];
```

## Styling Guidelines

### CSS Architecture

1. **Base Layer** - Reset, typography, CSS custom properties
2. **Layout Layer** - Grid systems, containers, spacing utilities  
3. **Component Layer** - Reusable component styles
4. **Theme Layer** - Color schemes, dark mode, glassmorphism effects
5. **Page Layer** - Page-specific overrides
6. **Animation Layer** - Keyframes, transitions, scroll animations

### Global Theme Variables

```css
:root {
  /* Colors */
  --color-primary-500: hsl(250, 75%, 55%);
  --color-secondary-500: hsl(290, 75%, 55%);
  
  /* Typography */
  --font-heading: 'Oxanium', system-ui, sans-serif;
  --font-body: 'Space Grotesk', system-ui, sans-serif;
  --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  
  /* Spacing (8px grid) */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  
  /* Effects */
  --glass-blur: blur(10px);
  --glass-background: rgba(255, 255, 255, 0.05);
  --glass-border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Glassmorphism utility */
.glass {
  background: var(--glass-background);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
}
```

## Testing Requirements

### Browser-based Testing with Mocha/Chai

```javascript
// tests/components/example-component.test.js

describe('ExampleComponent', () => {
  let component;

  beforeEach(() => {
    component = document.createElement('example-component');
    document.body.appendChild(component);
  });

  afterEach(() => {
    component.remove();
  });

  it('should create with shadow DOM', () => {
    expect(component.shadowRoot).to.exist;
  });

  it('should handle click events', (done) => {
    component.addEventListener('example-click', (e) => {
      expect(e.detail.expanded).to.be.true;
      done();
    });
    
    const button = component.shadowRoot.querySelector('button');
    button.click();
  });
});
```

### Testing Best Practices

1. **Unit Tests**: Test components in isolation
2. **Integration Tests**: Test component interactions
3. **Coverage Goals**: 80% code coverage
4. **Test Structure**: Arrange-Act-Assert pattern
5. **Mock Dependencies**: API calls, routing, state

## Environment Configuration

```javascript
// config/env.js

const ENV_CONFIG = {
  development: {
    API_BASE_URL: 'http://localhost:3000/api',
    DEBUG_MODE: true,
    ENABLE_ANALYTICS: false
  },
  production: {
    API_BASE_URL: 'https://api.baish.com.ar',
    DEBUG_MODE: false,
    ENABLE_ANALYTICS: true
  }
};

function detectEnvironment() {
  const hostname = window.location.hostname;
  return hostname === 'localhost' ? 'development' : 'production';
}

export const ENV = new EnvironmentConfig();
```

## Frontend Developer Standards

### Critical Coding Rules

1. **NO BUILD PROCESS** - Use ES6 modules with .js extensions
2. **WEB COMPONENTS** - Always call super(), define after class
3. **FILE PATHS** - Always use absolute paths or ./ relative
4. **NO TYPESCRIPT** - Use JSDoc for type hints
5. **STATE IMMUTABILITY** - Never mutate, always dispatch
6. **VANILLA CSS** - Use custom properties, no preprocessors
7. **EVENT CLEANUP** - Remove all listeners in disconnectedCallback
8. **ASYNC PATTERNS** - Always use try/catch
9. **GITHUB PAGES** - Use hash routing, test with python server
10. **I18N REQUIRED** - Never hardcode text

### Quick Reference

```bash
# Development
python3 -m http.server 8000

# Component Template
class MyComponent extends BaseComponent {
  static get observedAttributes() { return ['attr']; }
  constructor() { super(); }
  connectedCallback() { super.connectedCallback(); }
  disconnectedCallback() { super.disconnectedCallback(); }
}
customElements.define('my-component', MyComponent);

# Import Patterns
import { Component } from './component.js';  # Always .js
import store from '/assets/js/store/index.js';

# State Management
store.dispatch({ type: 'ACTION', payload: data });
const state = store.get('module.property');

# Routing
router.navigate('/path');

# API Calls
const response = await apiClient.post('/endpoint', data);

# CSS Variables
var(--color-primary-500)
var(--spacing-4)
var(--radius-md)
```

## Summary

This architecture provides a robust, maintainable foundation for the BAISH website with:
- Zero build complexity for GitHub Pages deployment
- Modern vanilla JavaScript with Web Components
- Comprehensive i18n support for Spanish/English
- Glassmorphism design system
- Clear developer guidelines and patterns

The architecture prioritizes simplicity, maintainability, and developer experience while working within the constraints of static hosting.