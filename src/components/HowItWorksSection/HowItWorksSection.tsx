import './HowItWorksSection.css'
import { SectionHeader } from '@/components/SectionHeader'
import { StepItem } from '@/components/StepItem'

const steps = [
  {
    number: '01',
    heading: 'Initial Consultation',
    description:
      'Consult with our experts to define key data sources, project goals, and KPIs for your data extraction success.',
  },
  {
    number: '02',
    heading: 'Custom Scraping Setup',
    description:
      'We create custom web crawlers to extract data accurately and efficiently, providing a sample dataset for your review.',
  },
  {
    number: '03',
    heading: 'Data Delivery & Maintenance',
    description:
      'Receive your data in your preferred format, on schedule. We ensure continuous extraction, adapt to changes, and provide ongoing support.',
  },
]

export const HowItWorksSection = () => {
  return (
    <section id="How-it-works" className="home-three-dream-section padding-twenty">
      <div className="home-three-dream-left"></div>
      <section className="home-three-container home-three-dream-container">
        {/* <SectionHeader
          label="How It Works"
          heading="your path to data-driven growth"
          containerClassName="home-three-dream-first-text"
          headingClassName="home-three-second-heading home-three-header-tow-small"
        /> */}

        <div className="services-two-container career-data-container" style={{ paddingTop: "20px" }}>
          <div className="home-one-hero-text-one career-hero-text-box-one">
            <div style={{color:"white"}}  className="home-one-hero-line home-one-management-line career-data-one-line"></div>
            <div style={{color:"white"}} className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
              How It Works
            </div>
          </div>
          <h2 style={{color:"white"}}  className="career-data-heading">
            your path to data-driven growth
          </h2>
        </div>
        <div className="home-three-dream-scroll-section">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min.png"
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min.png 3798w"
            width="473"
            sizes="(max-width: 479px) 100vw, 473px"
            alt="A screenshot of a cell phone with a conversation bubble above it"
            className="image-21"
          />
          <div className="home-three-dream-right">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                number={step.number}
                heading={step.heading}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

