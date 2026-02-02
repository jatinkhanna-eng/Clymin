import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { BenefitItemCard } from '@/components/BenefitItemCard'
import '../components/BusinessSection/BusinessSection.css'
import './AutomatedMonitoring.css'

export const AutomatedMonitoring = () => {
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'brands' | 'analysts'>('brands')

  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />

      {/* Hero Section */}
      <section className="services-two-hero-section">
        <div className="services-container services-two-container-pading">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0052_Services%20Two%20Hero%20Star.webp"
            alt=""
            width="149"
            height="156"
            className="auto-fit services-two-hero-star-background"
          />
          <div className="home-one-hero-text-one home-three-future-text-section-one about-us-one-hero-one-text-section">
            <div className="home-one-hero-line home-three-future-section-line"></div>
            <div className="home-one-hero-text-bold-two home-three-future-text-one about-one-hero-one-text">
              Our Services
            </div>
          </div>
          <h1 className="services-two-hero-heading">Outsmart Your Competition with Automated Data Monitoring</h1>
          <div style={{
            alignItems: "start",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column"
          }}>
            <div className="services-two-hero-text-left">
              <p className="services-two-hero-paragraph">
                Don't just react to the market — anticipate it. Our Automated Monitoring tracks trends, brand mentions, and price fluctuations, empowering you to make accurate decisions.
              </p>
              <div className="about-contact-us">
                <Link to="/contact-us" className="button-font w-button">Contact Us</Link>
              </div>
              <div className="services-two-hero-bold-text">
                <strong>Elevate Your Business Insights</strong>
              </div>
              <div className="services-two-hero-line"></div>
              <div className="w-layout-grid services-two-hero-grid new">
                <div id="w-node-_097acd28-b20f-817d-5ace-4d90bdffabbe-096a000e" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">98.5%</h2>
                  <p className="services-two-hero-nubber-paragraph">Our data accuracy rate guarantees you receive precise and trustworthy information.</p>
                </div>
                <div id="w-node-_097acd28-b20f-817d-5ace-4d90bdffabc3-096a000e" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">65M+</h2>
                  <p className="services-two-hero-nubber-paragraph">Successful data extractions, offering unmatched stability and growth.</p>
                </div>
              </div>
            </div>
            <div className="services-two-hero-right-section"></div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min.png"
            loading="lazy"
            width="492"
            sizes="(max-width: 767px) 100vw, 492px"
            alt="A bunch of dashboards that are on a table"
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667942f959ac5b072d057af8_Main%20Dashboard-min.png 4845w"
            className="image-53 nnn"
          />
        </div>
      </section>

      {/* Price Monitoring Section */}
      <div className="w-layout-grid home-one-development-two-grid" >
        <div className="home-one-develop-two-image-wrapper">
          <div className="home-one-development-one-image">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675304ff7d36fb0947f01b0_automation%20(1)-min.png"
              loading="lazy"
              width="625"
              sizes="(max-width: 767px) 100vw, 625px"
              alt="Two smartphones with a bar graph on the screen"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675304ff7d36fb0947f01b0_automation%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675304ff7d36fb0947f01b0_automation%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675304ff7d36fb0947f01b0_automation%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675304ff7d36fb0947f01b0_automation%20(1)-min.png 1424w"
              className="image-16"
            />
          </div>
        </div>
        <div className="home-one-midle-container">
          <div className="home-one-perfomence-text-section">
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong>Price Monitoring</strong>
              </div>
            </div>
          </div>
          <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
            <strong className="bold-text-61">Empower Your Business with Advanced Monitoring Solutions</strong>
          </h2>
          <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
            Our cutting-edge AI-driven Automated Monitoring services are designed to enhance your market responsiveness and ensure you stay ahead of the competition.
          </p>
          <div className="home-one-development-border-two"></div>
          <div className="w-layout-grid grid-nine">
            <div id="w-node-_9a5c4d4e-6c8c-a21e-4ca1-838b76ea58c3-096a000e" className="home-one-develop-grid-box">
              <div className="home-one-develop-text-grid">
                <img
                  width="28"
                  height="29"
                  alt=""
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  className="home-one-develop-grid-arrow"
                />
                <p className="home-one-develop-grid-paragraph-text">
                  <span className="startech-home-one-develop-paragraph-span">
                    <strong>Competitor Price Tracking</strong> :{' '}
                  </span>
                  Keep a close watch on your competitors' prices, gaining insights into market trends and strategic pricing moves.
                </p>
              </div>
            </div>
            <div id="w-node-_9a5c4d4e-6c8c-a21e-4ca1-838b76ea58ca-096a000e" className="home-one-develop-grid-box">
              <div className="home-one-develop-text-grid">
                <img
                  width="28"
                  height="29"
                  alt=""
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  className="home-one-develop-grid-arrow"
                />
                <p className="home-one-develop-grid-paragraph-text">
                  <span className="startech-home-one-develop-paragraph-span">
                    <strong>Dynamic Pricing Optimization </strong>:{' '}
                  </span>
                  Leverage real-time market data to fine-tune your pricing, balancing competitiveness with profit maximization.
                </p>
              </div>
            </div>
            <div className="home-one-develop-text-grid">
              <img
                width="28"
                height="29"
                alt=""
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                className="home-one-develop-grid-arrow"
              />
              <p className="home-one-develop-grid-paragraph-text">
                <span className="startech-home-one-develop-paragraph-span">
                  <strong>Price Change Alerts </strong>:{' '}
                </span>
                Stay agile with instant notifications on price changes, enabling swift responses to maintain your competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Monitoring Section */}
      <div className="w-layout-grid home-one-development-two-grid" style={{ paddingTop: "100px" }}>
        <div id="w-node-a4b2abd7-d9ef-5c27-9c22-08dd08676acf-096a000e" className="home-one-development-two-wrapper">
          <div className="home-two-heading-wrapper">
            <div className="home-one-midle-container">
              <div className="home-one-perfomence-text-section">
                <div className="home-one-hero-text-one">
                  <div className="home-one-hero-line home-one-management-line"></div>
                  <div className="home-one-hero-text-bold-two home-one-management-text-one">
                    <strong>Brand Monitoring</strong>
                  </div>
                </div>
              </div>
              <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
                <strong>Empower Your Development with Smarter, Faster Tools</strong>
              </h2>
              <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
                Harness the power of our Automated Monitoring services, utilizing advanced AI to keep your brand informed and ahead of the curve, ensuring enhanced market presence and a stellar reputation.
              </p>
              <div className="home-one-development-border-two"></div>
              <div className="w-layout-grid grid-nine">
                <div id="w-node-a4b2abd7-d9ef-5c27-9c22-08dd08676ae1-096a000e" className="home-one-develop-grid-box">
                  <div className="home-one-develop-text-grid">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="29"
                      className="home-one-develop-grid-arrow"
                    />
                    <p className="home-one-develop-grid-paragraph-text">
                      <span className="startech-home-one-develop-paragraph-span">
                        <strong>Social Media Monitoring</strong> :{' '}
                      </span>
                      Monitor mentions of your brand across various social media platforms to stay updated on public perception and engagement.
                    </p>
                  </div>
                </div>
                <div id="w-node-a4b2abd7-d9ef-5c27-9c22-08dd08676ae8-096a000e" className="home-one-develop-grid-box">
                  <div className="home-one-develop-text-grid">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="29"
                      className="home-one-develop-grid-arrow"
                    />
                    <p className="home-one-develop-grid-paragraph-text">
                      <span className="startech-home-one-develop-paragraph-span">
                        Online Review Tracking :{' '}
                      </span>
                      Track reviews of your products or services on e-commerce platforms and review sites to identify areas for improvement and address customer concerns.
                    </p>
                  </div>
                </div>
                <div className="home-one-develop-text-grid">
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                    alt=""
                    width="28"
                    height="29"
                    className="home-one-develop-grid-arrow"
                  />
                  <p className="home-one-develop-grid-paragraph-text">
                    <span className="startech-home-one-develop-paragraph-span">
                      <strong>Sentiment Analysis</strong> :{' '}
                    </span>
                    Analyze the sentiment behind online mentions of your brand, helping you understand how your brand is perceived and take appropriate action to maintain a positive reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-a4b2abd7-d9ef-5c27-9c22-08dd08676aef-096a000e" className="home-one-deve-two-slider">
          <div className="home-one-develop-two-image-wrapper">
            <div className="home-one-development-one-image">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min.png"
                loading="lazy"
                width="694"
                sizes="(max-width: 767px) 100vw, 694px"
                alt="A person holding a phone with the word customer service review on it"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667941b5cd7918726e71d36e_img%20(1)-min.png 1844w"
                className="image-17"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="career-data-section" style={{ position: 'relative', zIndex: 1, paddingTop: '300px' }}>
        <div className="div-block-2">
          <div className="services-two-container career-data-container">
            <div className="home-one-hero-text-one career-hero-text-box-one">
              <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
                <strong>BENEFITS</strong>
              </div>
            </div>
            <h2 className="career-data-heading">
              <strong>We Provide the Power of Automated Monitoring & Transformation</strong>
            </h2>
            <p className="career-data-paragraph">
              Enhance your business operations with our state-of-the-art automated monitoring solutions. Stay ahead with real-time insights and proactive strategies.
            </p>
            <div className="w-layout-grid grid-3">

              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0085_Data%20Icon%20Six.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Live Price Tracking"
                description="Stay competitive with real-time price monitoring. Monitor competitor prices effortlessly and adjust your strategies instantly."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />

              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0075_Data%20Icon%20Five.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Adaptive Pricing"
                description="Stay competitive with real-time price monitoring. Monitor competitor prices effortlessly and adjust your strategies instantly."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />

              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a008a_Data%20Icon%20Four.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Brand Protection"
                description="Protect and enhance your brand's reputation. Use automated monitoring to track online mentions and safeguard your brand's image."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />



              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0087_Data%20icon%20Three.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Market Agility"
                description="Respond quickly to market shifts and customer feedback. Leverage automated alerts to make prompt business decisions."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />


              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Trend Insights"
                description="Gain insights into market trends and customer sentiments. Employ automated data collection to understand market dynamics and customer preferences."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />



              <BenefitItemCard
                layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Stock Optimization"
                description="Streamline your inventory management. Use real-time data to optimize stock levels, reduce overstocking, and prevent stockouts."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4b-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d4c-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized Services Section */}
      <section className="services-application-section services-overflow">
        <div className="services-container services-one-application-container">
          <div className="services-one-application-left">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min.png"
              sizes="(max-width: 767px) 100vw, 558px"
              width="558"
              height="Auto"
              alt="A tablet and a mobile device displaying a dashboard"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675248478b6453513ae2a49_Automated%20Monitoring%20(1)-min.png 3228w"
              className="auto-fit services-one-application-image"
            />
          </div>
          <div className="services-one-application-right">
            <div className="home-one-hero-text-one services-one-application-heading">
              <div className="home-one-hero-line services-providing-line-one"></div>
              <div className="home-one-hero-text-bold-two services-providing-text-one">
                <strong>Customized Services</strong>
              </div>
            </div>
            <h2 className="services-one-application-heading-text">
              <strong>Tailored to Your Business Needs</strong>
            </h2>
            <p className="servisec-application-paragraph">
              At Clymin, we provide customized automated monitoring solutions to meet your unique business needs.
            </p>
            <div data-w-id="cc7db07e-38f2-103e-a327-e4d9d18aac7a" className="home-tow-applycation-right-blue-text-section-two home-one-dev-text-one">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0163_Group%202580.png"
                alt=""
                width="24"
                height="24"
                className="auto-fit home-two-icon-one"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff94_Grow%20Image.webp"
                style={{ display: 'none' }}
                width="24"
                height="24"
                alt=""
                className="home-tow-applycation-grow-image-two"
              />
              <div className="home-tow-applycation-right-text">
                <div style={{ color: 'rgb(15,15,15)' }} className="home-tow-applycation-bold-text">
                  <strong>Competitor Insights</strong>
                </div>
                <p style={{ display: 'none' }} className="home-two-apply-description home-two-dev-paragraph-one">
                  Printing and typesetting has been the industry's standard dummy text.dabore et &nbsp;euismod sem a lacus fringilla hendrerit.
                </p>
              </div>
            </div>
            <div className="home-tow-applycation-right-line"></div>
            <div data-w-id="cc7db07e-38f2-103e-a327-e4d9d18aac83" className="home-tow-applycation-note-two home-one-dev-text-two">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffb6_Note%20Icon.webp"
                style={{ display: 'block' }}
                width="24"
                height="24"
                alt=""
                className="home-tow-applycation-note-icon"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0162_Group%202581.png"
                alt=""
                width="24"
                height="24"
                className="auto-fit home-two-dev-icon-two"
              />
              <div className="home-tow-applycation-right-text">
                <div style={{ color: 'rgb(15,15,15)' }} className="home-tow-applycation-bold-text">
                  <strong>AI-Driven Forecasting</strong>
                </div>
                <p style={{ display: 'none' }} className="home-two-apply-description home-two-dev-paragraph-two">
                  Printing and typesetting has been the industry's standard dummy text.dabore et &nbsp;euismod sem a lacus fringilla hendrerit.
                </p>
              </div>
            </div>
            <div className="home-tow-applycation-right-line"></div>
            <div data-w-id="cc7db07e-38f2-103e-a327-e4d9d18aac8c" className="home-tow-applycation-note-two home-one-develop-text-three">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff86_Copy%20Icon.webp"
                style={{ display: 'block' }}
                width="24"
                height="24"
                alt=""
                className="home-tow-application-copy-image"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0164_Group%202582.png"
                alt=""
                width="24"
                height="24"
                className="auto-fit home-two-develop-icon-three"
              />
              <div className="home-tow-applycation-right-text">
                <div style={{ color: 'rgb(15,15,15)' }} className="home-tow-applycation-bold-text">
                  <strong>Comprehensive Monitoring</strong>
                </div>
                <p style={{ display: 'none' }} className="home-two-apply-description home-two-develop-paragraph-three">
                  Printing and typesetting has been the industry's standard dummy text.dabore et &nbsp;euismod sem a lacus fringilla hendrerit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="services-two-idea-section">
        <div className="service-section-container">
          <div className="home-one-hero-text-one">
            <div className="home-one-hero-line"></div>
            <div className="home-one-hero-text-bold-two">
              <strong>Use Cases</strong>
            </div>
          </div>
          <h2 className="services-two-ideas-heading">
            Bringing New Business <span className="services-two-ideas-span">Solutions</span> And Ideas Advanced Digital
          </h2>
          <div className="services-two-ideas-button-box">
            <div
              data-w-id="5f61705b-71f5-31c1-fa69-85a28159ea35"
              className={`services-two-button-one services-two-idea-button-one ${activeTab === 'ecommerce' ? 'active' : ''}`}
              style={{ borderRadius: "12px", backgroundColor: activeTab === 'ecommerce' ? 'rgb(255, 109, 47)' : 'rgb(25, 58, 63)' }}
              onClick={() => setActiveTab('ecommerce')}
            >
              <div className="services-two-button-text">E-commerce businesses</div>
            </div>
            <div
              data-w-id="5f61705b-71f5-31c1-fa69-85a28159ea38"
              className={`services-two-button-one services-two-ideas-button-two ${activeTab === 'brands' ? 'active' : ''}`}
              style={{ borderRadius: "12px", backgroundColor: activeTab === 'brands' ? 'rgb(255, 109, 47)' : 'rgb(25, 58, 63)' }}
              onClick={() => setActiveTab('brands')}
            >
              <div className="services-two-button-text">Consumer brands</div>
            </div>
            <div
              data-w-id="5f61705b-71f5-31c1-fa69-85a28159ea3b"
              className={`services-two-button-one services-two-ideas-button-three ${activeTab === 'analysts' ? 'active' : ''}`}
              style={{ borderRadius: "12px", backgroundColor: activeTab === 'analysts' ? 'rgb(255, 109, 47)' : 'rgb(25, 58, 63)' }}
              onClick={() => setActiveTab('analysts')}
            >
              <div className="services-two-button-text">Market analysts</div>
            </div>
          </div>
          {/* E-commerce businesses content */}
          <div className={`services-two-idea-inner-section services-two-inner-two ${activeTab === 'ecommerce' ? 'active' : ''}`} style={{ display: activeTab === 'ecommerce' ? 'flex' : 'none' }}>
            <div className="services-two-idea-left">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0041_Green%20Polygon.webp"
                alt=""
                width="21.5"
                height="22"
                className="auto-fit services-two-green-polygon"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min.png"
                loading="lazy"
                width="1394"
                sizes="(max-width: 1439px) 100vw, 1394px"
                alt="A cell phone showing a bar graph on the screen"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min.png 4544w"
              />
            </div>
            <div className="services-two-idea-right">
              <h2 className="services-two-idea-right-head">
                <strong>E-commerce Excellence</strong>
              </h2>
              <p className="services-two-idea-paragraph-two">
                Enhance your e-commerce business by optimizing your pricing strategy through real-time competitor price monitoring. Our advanced scraping technology keeps you ahead in the competitive market.
              </p>
              <div className="services-two-idea-line"></div>
              <div className="services-two-idea-containt-one">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Dynamic Pricing Strategy</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Implement a dynamic pricing strategy by constantly adjusting your prices based on real-time competitor data, ensuring maximum profitability and market share.
                  </p>
                </div>
              </div>
              <div className="services-two-idea-containt-one services-two-idea-containt-padding">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Real-Time Market Insights</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Leverage real-time insights into market trends and consumer behavior to make informed, data-driven decisions that keep you ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Consumer brands content */}
          <div className={`services-two-idea-inner-section services-two-inner-two ${activeTab === 'brands' ? 'active' : ''}`} style={{ display: activeTab === 'brands' ? 'flex' : 'none' }}>
            <div className="services-two-idea-left">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0041_Green%20Polygon.webp"
                alt=""
                width="21.5"
                height="22"
                className="auto-fit services-two-green-polygon"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min.png"
                loading="lazy"
                width="1394"
                sizes="(max-width: 1439px) 100vw, 1394px"
                alt="A cell phone showing a bar graph on the screen"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aea9d04a97130cc31d69b_Chart%2037-min.png 2000w"
              />

            </div>
            <div className="services-two-idea-right">
              <h2 className="services-two-idea-right-head">
                <strong>Consumer Brand Management</strong>
              </h2>
              <p className="services-two-idea-paragraph-two">
                Maintain a positive brand reputation by tracking online mentions and reviews. Respond to customer feedback quickly and effectively to enhance customer satisfaction.
              </p>
              <div className="services-two-idea-line"></div>
              <div className="services-two-idea-containt-one">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Proactive Reputation Management</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Analyze customer sentiment to understand how your brand is perceived. Use these insights to make informed decisions that strengthen your brand image.
                  </p>
                </div>
              </div>
              <div className="services-two-idea-containt-one services-two-idea-containt-padding">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Customer Feedback Response</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Quickly and effectively respond to customer feedback to improve satisfaction. Show customers that their opinions matter and foster loyalty.
                  </p>
                </div>
              </div>
              <div className="services-two-idea-containt-one services-two-idea-containt-padding">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Brand Sentiment Analysis</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Quickly and effectively respond to customer feedback to improve satisfaction. Show customers that their opinions matter and foster loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Market analysts content */}
          <div className={`services-two-idea-inner-section servicer-inner-three ${activeTab === 'analysts' ? 'active' : ''}`} style={{ display: activeTab === 'analysts' ? 'flex' : 'none' }}>
            <div className="services-two-idea-left">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0041_Green%20Polygon.webp"
                alt=""
                width="21.5"
                height="22"
                className="auto-fit services-two-green-polygon"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min.png"
                loading="lazy"
                width="1317"
                sizes="(max-width: 1439px) 100vw, 1317px"
                alt="A tablet with a graph on the screen"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min.png 4476w"
              />
            </div>
            <div className="services-two-idea-right">
              <h2 className="services-two-idea-right-head">
                <strong>Market Analysis and Insights</strong>
              </h2>
              <p className="services-two-idea-paragraph-two">
                Keep abreast of market trends and price fluctuations. Provide accurate analyses and recommendations with comprehensive, up-to-date data.
              </p>
              <div className="services-two-idea-line"></div>
              <div className="services-two-idea-containt-one">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Comprehensive Market Monitoring</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Stay informed about market trends and price fluctuations with real-time data. Ensure your business decisions are backed by the latest market insights.
                  </p>
                </div>
              </div>
              <div className="services-two-idea-containt-one services-two-idea-containt-padding">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Accurate Analyses and Recommendations</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Utilize comprehensive data to provide precise analyses and actionable recommendations. Help your business navigate market changes effectively.
                  </p>
                </div>
              </div>
              <div className="services-two-idea-containt-one services-two-idea-containt-padding">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="29"
                  className="auto-fit services-two-arrow"
                />
                <div className="services-two-idea-content-text-box">
                  <div className="services-two-idea-content-head">
                    <strong>Strategic Decision Making</strong>
                  </div>
                  <p className="services-two-ideas-content-paragraph">
                    Leverage up-to-date information to make strategic decisions that drive business growth. Stay ahead of the competition with informed market analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br/>

      {/* Testimonials Section */}
      <TestimonialsSection label="Testimonials" heading="Words of Appreciation From Our Valued Clients" />

      {/* Business Section */}
      <BusinessSection onContactClick={handleContactClick} />
      <Footer />
    </>
  )
}
