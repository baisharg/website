# Environment Configuration

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
