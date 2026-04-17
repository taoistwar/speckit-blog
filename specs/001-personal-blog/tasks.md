# Tasks: Personal Blog

**Input**: Design documents from `/specs/001-personal-blog/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, contracts/feed.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Eleventy project root: `speckit-blog/`
- Templates: `src/`
- Layouts: `src/_includes/layouts/`
- Partials: `src/_includes/partials/`
- CSS: `src/css/`
- Posts: `src/posts/`
- Build output: `_site/`

---

## Phase 1: Setup

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project directory structure `speckit-blog/` with `src/`, `src/_includes/`, `src/_includes/layouts/`, `src/_includes/partials/`, `src/css/`, `src/posts/`
- [ ] T002 Create `speckit-blog/package.json` with Eleventy 2.x, Tailwind CSS 3.x, @11ty/eleventy-plugin-rss, markdown-it-anchor, markdown-it-attrs dependencies
- [ ] T003 [P] Create `speckit-blog/.eleventy.js` with basic Eleventy configuration (input: src, output: _site, markdown plugins)
- [ ] T004 [P] Create `speckit-blog/tailwind.config.js` with content paths for Eleventy templates
- [ ] T005 [P] Create `speckit-blog/src/css/main.css` with Tailwind directives (@tailwind base, components, utilities)
- [ ] T006 Create `speckit-blog/src/_data/site.json` with site title, description, author, URL configuration
- [ ] T007 Create `speckit-blog/src/posts/posts.json` with posts collection defaults (layout, tags: post)
- [ ] T008 Add npm scripts to package.json: `dev` (eleventy --serve + tailwind), `build` (tailwind && eleventy), `clean` (rm -rf _site)

---

## Phase 2: Foundational

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete

- [ ] T009 Create `speckit-blog/src/_includes/layouts/base.njk` with HTML5 boilerplate, meta tags (title, description, OG), CSS link, semantic structure (header, main, footer)
- [ ] T010 Create `speckit-blog/src/_includes/partials/header.njk` with site logo/title link and main navigation
- [ ] T011 Create `speckit-blog/src/_includes/partials/footer.njk` with copyright, RSS link, subscribe form partial
- [ ] T012 Create `speckit-blog/src/index.njk` as home page listing recent posts with pagination
- [ ] T013 Create sample post `speckit-blog/src/posts/2026-04-17-welcome.md` with title, date, tags, sample content for testing
- [ ] T014 Verify build: `npm run build` produces `_site/index.html` and `_site/posts/welcome/`

**Checkpoint**: Foundation ready - site builds, home page renders, basic post displays

---

## Phase 3: User Story 1 - Write and Publish Markdown Posts (Priority: P1)

**Goal**: Author can create Markdown posts that render as HTML pages with title, date, content, and tags

**Independent Test**: Create new `.md` file in `src/posts/`, run build, post appears at `/posts/{slug}/`

### Implementation for User Story 1

- [ ] T015 [P] [US1] Create `speckit-blog/src/_includes/layouts/post.njk` extending base.njk with post-specific layout (article, header with title/date, content, tags, back link)
- [ ] T016 [P] [US1] Create `speckit-blog/src/posts/*.md` permalink template with proper URL structure `/posts/{slug}/`
- [ ] T017 [US1] Configure markdown-it with syntax highlighting plugin for code blocks in `.eleventy.js`
- [ ] T018 [US1] Add post metadata display (date formatted, author if set) in post.njk layout
- [ ] T019 [US1] Create `speckit-blog/netlify.toml` with build settings (build command: npm run build, publish directory: _site)

**Checkpoint**: User Story 1 complete - posts render with markdown, syntax highlighting works

---

## Phase 4: User Story 2 - Organize Posts by Tags (Priority: P1)

**Goal**: Readers can browse posts by clicking tags, tag pages list all posts with that tag

**Independent Test**: Tag a post with `tags: ["tutorial"]`, build, post appears on `/tags/tutorial/`

### Implementation for User Story 2

- [ ] T020 [P] [US2] Create `speckit-blog/src/tags.njk` with Eleventy pagination over collections to generate `/tags/{tag}/` pages
- [ ] T021 [P] [US2] Create `speckit-blog/src/_includes/layouts/tag.njk` extending base.njk for tag archive pages
- [ ] T022 [US2] Add tag links to post layout in post.njk (each tag as clickable link to `/tags/{tag}/`)
- [ ] T023 [US2] Create `speckit-blog/src/tags/index.njk` listing all tags used on the site with post counts
- [ ] T024 [US2] Configure Eleventy to filter out system tags (all, post) from tag collections in `.eleventy.js`
- [ ] T025 [US2] Test tag page generation with sample posts having different tags

**Checkpoint**: User Story 2 complete - tags display on posts, tag pages list all matching posts

---

## Phase 5: User Story 3 - Subscribe to Email Updates (Priority: P2)

**Goal**: Readers can subscribe with email, submissions stored in Netlify Forms

**Independent Test**: Submit email via form on deployed site, appears in Netlify dashboard under "subscribe" form

### Implementation for User Story 3

- [ ] T026 [P] [US3] Create `speckit-blog/src/_includes/partials/subscribe-form.njk` with Netlify form (method: POST, data-netlify: true, email input, hidden form-name field)
- [ ] T027 [P] [US3] Add subscribe-form partial to footer.njk
- [ ] T028 [US3] Create `speckit-blog/src/subscribe/index.njk` dedicated subscription page with form and explanation text
- [ ] T029 [US3] Add honeypot field to form for spam protection (hidden text input named _gotcha)
- [ ] T030 [US3] Configure Netlify form notifications in netlify.toml (optional, can also be done in dashboard)
- [ ] T031 [US3] Create `speckit-blog/src/subscribers/index.njk` placeholder page explaining subscriber management (links to Netlify dashboard)

**Checkpoint**: User Story 3 complete - form submits to Netlify, subscribers visible in dashboard

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T032 [P] Add RSS/Atom feed generation using @11ty/eleventy-plugin-rss (create `src/feed.njk` with feed template)
- [ ] T033 [P] Generate `src/sitemap.njk` for XML sitemap of all pages
- [ ] T034 [P] Add `robots.njk` for robots.txt allowing all crawlers
- [ ] T035 Create `speckit-blog/src/404.njk` custom 404 page with friendly message and recent posts
- [ ] T036 Add Open Graph image meta tags to base.njk for social sharing
- [ ] T037 Configure Tailwind for custom colors/fonts in tailwind.config.js
- [ ] T038 Add favicon link to base.njk (use SVG placeholder)
- [ ] T039 Performance audit: verify no render-blocking JS, CSS inlined or async, images lazy-loaded
- [ ] T040 Create `speckit-blog/README.md` with setup instructions, commands, deployment guide

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - US1 and US2 are independent (both P1, can proceed together or in either order)
  - US3 depends on Foundational (needs base layout with footer for form)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational - No dependencies on other stories (US1 post structure helps but not required)
- **User Story 3 (P2)**: Can start after Foundational - Uses base layout and footer (US1/2 not required)

### Within Each User Story

- Layouts before templates
- Templates before configuration
- Configuration before testing

### Parallel Opportunities

- T003, T004, T005 can run in parallel (setup files)
- T015, T016 can run in parallel (US1 layouts)
- T020, T021 can run in parallel (US2 layouts)
- T026, T027 can run in parallel (US3 form)
- T032, T033, T034 can run in parallel (Polish: feed, sitemap, robots)

---

## Parallel Example: User Story 1 + User Story 2 (Both P1)

```bash
# Launch US1 layout and US2 layout in parallel:
Task: "Create src/_includes/layouts/post.njk for US1"
Task: "Create src/tags.njk for US2"

# After layouts complete, launch post templates:
Task: "Configure post permalinks in .eleventy.js"
Task: "Add tag links to post.njk"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Create a new post, build, verify it appears
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add Polish phase → Final optimization → Deploy

### Suggested MVP Scope

**MVP = Phase 1 + Phase 2 + Phase 3 (User Story 1)**
- Core blog functionality: create and publish posts
- Deploy to Netlify
- Test with real content

**v1.1** = Phase 4 (User Story 2)
- Tag organization
- Tag pages

**v1.2** = Phase 5 (User Story 3)
- Email subscription form
- Netlify Forms setup

**v2.0** = Phase 6 (Polish)
- RSS feed
- Sitemap
- Performance optimization
- Documentation

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each phase or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Forms only work on deployed Netlify - test locally by checking HTML output contains form elements
