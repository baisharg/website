# BAISH Website Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- **Create a bilingual platform** for AI safety research and education serving the Argentina/LATAM community
- **Establish BAISH as the regional hub** for AI safety initiatives and community building
- **Provide accessible educational resources** through courses, discussion groups, and learning paths
- **Connect local talent** with global AI safety research and opportunities
- **Build community engagement** through events, newsletter, and social media presence

### Background Context

Buenos Aires AI Safety Hub (BAISH) addresses the critical need for AI safety awareness and research capacity in Latin America. As AI development accelerates globally, the region lacks dedicated organizations focused on ensuring beneficial AI development. BAISH fills this gap by providing education, community building, and research opportunities specifically tailored to the Spanish-speaking community, while maintaining connections to the global AI safety ecosystem through bilingual content and international partnerships.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-08-06 | 2.0 | Complete restructure using PRD template | PM Agent |
| Previous | 1.0 | Initial PRD with core requirements | Unknown |

## Requirements

### Functional Requirements

- **FR1:** The website shall support bilingual content (Spanish/English) with a persistent language toggle that maintains page context during switching
- **FR2:** The system shall display team member profiles including photos, roles, and social media links
- **FR3:** The platform shall embed a Luma calendar (ID: cal-0oFAsTn5vpwcAwb) to display upcoming events with RSVP capabilities
- **FR4:** The system shall provide Google Calendar subscription integration for users to sync BAISH events to their personal calendars
- **FR5:** The website shall offer a contact form as the primary communication method, avoiding direct email display except in FAQ
- **FR6:** The platform shall organize and display educational programs including Mechanistic Interpretability Course, AGI Safety Fundamentals, Weekly Discussion Groups, and Paper Reading Club
- **FR7:** The system shall maintain a resource library with categorized learning paths and book recommendations
- **FR8:** The website shall integrate newsletter subscription functionality for community updates
- **FR9:** The platform shall provide social media integration links for Instagram, LinkedIn, Telegram, and WhatsApp
- **FR10:** The system shall serve 6 main pages: Home, About, Research, Activities, Resources, and Contact, plus a Privacy Policy page
- **FR11:** All book descriptions shall be fully translated and displayed according to the selected language preference
- **FR12:** The Research page shall showcase BAISH research initiatives, publications, ongoing projects, and collaboration opportunities
- **FR13:** The Research page shall provide links to research papers, preprints, and technical blog posts produced by BAISH members
- **FR14:** The system shall highlight research areas of focus including mechanistic interpretability, alignment theory, and AI governance relevant to LATAM
- **FR15:** The system shall integrate Substack newsletter signup forms for mailing list management

### Non-Functional Requirements

- **NFR1:** The website shall be fully responsive, providing optimal viewing experience across mobile, tablet, and desktop devices
- **NFR2:** The platform shall load initial content within 3 seconds on standard broadband connections
- **NFR3:** The system shall maintain 99.9% uptime leveraging GitHub Pages infrastructure
- **NFR4:** The website shall follow WCAG 2.1 AA accessibility standards for inclusive access
- **NFR5:** All third-party integrations (Luma, Google Calendar) shall degrade gracefully if unavailable
- **NFR6:** The platform shall support SEO best practices for discoverability in both Spanish and English searches
- **NFR7:** The website shall use semantic HTML5 and modern CSS3 without requiring JavaScript for core content access
- **NFR8:** The system shall implement proper caching strategies for static assets to minimize bandwidth usage

## User Interface Design Goals

### Overall UX Vision

Create an intellectually engaging yet approachable digital experience that bridges the gap between cutting-edge AI safety research and community education. The interface should feel modern and technically sophisticated while remaining welcoming to newcomers. The design should reinforce BAISH's position as a serious research institution while maintaining the warmth and accessibility needed for community building in Latin America.

### Key Interaction Paradigms

- **Progressive Disclosure:** Start with clear, simple navigation that reveals deeper content as users engage
- **Seamless Language Switching:** Instant, context-preserving transitions between Spanish and English
- **Glassmorphism Effects:** Subtle depth and layering using frosted glass effects for modern aesthetic
- **Smooth Scroll Animations:** Reveal animations on scroll to create engaging content discovery
- **Mobile-First Responsive:** Touch-optimized interactions that scale elegantly to desktop
- **Event-Driven Engagement:** Calendar and event integrations as primary calls-to-action

