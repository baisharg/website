# Epic 4: Event System & Calendar Integration

**Goal:** Integrate Luma calendar for event display and management, implement Google Calendar subscription functionality, and build the Activities page showcasing all BAISH programs and events. This epic establishes BAISH as an active, engaged community hub with regular programming.

## Story 4.1: Activities Page Structure

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

## Story 4.2: Program Cards Component

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

## Story 4.3: Luma Calendar Integration

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

## Story 4.4: Google Calendar Subscription

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

## Story 4.5: Event Highlights on Homepage

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

## Story 4.6: Program Schedule Information

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
