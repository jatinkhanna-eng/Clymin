# SEO Implementation Guide

This document outlines the SEO features implemented for the Clymin website.

## 1. robots.txt

**Location:** `/public/robots.txt`

**Purpose:** Controls whether AI crawlers and search engines are allowed to read the site.

**Features:**
- Allows all standard search engine crawlers
- Explicitly allows AI crawlers (GPTBot, ChatGPT-User, CCBot, anthropic-ai, Claude-Web, Google-Extended, PerplexityBot, Applebot-Extended)
- Includes sitemap location

**Access:** Automatically accessible at `https://www.clymin.ai/robots.txt`

## 2. llms.txt (AI Structure File)

**Location:** `/public/llms.txt`

**Purpose:** Provides AI systems with a structured, human-curated overview of:
- Company identity
- Services
- Industries
- Priority pages

**Access:** Automatically accessible at `https://www.clymin.ai/llms.txt`

## 3. Schema Markup (JSON-LD)

### 3.1 Organization Schema (Global - Required)

**Location:** Included in `index.html` `<head>` section

**Purpose:** Provides machine-readable information about the company entity.

**Implementation:**
- Automatically included on every page via `index.html`
- Can be dynamically added using `SchemaMarkup` component

### 3.2 Service Schema (Per Service Page - Required)

**Usage Example:**
```tsx
import { SchemaMarkup } from '@/components/SchemaMarkup'

function ServicePage() {
  return (
    <>
      <SchemaMarkup
        service={{
          name: "Web & App Scraping",
          description: "AI-powered web and mobile app data extraction delivering structured, real-time datasets."
        }}
      />
      {/* Your page content */}
    </>
  )
}
```

**Required for:**
- `/services/web-app-scraping-ai-services`
- `/services/mobile-app-scraping-services`
- `/services/real-time-crawling-services`
- `/services/api-solutions`
- `/services/data-cleansing-transformation`
- `/services/automated-monitoring`

### 3.3 FAQ Schema (Where Applicable)

**Usage Example:**
```tsx
import { SchemaMarkup } from '@/components/SchemaMarkup'

function FAQPage() {
  const faqs = [
    {
      question: "What is web scraping?",
      answer: "Web scraping is the automated extraction of data from websites using software tools."
    },
    {
      question: "How does AI-powered scraping work?",
      answer: "AI-powered scraping uses intelligent agents that can adapt to website changes and extract data more efficiently than traditional methods."
    }
  ]

  return (
    <>
      <SchemaMarkup faq={faqs} />
      {/* Your FAQ content */}
    </>
  )
}
```

## 4. Meta Tags

**Location:** `index.html` `<head>` section

**Includes:**
- Title tag (optimized for SEO)
- Meta description
- Meta keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URL
- Robots meta tag

## 5. Utility Functions

**Location:** `/src/utils/schema.ts`

**Available Functions:**
- `getOrganizationSchema()` - Returns Organization schema
- `getServiceSchema(name, description)` - Returns Service schema
- `getFAQSchema(faqs)` - Returns FAQ schema
- `renderSchemaScript(schema)` - Converts schema to JSON-LD string

## Best Practices

1. **Organization Schema:** Always include on every page (already in index.html)
2. **Service Schema:** Must match page content exactly, no keyword stuffing
3. **FAQ Schema:** Only add where FAQs are present
4. **Schema Validation:** Use [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate
5. **Keep Updated:** Update schema when company information changes

## Testing

1. **Validate Schema:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Use [Schema.org Validator](https://validator.schema.org/)

2. **Check robots.txt:**
   - Visit `https://www.clymin.ai/robots.txt`

3. **Check llms.txt:**
   - Visit `https://www.clymin.ai/llms.txt`

## Notes

- All schema markup uses JSON-LD format (recommended by Google)
- Schema is injected in the `<head>` section for optimal SEO
- The `SchemaMarkup` component can be used for dynamic pages
- Static schema in `index.html` is for the homepage

