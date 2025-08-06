# Routing

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
