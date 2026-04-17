# Quickstart: Personal Blog

## Prerequisites

- Node.js 18+
- npm or yarn
- Netlify account (for deployment)

## Setup

```bash
# Clone the repo
git clone <repo-url>
cd speckit-blog

# Install dependencies
npm install

# Start local development server
npm run dev
```

Site runs at `http://localhost:8080`

## Creating a Post

1. Create a new Markdown file in `src/posts/`:
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
   ---

   This is my first blog post. Write your content here...

   ## Heading

   More content...
   ```

3. Preview at `http://localhost:8080/posts/my-first-post/`

## Adding Tags

Add tags in the frontmatter `tags` array:

```markdown
---
title: "Using Tags"
date: 2026-04-18
tags:
  - guide
  - tips
---
```

Tag pages auto-generate at `/tags/guide/` and `/tags/tips/`

## Building for Production

```bash
npm run build
```

Output goes to `_site/` directory.

## Deploying to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Netlify auto-detects Eleventy build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `_site`

## Managing Subscribers

1. Go to Netlify dashboard → Forms
2. View submissions under "subscribe" form
3. Export as CSV for external newsletter service
4. Optional: Set up Zapier to sync with Mailchimp

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove `_site/` output directory |
| `npx @11ty/eleventy` | Run Eleventy directly |

## Troubleshooting

**Posts not showing?**
- Check `draft: false` in frontmatter
- Verify date format is `YYYY-MM-DD`

**Tags not appearing?**
- Rebuild after adding new tags
- Check tag names match exactly (case-sensitive)

**Form not submitting?**
- Forms only work on deployed Netlify site, not locally
- Check form has `data-netlify="true"` attribute
