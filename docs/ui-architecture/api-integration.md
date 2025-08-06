# API Integration

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
