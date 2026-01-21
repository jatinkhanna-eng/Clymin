import React from 'react'
import { TestimonialCard } from '../TestimonialCard'
import './TestimonialsSection.css'

export interface TestimonialsSectionProps {
  label: string
  heading: string | React.ReactNode
  testimonials?: Array<{
    name: string
    role: string
    quote: string | React.ReactNode
    commaOrder?: 'left' | 'right'
  }>
}

export const TestimonialsSection = ({
  label,
  heading,
  testimonials,
}: TestimonialsSectionProps) => {
  // Default testimonials data
  const defaultTestimonials = [
    {
      name: 'Sarah T',
      role: 'Marketing Manager',
      quote: (
        <>
          Working with <strong>Clymin</strong> has transformed our <strong>e-commerce</strong> business. Their{' '}
          <strong>real-time insights</strong> into <strong>market trends</strong> and <strong>competitor pricing</strong> boosted our{' '}
          <strong>revenue</strong> by <strong>20%</strong>. The team's <strong>responsiveness</strong> and <strong>dedication</strong> are
          impressive. Highly recommend!
        </>
      ),
    },
    {
      name: 'Lisa R',
      role: 'Social Media Manager',
      quote: (
        <>
          <strong>Clymin's data extraction services</strong> have revolutionized our analysis. As a <strong>financial analyst</strong>, having{' '}
          <strong>accurate data</strong> is crucial. Clymin's <strong>intuitive tools</strong> and <strong>top-notch team</strong> improved our{' '}
          <strong>decision-making speed by 25%.</strong>
        </>
      ),
    },
    {
      name: 'Michael B',
      role: 'Senior Financial Analyst',
      quote: (
        <>
          As a <strong>social media manager</strong>, I rely on <strong>Clymin's scraping solutions</strong> for detailed data, improving{' '}
          <strong>audience engagement by 40%</strong>. Their team is responsive and supportive. <strong>Clymin</strong> is key to our{' '}
          <strong>digital marketing strategy</strong>.
        </>
      ),
    },
    {
      name: 'David L',
      role: 'CEO',
      quote: (
        <>
          Using <strong>Clymin's travel data intelligence</strong> for over a year has transformed our operations. Automating hotel reviews and
          pricing scraping improved <strong>competitive rate adjustments by 20%</strong>. Their services are <strong>reliable</strong> and{' '}
          <strong>efficient</strong>.
        </>
      ),
    },
    {
      name: 'Emily W',
      role: 'Real Estate Consultant',
      commaOrder: 'left' as const,
      quote: (
        <>
          <strong>Clymin</strong> made <strong>real estate data</strong> collection effortless, providing comprehensive property listings and market
          data. This improved our data collection efficiency by <strong>35%</strong>. The team is professional, knowledgeable, and always ready to
          help.
        </>
      ),
    },
    {
      name: 'Rachel M',
      role: 'Product Manager',
      quote: (
        <>
          <strong>Clymin </strong>exceeded our expectations with their <strong>competitive intelligence</strong> services. Their web scraping tools
          offered detailed insights into competitors' strategies, enhancing our competitive strategy development by <strong>30%. </strong>The tools
          are easy to use and provide valuable data
        </>
      ),
    },
  ]

  return (
    <section data-w-id="9d18acba-6173-9685-d838-871c09cfa2e4" className="about-three-testimonoal-section-two feature-testimonial-section">
      <div className="about-three-container about-three-testimonial-container">
        <div className="home-one-hero-text-one about-three-hero-text-one-box">
          <div className="home-one-hero-line about-two-applycation-line"></div>
          <div className="home-one-hero-text-bold-two about-two-applycation-text-one">{label}</div>
        </div>
        <h2 className="about-three-testimonial-head-three new">
          {typeof heading === 'string' ? <strong>{heading}</strong> : heading}
        </h2>
      </div>
      <div
        className="about-three-testimonial-card-section"
        style={{
          willChange: 'transform',
          transform: 'translate3d(-949.408px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {(testimonials || defaultTestimonials).reduce((acc, testimonial, index) => {
          const testimonialsList = testimonials || defaultTestimonials
          if (index % 2 === 0) {
            acc.push(
              <div key={index} className="about-three-testimonial-card-section-one">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  commaOrder={testimonial.commaOrder}
                />
                {testimonialsList[index + 1] && (
                  <TestimonialCard
                    name={testimonialsList[index + 1].name}
                    role={testimonialsList[index + 1].role}
                    quote={testimonialsList[index + 1].quote}
                    commaOrder={testimonialsList[index + 1].commaOrder}
                  />
                )}
              </div>
            )
          }
          return acc
        }, [] as React.ReactElement[])}
      </div>
    </section>
  )
}


