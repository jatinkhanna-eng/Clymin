import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import '../components/BusinessSection/BusinessSection.css'
import './ApiSolutions.css'

export const ApiSolutions = () => {
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
          <h1 className="services-two-hero-heading">Innovative API Solutions for Seamless Data Integration</h1>
          <div className="services-two-hero-second-section">
            <div className="services-two-hero-text-left">
              <p className="services-two-hero-paragraph">
                Meet your unique business needs with custom API development and management by our experts
              </p>
              <div className="about-one-button">
                <Link to="/contact-us" className="button-font w-button">Contact Us</Link>
              </div>
              <div className="services-two-hero-bold-text">Revolutionize Your Data Gathering and Analysis</div>
              <div className="services-two-hero-line"></div>
              <div className="w-layout-grid services-two-hero-grid">
                <div id="w-node-_57efe95c-d117-15f3-9992-71895859808d-0969ff46" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">98.5%</h2>
                  <p className="services-two-hero-nubber-paragraph">Data Accuracy Rate</p>
                </div>
                <div id="w-node-_57efe95c-d117-15f3-9992-718958598092-0969ff46" className="services-two-hero-grid-one">
                  <h2 className="services-two-hero-number">65M+</h2>
                  <p className="services-two-hero-nubber-paragraph">Successful Data Extractions</p>
                </div>
              </div>
            </div>
            <div className="services-two-hero-right-section"></div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l.png"
            loading="lazy"
            sizes="(max-width: 1074px) 100vw, 1074px"
            alt="best way to scrape data from website"
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66741669792afc49389d592d_hero4l.png 1074w"
            className="img-fluid"
          />
        </div>
      </section>

      {/* Custom API Development Section */}
      <div className="w-layout-grid home-one-development-two-grid">
        <div className="home-one-develop-two-image-wrapper">
          <div className="home-one-development-one-image">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667562806c6524d439dd33e7_Group%201171275347-min.png"
              sizes="100vw"
              width="1947.5"
              height="696"
              alt="A computer screen with a cloud on top of it"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667562806c6524d439dd33e7_Group%201171275347-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667562806c6524d439dd33e7_Group%201171275347-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667562806c6524d439dd33e7_Group%201171275347-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667562806c6524d439dd33e7_Group%201171275347-min.png 1224w"
              className="auto-fit home-one-development-two-cover-img"
            />
          </div>
        </div>
        <div className="home-one-midle-container">
          <div className="home-one-perfomence-text-section">
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong>CUSTOM API DEVELOPMENT</strong>
              </div>
            </div>
          </div>
          <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
            Optimize Your Operations with Seamless & Efficient Integration.
          </h2>
          <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
            Our custom API development services ensure smooth and efficient data integration tailored to your business needs.
          </p>
          <div className="home-one-development-border-two"></div>
          <div className="w-layout-grid grid-nine">
            <div id="w-node-d61264ac-e932-b22d-bab4-31823eb6c72e-0969ff46" className="home-one-develop-grid-box">
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
                    <strong>Tailored Solutions </strong>:{' '}
                  </span>
                  Specifically built APIs to match your unique requirements.
                </p>
              </div>
            </div>
            <div id="w-node-d61264ac-e932-b22d-bab4-31823eb6c735-0969ff46" className="home-one-develop-grid-box">
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
                    <strong>Seamless Integration </strong>:{' '}
                  </span>
                  Connect internal databases, third-party services, and IoT devices effortlessly.
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
                  <strong>Enhanced Connectivity </strong>:{' '}
                </span>
                Improve operational efficiency by linking diverse systems and automating workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Management Section */}
      <div className="w-layout-grid home-one-development-two-grid">
        <div id="w-node-_9cad8044-3ab2-965c-9789-4cdd93a3c84a-0969ff46" className="home-one-development-two-wrapper">
          <div className="home-two-heading-wrapper">
            <div className="home-one-midle-container">
              <div className="home-one-perfomence-text-section">
                <div className="home-one-hero-text-one"></div>
              </div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong className="bold-text-17">API MANAGEMENT</strong>
              </div>
              <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
                Optimize API Performance & Security with Our Expert Solutions.
              </h2>
              <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
                Our comprehensive API management services ensure your APIs are efficient, secure, and compliant with industry standards.
              </p>
              <div className="home-one-development-border-two"></div>
              <div className="w-layout-grid grid-nine">
                <div id="w-node-_9cad8044-3ab2-965c-9789-4cdd93a3c85c-0969ff46" className="home-one-develop-grid-box">
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
                        <strong>Performance Insights</strong> :{' '}
                      </span>
                      Continuously monitor and analyze your API's performance to optimize efficiency and reliability.
                    </p>
                  </div>
                </div>
                <div id="w-node-_9cad8044-3ab2-965c-9789-4cdd93a3c863-0969ff46" className="home-one-develop-grid-box">
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
                        <strong>Access and Security Control </strong>:{' '}
                      </span>
                      Manage access, enforce robust security protocols, and ensure compliance with industry standards and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_9cad8044-3ab2-965c-9789-4cdd93a3c86a-0969ff46" className="home-one-deve-two-slider">
          <div className="home-one-develop-two-image-wrapper">
            <div className="home-one-development-one-image">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min.png"
                loading="lazy"
                width="1161"
                sizes="(max-width: 1279px) 100vw, 1161px"
                alt="A tablet and a mobile device displaying a dashboard"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6675265179b5b1687ac6c637_API%20MANAGEMENT%20(1)-min.png 2322w"
                className="image-15"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="career-data-section">
        <div className="div-block">
          <div className="services-two-container career-data-container">
            <div className="home-one-hero-text-one career-hero-text-box-one">
              <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
                <strong>BENEFITS</strong>
              </div>
            </div>
            <h2 className="career-data-heading">
              Empowering Your Business with Advanced Data Integration & Transformation.
            </h2>
            <p className="career-data-paragraph">
              Achieve top-tier efficiency & streamline your workflows to drive growth with our expert API management
            </p>
            <div className="w-layout-grid grid-4">
              <div id="w-node-_9aa2c59b-8523-2383-2d1f-5fdd547a4271-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-_9aa2c59b-8523-2383-2d1f-5fdd547a4272-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0085_Data%20Icon%20Six.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading">
                      <strong className="bold-text-7">Data Integration</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Achieve flawless integration of data across various platforms and systems.</div>
              </div>
              <div id="w-node-_8455ddc2-f828-afbc-a724-3bfa86861645-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-_8455ddc2-f828-afbc-a724-3bfa86861646-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0075_Data%20Icon%20Five.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading">
                      <strong className="bold-text-7">Secure Communication</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Ensure all your data transfers are protected with top-tier security protocols.</div>
              </div>
              <div id="w-node-_15940343-20bd-ddc4-b0a8-ec2d73ae98d1-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-_15940343-20bd-ddc4-b0a8-ec2d73ae98d2-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a008a_Data%20Icon%20Four.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading">
                      <strong className="bold-text-7">Drive Business Growth</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Leverage data insights to fuel your business expansion.</div>
              </div>
              <div id="w-node-_8bebb14d-26a4-a48f-24ee-17c36cd45af9-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-_8bebb14d-26a4-a48f-24ee-17c36cd45af9-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0087_Data%20icon%20Three.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading">
                      <strong className="bold-text-7">Optimized Workflow</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Streamline your data processes for maximum efficiency.</div>
              </div>
              <div id="w-node-_27ba6e02-604d-de9f-e001-e74523f596f6-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-_27ba6e02-604d-de9f-e001-e74523f596f7-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp"
                      loading="lazy"
                      width="51"
                      alt="web scraping and web crawling"
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading">
                      <strong className="bold-text-7">Maximize Efficiency</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Ensure your API ecosystem operates at its peak performance.</div>
              </div>
              <div id="w-node-c6a83aab-434f-4f50-cebe-4fba1728747b-0969ff46" className="w-layout-blockcontainer career-data-grid-box w-container">
                <div id="w-node-c6a83aab-434f-4f50-cebe-4fba1728747c-0969ff46" className="w-layout-layout quick-stack-2 wf-layout-layout">
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0088_Data%20Icon%20One.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-3">
                      <strong className="bold-text-7">Improve Experience</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">Enhance productivity with efficient and user-friendly APIs.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="home-three-solution-section home-three-overflow padding-twenty color-soft-peach">
        <div className="home-three-container home-three-solution-container">
          <div className="home-one-hero-text-one home-three-future-text-section-one">
            <div className="home-one-hero-line home-three-future-section-line"></div>
            <div className="home-one-hero-text-bold-two home-three-future-text-one">Use Cases</div>
          </div>
          <div className="solution-second-text-container">
            <div className="home-three-solution-left">
              <h2 className="home-three-solution-heading home-three-header-tow-small">
                Experience Advanced API Solutions
              </h2>
              <p className="home-three-solution-paragraph-width">
                Empower your business with cutting-edge API solutions designed to enhance connectivity, security, and performance. Seamlessly integrate and manage your systems with our robust API services.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid home-three-solution-grid-container">
          <div className="home-three-solution-grid-section">
            <div className="home-three-container home-three-solution-grid-inner">
              <div className="staretch-home-three-solution-left">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffc2_Home%20Three%20Arrow%20Black.webp"
                  alt=""
                  width="34"
                  height="34"
                  className="auto-fit-image home-three-left-arrow"
                />
                <div className="home-three-solution-left-heading-text home-three-header-tow-small home-three-bold-heading-three">
                  Connecting Internal Systems and Applications
                </div>
              </div>
              <p className="home-three-solution-grid-paragraph">
                Streamline data flow and enhance operational efficiency through seamless integration of internal systems and applications.
              </p>
              <div className="home-three-solution-image-box"></div>
            </div>
          </div>
          <div className="home-three-solution-grid-section">
            <div className="home-three-container home-three-solution-grid-inner">
              <div className="staretch-home-three-solution-left">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffc2_Home%20Three%20Arrow%20Black.webp"
                  alt=""
                  width="34"
                  height="34"
                  className="auto-fit-image home-three-left-arrow"
                />
                <div className="home-three-solution-left-heading-text home-three-header-tow-small home-three-bold-heading-three">
                  Integrating Third-Party Services
                </div>
              </div>
              <p className="home-three-solution-grid-paragraph">
                Expand your capabilities by effortlessly connecting with external services for enhanced functionality.
              </p>
              <div className="home-three-solution-image-box"></div>
            </div>
          </div>
          <div className="home-three-solution-grid-section">
            <div className="home-three-container home-three-solution-grid-inner">
              <div className="staretch-home-three-solution-left">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffc2_Home%20Three%20Arrow%20Black.webp"
                  alt=""
                  width="34"
                  height="34"
                  className="auto-fit-image home-three-left-arrow"
                />
                <div className="home-three-solution-left-heading-text home-three-header-tow-small home-three-bold-heading-three">
                  Enabling IoT Device Communication
                </div>
              </div>
              <p className="home-three-solution-grid-paragraph">
                Ensure robust communication between IoT devices, enabling real-time data exchange and operational harmony.
              </p>
              <div className="home-three-solution-image-box"></div>
            </div>
          </div>
          <div className="home-three-solution-grid-section">
            <div className="home-three-container home-three-solution-grid-inner">
              <div className="staretch-home-three-solution-left">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffc2_Home%20Three%20Arrow%20Black.webp"
                  alt=""
                  width="34"
                  height="34"
                  className="auto-fit-image home-three-left-arrow"
                />
                <div className="home-three-solution-left-heading-text home-three-header-tow-small home-three-bold-heading-three">
                  Managing API Access and Security
                </div>
              </div>
              <p className="home-three-solution-grid-paragraph">
                Protect your APIs with advanced security measures while maintaining streamlined access for authorized users.
              </p>
              <div className="home-three-solution-image-box"></div>
            </div>
            <div className="home-three-container home-three-solution-grid-inner">
              <div className="staretch-home-three-solution-left">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffc2_Home%20Three%20Arrow%20Black.webp"
                  alt=""
                  width="34"
                  height="34"
                  className="auto-fit-image home-three-left-arrow"
                />
                <div className="home-three-solution-left-heading-text home-three-header-tow-small home-three-bold-heading-three">
                  {' '}Monitoring API Usage and Performance
                </div>
              </div>
              <p className="home-three-solution-grid-paragraph">
                Leverage insightful analytics to monitor and enhance the performance and usage of your APIs for maximum efficiency.
              </p>
              <div className="home-three-solution-image-box"></div>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffcf_Home%20Three%20Solution%20Image.webp"
            sizes="(max-width: 479px) 100vw, 361px"
            width="361"
            height="485"
            alt=""
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffcf_Home%2520Three%2520Solution%2520Image-p-500.webp 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffcf_Home%20Three%20Solution%20Image.webp 722w"
            className="auto-fit-image home-three-solution-image"
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
