# BAISH Website Product Requirements Document

## Overview
Buenos Aires AI Safety Hub (BAISH) website - A bilingual platform for AI safety research and education in Argentina.

## Core Requirements

### 1. Site Structure
- 5 main pages: Home, About, Activities, Resources, Contact
- Bilingual support (Spanish/English) with language toggle
- Responsive design for mobile and desktop
- Privacy Policy page

### 2. Key Features
- Mission statement and value proposition
- Team member profiles with photos and social links
- Activity/program listings
- Resource library with learning paths
- Newsletter subscription
- Contact form (primary contact method - no direct email display)
- Social media integration (Instagram, LinkedIn, Telegram, WhatsApp)

### 3. Programs & Activities
- Mechanistic Interpretability Course
- AGI Safety Fundamentals Cohort  
- Weekly Discussion Group
- Paper Reading Club

## Updates & Modifications

### Event Calendar Integration
**Current Implementation**: Dual calendar system
- **Primary**: Luma calendar embed (iframe) for event display and management
  - Calendar ID: cal-0oFAsTn5vpwcAwb
  - Shows upcoming events inline on the homepage
  - Provides RSVP and event management capabilities
- **Secondary**: Google Calendar subscription link
  - Syncs all Luma events to user's Google Calendar
  - Subscribe link: `https://www.google.com/calendar/render?cid=http%3A%2F%2Fapi.lu.ma%2Fics%2Fget%3Fentity%3Dcalendar%26id%3Dcal-0oFAsTn5vpwcAwb`
  - Allows users to stay updated with events in their personal calendar

**Note**: This dual approach provides both embedded visibility and personal calendar integration for maximum user convenience.

### Book Descriptions Localization
**Issue**: Book descriptions remain in English when site is in Spanish mode

**Affected Books**:
1. **Human Compatible** by Stuart Russell
   - Current: "A leading AI researcher's compelling case for how to ensure that artificial intelligence remains beneficial to humanity."
   - Needed (Spanish): "El caso convincente de un investigador líder en IA sobre cómo garantizar que la inteligencia artificial siga siendo beneficiosa para la humanidad."

2. **Superintelligence** by Nick Bostrom  
   - Current: "Explores the potential risks and paths to superintelligent AI, addressing key questions about the future of intelligence."
   - Needed (Spanish): "Explora los riesgos potenciales y caminos hacia la IA superinteligente, abordando preguntas clave sobre el futuro de la inteligencia."

3. **The Alignment Problem** by Brian Christian
   - Current: "An exploration of the growing field of AI alignment, explaining technical concepts in an accessible way."
   - Needed (Spanish): "Una exploración del creciente campo del alineamiento de IA, explicando conceptos técnicos de manera accesible."

4. **Life 3.0** by Max Tegmark
   - Current: "Examines how artificial intelligence might affect life in the future and what choices we face in shaping that future."
   - Needed (Spanish): "Examina cómo la inteligencia artificial podría afectar la vida en el futuro y qué elecciones enfrentamos para dar forma a ese futuro."

**Note**: "Uncontrollable" by Darren McKee already has proper Spanish description.

### Contact Strategy
**Confirmed Approach**: 
- Use contact form as primary contact method
- No direct email display on main pages
- Email (aisafetyarg@gmail.com) only mentioned in FAQ section for proposals
- This encourages structured communication through the form

## Technical Details

### Calendar Implementation
```html
<!-- Luma Calendar Embed -->
<iframe src="https://lu.ma/embed/calendar/cal-0oFAsTn5vpwcAwb/events" />

<!-- Google Calendar Subscription Link -->
<a href="https://www.google.com/calendar/render?cid=http%3A%2F%2Fapi.lu.ma%2Fics%2Fget%3Fentity%3Dcalendar%26id%3Dcal-0oFAsTn5vpwcAwb">
  Suscribirse al Calendario
</a>
```

### Language Toggle
- Maintains current page context when switching languages
- All UI elements and content should update accordingly
- Book descriptions need translation implementation

## Tech Stack

### Frontend
- **HTML5**: Static HTML pages for all content
- **CSS3**: Custom styling with multiple stylesheets
  - Core styles (`style.css`, `styles.css`)
  - Enhanced theming with glassmorphism effects (`baish-enhanced-theme.css`)
  - Language toggle styles (`language-toggle.css`)
- **Vanilla JavaScript**: No framework dependencies
  - Translation system (`translations.js`)
  - Language toggle functionality (`language-toggle.js`)
  - Animations and scroll effects (`animation.js`)
  - Mobile navigation (`mobile-nav.js`)
  - Theme application (`apply-enhanced-theme.js`)

### Design System
- **Colors**: Dark theme with purple/blue/pink accent colors
- **Typography**: Oxanium (headings), Space Grotesk (body)
- **Effects**: Glassmorphism, gradients, reveal animations
- **Icons**: Feather icons library

### Infrastructure
- **Hosting**: GitHub Pages (via CNAME to baish.com.ar)
- **Version Control**: Git
- **No build process**: Direct HTML/CSS/JS files
- **No package manager**: No npm/yarn dependencies

### Third-party Integrations
- **Luma**: Event calendar embed (iframe)
- **Google Calendar**: ICS subscription link
- **Google Fonts**: Typography loading
- **Social platforms**: Instagram, LinkedIn, Telegram, WhatsApp links

## Status
- ✅ Core website launched and functional
- ⚠️ Book descriptions need Spanish translations
- ✅ Event calendar working with Luma integration
- ✅ Contact form strategy implemented correctly