import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import '../components/BusinessSection/BusinessSection.css'
import './WebAndAppScrapingAIServices.css'

export const WebAndAppScrapingAIServices = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<number>(3) // Social Media Insights Mining is active by default

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
          <h1 className="services-two-hero-heading">AI-Powered Web & App Scraping Solutions</h1>
          <div className="services-two-hero-second-section newweb">
            <div className="services-two-hero-text-left">
              <p className="services-two-hero-paragraph">Elevate your business with our AI-powered Web & App Scraping solutions. Our advanced technology ensures precise data extraction and actionable insights to keep you ahead.</p>
              <div className="about-one-button">
                <Link to="/contact-us" className="button-font w-button">Contact Us</Link>
              </div>
              <div className="services-two-hero-bold-text">
                <strong>Trusted by Clients Worldwide</strong>
              </div>
              <div className="services-two-hero-line"></div>
              <div className="w-layout-grid services-two-hero-grid">
                <div id="w-node-_2b8702f2-967b-6a40-4170-58c2cc713f43-096a000f" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">98.5%</h2>
                  <p className="services-two-hero-nubber-paragraph">Client satisfaction rate with our highly efficient and reliable scraping solutions.</p>
                </div>
                <div id="w-node-_2b8702f2-967b-6a40-4170-58c2cc713f48-096a000f" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">65M+</h2>
                  <p className="services-two-hero-nubber-paragraph">Data points extracted and analyzed.</p>
                </div>
              </div>
            </div>
            <div className="services-two-hero-right-section">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0045_Services%20Hero%20Two%20Hero%20Static.webp"
                sizes="(max-width: 479px) 100vw, 181px"
                width="181"
                height="Auto"
                alt=""
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0045_Services%2520Hero%2520Two%2520Hero%2520Static-p-500.webp 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0045_Services%20Hero%20Two%20Hero%20Static.webp 688w"
                className="auto-fit services-two-hero-static-image"
              />
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0053_Services%20two%20Hero%20Commerce.webp"
                sizes="(max-width: 479px) 100vw, 291px"
                width="291"
                height="Auto"
                alt="Static Level Image"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0053_Services%2520two%2520Hero%2520Commerce-p-500.webp 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0053_Services%20two%20Hero%20Commerce.webp 628w"
                className="auto-fit services-two-hero-static-level"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section with Tabs */}
      <section className="about-three-business-section">
        <div className="about-three-container about-three-business-section">
          <div className="home-one-hero-text-one about-three-hero-text-one-box">
            <div className="home-one-hero-line about-two-applycation-line"></div>
            <div className="home-one-hero-text-bold-two about-two-applycation-text-one">Key features</div>
          </div>
          <h2 className="about-three-business-head">The Impact We Can Make on Your Business Growth</h2>
          <p className="about-three-business-paragraph">Transform your business trajectory with our cutting-edge solutions. From harnessing extensive data scraping capabilities to delivering actionable analytics, we equip you with the tools to propel your success.</p>
          <div className="tabs w-tabs">
            <div className="tabs-menu w-tab-menu" role="tablist">
              <a
                className={`tab-link-tab-1 w-inline-block w-tab-link ${activeFeatureTab === 1 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(1)}
                role="tab"
              >
                <div className="text-block-8">E-Commerce<br /> Data Scraping</div>
              </a>
              <a
                className={`tab-link-tab-2 w-inline-block w-tab-link ${activeFeatureTab === 2 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(2)}
                role="tab"
              >
                <div className="text-block-9">Food Delivery<br />Scraping</div>
              </a>
              <a
                className={`tab-link-tab-3 w-inline-block w-tab-link ${activeFeatureTab === 3 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(3)}
                role="tab"
              >
                <div className="text-block-10">Social Media <br />Insights Mining</div>
              </a>
              <a
                className={`tab-link-tab-4 w-inline-block w-tab-link ${activeFeatureTab === 4 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(4)}
                role="tab"
              >
                <div className="text-block-11">Travel Data <br />Intelligence</div>
              </a>
              <a
                className={`tab-link-tab-5 w-inline-block w-tab-link ${activeFeatureTab === 5 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(5)}
                role="tab"
              >
                <div className="text-block-7">Real Estate <br />Data Scraping</div>
              </a>
              <a
                className={`tab-link-tab-6 w-inline-block w-tab-link ${activeFeatureTab === 6 ? 'w--current' : ''}`}
                onClick={() => setActiveFeatureTab(6)}
                role="tab"
              >
                <div className="text-block-12">Financial <br />Data Insights</div>
              </a>
            </div>
            <div className="w-tab-content">
              {/* Tab 1: E-Commerce Data Scraping */}
              <div className={`w-tab-pane ${activeFeatureTab === 1 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one _11">
                  <div className="about-three-business-left-section">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min.png 4544w"
                      alt="A cell phone showing a bar graph on the screen"
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d2930ed20f7bdb91f3e_Chart%2044-min.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">E-Commerce Data Scraping</div>
                    </div>
                    <h2 className="about-three-business-head-text">Unleash the Power of Data-driven Growth</h2>
                    <p className="about-three-business-right-paragraph">Harness the potential of our advanced E-Commerce Data Scraping services to accelerate your e-commerce success.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Comprehensive Data Extraction</strong>:</span> Extract detailed product information, including descriptions, images, prices, reviews, and ratings, from leading e-commerce platforms.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>AI-Powered Precision:</strong> </span>Our advanced AI algorithms ensure accurate and reliable data extraction, minimizing errors and enhancing data quality.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Competitive Edge:</strong> </span>Stay ahead of the curve by monitoring market trends, competitor pricing, and customer sentiment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 2: Food Delivery Scraping */}
              <div className={`w-tab-pane ${activeFeatureTab === 2 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one _11">
                  <div className="about-three-business-left-section">
                    <img
                      width="540"
                      sizes="100vw"
                      alt="A line graph showing delivery time and times"
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min.jpg"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min-p-500.jpg 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min-p-800.jpg 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min-p-1080.jpg 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min-p-1600.jpg 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4f13d4c529db07001627_Project%20(1)-min.jpg 1805w"
                      className="image-26"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">FOOD DELIVERY SCRAPING</div>
                    </div>
                    <h2 className="about-three-business-head-text"><strong>Enhance Your Food Delivery Business with Smart Data Solutions</strong></h2>
                    <p className="about-three-business-right-paragraph">Gain a competitive edge with real-time data insights tailored to your precise needs.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>In-Depth Data Collection</strong> :</span> Extract comprehensive information on menu items, prices, reviews, and delivery times from leading food delivery platforms. Gain a complete understanding of market dynamics and customer preferences.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Real-time Price Dynamics </strong>: </span>Stay ahead of the competition with up-to-the-minute pricing information. Monitor price changes and trends to adjust your offerings and promotions effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 3: Social Media Insights Mining */}
              <div className={`w-tab-pane ${activeFeatureTab === 3 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one">
                  <div className="about-three-business-left-section">
                    <img
                      sizes="(max-width: 1279px) 100vw, 1280px"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/67b956e1688d5aa74b6312cb_7127989-Photoroom-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67b956e1688d5aa74b6312cb_7127989-Photoroom-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67b956e1688d5aa74b6312cb_7127989-Photoroom-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67b956e1688d5aa74b6312cb_7127989-Photoroom.png 1280w"
                      alt=""
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/67b956e1688d5aa74b6312cb_7127989-Photoroom.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">SOCIAL MEDIA INSIGHTS MINING</div>
                    </div>
                    <h2 className="about-three-business-head-text"><strong>Data Intelligence to Elevate Your Social Media Strategy</strong></h2>
                    <p className="about-three-business-right-paragraph">Enhance your marketing strategy with valuable insights from social media platforms.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Comprehensive Data Collection</strong> :</span> Gather data from platforms like Twitter to understand consumer behaviour, market trends, and brand sentiment.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>AI-Powered Precision</strong> : </span>Use AI-powered data extraction for accurate and up-to-date information, enabling strategic decisions and optimizing your social media presence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 4: Travel Data Intelligence */}
              <div className={`w-tab-pane ${activeFeatureTab === 4 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one _11">
                  <div className="about-three-business-left-section">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min.png 5178w"
                      alt="A bar chart showing the number of tickets in a ticket book"
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a4d29d248b3f31527f52e_Chart%2045-min.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">TRAVEL DATA INTELLIGENCE</div>
                    </div>
                    <h2 className="about-three-business-head-text"><strong>Optimize Your Travel Business with Intelligent Data Solutions</strong></h2>
                    <p className="about-three-business-right-paragraph">Leverage our advanced services to stay competitive in the travel industry, providing unmatched service to your customers.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Automated Data Scraping </strong>:</span> Detailed scraping of travel sites, extracting valuable data on hotel reviews, pricing, and availability.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Market Trend Monitoring </strong>: </span>Monitor market trends, optimize pricing strategies, and enhance customer experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 5: Real Estate Data Scraping */}
              <div className={`w-tab-pane ${activeFeatureTab === 5 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one _11">
                  <div className="about-three-business-left-section">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min.png 3983w"
                      alt="A tablet with a bar chart on it"
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a9fa4bcffa3e46e33a4f9_Chart%207-min.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">REAL ESTATE DATA SCRAPING</div>
                    </div>
                    <h2 className="about-three-business-head-text"><strong>Revolutionize Your Real Estate Strategy with Advanced Data Solutions</strong></h2>
                    <p className="about-three-business-right-paragraph">Unlock valuable insights and make informed decisions in the real estate market. Leverage comprehensive data and AI-driven accuracy to stay competitive.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Comprehensive Data Collection</strong> :</span> Gather detailed information on property listings, including prices, features, and locations, to gain a full market overview.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>AI-Powered Accuracy</strong> : </span>Make informed investment decisions, analyze market trends, and optimize property marketing strategies with highly reliable data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 6: Financial Data Insights */}
              <div className={`w-tab-pane ${activeFeatureTab === 6 ? 'w--tab-active' : ''}`} role="tabpanel">
                <div className="about-three-business-card-section-one about-three-develop-one _11">
                  <div className="about-three-business-left-section">
                    <img
                      width="563"
                      sizes="100vw"
                      alt="A tablet with a graph on the screen"
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min.png"
                      loading="lazy"
                      srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667a52dd6322f8edff47a211_Chart%2047-min.png 4476w"
                    />
                  </div>
                  <div className="about-three-business-right-text">
                    <div className="home-one-hero-text-one about-three-hero-text-one-box">
                      <div className="home-one-hero-line about-two-applycation-line"></div>
                      <div className="home-one-hero-text-bold-two about-two-applycation-text-one">FINANCIAL DATA INSIGHTS</div>
                    </div>
                    <h2 className="about-three-business-head-text"><strong>Elevate Your Financial Strategy with Cutting-Edge Data Solutions</strong></h2>
                    <p className="about-three-business-right-paragraph">Gain a comprehensive understanding of the financial market with real-time data and intelligent insights.</p>
                    <div className="about-three-business-line"></div>
                    <div className="w-layout-grid about-three-business-grid">
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Real-Time Data Retrieval</strong> :</span> Access real-time market data, stock prices, and financial reports from diverse sources for a comprehensive financial overview.
                        </p>
                      </div>
                      <div className="about-three-business-grid-inner">
                        <img width="28" height="28" alt="" src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0028_About%20Three%20Business%20Arrow.webp" className="auto-fit about-three-business-arrow" />
                        <p className="about-three-business-grid-paragraph">
                          <span className="about-three-business-grid-heading"><strong>Intelligent Analysis </strong>: </span>Utilize AI-driven data extraction techniques for accurate and consistent information. Make well-informed financial decisions to enhance your portfolio's performance and reduce risks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="home-one-management-section">
        <div className="home-one-hero-text-one nwc">
          <div className="home-one-hero-line home-one-management-line"></div>
          <div className="home-one-hero-text-box home-one-management-text-one home-one-text-style">BENEFITS</div>
        </div>
        <div className="w-layout-blockcontainer home-one-management-head-text w-container">
          <h2 className="home-one-management-head-left-text text-center">
            <strong className="bold-text-16">Transform Your Data Strategy</strong>
          </h2>
          <p className="home-one-management-text-right text-center">Harness Clymin's advanced AI technology to elevate your data collection and analysis. Stay competitive and drive growth with real-time, actionable insights.</p>
        </div>
        <div className="home-one-container align-center">
          <div className="w-layout-grid home-one-hover-grid">
            <div className="home-one-manager-grid-block startech-home-one-magager-grid-card-one relative overflow style-none">
              <div className="home-one-grid-border absolute"></div>
              <div className="home-one-manager-grid-inner-box-one">
                <img src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff85_Table.webp" alt="" width="51" height="51" className="home-one-manager-icon" />
                <div className="home-one-manager-grid-text-heading-two"><strong>Advanced Web Scraping Solutions</strong></div>
              </div>
              <div className="text-block-6 margin-grid-paragraph">Leverage our cutting-edge web scraping services to gain deep insights. Our technology ensures efficient data collection, transforming how you analyze and utilize information.</div>
            </div>
            <div className="home-one-manager-grid-block home-one-manager-card-tow relative overflow style-none">
              <div className="home-one-grid-border absolute background-color-orange"></div>
              <div className="home-one-manager-grid-inner-box-one">
                <img src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff80_Rocket.webp" alt="" width="51" height="51" className="startech-home-one-manager-icons" />
                <div className="home-one-manager-grid-text-heading-two"><strong>Mobile Scraping for Real-Time Insights</strong></div>
              </div>
              <div className="text-block-6 margin-grid-paragraph">Unlock the potential of mobile data with our robust scraping solutions. Extract real-time, valuable data from mobile apps to stay ahead and make smarter business decisions.</div>
            </div>
            <div className="home-one-manager-grid-block home-one-manager-card-three relative overflow style-none">
              <div className="home-one-grid-border absolute background-color-blue"></div>
              <div className="home-one-manager-grid-inner-box-one">
                <img src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff7d_Save%20Earth.webp" alt="" width="51" height="51" className="home-one-manager-icon" />
                <div className="home-one-manager-grid-text-heading-two"><strong>Efficient Data Integration</strong></div>
              </div>
              <div className="text-block-6 margin-grid-paragraph">Streamline your data processes with our comprehensive scraping solutions. Enhance operational efficiency and customer experiences through seamless data integration.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Services Section */}
      <div className="w-layout-grid home-one-development-two-grid">
        <div className="home-one-development-two-wrapper">
          <div className="home-two-heading-wrapper">
            <article className="home-one-midle-container">
              <div className="home-one-perfomence-text-section">
                <div className="home-one-hero-text-one">
                  <div className="home-one-hero-line home-one-management-line"></div>
                  <div className="home-one-hero-text-bold-two home-one-management-text-one"><strong>Customized Services</strong></div>
                </div>
              </div>
              <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
                <strong className="bold-text-8 startech-home-one-development-heading home-one-performence-heading-text">Empower Your Data Collection with Intelligent, Efficient Solutions.</strong>
              </h2>
              <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding c1">Revolutionize your data strategy with our Web & Mobile Scraping AI Services designed to meet your specific business needs.</p>
              <div className="home-one-development-border-two"></div>
              <div className="w-layout-grid grid-nine">
                <div className="home-one-develop-grid-box">
                  <div className="home-one-develop-text-grid">
                    <img src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp" alt="" width="28" height="29" className="home-one-develop-grid-arrow" />
                    <p className="home-one-develop-grid-paragraph-text">
                      <span className="startech-home-one-develop-paragraph-span"><strong>Tailored AI Solutions</strong> : </span>Advanced algorithms for accurate data extraction,customizable for diverse industries to address unique requirements.
                    </p>
                  </div>
                </div>
                <div className="home-one-develop-grid-box">
                  <div className="home-one-develop-text-grid">
                    <img src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp" alt="" width="28" height="29" className="home-one-develop-grid-arrow" />
                    <p className="home-one-develop-grid-paragraph-text">
                      <span className="startech-home-one-develop-paragraph-span"><strong>Comprehensive Support</strong> : </span>Receive end-to-end consultation and assistance throughout the entire process, ensuring smooth and successful implementation.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="home-one-deve-two-slider">
          <div className="home-one-develop-two-image-wrapper">
            <div className="home-one-development-one-image">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l.png"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l.png 1074w"
                sizes="(max-width: 1074px) 100vw, 1074px"
                height="Auto"
                alt="best way to scrape data from website"
                className="auto-fit home-one-development-two-cover-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Border Section */}
      <section>
        <div className="services-two-border"></div>
      </section>

      {/* Don't let your competitors get ahead Section */}
      <section className="home-one-project-box">
        <div className="w-layout-blockcontainer home-one-project-left-section align-center w-container">
          <h2 className="home-one-project-heading text-center">Don't let your competitors get ahead</h2>
          <p className="home-project-paragraph text-center">Start your journey with Clymin today and harness the power of real-time data and AI-driven insights!</p>
          <Link to="/contact-us" className="button-font button-width w-button">Contact Us</Link>
        </div>
        <div className="home-one-project-right-section">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png"
            sizes="(max-width: 479px) 100vw, 446px"
            width="446"
            height="400"
            alt="A cell phone with a number of messages on the screen"
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png 1689w"
            className="auto-fit startech-home-one-project-image"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Business Section */}
      <BusinessSection onContactClick={handleContactClick} />
      <Footer />
    </>
  )
}
