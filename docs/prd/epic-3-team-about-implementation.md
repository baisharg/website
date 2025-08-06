# Epic 3: Team & About Implementation

**Goal:** Build the About page with team member profiles featuring expandable details, organization information, mission/vision sections, and values. This epic establishes BAISH's identity and credibility by showcasing the team and organizational purpose with full bilingual support.

## Story 3.1: About Page Structure and Layout

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

## Story 3.2: Team Grid Component

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

## Story 3.3: Team Member Profile Cards

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

## Story 3.4: Expandable Profile Details

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

## Story 3.5: Organization Story Section

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