### Core Screens and Views

- **Home/Landing Page** - Hero section with mission, upcoming events widget, featured research, quick links to programs
- **About Page** - Team grid with expandable profiles, organization story, values and approach
- **Research Page** - Current projects cards, publications list, research areas overview, collaboration CTA, integrated blog
- **Activities Page** - Program cards (courses, reading groups), schedule grid, registration flows
- **Resources Page** - Categorized learning paths, recommended books gallery, external links directory
- **Contact Page** - Primary contact form, FAQ accordion, office location/hours if applicable
- **Mobile Navigation Overlay** - Full-screen menu with all main sections and language toggle
- **Event Detail Modal/Page** - Individual event information with RSVP integration from calendar

### Accessibility: WCAG AA

Following WCAG 2.1 Level AA standards including:
- Proper color contrast ratios for all text
- Keyboard navigation support
- Screen reader-friendly semantic markup
- Alt text for all images
- Focus indicators for interactive elements

### Branding

**Current Implementation (Already Established):**
- **Color Palette:** Dark theme with purple/blue/pink gradient accents
- **Typography:** Oxanium for headings (futuristic feel), Space Grotesk for body text (clean readability)
- **Visual Effects:** Glassmorphism with backdrop filters, gradient overlays, subtle animations
- **Icon System:** Feather icons for consistency
- **Mood:** Professional yet approachable, technical but not intimidating, global perspective with local warmth

### Target Device and Platforms: Web Responsive

- **Primary:** Mobile web (60% expected traffic) - optimized for phones and tablets
- **Secondary:** Desktop web - full experience with enhanced layouts
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- **No native apps** initially - progressive web app possible future enhancement

## Technical Assumptions

### Repository Structure: Monorepo

Single repository containing all website code, assets, and documentation. This simplifies deployment to GitHub Pages and maintains all related code in one place. Structure follows standard static site organization with separate directories for styles, scripts, images, and pages.

### Service Architecture

**Static Site Architecture** - Pure client-side application with no backend services:
- Static HTML pages for all content (pre-rendered, no SSG needed)
- Vanilla JavaScript for interactivity (no framework/build process)
- CSS3 with multiple stylesheets for modular styling
- Third-party services via client-side integration (Luma calendar iframe, Google Calendar links)
- Form submissions handled by Formspree
- Blog content as static HTML pages within Research section (no CMS)

### Testing Requirements

**Manual Testing Focus** with convenience methods:
- Manual testing checklist for cross-browser compatibility
- Visual regression testing through manual review
- Accessibility testing using browser tools and screen readers
- No automated unit/integration tests (unnecessary for static site)
- Local development server for testing before deployment
- GitHub Pages preview deployments for PR reviews

### Additional Technical Assumptions and Requests

- **Hosting:** GitHub Pages with custom domain (baish.com.ar) via CNAME
- **Version Control:** Git with GitHub as remote repository
- **No Build Process:** Direct HTML/CSS/JS files, no compilation or bundling
- **No Package Manager:** No npm/yarn dependencies, all libraries via CDN
- **JavaScript Approach:** Progressive enhancement - site works without JS, enhanced with it
- **CSS Architecture:** Multiple stylesheets for separation of concerns (base, theme, components, utilities)
- **Browser Support:** Modern browsers only (last 2 versions), no IE11 support
- **Performance Budget:** Initial load under 3 seconds, max 2MB total page weight
- **SEO Strategy:** Static meta tags, structured data, sitemap.xml, robots.txt
- **Analytics:** None (privacy-focused approach)
- **Form Backend:** Formspree for contact form processing
- **Newsletter:** Substack integration for mailing list
- **Blog Implementation:** Static HTML articles with index page
- **Asset Management:** Images optimized before commit, lazy loading for below-fold content
- **Development Environment:** Any text editor, Python SimpleHTTPServer or similar for local testing
- **Deployment:** Push to main branch auto-deploys via GitHub Pages
- **Monitoring:** GitHub Pages status, uptime monitoring via external service optional
- **Libraries:** CDN for common libraries (Feather icons, Google Fonts, etc.)

