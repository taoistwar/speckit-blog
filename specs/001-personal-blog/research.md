# Research: Personal Blog with Eleventy

## Research Findings

### 1. Eleventy Tag Pages

**Decision**: Use Eleventy's built-in pagination with `collections` to generate tag pages.

**Rationale**: Eleventy's pagination feature can iterate over `collections` to create pages for each tag automatically.

**Pattern**:
```yaml
---
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ["all", "post", "posts"]
filter: tag
permalink: /tags/{{ tag | slugify }}/
---
```

**Alternatives considered**:
- Manual tag pages: More work, harder to maintain
- Plugin-based tag generation: Adds dependency, less flexible

---

### 2. Tailwind CSS + Eleventy Integration

**Decision**: Use PostCSS with Tailwind CLI, not the Eleventy plugin.

**Rationale**: Simpler setup, works with any Eleventy version, Tailwind CLI watches for changes during dev.

**Pattern**:
1. `tailwind.config.js` for customization
2. PostCSS processes `src/css/main.css` → `src/css/styles.css`
3. Eleventy copies CSS to output

**Alternatives considered**:
- `@11ty/eleventy-plugin-syntaxhighlight`: Overkill for basic syntax highlighting
- Tailwind Eleventy plugin: Additional dependency, postcss simpler

---

### 3. Netlify Forms for Email Subscription

**Decision**: Use Netlify Forms with `data-netlify="true"` attribute.

**Rationale**: Native Netlify support, no backend code, spam protection built-in, submissions stored in Netlify dashboard.

**Pattern**:
```html
<form name="subscribe" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="subscribe" />
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>
```

**Alternatives considered**:
- Third-party newsletter service API: Adds complexity, requires API keys
- Custom backend: Goes against static-first principle

**Subscriber Export**: Download CSV from Netlify dashboard or use Zapier integration for Mailchimp sync.

---

### 4. RSS Feed

**Decision**: Use `@11ty/eleventy-plugin-rss` for Atom feed generation.

**Rationale**: Official Eleventy plugin, handles date formatting correctly, widely used.

**Pattern**: `feed.njk` template generates `/feed.xml` with all posts.

---

### 5. Markdown Processing

**Decision**: Use Eleventy's default markdown-it with plugins for:
- `markdown-it-anchor` for heading IDs
- `markdown-it-attrs` for class/ID on elements
- `markdown-it-highlight` for code syntax

**Rationale**: Sufficient for blog use, no need for additional markdown processing.
