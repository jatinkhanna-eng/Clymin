/**
 * Schema markup utilities for SEO
 * Provides JSON-LD structured data for search engines and AI systems
 */

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  foundingDate: string
  sameAs: string[]
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  name: string
  provider: {
    '@type': string
    name: string
  }
  areaServed: string
  description: string
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

/**
 * Get Organization Schema (Global - Required on every page)
 */
export const getOrganizationSchema = (): OrganizationSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clymin',
    url: 'https://www.clymin.ai',
    logo: 'https://www.clymin.ai/logo.png',
    description:
      'AI-powered web scraping and data extraction company delivering real-time, actionable data to businesses.',
    foundingDate: '2012',
    sameAs: [
      'https://www.linkedin.com/company/clymin',
      'https://www.crunchbase.com/organization/clymin',
    ],
  }
}

/**
 * Get Service Schema (Per Service Page - Required)
 */
export const getServiceSchema = (
  serviceName: string,
  description: string
): ServiceSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Clymin',
    },
    areaServed: 'Worldwide',
    description: description,
  }
}

/**
 * Get FAQ Schema (Where applicable)
 */
export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): FAQSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Render schema as JSON-LD script tag
 */
export const renderSchemaScript = (schema: object): string => {
  return JSON.stringify(schema, null, 2)
}