## Epic List

1. **Epic 1: Foundation & Core Infrastructure** - Set up project repository, development environment, basic HTML structure with routing, and deploy Hello World to GitHub Pages

2. **Epic 2: Design System & Static Structure** - Implement complete design system (colors, typography, glassmorphism), create all 6 main pages with responsive navigation and bilingual support

3. **Epic 3: Team & About Implementation** - Build team profiles with expansion, organization information, mission/vision sections with full styling

4. **Epic 4: Event System & Calendar Integration** - Integrate Luma calendar embed, Google Calendar subscription, Activities page with program listings

5. **Epic 5: Research Hub & Blog Platform** - Create Research page structure, static blog system, project showcases, publication listings

6. **Epic 6: Resources & Learning Paths** - Build resource library, book recommendations with translations, categorized learning paths

7. **Epic 7: Contact & Communications** - Implement Formspree contact form, Substack newsletter integration, social media links, FAQ section

8. **Epic 8: Final Polish & Launch** - Complete all Spanish translations, mobile optimizations, accessibility audit, performance tuning, deploy to custom domain

## Epic 1: Foundation & Core Infrastructure

**Goal:** Establish the project repository, development environment, basic HTML structure with routing, and deploy a functional "Hello World" site to GitHub Pages. This epic delivers the foundational infrastructure while also providing immediate visible output - a live website URL that stakeholders can visit.

### Story 1.1: Repository Setup and Initial Structure

As a **developer**,
I want **to create the Git repository with proper structure and configuration**,
so that **the project has version control and organized file structure from the start**.

**Acceptance Criteria:**
1. Git repository initialized with appropriate .gitignore for web projects
2. Directory structure created: `/`, `/css`, `/js`, `/images`, `/assets`
3. README.md created with project name, description, and setup instructions
4. License file added (MIT or as specified)
5. Basic index.html with "Hello BAISH" message and proper HTML5 structure
6. Repository pushed to GitHub with main branch as default

### Story 1.2: GitHub Pages Configuration

As a **developer**,
I want **to configure GitHub Pages hosting with custom domain**,
so that **the site is accessible at baish.com.ar immediately**.

**Acceptance Criteria:**
1. GitHub Pages enabled on main branch from root directory
2. CNAME file created with "baish.com.ar" domain
3. DNS instructions documented for domain configuration
4. Site accessible at GitHub Pages URL (username.github.io/website)
5. Deployment workflow verified with test commit
6. 404.html page created for custom error handling

### Story 1.3: Development Environment Setup

As a **developer**,
I want **to set up local development server and testing tools**,
so that **I can efficiently develop and test changes locally**.

**Acceptance Criteria:**
1. Python SimpleHTTPServer command documented in README for local testing
2. VS Code workspace settings configured with recommended extensions
3. .editorconfig file created for consistent code formatting
4. Browser testing checklist created in docs/testing.md
5. Local development accessible at localhost:8000
6. Live reload solution documented (browser extensions or alternatives)

### Story 1.4: Base HTML Template and Routing

As a **developer**,
I want **to create the base HTML template with navigation structure**,
so that **all pages share consistent layout and navigation**.

**Acceptance Criteria:**
1. Base HTML template includes proper meta tags, viewport settings
2. Navigation structure defined for 6 main pages plus Privacy Policy
3. Each main page created with minimal content (Home, About, Research, Activities, Resources, Contact)
4. Privacy Policy page created with placeholder content
5. All pages link correctly to each other through navigation
6. Basic CSS file (style.css) linked and working with minimal styles
7. Site deploys successfully with all pages accessible

## Epic 2: Design System & Static Structure

**Goal:** Implement the complete visual design system including colors, typography, glassmorphism effects, and animations. Create responsive layouts for all pages with mobile navigation and language toggle functionality. This epic transforms the basic HTML into a visually polished, bilingual-ready structure.

### Story 2.1: Core Design System Implementation

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

