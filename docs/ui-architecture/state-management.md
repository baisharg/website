# State Management

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
