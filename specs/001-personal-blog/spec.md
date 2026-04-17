# Feature Specification: Personal Blog

**Feature Branch**: `001-personal-blog`
**Created**: 2026-04-17
**Status**: Draft
**Input**: User description: "Build a personal blog where I can write posts in Markdown, organize them by tags, and have readers subscribe to email updates when new posts are published."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Write and Publish Markdown Posts (Priority: P1)

As a blog author, I want to write posts in Markdown so I can focus on content without worrying about HTML formatting.

**Why this priority**: Writing content is the core value of a blog. Without this, nothing else matters.

**Independent Test**: Can create a new `.md` file with frontmatter, run the build, and see the rendered post on the site.

**Acceptance Scenarios**:

1. **Given** a Markdown file with valid frontmatter in `content/posts/`, **When** the site is built, **Then** the post appears at the expected URL with title, date, and content rendered correctly.
2. **Given** a Markdown file with no frontmatter, **When** the site is built, **Then** the post uses sensible defaults (untitled, today's date).
3. **Given** a Markdown file with code blocks, **When** the site is built, **Then** code syntax highlighting renders correctly.

---

### User Story 2 - Organize Posts by Tags (Priority: P1)

As a reader, I want to browse posts by tags so I can find content related to topics I'm interested in.

**Why this priority**: Tag-based navigation helps readers discover relevant content and improves site engagement.

**Independent Test**: Can tag a post with `tags: ["hugo", "web"]`, build the site, and find that post accessible via `/tags/hugo/` and `/tags/web/` pages.

**Acceptance Scenarios**:

1. **Given** a post with `tags: ["tutorial", "python"]` in frontmatter, **When** the site is built, **Then** the post is listed on `/tags/tutorial/` and `/tags/python/` pages.
2. **Given** multiple posts with the same tag, **When** the tag page is visited, **Then** all posts with that tag are listed in reverse chronological order.
3. **Given** a tag with no posts assigned, **When** the site is built, **Then** no standalone tag page is generated for that tag.

---

### User Story 3 - Subscribe to Email Updates (Priority: P2)

As a reader, I want to subscribe with my email address so I receive notifications when new posts are published.

**Why this priority**: Email subscription builds an audience and drives repeat traffic. This is an optional enhancement layer since the constitution requires static-first architecture.

**Independent Test**: Can submit an email address via a subscription form and receive a confirmation email (via external newsletter service integration).

**Acceptance Scenarios**:

1. **Given** a valid email address entered in the subscription form, **When** the form is submitted, **Then** the reader receives a confirmation email to verify their subscription.
2. **Given** an invalid email address (no @, no domain), **When** the form is submitted, **Then** an error message is displayed and no submission occurs.
3. **Given** an already-subscribed email address, **When** the subscription form is submitted again, **Then** the user receives a message indicating they're already subscribed.

---

### Edge Cases

- What happens when a post has 10+ tags? Should display all tags without breaking layout.
- How does the system handle special characters in tag names (e.g., "C++", "C#")?
- What happens if the newsletter service API is unavailable during subscription submission?
- How does the site handle posts with no tags assigned?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render Markdown files with frontmatter as HTML pages
- **FR-002**: Posts MUST display title, publish date, content, and tags
- **FR-003**: System MUST generate tag listing pages for each unique tag
- **FR-004**: Tag pages MUST list all posts with that tag in reverse chronological order
- **FR-005**: System MUST include a subscription form on the site (typically in footer or dedicated page)
- **FR-006**: System MUST integrate with an external newsletter service (e.g., Buttondown, Mailchimp, ConvertKit) for email subscriptions
- **FR-007**: Subscription form submission MUST work via HTML form POST (progressive enhancement: JavaScript enhances but is not required)
- **FR-008**: System MUST generate an RSS/Atom feed for all posts
- **FR-009**: Each post page MUST display related tags as clickable links
- **FR-010**: System MUST list all tags on the site (e.g., via `/tags/` page or sidebar)

### Key Entities *(include if feature involves data)*

- **Post**: Represents a blog article with title, slug, content (Markdown), publish date, author, and tags
- **Tag**: Represents a categorization label with a name and slug; posts can have multiple tags
- **Subscriber**: Represents an email subscriber managed externally via newsletter service (not stored in blog repo)
- **Feed**: XML document listing recent posts for RSS readers

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new Markdown post appears on the site within 5 minutes of adding the file and running build
- **SC-002**: Clicking any tag on a post navigates to a page listing all posts with that tag
- **SC-003**: Email subscription submission successfully adds address to external newsletter service
- **SC-004**: RSS feed contains all published posts and updates when new posts are added
- **SC-005**: Site builds with a single command and produces static HTML/CSS/JS in output directory

## Assumptions

- **Static Site Generator**: Eleventy (11ty) for its minimal config, JavaScript flexibility, and excellent Markdown support
- **CSS Framework**: Tailwind CSS for utility-first styling with minimal overhead
- **Hosting**: Netlify for static hosting with built-in form handling for email subscriptions
- **Subscriber Storage**: JSON file (via Netlify form submissions or manual management); Mailchimp integration optional for v2
- **Email Handling**: Netlify form POST captures subscriber emails; exported as JSON for external service integration
- **Out of Scope for v1**: Comments, full-text search, analytics, pagination beyond basic listing, rich media embeds
