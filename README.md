# BAISH - Buenos Aires AI Safety Hub

## About

BAISH (Buenos Aires AI Safety Hub) is the premier community organization dedicated to AI safety research, education, and collaboration in Buenos Aires and Latin America. Our mission is to foster responsible AI development through research, workshops, hackathons, and community building.

This website serves as the digital home for BAISH, providing information about our initiatives, events, resources, and community members.

## Features

- Bilingual support (English/Spanish)
- Event calendar and registration
- Team member profiles
- Resources and learning materials
- Community blog and updates
- Responsive design for all devices

## Local Development Setup

### Prerequisites

- Python 3.x (for local server)
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Git

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/baish/baish-website.git
cd baish-website
```

2. Start a local HTTP server using Python:
```bash
python -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

### Development Guidelines

- No build process required - all files are served directly
- Use absolute paths or relative paths starting with `./`
- Test in multiple browsers before committing changes
- Ensure JavaScript functionality degrades gracefully

## GitHub Pages Deployment

This site is designed to be deployed directly to GitHub Pages:

1. Push changes to the `main` branch
2. In GitHub repository settings, enable GitHub Pages
3. Select `main` branch as the source
4. The site will be available at `https://[username].github.io/baish-website/`

For custom domain (baish.com.ar):
1. Create a `CNAME` file in the root with the domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Project Structure

```
/
├── index.html              # Homepage
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── images/            # Image assets
│   └── fonts/             # Web fonts
├── components/            # Web Components
│   ├── base/              # Base components
│   ├── layout/            # Layout components
│   ├── ui/                # UI components
│   └── embeds/            # Embed components
├── i18n/                  # Internationalization files
└── docs/                  # Documentation

```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript ES6+** - Vanilla JS, no framework
- **Web Components** - Custom elements for reusability
- **GitHub Pages** - Static hosting

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [baish.com.ar](https://baish.com.ar)
- Email: contact@baish.com.ar
- GitHub: [@baish](https://github.com/baish)

---

Built by the BAISH community in Buenos Aires