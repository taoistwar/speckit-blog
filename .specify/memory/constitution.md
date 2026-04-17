# Personal Blog Constitution

## Sync Impact Report (Prepended)

<!--
Version change: N/A → 1.0.0 (initial creation)
Modified principles: N/A (initial creation)
Added sections:
  - Core Principles (5 principles for blog requirements)
  - Technical Constraints
  - Development Workflow
  - Governance
Templates requiring updates: N/A (no prior constitution)
Follow-up TODOs: None
-->

## Core Principles

### I. Static-First Architecture

All pages MUST be pre-rendered at build time. No server-side rendering, no dynamic content generation at request time. The site consists entirely of static HTML, CSS, and image files served directly from a CDN or static file server. This ensures predictability, reliability, and zero runtime dependencies.

### II. Markdown as Source of Truth

All content MUST be stored as Markdown files in the repository. No database, no CMS, no headless CMS integration. Blog posts, pages, and navigation content live in `.md` files with frontmatter for metadata. This enables version control, easy backups, and friction-free writing.

### III. Performance by Default

Page loads MUST be fast by design. Core principles: minimal external dependencies, inlined critical CSS, lazy-loaded images with explicit dimensions, system fonts only, no render-blocking JavaScript. Target: Largest Contentful Paint under 1.5s on a 3G connection. Performance is a feature, not an afterthought.

### IV. SEO-First Design

Every page MUST be optimized for search engines from the start. Requirements: semantic HTML5 structure, unique `<title>` and `<meta description>` per page, Open Graph and Twitter Card meta tags, canonical URLs, XML sitemap, and robots.txt. Clean, readable URLs without query parameters or session IDs.

### V. Progressive Enhancement

Reading content MUST work without JavaScript. All core functionality (navigation, article content, links, forms if any) MUST function with HTML and CSS alone. JavaScript is allowed only for optional enhancements (analytics, comments, search) and MUST NOT block or delay content rendering. Users with JS disabled retain full reading access.

## Technical Constraints

### Technology Choices

- **Static Site Generator**: Hugo, Eleventy, or Zola preferred for simplicity and speed
- **Hosting**: Any static hosting provider (GitHub Pages, Netlify, Cloudflare Pages, S3+CloudFront)
- **Build Process**: Single command (`npm run build` or `hugo`) producing deployable `public/` directory
- **CSS**: Plain CSS or minimal preprocessor; no heavy CSS-in-JS or component frameworks
- **Images**: Modern formats (WebP, AVIF) with fallbacks; explicit width/height attributes required

### Content Structure

```text
content/
├── posts/           # Blog posts as Markdown
├── pages/          # Static pages (About, etc.)
└── _index.md       # Site configuration if needed

static/
├── css/            # Stylesheets
├── js/             # Optional enhancement scripts
└── images/         # Optimized images
```

## Development Workflow

### Content Creation

1. Create new `.md` file in `content/posts/` with frontmatter
2. Write content in Markdown
3. Preview locally (`hugo server` or equivalent)
4. Commit and push to deploy

### Build and Deploy

- Build produces static files in `public/`
- Deploy via git push or CI/CD pipeline
- No manual server configuration required

### Quality Gates

- All internal links MUST resolve (no 404s)
- All images MUST have alt text
- All pages MUST have unique titles and descriptions
- Lighthouse score: Performance ≥90, Accessibility ≥90

## Governance

This constitution defines the principles for the personal blog project. All implementation decisions MUST comply with these principles.

### Amendment Procedure

Amendments require:
1. A clear justification explaining why the change is necessary
2. Verification that existing content still works under new approach
3. Update to this document with new version number

### Compliance Review

Before any significant implementation or tool change, verify alignment with:
- Static-first: Does it require server-side processing?
- Markdown-first: Is content stored in version-controlled `.md` files?
- Performance: Will it add render-blocking resources?
- SEO: Does it maintain semantic structure and meta tags?
- Progressive enhancement: Does content remain accessible without JS?

### Version Policy

Semantic versioning: MAJOR for principle changes, MINOR for new constraints, PATCH for clarifications.

---

**Version**: 1.0.0 | **Ratified**: 2026-04-17 | **Last Amended**: 2026-04-17