### Story 2.2: Responsive Grid and Layout System

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

### Story 2.3: Navigation and Mobile Menu

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

### Story 2.4: Language Toggle System

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

### Story 2.5: Animation and Interaction Effects

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

### Story 2.6: Enhanced Theme and Polish

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

## Epic 3: Team & About Implementation

**Goal:** Build the About page with team member profiles featuring expandable details, organization information, mission/vision sections, and values. This epic establishes BAISH's identity and credibility by showcasing the team and organizational purpose with full bilingual support.

### Story 3.1: About Page Structure and Layout

As a **developer**,
I want **to create the About page with organized sections**,
so that **visitors understand BAISH's mission, vision, and approach**.

**Acceptance Criteria:**
1. About page hero section with compelling headline and intro text
2. Mission statement section with prominent styling
3. Vision section describing future goals
4. Values/principles section with icon-enhanced cards
5. Approach/methodology section explaining how BAISH works
6. All text content bilingual via data-i18n attributes
7. Smooth scroll navigation between page sections

### Story 3.2: Team Grid Component

As a **developer**,
I want **to build responsive team member grid layout**,
so that **all team members are displayed consistently**.

**Acceptance Criteria:**
1. CSS Grid layout responsive: 1 column mobile, 2 tablet, 3-4 desktop
2. Team member cards with consistent dimensions and spacing
3. Glassmorphism effect applied to team cards
4. Placeholder image handling for members without photos
5. Cards maintain aspect ratio across breakpoints
6. Hover effect indicates cards are interactive
7. Loading optimization for team member images

### Story 3.3: Team Member Profile Cards

As a **developer**,
I want **to create team member cards with basic information**,
so that **visitors can identify team members and their roles**.

**Acceptance Criteria:**
1. Each card displays: photo, name, role/title, brief tagline
2. Social media icons (LinkedIn, Twitter/X, personal site) with links
3. "View more" button/indicator for expansion
4. Team data structured in JavaScript object for easy updates
5. Bilingual support for roles and taglines
6. Accessibility: alt text for images, ARIA labels for social links
7. Cards gracefully handle missing social media links

### Story 3.4: Expandable Profile Details

As a **developer**,
I want **to implement in-page expansion for detailed profiles**,
so that **users can learn more about team members without leaving the page**.

**Acceptance Criteria:**
1. Click on card expands to show full bio and expertise
2. Smooth animation for expand/collapse transitions
3. Expanded view includes: full bio, expertise areas, publications/links
4. Close button and clicking outside closes expanded view
5. Only one profile expanded at a time
6. Keyboard navigation support (Enter to expand, Escape to close)
7. Mobile-optimized expanded view (full screen on small devices)

### Story 3.5: Organization Story Section

As a **developer**,
I want **to add BAISH's founding story and journey**,
so that **visitors understand the organization's background and evolution**.

**Acceptance Criteria:**
1. Timeline or story section describing BAISH's founding
2. Key milestones and achievements highlighted
3. Photos or graphics enhancing the narrative
4. Connection to global AI safety movement explained
5. Regional context for Latin America emphasized
6. Fully bilingual content with proper translations
7. Engaging visual design with scroll animations

## Epic 4: Event System & Calendar Integration

**Goal:** Integrate Luma calendar for event display and management, implement Google Calendar subscription functionality, and build the Activities page showcasing all BAISH programs and events. This epic establishes BAISH as an active, engaged community hub with regular programming.

### Story 4.1: Activities Page Structure

As a **developer**,
I want **to create the Activities page layout with sections for different program types**,
so that **visitors can easily discover and understand BAISH's offerings**.

**Acceptance Criteria:**
1. Activities page hero with engaging headline about community programs
2. Section for recurring programs (Discussion Groups, Reading Club)
3. Section for courses (Mechanistic Interpretability, AGI Safety Fundamentals)
4. Section for special events and workshops
5. Clear visual hierarchy distinguishing program types
6. Call-to-action buttons for registration/participation
7. Bilingual content for all program descriptions

### Story 4.2: Program Cards Component

As a **developer**,
I want **to build reusable program cards for displaying activities**,
so that **each program is presented consistently with key information**.

