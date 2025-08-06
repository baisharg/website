# Technical Assumptions

## Repository Structure: Monorepo

Single repository containing all website code, assets, and documentation. This simplifies deployment to GitHub Pages and maintains all related code in one place. Structure follows standard static site organization with separate directories for styles, scripts, images, and pages.

## Service Architecture

**Static Site Architecture** - Pure client-side application with no backend services:
- Static HTML pages for all content (pre-rendered, no SSG needed)
- Vanilla JavaScript for interactivity (no framework/build process)
- CSS3 with multiple stylesheets for modular styling
- Third-party services via client-side integration (Luma calendar iframe, Google Calendar links)
- Form submissions handled by Formspree
- Blog content as static HTML pages within Research section (no CMS)

## Testing Requirements

**Manual Testing Focus** with convenience methods:
- Manual testing checklist for cross-browser compatibility
- Visual regression testing through manual review
- Accessibility testing using browser tools and screen readers
- No automated unit/integration tests (unnecessary for static site)
- Local development server for testing before deployment
- GitHub Pages preview deployments for PR reviews

## Additional Technical Assumptions and Requests

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
