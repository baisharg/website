# Testing Requirements

## Browser-based Testing with Mocha/Chai

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

## Testing Best Practices

1. **Unit Tests**: Test components in isolation
2. **Integration Tests**: Test component interactions
3. **Coverage Goals**: 80% code coverage
4. **Test Structure**: Arrange-Act-Assert pattern
5. **Mock Dependencies**: API calls, routing, state
