import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { BenefitItemCard } from '@/components/BenefitItemCard'
import '../components/BusinessSection/BusinessSection.css'
import './RealTimeCrawlingServices.css'

export const RealTimeCrawlingServices = () => {
  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />
      
      {/* Hero Section */}
      <section className="home-one-hero-section">
        <div className="home-one-container home-one-hero-container">
          <div className="home-one-hero-left-section home-one-hero-left-section-padding home-one-hero-left-padding align-center">
            <div className="home-one-hero-text-one"></div>
            <h1 className="home-one-hero-header text-center">
              <strong className="bold-text-12">Live Web Crawling: Your Competitive Advantage</strong>
            </h1>
            <p className="color-light-grey text-center">
              Stay ahead in today's fast-paced digital landscape with our Real-Time Crawling Services, providing up-to-minute information for quick strategic decisions.
            </p>
            <div className="home-one-hero-button-section startech-home-one-hero-button-padding">
              <Link to="/contact-us" className="button-font w-button">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Data Extraction Section */}
      <div className="w-layout-grid home-one-development-two-grid">
        <div className="home-one-develop-two-image-wrapper">
          <div className="home-one-development-one-image">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min.png"
              loading="lazy"
              width="444"
              sizes="(max-width: 479px) 100vw, 444px"
              alt="A computer and a tablet displaying a product review"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525212f411daae929ac69_realtimecrawl-dataextr%20(1)-min.png 3807w"
              className="image-28"
            />
          </div>
        </div>
        <div className="home-one-midle-container">
          <div className="home-one-perfomence-text-section">
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong className="bold-text-11">Real-Time Data Extraction</strong>
              </div>
            </div>
          </div>
          <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
            <strong className="bold-text-9">Fuel Your Business Growth with Live Web & App Insights</strong>
          </h2>
          <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
            Leverage our state-of-the-art Real-Time Crawling Service, driven by advanced AI agents, to extract precise and actionable insights from the web, tailored to your specific business needs..
          </p>
          <div className="home-one-development-border-two"></div>
          <div className="w-layout-grid grid-nine">
            <div id="w-node-_7ed0dd65-3378-a583-69dc-828e26ddeb32-0969ff3c" className="home-one-develop-grid-box">
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
                    <strong>Stay Ahead of the Curve</strong> :{' '}
                  </span>
                  Access the freshest data from websites and online sources, ensuring you're always armed with the latest information.
                </p>
              </div>
            </div>
            <div id="w-node-_7ed0dd65-3378-a583-69dc-828e26ddeb39-0969ff3c" className="home-one-develop-grid-box">
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
                    <strong>Gain Strategic Insights:</strong> &nbsp;
                  </span>
                  Uncover competitor strategies, pricing changes, and new product launches to inform your own business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Monitoring Section */}
      <div className="w-layout-grid home-one-development-two-grid">
        <div id="w-node-_99f14e62-eb1d-d792-4e75-bc8e77b201ce-0969ff3c" className="home-one-development-two-wrapper">
          <div className="home-two-heading-wrapper">
            <div className="home-one-midle-container">
              <div className="home-one-perfomence-text-section">
                <div className="home-one-hero-text-one">
                  <div className="home-one-hero-line home-one-management-line"></div>
                  <div className="home-one-hero-text-bold-two home-one-management-text-one">
                    <strong className="bold-text-14">Continuous Monitoring</strong>
                  </div>
                </div>
              </div>
              <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
                Real-Time Monitoring for Agile Decision-Making
              </h2>
              <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
                Our Live Crawler, powered by advanced AI, doesn't just scrape data – it continuously monitors the web, acting as your vigilant digital sentinel.
              </p>
              <div className="home-one-development-border-two"></div>
              <div className="w-layout-grid grid-nine">
                <div id="w-node-_99f14e62-eb1d-d792-4e75-bc8e77b201df-0969ff3c" className="home-one-develop-grid-box">
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
                        <strong>Instant Alerts</strong> :{' '}
                      </span>
                      Get notifications whenever key changes occur – be it competitor price adjustments, emerging trends, or shifts in customer sentiment.
                    </p>
                  </div>
                </div>
                <div id="w-node-_99f14e62-eb1d-d792-4e75-bc8e77b201e6-0969ff3c" className="home-one-develop-grid-box">
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
                        <strong>Early Warning System :</strong> &nbsp;
                      </span>
                      Identify potential threats or opportunities as they emerge, allowing you to proactively protect your interests and seize new opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_99f14e62-eb1d-d792-4e75-bc8e77b201ed-0969ff3c" className="home-one-deve-two-slider">
          <div className="home-one-develop-two-image-wrapper">
            <div className="home-one-development-one-image">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min.png"
                loading="lazy"
                width="375"
                sizes="(max-width: 479px) 100vw, 375px"
                alt="Two screens showing different views of the same device"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667525750c2d0d0c11564b6f_Contunies%20monitoring%20(1)-min.png 2709w"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="career-data-section">
        <div>
          <div className="services-two-container career-data-container finalchange">
            <div className="home-one-hero-text-one career-hero-text-box-one">
              <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
                <strong>BENEFITS</strong>
              </div>
            </div>
            <h2 className="career-data-heading">Unleashing The Power Of Real-Time Crawling Services</h2>
            <p className="career-data-paragraph">
              Our real-time crawling services provide your business with the most current data, keeping you at the forefront in an ever-changing market.
            </p>
            <div className="w-layout-grid career-grid">
              <BenefitItemCard
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0085_Data%20Icon%20Six.webp',
                  width: 51,
                  alt: '',
                }}
                heading="Access Latest Information"
                description="Stay ahead with up-to-the-minute data, essential for informed decision-making."
                variant="career-grid"
                containerId="w-node-c1001dd3-a412-05f0-6b7c-ea31324138c3-0969ff3c"
                headingTag="h6"
                strongClassName=""
              />
              <BenefitItemCard
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0075_Data%20Icon%20Five.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Adapt to Market Changes"
                description="Adapt to new trends and customer demands promptly with real-time insights."
                variant="career-grid"
                containerId="w-node-c1001dd3-a412-05f0-6b7c-ea31324138cd-0969ff3c"
                headingTag="h6"
                strongClassName=""
              />
              <BenefitItemCard
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a008a_Data%20Icon%20Four.webp',
                  width: 51,
                  height: 51,
                  alt: '',
                }}
                heading="Respond to Market Shifts"
                description="Gain precise and reliable data through state-of-the-art AI algorithms."
                variant="career-grid"
                containerId="w-node-c1001dd3-a412-05f0-6b7c-ea31324138d7-0969ff3c"
                headingTag="h6"
                strongClassName=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized Services Section */}
      <section className="home-one-lead-section">
        <div className="home-one-container home-one-lead-container">
          <div className="home-one-hero-text-one home-one-lead-text-one">
            <div className="home-one-hero-line home-one-management-line home-one-lead-text-one-line"></div>
            <div className="home-one-hero-text-box home-one-management-text-one home-one-lead-text-one-style home-one-text-style">
              CUSTOMIZED SERVICES
            </div>
          </div>
          <h2 className="home-one-lead-heading-text">Tailored Crawling Services for Your Unique Needs</h2>
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff78_Lead%20Vectoe%20Image.webp"
            alt=""
            width="47"
            height="80"
            className="image-two"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff76_Lead%20Rectangle%20Image.webp"
            width="27"
            height="27"
            alt=""
            className="home-one-lead-qube"
          />
          <div className="home-one-lead-box-one home-one-manege-first-box padding-twenty">
            <div className="home-one-manage-first-box-first-container width-hundred-persent">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff79_Lead%20Static%20Image%20Tow.webp"
                alt=""
                width="265"
                height="159"
                className="home-one-lead-box-tow-image-tow"
              />
              <div className="home-one-lead-box-bold-text">
                <strong>Targeted Data Extraction</strong>
              </div>
            </div>
            <div className="home-one-manage-first-box-right-container width-hundred-persent">
              <p className="home-one-lead-box-paragraph">
                We'll pinpoint the exact data sources and information types that matter most to you at the frequency you need, whether it's hourly, daily, or on-demand.
              </p>
              <a href="#" className="home-one-lead-box-arrow w-inline-block">
                <div className="lead-button lead-button-one">
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0094_LeadArrow.png"
                    alt="White Arrow"
                    width="17"
                    height="16"
                    className="auto-fit arrow-icon home-one-arrow-hover"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0095_Lead%20Arrow%20Black.png"
                    alt="Link"
                    width="17"
                    height="16"
                    className="auto-fit arrow-icon home-one-arrow-out"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="home-one-lead-box-one home-one-lead-box-tow padding-twenty margin-forty">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff77_Lead%20Sattic%20One.webp"
              alt=""
              width="263"
              height="190"
              className="home-one-lead-static-image-one"
            />
            <div className="home-one-manage-second-box-left-container width-hundred-persent">
              <div className="home-one-lead-box-bold-text text-width">
                <strong>Custom Data Formats</strong>
              </div>
            </div>
            <div className="home-one-second-box-rigght-container width-hundred-persent">
              <p className="home-one-lead-box-paragraph">
                Receive your extracted data in the format that seamlessly integrates into your existing systems, making it easy to analyze and utilize.
              </p>
              <a href="#" className="home-one-lead-box-arrow w-inline-block">
                <div className="lead-button lead-button-two">
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0094_LeadArrow.png"
                    alt="White Arrow"
                    width="17"
                    height="16"
                    className="auto-fit arrow-icon home-one-arrow-hover"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0095_Lead%20Arrow%20Black.png"
                    alt="Link"
                    width="17"
                    height="16"
                    className="auto-fit arrow-icon home-one-arrow-out"
                  />
                </div>
              </a>
            </div>
          </div>
          <Link to="/contact-us" className="button-font w-button">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection label="Testimonials" heading="Trusted by Industry Leaders" />

      {/* Business Section */}
      <BusinessSection onContactClick={handleContactClick} />
      <Footer />
    </>
  )
}
