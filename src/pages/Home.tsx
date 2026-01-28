import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ApplicationSection } from '@/components/ApplicationSection'
import { SolutionSection } from '@/components/SolutionSection'
import { WhatSetsUsApartSection } from '@/components/WhatSetsUsApartSection'
import { StrategicPartnerSection } from '@/components/StrategicPartnerSection'
import { CounterSection } from '@/components/CounterSection'
import { IndustriesSection } from '@/components/IndustriesSection'
import { ProjectSection } from '@/components/ProjectSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { BusinessSection } from '@/components/BusinessSection'
import { Footer } from '@/components/Footer'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import '../App.css'

export const Home = () => {
  const handleContactClick = () => {
    // Navigation is handled by Link components
  }

  const handleFeaturesClick = () => {
    console.log('Know Features clicked')
  }

  return (
    <div className="app">
      {/* SEO Schema Markup - Organization schema is already in index.html */}
      <SchemaMarkup organization={false} />

      {/* Decorative images - Left doodle */}
      <img
        src="/images/Land_Vector1.webp"
        alt="Decorative doodle"
        className="app__doodle app__doodle--left"
      />

      {/* Decorative images - Right doodle */}
      <img
        src="/images/Land_Vector.webp"
        alt="Decorative doodle"
        className="app__doodle app__doodle--right"
      />

      {/* Gears - scattered around */}
      <div className="app__gears app__gears--top">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 8L22 12L26 10L24 14L28 16L24 18L26 22L22 20L20 24L18 20L14 22L16 18L12 16L16 14L14 10L18 12L20 8Z"
            fill="#FFD700"
            opacity="0.6"
          />
          <circle cx="20" cy="16" r="2" fill="#FFD700" opacity="0.6" />
        </svg>
      </div>
      <div className="app__gears app__gears--center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 8L22 12L26 10L24 14L28 16L24 18L26 22L22 20L20 24L18 20L14 22L16 18L12 16L16 14L14 10L18 12L20 8Z"
            fill="#FFD700"
            opacity="0.6"
          />
          <circle cx="20" cy="16" r="2" fill="#FFD700" opacity="0.6" />
        </svg>
      </div>
      <div className="app__gears app__gears--bottom">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 8L22 12L26 10L24 14L28 16L24 18L26 22L22 20L20 24L18 20L14 22L16 18L12 16L16 14L14 10L18 12L20 8Z"
            fill="#FFD700"
            opacity="0.6"
          />
          <circle cx="20" cy="16" r="2" fill="#FFD700" opacity="0.6" />
        </svg>
      </div>

      <Header onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} onFeaturesClick={handleFeaturesClick} />
      <ApplicationSection />
      <SolutionSection />
      <WhatSetsUsApartSection />
      <StrategicPartnerSection />
      <CounterSection />
      <IndustriesSection />
      <ProjectSection />
      <HowItWorksSection />
      <TestimonialsSection label="Testimonials" heading="Trusted by Industry Leaders" />
      <BusinessSection onContactClick={handleContactClick} />
      <Footer />
    </div>
  )
}