**Acceptance Criteria:**
1. Program cards display: title, description, schedule, duration, format (online/in-person)
2. Visual indicators for program type (course, workshop, discussion group)
3. "Learn more" expandable sections for detailed information
4. Registration status indicators (open, closed, upcoming)
5. Responsive card grid layout matching team grid pattern
6. Hover effects and smooth transitions
7. Structured data markup for SEO

### Story 4.3: Luma Calendar Integration

As a **developer**,
I want **to embed Luma calendar for live event display**,
so that **visitors see real-time upcoming events and can RSVP directly**.

**Acceptance Criteria:**
1. Luma calendar iframe embedded with ID cal-0oFAsTn5vpwcAwb
2. Responsive iframe container maintaining proper aspect ratio
3. Loading placeholder while calendar loads
4. Fallback message if calendar fails to load
5. Calendar styled to match site theme where possible
6. Mobile-optimized calendar view
7. Clear section heading explaining calendar purpose

### Story 4.4: Google Calendar Subscription

As a **developer**,
I want **to implement Google Calendar subscription functionality**,
so that **users can sync BAISH events to their personal calendars**.

**Acceptance Criteria:**
1. "Subscribe to Calendar" button prominently placed
2. Button links to Google Calendar with Luma ICS feed URL
3. Icon and styling consistent with site design
4. Tooltip/help text explaining subscription benefit
5. Alternative ICS download option for other calendar apps
6. Instructions for calendar subscription in FAQ
7. Bilingual button text and instructions

### Story 4.5: Event Highlights on Homepage

As a **developer**,
I want **to add upcoming events widget to homepage**,
so that **visitors immediately see BAISH is active and engaged**.

**Acceptance Criteria:**
1. Upcoming events section on homepage below hero
2. Next 3 events displayed with date, title, type
3. Link to full Activities page for all events
4. Visual design complementing homepage flow
5. Graceful handling when no upcoming events
6. Auto-updates when calendar changes (via iframe)
7. Mobile-responsive event display

### Story 4.6: Program Schedule Information

As a **developer**,
I want **to display regular program schedules clearly**,
so that **potential participants know when activities occur**.

**Acceptance Criteria:**
1. Weekly schedule grid for recurring programs
2. Time zones clearly indicated (Argentina time + UTC)
3. Duration and frequency for each program specified
4. Special scheduling notes (holidays, breaks) highlighted
5. Visual calendar or timeline for better comprehension
6. Bilingual day/time formatting
7. Links from schedule to program details

## Epic 5: Research Hub & Blog Platform

**Goal:** Create the Research page showcasing BAISH's research initiatives, build a static blog system for technical content, display projects and publications, and establish BAISH as a serious research contributor in the AI safety space. This epic positions BAISH as both educator and knowledge creator.

### Story 5.1: Research Page Structure

As a **developer**,
I want **to create the Research page with organized sections**,
so that **visitors understand BAISH's research contributions and focus areas**.

**Acceptance Criteria:**
1. Research page hero with compelling research mission statement
2. Research areas section with cards for each focus area
3. Current projects section with active research initiatives
4. Publications section for papers and preprints
5. Blog preview section showing latest articles
6. Collaboration call-to-action section
7. Bilingual support for all research content

### Story 5.2: Research Areas Showcase

As a **developer**,
I want **to build research area cards highlighting focus domains**,
so that **visitors understand BAISH's technical expertise**.

**Acceptance Criteria:**
1. Research area cards for: Mechanistic Interpretability, Alignment Theory, AI Governance LATAM
2. Each card includes: title, description, key questions, relevant resources
3. Visual icons or graphics representing each research area
4. Links to related papers, blog posts, and resources
5. Expandable details for deeper explanations
6. Consistent card styling with glassmorphism effects
7. Mobile-responsive card layout

### Story 5.3: Static Blog System

As a **developer**,
I want **to implement a static blog system for research articles**,
so that **BAISH can publish technical content and insights**.

**Acceptance Criteria:**
1. Blog index page at /research/blog/ with article listings
2. Individual article pages at /research/blog/[article-name].html
3. Blog article template with consistent header/footer
4. Article metadata: title, author, date, tags, reading time
5. Blog index shows preview cards with excerpt
6. Chronological ordering (newest first)
7. Author bio section at article end

