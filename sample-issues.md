# Sample GitHub Issues for BAISH Website

## Issue 1: [Bug] Mobile navigation menu doesn't close when clicking outside

**Labels:** bug, mobile, ui/ux

**Description:**
On mobile devices, when the hamburger menu is opened, tapping outside the menu area should close it, but currently it remains open. Users have to tap the hamburger icon again to close it.

**Steps to reproduce:**
1. Visit the website on a mobile device
2. Tap the hamburger menu icon (three lines)
3. Tap anywhere outside the menu area
4. Menu remains open instead of closing

**Expected behavior:** Menu should close when tapping outside the menu area

**Browser:** Safari (iOS), Chrome (Android)
**Device:** Mobile

---

## Issue 2: [Feature] Add newsletter signup integration with Substack

**Labels:** enhancement, community-features

**Description:**
Currently, the website mentions joining a mailing list but doesn't have a visible signup form. We should integrate a Substack newsletter signup form to capture interested community members.

**Proposed solution:**
- Add a newsletter signup section to the homepage
- Integrate with Substack API for seamless signup
- Include signup form in the footer of all pages
- Add confirmation message after successful signup

**Priority:** Medium
**Category:** Community Features

---

## Issue 3: [Content] Update Mechanistic Interpretability course date

**Labels:** content, course-info

**Content Type:** Course/Activity Information

**Current Content:** "Starts end of April 2025"

**Requested Changes:** Update the course start date to reflect the actual 2025 schedule once confirmed. The current date may be outdated.

**Language:** Both Spanish and English
**Urgency:** Medium (within a week)

---

## Issue 4: [Bug] Inconsistent translation keys in Spanish version

**Labels:** bug, multilingual-support

**Description:**
Some sections of the website show English text even when Spanish is selected as the language. This appears to be missing translation keys in the translations.js file.

**Steps to reproduce:**
1. Visit the website
2. Click "ES" to switch to Spanish
3. Navigate through different pages
4. Notice some buttons and text remain in English

**Expected behavior:** All user-facing text should be translated to Spanish when ES is selected

**Affected areas:**
- Some button labels in the activities section
- Footer links
- Form placeholders

---

## Issue 5: [Feature] Add search functionality to resources page

**Labels:** enhancement, ui/ux-improvement

**Description:**
The resources page contains many links and materials organized by difficulty level. Users would benefit from a search feature to quickly find specific topics or resources.

**Proposed solution:**
- Add a search input field at the top of the resources page
- Implement client-side filtering of resources by title and description
- Include category filters (beginner, intermediate, advanced)
- Maintain URL parameters for shareable filtered views

**Priority:** Medium
**Category:** UI/UX Improvement

---

## Issue 6: [Content] Add new team member profile

**Labels:** content, team-updates

**Content Type:** Team Member Updates

**Requested Changes:**
Add a new team member profile to the About page:
- Name: [New Member Name]
- Role: Research Assistant
- Photo: [To be provided]
- Bio: [Bio text to be provided]

**Language:** Both Spanish and English
**Urgency:** Low (when convenient)

---

## Issue 7: [Feature] Implement event RSVP tracking

**Labels:** enhancement, event-management

**Description:**
Currently, events are displayed via embedded Luma calendar, but there's no way to track RSVPs or manage attendance directly from the website.

**Proposed solution:**
- Add RSVP buttons to event listings
- Create a simple form for event registration
- Send confirmation emails to attendees
- Provide event organizers with attendee lists

**Priority:** High
**Category:** Event Management

---

## Issue 8: [Bug] Images not loading properly on slow connections

**Labels:** bug, performance

**Description:**
Some users report that team member photos and other images fail to load completely on slower internet connections, leaving broken image placeholders.

**Steps to reproduce:**
1. Visit the website on a slow connection (or throttle network)
2. Navigate to About page
3. Some images may not load or take very long to appear

**Expected behavior:** Images should load efficiently with proper fallbacks

**Potential solutions:**
- Add image lazy loading
- Optimize image file sizes
- Implement progressive image loading
- Add proper alt text for accessibility

---

## Issue 9: [Content] Update upcoming events section

**Labels:** content, event-information

**Content Type:** Event Information

**Current Content:** The events section shows placeholder or outdated event information

**Requested Changes:**
Update the events section with:
- Current weekly discussion group schedule
- Upcoming AGI Safety Fundamentals cohort dates
- Paper reading club schedule
- Any special events or workshops

**Language:** Both Spanish and English
**Urgency:** High (ASAP)

---

## Issue 10: [Feature] Add dark/light mode toggle

**Labels:** enhancement, ui/ux-improvement, accessibility

**Description:**
The website currently uses a fixed dark theme. Some users prefer light mode for better readability, especially during daytime browsing.

**Proposed solution:**
- Add a theme toggle button in the header
- Implement CSS custom properties for easy theme switching
- Store user preference in localStorage
- Ensure both themes maintain good contrast ratios for accessibility

**Priority:** Low
**Category:** UI/UX Improvement
