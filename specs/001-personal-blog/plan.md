# Implementation Plan: Personal Blog

**Branch**: `001-personal-blog` | **Date**: 2026-04-17 | **Spec**: [link](./spec.md)
**Input**: Feature specification from `/specs/001-personal-blog/spec.md`

## Summary

Build a personal blog using Eleventy (11ty) with Markdown-based content, tag organization, and email subscription via Netlify forms. The site will be static-first, performance-optimized, and progressively enhanced.

## Technical Context

**Language/Version**: JavaScript (Node.js 18+)  
**Primary Dependencies**: Eleventy 2.x, Tailwind CSS 3.x, @11ty/eleventy-plugin-rss  
**Storage**: Markdown files (content), JSON file (subscribers list), Netlify form submissions  
**Testing**: Playwright for E2E, built-in Eleventy dev server for preview  
**Target Platform**: Web (modern browsers), statically hosted on Netlify  
**Project Type**: Static website / blog  
**Performance Goals**: LCP < 1.5s, Lighthouse Performance ≥ 90  
**Constraints**: No JavaScript required for reading; Tailwind purges unused CSS at build  
**Scale/Scope**: Single author, < 100 posts initially, manual subscriber export

## Constitution Check

*GATE: Must pass before implementation. All gates must be satisfied.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| I. Static-First | All pages pre-rendered at build time | ✅ Eleventy generates static HTML |
| II. Markdown as Source of Truth | Content stored as `.md` files | ✅ `src/posts/*.md` |
| III. Performance by Default | Minimal deps, no render-blocking JS | ✅ Tailwind purged, no client JS required |
| IV. SEO-First Design | Semantic HTML, meta tags, sitemap | ✅ Eleventy plugins for sitemap, RSS |
| V. Progressive Enhancement | Reading works without JS | ✅ Content in HTML, forms POST natively |

**GATE RESULT**: All gates pass. Proceed to implementation.

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-blog/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # (to be created in Phase 0)
├── data-model.md        # (to be created in Phase 1)
├── quickstart.md        # (to be created in Phase 1)
└── tasks.md             # (to be created by /speckit.tasks)
```

### Source Code (Eleventy blog)

```text
speckit-blog/
├── .eleventy.js         # Eleventy configuration
├── package.json
├── tailwind.config.js
├── src/
│   ├── _data/           # Global data (site config)
│   ├── _includes/       # Nunjucks layouts
│   │   ├── layouts/
│   │   │   ├── base.njk
│   │   │   ├── post.njk
│   │   │   └── tag.njk
│   │   └── partials/
│   │       ├── header.njk
│   │       ├── footer.njk
│   │       └── subscribe-form.njk
│   ├── css/
│   │   └── main.css     # Tailwind entry
│   ├── posts/           # Blog posts as Markdown
│   │   └── posts.json   # Posts collection defaults
│   ├── tags/            # Tag pages (generated)
│   ├── feed.njk         # RSS feed template
│   └── index.njk        # Home page
├── _subscribers.json    # Subscriber list (Netlify export)
├── netlify.toml         # Netlify config (forms, redirects)
└── dist/                # Build output (generated)
```

**Structure Decision**: Single Eleventy project with Tailwind CSS. Markdown posts in `src/posts/`. Netlify handles form submissions; subscriber JSON exported manually or via Netlify API.

## Complexity Tracking

> No violations. All constitution gates pass without justification needed.

---

## Phase 0: Research ✅

- [x] Research Eleventy tag pagination patterns
- [x] Research Tailwind + Eleventy integration
- [x] Research Netlify form handling for static sites
- [x] Document Eleventy plugins for RSS/sitemap

**Output**: `research.md`

## Phase 1: Design & Contracts ✅

- [x] Create data-model.md with Post, Tag, Subscriber entities
- [x] Define frontmatter schema for posts
- [x] Create contracts/ for RSS feed format
- [x] Create quickstart.md for author workflow

**Outputs**: `data-model.md`, `contracts/feed.md`, `quickstart.md`

## Phase 2: Tasks (TODO)

- [ ] Run `/speckit.tasks` to generate task list from this plan