### Story 5.4: Blog Article Features

As a **developer**,
I want **to enhance blog articles with technical content support**,
so that **research content is properly formatted and readable**.

**Acceptance Criteria:**
1. Code syntax highlighting for technical snippets
2. LaTeX math rendering support (via MathJax or KaTeX CDN)
3. Table of contents for long articles
4. Image captions and figure numbering
5. Citation/reference formatting
6. Social sharing buttons
7. "Related articles" section at bottom

### Story 5.5: Project Showcase

As a **developer**,
I want **to display current and past research projects**,
so that **visitors see concrete research outputs and progress**.

**Acceptance Criteria:**
1. Project cards with: title, status, team members, description
2. Progress indicators for ongoing projects
3. Links to project repositories, papers, or demos
4. Filtering by status (active, completed, planned)
5. Project timeline or roadmap visualization
6. Collaboration opportunities highlighted
7. Bilingual project descriptions

### Story 5.6: Publications and Papers

As a **developer**,
I want **to create a publications section with papers and preprints**,
so that **academic work is easily discoverable and citable**.

**Acceptance Criteria:**
1. Publication list with: title, authors, venue, year, abstract
2. Links to PDF, arXiv, journal sites
3. BibTeX citation export functionality
4. Categorization by type (paper, preprint, technical report)
5. Search/filter by author or topic
6. Featured publications highlighted
7. Integration with Google Scholar profiles

## Epic 6: Resources & Learning Paths

**Goal:** Build the Resources page with curated learning materials, book recommendations with bilingual descriptions, categorized learning paths for different skill levels, and external resource links. This epic establishes BAISH as the go-to source for AI safety education in Spanish.

### Story 6.1: Resources Page Structure

As a **developer**,
I want **to create the Resources page with organized sections**,
so that **learners can easily find appropriate educational materials**.

**Acceptance Criteria:**
1. Resources page hero with welcoming message for learners
2. Learning paths section with beginner/intermediate/advanced tracks
3. Recommended books section with visual gallery
4. External resources section with categorized links
5. Study guides or downloadable materials section
6. Clear navigation between resource categories
7. Bilingual headers and section descriptions

### Story 6.2: Learning Path Components

As a **developer**,
I want **to build learning path cards for different skill levels**,
so that **learners can follow structured educational journeys**.

**Acceptance Criteria:**
1. Three learning paths: Beginner, Intermediate, Advanced
2. Each path shows: duration, prerequisites, topics covered, outcomes
3. Step-by-step curriculum with numbered modules
4. Progress indicators (optional visual element)
5. Links to specific resources for each module
6. Recommended time commitment per week
7. Bilingual path descriptions and module names

### Story 6.3: Book Recommendation Gallery

As a **developer**,
I want **to create an interactive book gallery with recommendations**,
so that **visitors discover essential AI safety literature**.

**Acceptance Criteria:**
1. Book cards display: cover image, title, author, description
2. Books include: Human Compatible, Superintelligence, Alignment Problem, Life 3.0, Uncontrollable
3. Hover effects show extended descriptions
4. Links to purchase/access (Amazon, local bookstores, free PDFs where available)
5. Bilingual book descriptions (Spanish translations for all books)
6. "Why we recommend this" section for each book
7. Responsive grid layout for book cards

### Story 6.4: External Resources Directory

As a **developer**,
I want **to organize external learning resources by category**,
so that **users can access global AI safety materials**.

**Acceptance Criteria:**
1. Categories: Online Courses, Research Papers, Videos, Podcasts, Organizations
2. Each resource includes: title, description, language indicator, difficulty level
3. Clear visual indicators for resource types (icons)
4. External link icons showing resources open in new tab
5. Featured/recommended resources highlighted
6. Bilingual descriptions for all resources
7. Mobile-friendly list layout

### Story 6.5: Downloadable Materials

As a **developer**,
I want **to provide downloadable study guides and materials**,
so that **learners can access content offline**.

