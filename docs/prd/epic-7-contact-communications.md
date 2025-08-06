# Epic 7: Contact & Communications

**Goal:** Implement the contact form with Formspree integration, Substack newsletter signup, social media links, and FAQ section. This epic establishes communication channels between BAISH and its community, enabling inquiries, newsletter subscriptions, and social engagement.

## Story 7.1: Contact Page Structure

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

## Story 7.2: Contact Form Implementation

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

## Story 7.3: Newsletter Signup Integration

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

## Story 7.4: Social Media Hub

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

## Story 7.5: FAQ Accordion

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

## Story 7.6: Form Confirmation and Error Pages

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
