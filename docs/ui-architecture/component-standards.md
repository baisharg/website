# Component Standards

## Component Template

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

## Naming Conventions

- **Components**: `kebab-case.js` files, `PascalCase` classes, `<kebab-case>` elements
- **Files**: `kebab-case.js/.css/.html`
- **CSS Variables**: `--component-property` format
- **JavaScript**: `camelCase` methods, `UPPER_SNAKE_CASE` constants
- **i18n Keys**: `section.component.element.state`