**Acceptance Criteria:**
1. Downloads section with PDF study guides, cheat sheets, summaries
2. Clear file type and size indicators
3. Preview descriptions for each download
4. Download tracking (optional - just count clicks)
5. Materials in both Spanish and English where applicable
6. Proper MIME types for downloads
7. Mobile-friendly download experience

### Story 6.6: Resource Filtering and Navigation

As a **developer**,
I want **to add basic filtering for resources**,
so that **users can find relevant materials quickly**.

**Acceptance Criteria:**
1. Filter buttons for: Language (ES/EN), Level (Beginner/Advanced), Type
2. Smooth filtering animations (hide/show with transitions)
3. Active filter states clearly indicated
4. "Clear filters" option to reset view
5. URL updates with filter state (optional - for bookmarking)
6. Mobile-optimized filter UI
7. No backend required - pure JavaScript filtering

## Epic 7: Contact & Communications

**Goal:** Implement the contact form with Formspree integration, Substack newsletter signup, social media links, and FAQ section. This epic establishes communication channels between BAISH and its community, enabling inquiries, newsletter subscriptions, and social engagement.

### Story 7.1: Contact Page Structure

As a **developer**,
I want **to create the Contact page with clear communication options**,
so that **visitors can easily reach out to BAISH**.

**Acceptance Criteria:**
1. Contact page hero with welcoming message about getting in touch
2. Primary contact form section prominently displayed
3. Newsletter signup section with Substack integration
4. Social media links section with all platforms
5. FAQ accordion section for common questions
6. Office hours or availability information (if applicable)
7. Bilingual content for all sections

### Story 7.2: Contact Form Implementation

As a **developer**,
I want **to build the contact form with Formspree backend**,
so that **inquiries are reliably delivered without exposing email**.

**Acceptance Criteria:**
1. Form fields: Name, Email, Subject/Topic dropdown, Message textarea
2. Field validation: required fields, email format, message length
3. Formspree integration with proper action URL and method
4. Success message after submission (no page reload)
5. Error handling with user-friendly messages
6. Anti-spam measures (honeypot field or similar)
7. Bilingual field labels and validation messages

### Story 7.3: Newsletter Signup Integration

As a **developer**,
I want **to integrate Substack newsletter signup**,
so that **visitors can subscribe to BAISH updates**.

**Acceptance Criteria:**
1. Substack embed code integrated in Contact page
2. Newsletter signup also added to homepage footer
3. Clear value proposition for subscribing
4. Visual styling matching site theme
5. Success confirmation after signup
6. Privacy note about data handling
7. Bilingual signup prompts and descriptions

### Story 7.4: Social Media Hub

As a **developer**,
I want **to create social media link section**,
so that **visitors can connect on their preferred platforms**.

**Acceptance Criteria:**
1. Social platform links: Instagram, LinkedIn, Telegram, WhatsApp
2. Platform-appropriate icons (Feather or custom)
3. Hover effects showing platform names
4. Links open in new tabs
5. Visual layout as icon grid or styled list
6. Community size indicators (optional - if available)
7. Bilingual platform descriptions or tooltips

### Story 7.5: FAQ Accordion

As a **developer**,
I want **to build an FAQ section with accordion interaction**,
so that **common questions are answered without contact form**.

**Acceptance Criteria:**
1. FAQ items covering: programs, participation, research, collaboration
2. Accordion expands one question at a time
3. Smooth expand/collapse animations
4. Plus/minus or arrow indicators for state
5. Email address (aisafetyarg@gmail.com) mentioned only here for proposals
6. Fully bilingual questions and answers
7. Keyboard accessible (Enter/Space to toggle)

### Story 7.6: Form Confirmation and Error Pages

As a **developer**,
I want **to create form submission feedback**,
so that **users know their message was sent successfully**.

**Acceptance Criteria:**
1. Inline success message replacing form after submission
2. Option to send another message
3. Error messages for failed submissions
4. Loading state during form submission
5. Formspree configuration tested thoroughly
6. Fallback email mention in case of persistent errors
7. Bilingual success/error messages

## Epic 8: Final Polish & Launch

