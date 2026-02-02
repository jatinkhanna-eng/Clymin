import './WhatSetsUsApartSection.css'
import { FeatureCard } from '@/components/FeatureCard'

const features = [
  {
    iconSrc:
      'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffe6_About%20One%20Manage%20Icon%20two.webp',
    iconAlt: 'Scalable infrastructure icon',
    iconWidth: '85',
    iconHeight: '78',
    heading: 'Scalable for Your Needs',
    description:
      'Our robust infrastructure is designed to grow with your business, ensuring seamless scalability to meet increasing complexity.',
  },
  {
    iconSrc:
      'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffe1_About%20One%20Manage%20Icon%20One.webp',
    iconAlt: 'AI precision icon',
    iconWidth: '85',
    iconHeight: '77',
    heading: 'AI precision for superior insights',
    description:
      'Our intelligent agents learn, delivering highly accurate results. And transforms your data into valuable insights.',
    id: 'w-node-_6f46f65c-40e6-6880-6f78-e7aebd092e3b-0969ff47',
  },
  {
    iconSrc:
      'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffe0_About%20One%20Manage%20Icon%20Three.webp',
    iconAlt: 'Support icon',
    iconWidth: '88',
    iconHeight: '77',
    heading: 'Experience Exceptional Support',
    description:
      'Our dedicated team of experts is always here to assist you, providing 24/7 support to ensure your data needs are met with excellence.',
  },
]

export const WhatSetsUsApartSection = () => {
  return (
    <section className="about-us-one-applycation-section pad-twenty">
      <div className="about-container-section about-one-applycation-container">
        {/* <SectionHeader
          label="Data intelligence"
          heading="What sets us apart"
          containerClassName="home-three-future-text-section-one about-us-one-hero-one-text-section"
          lineClassName="home-three-future-section-line"
          labelClassName="home-three-future-text-one about-one-hero-one-text"
          headingClassName="about-one-applycation-head"
        /> */}


        <div className="services-two-container career-data-container" style={{paddingTop:"20px"}}>
          <div className="home-one-hero-text-one career-hero-text-box-one">
            <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
            <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
              Data intelligence
            </div>
          </div>
          <h2 className="career-data-heading">
            What sets us apart
          </h2>
        </div>
        <div className="w-layout-grid about-one-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconSrc={feature.iconSrc}
              iconAlt={feature.iconAlt}
              iconWidth={feature.iconWidth}
              iconHeight={feature.iconHeight}
              heading={feature.heading}
              description={feature.description}
              cardClassName="about-one-manage-card-one style-none"
              descriptionClassName="about-one-card-one-paragraph"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

