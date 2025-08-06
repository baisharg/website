# Styling Guidelines

## CSS Architecture

1. **Base Layer** - Reset, typography, CSS custom properties
2. **Layout Layer** - Grid systems, containers, spacing utilities  
3. **Component Layer** - Reusable component styles
4. **Theme Layer** - Color schemes, dark mode, glassmorphism effects
5. **Page Layer** - Page-specific overrides
6. **Animation Layer** - Keyframes, transitions, scroll animations

## Global Theme Variables

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
