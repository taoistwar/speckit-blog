# Contract: RSS/Atom Feed

## Overview

The blog generates an Atom feed at `/feed.xml` containing recent posts.

## Feed Contract

**Endpoint**: `GET /feed.xml`
**Content-Type**: `application/atom+xml`
**Authentication**: None (public)

### Response Schema

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Site Title</title>
  <subtitle>Site Description</subtitle>
  <link href="https://example.com/" rel="alternate"/>
  <link href="https://example.com/feed.xml" rel="self"/>
  <id>https://example.com/</id>
  <updated>2026-04-17T12:00:00Z</updated>
  <entry>
    <title>Post Title</title>
    <link href="https://example.com/posts/post-slug/"/>
    <id>https://example.com/posts/post-slug/</id>
    <published>2026-04-17T12:00:00Z</published>
    <updated>2026-04-17T12:00:00Z</updated>
    <author>
      <name>Author Name</name>
    </author>
    <content type="html"><![CDATA[Rendered HTML content]]></content>
    <summary>Post excerpt or description</summary>
  </entry>
  <!-- More entries... -->
</feed>
```

### Entry Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title, escaped XML |
| `link` | URL | Yes | Absolute URL to post |
| `id` | URL | Yes | Unique identifier (same as link) |
| `published` | ISO 8601 | Yes | Original publication date |
| `updated` | ISO 8601 | Yes | Last modification date |
| `author.name` | string | No | Author name |
| `content` | HTML | Yes | Full post content, CDATA wrapped |
| `summary` | string | No | Short description/excerpt |

### Requirements

1. Feed MUST contain last 20 posts only (performance)
2. Posts ordered newest-first
3. Drafts MUST NOT appear in feed
4. All dates in ISO 8601 format with timezone
5. HTML content wrapped in `<![CDATA[...]]>`

## Consumer Expectations

- Feed readers expect valid Atom XML
- All URLs must be absolute, not relative
- Content must be valid HTML (CDATA allows special chars)