**Goal:** Complete all Spanish translations, perform comprehensive mobile optimization, conduct accessibility audit, optimize performance, implement SEO best practices, and deploy to the custom domain. This epic ensures the site is production-ready with professional polish and full bilingual support.

### Story 8.1: Complete Spanish Translations

As a **developer**,
I want **to verify and complete all Spanish translations**,
so that **Spanish-speaking users have a fully localized experience**.

**Acceptance Criteria:**
1. Audit all pages for missing translations in translations.js
2. Book descriptions fully translated to Spanish
3. Navigation, buttons, and UI elements translated
4. Form validation messages in Spanish
5. Meta descriptions and SEO content bilingual
6. FAQ and contact messages properly translated
7. Translation consistency verified across site

### Story 8.2: Mobile Optimization Audit

As a **developer**,
I want **to optimize mobile experience across all pages**,
so that **mobile users have excellent usability**.

**Acceptance Criteria:**
1. Test all pages on multiple mobile devices/viewports
2. Touch targets meet 44x44px minimum size
3. Text remains readable without horizontal scrolling
4. Images optimized for mobile bandwidth
5. Mobile menu works smoothly on all pages
6. Forms easy to complete on mobile keyboards
7. Performance under 3 seconds on 4G connection

### Story 8.3: Accessibility Compliance

As a **developer**,
I want **to ensure WCAG 2.1 AA compliance**,
so that **the site is accessible to users with disabilities**.

**Acceptance Criteria:**
1. Color contrast ratios meet AA standards (4.5:1 text, 3:1 large text)
2. All images have appropriate alt text
3. Keyboard navigation works for all interactive elements
4. ARIA labels added where needed
5. Screen reader testing completed successfully
6. Focus indicators visible for keyboard navigation
7. Accessibility report generated and issues resolved

### Story 8.4: Performance Optimization

As a **developer**,
I want **to optimize site performance and loading**,
so that **users have fast, smooth experience**.

**Acceptance Criteria:**
1. Images optimized and compressed (WebP where supported)
2. CSS and JavaScript minified for production
3. Lazy loading implemented for below-fold images
4. Critical CSS inlined for faster initial render
5. Browser caching headers configured properly
6. Total page weight under 2MB per page
7. Lighthouse performance score above 90

### Story 8.5: SEO Implementation

As a **developer**,
I want **to implement SEO best practices**,
so that **BAISH ranks well in search results**.

**Acceptance Criteria:**
1. Meta titles and descriptions for all pages (bilingual)
2. Open Graph tags for social sharing
3. Structured data markup for organization and events
4. XML sitemap generated and submitted
5. Robots.txt configured properly
6. Canonical URLs set correctly
7. Header tags (H1-H6) properly structured

### Story 8.6: Cross-Browser Testing

As a **developer**,
I want **to test site across all major browsers**,
so that **all users have consistent experience**.

**Acceptance Criteria:**
1. Chrome, Firefox, Safari, Edge tested (last 2 versions)
2. Layout consistency verified across browsers
3. JavaScript functionality works everywhere
4. CSS effects degrade gracefully where unsupported
5. Forms submit correctly in all browsers
6. Calendar embeds display properly
7. Bug fixes applied for any browser-specific issues

### Story 8.7: Production Deployment

As a **developer**,
I want **to deploy final site to custom domain**,
so that **BAISH website is live at baish.com.ar**.

**Acceptance Criteria:**
1. Final code review and cleanup completed
2. CNAME configured for baish.com.ar
3. DNS propagation verified
4. HTTPS working correctly
5. 404 page displays for invalid URLs
6. All external integrations tested in production
7. Launch announcement prepared for stakeholders

## Next Steps

### UX Expert Prompt

Review this PRD and create comprehensive UI/UX designs for the BAISH website, focusing on the bilingual experience, glassmorphism aesthetic, and mobile-first responsive approach. Pay special attention to the Research page blog integration and team profile expansion interactions.

### Architect Prompt

Using this PRD, create the technical architecture document for the BAISH website implementation. Focus on the static site structure, JavaScript organization for bilingual support, CSS architecture for maintainability, and integration patterns for third-party services (Luma, Formspree, Substack).