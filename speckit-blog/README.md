# Personal Blog

A simple, fast personal blog powered by [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- Node.js 18+
- npm or yarn
- Netlify account (for deployment)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
speckit-blog/
├── .eleventy.js       # Eleventy configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── netlify.toml        # Netlify deployment settings
├── src/
│   ├── _data/          # Global data (site.json)
│   ├── _includes/
│   │   ├── layouts/    # Page layouts (base, post, tag)
│   │   └── partials/   # Reusable components (header, footer, form)
│   ├── css/            # Stylesheets
│   ├── posts/          # Blog posts (Markdown)
│   ├── index.njk       # Home page
│   └── *.njk           # Other pages (tags, subscribe, etc.)
└── _site/              # Build output (generated)
```

## Creating Posts

1. Create a new `.md` file in `src/posts/`:
   ```bash
   touch src/posts/2026-04-17-my-first-post.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My First Post"
   date: 2026-04-17
   tags:
     - tutorial
     - getting-started
   author: "Your Name"
   excerpt: "A brief description for SEO and cards"
   ---

   Your content here...
   ```

3. Preview at `http://localhost:8080/posts/my-first-post/`

## Tags

Add tags in the frontmatter `tags` array. Tag pages are automatically generated at `/tags/{tag}/`.

## Email Subscription

The subscribe form uses Netlify Forms. Submissions appear in your Netlify dashboard under Forms. Export as CSV for external newsletter services.

## Deployment

1. Push to GitHub
2. Connect to Netlify
3. Netlify auto-detects:
   - Build command: `npm run build`
   - Publish directory: `_site`

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove `_site/` output |

## Performance

- Static HTML, no JavaScript required for reading
- Tailwind CSS purged at build
- Lighthouse Performance target: ≥ 90
