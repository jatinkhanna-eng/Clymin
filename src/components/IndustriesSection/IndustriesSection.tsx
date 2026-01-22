import './IndustriesSection.css'
import { BenefitItemCard } from '@/components/BenefitItemCard'

export const IndustriesSection = () => {
  return (
    <section className="career-data-section">
      <div className="services-two-container career-data-container">
        <div className="home-one-hero-text-one career-hero-text-box-one">
          <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
          <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
            Industries we serve
          </div>
        </div>
        <h2 className="career-data-heading">
          unleash the power of data for
          <br />
          your industry
        </h2>
      </div>
      <div className="w-layout-grid grid-seven">
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a005c_Services%20Gallery%20Two.webp',
            width: 51,
            height: 'Auto',
            alt: 'E-commerce data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="E-commerce"
          description="Gain a strategic advantage with in-depth market analysis, competitor pricing, and consumer trend insights."
          variant="industries-grid"
          containerId="w-node-f740697b-6c29-d60c-92d6-10427c70860f-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0059_Services%20Gallery%20Four.webp',
            width: 51,
            height: 51,
            alt: 'linkedin data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Tours & Travel"
          description="Optimize your travel services with data-driven insights on market demand, pricing, and customer preferences."
          variant="industries-grid"
          containerId="w-node-f740697b-6c29-d60c-92d6-10427c708613-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0068_Services%20Gallery%20One.webp',
            width: 'Auto',
            height: 51,
            alt: 'Social network data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Social Network"
          description="Leverage AI to uncover social trends and sentiments, enhancing your engagement strategies."
          variant="industries-grid"
          containerId="w-node-f740697b-6c29-d60c-92d6-10427c708617-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0058_Services%20Gallery%20Three.webp',
            height: 51,
            alt: 'Entertainment data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading=" Entertainment"
          description="Stay ahead in the entertainment industry by analyzing viewer preferences, content performance, and emerging trends."
          variant="industries-grid"
          containerId="w-node-e551b226-9ec0-7b4c-3e13-2ed79ac06e94-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0057_Services%20Gallery%20Five.webp',
            height: 51,
            alt: 'Food delivery data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Food Delivery"
          description="Optimize operations with detailed data on menu items, prices, reviews, and delivery times from leading platforms."
          variant="industries-grid"
          containerId="w-node-_371e662c-bf5a-3bc4-debf-40565a343a1c-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0061_Services%20Gallery%20Six.webp',
            width: 51,
            height: 51,
            alt: 'Grocery price data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Grocery Price"
          description="Achieve a competitive edge with comprehensive analysis of grocery pricing trends and strategies."
          variant="industries-grid"
          containerId="w-node-_5b252a56-e4f8-3bd4-8636-daa1e1d4972c-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp',
            height: 51,
            alt: 'web scraping and web crawling',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Restaurant Intelligence"
          description="Enhance your restaurant operations with insights on customer preferences, competitor strategies, and market trends."
          variant="industries-grid"
          containerId="w-node-daab55fb-ecb5-5b7f-70a9-7402333ec941-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0055_Services%20galery%20Seven.webp',
            height: 51,
            alt: 'Real estate data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Real Estate Intelligence"
          description="Make informed decisions with detailed insights into property trends, pricing, and investment opportunities."
          variant="industries-grid"
          containerId="w-node-ebbb59b6-dcac-48e4-b5b5-a4e5a8ac1151-0969ff47"
        />
        <BenefitItemCard
          icon={{
            src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a005c_Services%20Gallery%20Two.webp',
            width: 51,
            height: 'Auto',
            alt: 'Quick commerce data scraping',
            className: 'auto-fit about-one-card-icon',
          }}
          heading="Quick Commerce"
          description="Outpace the competition with real-time insights into demand, inventory optimization, and last-mile delivery efficiency."
          variant="industries-grid"
          containerId="w-node-_09404223-4459-eeae-55cd-567e58c4ae95-0969ff47"
        />
      </div>
    </section>
  )
}

