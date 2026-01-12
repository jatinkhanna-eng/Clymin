import { useEffect } from 'react'
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/utils/schema'

interface SchemaMarkupProps {
  organization?: boolean
  service?: {
    name: string
    description: string
  }
  faq?: Array<{
    question: string
    answer: string
  }>
}

export const SchemaMarkup = ({ organization = true, service, faq }: SchemaMarkupProps) => {
  useEffect(() => {
    const schemas: object[] = []

    // Add Organization Schema (Global - Required on every page)
    if (organization) {
      schemas.push(getOrganizationSchema())
    }

    // Add Service Schema (Per Service Page - Required)
    if (service) {
      schemas.push(getServiceSchema(service.name, service.description))
    }

    // Add FAQ Schema (Where applicable)
    if (faq && faq.length > 0) {
      schemas.push(getFAQSchema(faq))
    }

    // Remove existing schema scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach((script) => {
      // Keep the one in index.html, remove dynamically added ones
      if (script.id === 'dynamic-schema') {
        script.remove()
      }
    })

    // Add new schema scripts
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `dynamic-schema-${index}`
      script.textContent = JSON.stringify(schema, null, 2)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`dynamic-schema-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [organization, service, faq])

  return null // This component doesn't render anything
}

