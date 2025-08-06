# Epic 1: Foundation & Core Infrastructure

**Goal:** Establish the project repository, development environment, basic HTML structure with routing, and deploy a functional "Hello World" site to GitHub Pages. This epic delivers the foundational infrastructure while also providing immediate visible output - a live website URL that stakeholders can visit.

## Story 1.1: Repository Setup and Initial Structure

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

## Story 1.2: GitHub Pages Configuration

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

## Story 1.3: Development Environment Setup

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

## Story 1.4: Base HTML Template and Routing

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
