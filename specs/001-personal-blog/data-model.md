# Data Model: Personal Blog

## Entities

### Post

Represents a blog article.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `date` | ISO 8601 date | Yes | Publication date |
| `slug` | string | Auto | URL-safe identifier (from filename or frontmatter) |
| `tags` | string[] | No | Array of tag names |
| `author` | string | No | Author name (defaults to site author) |
| `excerpt` | string | No | Short description for SEO/cards |
| `draft` | boolean | No | If true, excluded from builds |
| `templateContent` | HTML | Auto | Rendered Markdown content |

**Source**: Markdown file in `src/posts/*.md` with YAML frontmatter

**Relationships**:
- Many-to-Many with Tag (via `tags` array)
- Belongs to Author

---

### Tag

Represents a categorization label.

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Human-readable tag name |
| `slug` | string | URL-safe identifier (slugified name) |
| `count` | number | Number of posts with this tag |
| `url` | string | Link to tag page |

**Source**: Derived from all posts' `tags` arrays at build time

**Relationships**:
- Many-to-Many with Post

---

### Subscriber

Represents an email subscriber.

| Field | Type | Description |
|-------|------|-------------|
| `email` | string | Subscriber's email address |
| `subscribed_at` | ISO 8601 datetime | When subscription was confirmed |
| `form_name` | string | Always "subscribe" for this form |

**Source**: Netlify Forms dashboard (exported as CSV/JSON)

**Note**: Subscriber data is NOT stored in the blog repository. Managed via Netlify Forms.

---

### Feed

Represents the RSS/Atom feed.

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Feed title |
| `description` | string | Feed description |
| `url` | string | Site URL |
| `items` | Post[] | Recent posts (typically last 10) |
| `updated` | ISO 8601 datetime | Last build time |

**Source**: Generated at build time by `@11ty/eleventy-plugin-rss`

---

## Frontmatter Schema

```yaml
---
title: "Post Title"
date: 2026-04-17
tags:
  - tag1
  - tag2
author: "Author Name"
excerpt: "Optional short description for SEO and cards"
draft: false
---
```

---

## Validation Rules

1. **Post title**: Required, max 100 characters
2. **Post date**: Required, must be valid ISO 8601 date
3. **Tags**: Each tag must be alphanumeric with hyphens allowed (slugified)
4. **Email subscription**: Netlify handles validation server-side (email format)
5. **Draft posts**: Excluded from all collections, feeds, and tag pages
