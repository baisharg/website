# Epic 2: Design System & Static Structure

**Goal:** Implement the complete visual design system including colors, typography, glassmorphism effects, and animations. Create responsive layouts for all pages with mobile navigation and language toggle functionality. This epic transforms the basic HTML into a visually polished, bilingual-ready structure.

## Story 2.1: Core Design System Implementation

As a **developer**,
I want **to implement the base design system with colors, typography, and effects**,
so that **all UI elements have consistent, professional styling**.

**Acceptance Criteria:**
1. style.css implements CSS custom properties for color palette (dark theme with purple/blue/pink gradients)
2. Google Fonts integrated: Oxanium for headings, Space Grotesk for body text
3. Glassmorphism effects created using backdrop-filter and rgba backgrounds
4. Base styles for headings (h1-h6), paragraphs, links, and buttons defined
5. Utility classes created for common patterns (containers, spacing, flex layouts)
6. CSS reset/normalize applied for cross-browser consistency
7. Dark theme fully implemented as default (no light theme needed)

## Story 2.2: Responsive Grid and Layout System

As a **developer**,
I want **to create responsive layout system with mobile-first approach**,
so that **content adapts seamlessly across all device sizes**.

**Acceptance Criteria:**
1. CSS Grid and Flexbox layouts implemented for page structures
2. Responsive breakpoints defined (mobile: <768px, tablet: 768-1024px, desktop: >1024px)
3. Container max-widths and padding scale appropriately
4. All 6 main pages use consistent layout patterns
5. Images and media queries ensure proper scaling
6. Horizontal scrolling eliminated on all viewport sizes
7. Touch targets meet minimum 44x44px size on mobile

## Story 2.3: Navigation and Mobile Menu

As a **developer**,
I want **to build responsive navigation with mobile hamburger menu**,
so that **users can easily navigate on any device**.

**Acceptance Criteria:**
1. Desktop navigation bar with all 6 main page links
2. Hamburger menu icon appears on mobile/tablet viewports
3. Full-screen overlay menu slides in from right on mobile
4. Mobile menu includes close button and all navigation links
5. mobile-nav.js implements smooth open/close animations
6. Active page highlighted in navigation
7. Navigation remains accessible via keyboard (tab navigation)

## Story 2.4: Language Toggle System

As a **developer**,
I want **to implement bilingual toggle functionality**,
so that **users can switch between Spanish and English seamlessly**.

**Acceptance Criteria:**
1. Language toggle button positioned prominently in header
2. language-toggle.js manages language state in localStorage
3. translations.js file structure created with English/Spanish text objects
4. Data attributes (data-i18n) added to all translatable elements
5. Language switch preserves current page context
6. Default language detected from browser preferences
7. Visual indicator shows current selected language

## Story 2.5: Animation and Interaction Effects

As a **developer**,
I want **to add scroll animations and hover effects**,
so that **the site feels modern and engaging**.

**Acceptance Criteria:**
1. animation.js implements reveal animations on scroll
2. Smooth scrolling enabled for anchor links
3. Hover effects on buttons and interactive elements with transitions
4. Loading animations for page transitions
5. Parallax effects on hero sections (subtle, not distracting)
6. Performance maintained - animations use transform/opacity only
7. Reduced motion respected via prefers-reduced-motion media query

## Story 2.6: Enhanced Theme and Polish

As a **developer**,
I want **to apply final visual polish with enhanced theme styles**,
so that **the site achieves professional aesthetic quality**.

**Acceptance Criteria:**
1. baish-enhanced-theme.css adds gradient overlays and advanced effects
2. Card components styled with glassmorphism and shadows
3. Form elements styled consistently with theme
4. Feather icons integrated via CDN and applied throughout
5. Custom scrollbar styling for webkit browsers
6. Focus states styled for accessibility
7. Print styles defined for content pages
