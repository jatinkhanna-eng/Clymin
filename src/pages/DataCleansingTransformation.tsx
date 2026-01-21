import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import '../components/BusinessSection/BusinessSection.css'
import './DataCleansingTransformation.css'

export const DataCleansingTransformation = () => {
  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <section className="home-one-hero-section">
        <div className="home-one-container home-one-hero-container">
          <div className="home-one-hero-left-section home-one-hero-left-section-padding home-one-hero-left-padding">
            <div className="home-one-hero-text-one"></div>
            <h1 className="home-one-hero-header text-center">
              Transform Your Data, Transform Your Business
            </h1>
            <p className="color-light-grey text-center">
              Data quality is crucial. Our Data Cleansing & Transformation services enhance,
              normalize, and convert data into actionable business insights.
            </p>
            <div className="home-one-hero-button-section startech-home-one-hero-button-padding">
              <Link to="/contact-us" className="button-font w-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-layout-grid home-one-development-two-grid">
        <div
          id="w-node-_656ac329-8c10-bf5c-8ca7-f218261c5281-0969ff32"
          className="home-one-development-two-wrapper"
        ></div>
        <div className="home-one-develop-two-image-wrapper">
          <div className="home-one-development-one-image">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min.png"
              loading="lazy"
              width="568"
              sizes="(max-width: 767px) 100vw, 568px"
              alt="Two smartphones showing rentals and rental prices"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752ed26f65d6a3bee66ca9_DATA%20ENRICHMENT%20SERVICES%20(1)-min.png 1929w"
              className="image-8"
            />
          </div>
        </div>
        <div className="home-one-midle-container">
          <div className="home-one-perfomence-text-section">
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong>DATA ENRICHMENT SERVICES</strong>
              </div>
            </div>
          </div>
          <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
            Enhance Your Data Accuracy and Consistency
          </h2>
          <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
            Leverage our advanced Data Enrichment Services to transform raw data into actionable
            insights, making your operations smarter and faster.
          </p>
          <div className="home-one-development-border-two"></div>
          <div className="w-layout-grid grid-nine">
            <div
              id="w-node-_353e9159-c276-4701-f381-dc5d58a52da0-0969ff32"
              className="home-one-develop-grid-box"
            >
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
                    Data Standardization :{' '}
                  </span>
                  Convert data into a standardized format to facilitate seamless integration and
                  analysis, ensuring uniformity across your datasets.
                </p>
              </div>
            </div>
            <div
              id="w-node-_353e9159-c276-4701-f381-dc5d58a52da7-0969ff32"
              className="home-one-develop-grid-box"
            >
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
                    <strong>Data Normalization </strong>:{' '}
                  </span>
                  Normalize data to ensure consistency and accuracy, reducing errors and enhancing
                  data quality.
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
                  <strong>Data Validation </strong>:{' '}
                </span>
                Validate data against predefined rules and constraints to ensure accuracy and
                completeness, providing reliable and trustworthy information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-layout-grid home-one-development-two-grid">
        <div
          id="w-node-_895aa63c-59b1-2698-debf-835284f7f6e6-0969ff32"
          className="home-one-development-two-wrapper"
        >
          <div className="home-two-heading-wrapper">
            <div className="home-one-midle-container">
              <div className="home-one-perfomence-text-section">
                <div className="home-one-hero-text-one">
                  <div className="home-one-hero-line home-one-management-line"></div>
                  <div className="home-one-hero-text-bold-two home-one-management-text-one">
                    <strong>DATA TRANSFORMATION SERVICES</strong>
                  </div>
                </div>
              </div>
              <h2 className="home-one-performence-heading-text startech-home-one-development-heading">
                Transform Your Data into Valuable Insights
              </h2>
              <p className="home-one-performance-paragraph home-one-perfomence-paragraph-padding">
                Leverage our cutting-edge Data Transformation Services to upgrade your data for
                greater effectiveness.
              </p>
              <div className="home-one-development-border-two"></div>
              <div className="w-layout-grid grid-nine">
                <div
                  id="w-node-_895aa63c-59b1-2698-debf-835284f7f6f8-0969ff32"
                  className="home-one-develop-grid-box"
                >
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
                        Data Conversion :{' '}
                      </span>
                      Seamlessly convert data from one format to another, such as CSV to JSON or XML
                      to JSON, ensuring compatibility across systems.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-_895aa63c-59b1-2698-debf-835284f7f6ff-0969ff32"
                  className="home-one-develop-grid-box"
                >
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
                        Data Aggregation :{' '}
                      </span>
                      Aggregate data from multiple sources into a single, unified view, providing a
                      comprehensive overview and eliminating data silos.
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
                      <strong>Data Integration</strong> :{' '}
                    </span>
                    Integrate data from various sources into a cohesive system, enhancing data
                    accessibility and usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_895aa63c-59b1-2698-debf-835284f7f706-0969ff32"
          className="home-one-deve-two-slider"
        >
          <div className="home-one-develop-two-image-wrapper">
            <div className="home-one-development-one-image">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min.png"
                loading="lazy"
                width="534"
                sizes="(max-width: 767px) 100vw, 534px"
                alt="A cell phone with a pie chart on the screen"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/66752f256f65d6a3bee6c0cc_Group%201171275339-min.png 2382w"
                className="image-7"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="career-data-section">
        <div>
          <div className="services-two-container career-data-container">
            <div className="home-one-hero-text-one career-hero-text-box-one">
              <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
                <strong>BENEFITS</strong>
              </div>
            </div>
            <h2 className="career-data-heading">
              Transform Your Business with Accurate and Precise Data Solutions
            </h2>
            <p className="career-data-paragraph">
              Unlock the full potential of your data with our cutting-edge solutions, ensuring your
              business stays ahead in today's competitive landscape.
            </p>
            <div className="w-layout-grid grid-3">
              <div
                id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e8131-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e8132-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0085_Data%20Icon%20Six.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell cell">
                    <h6 className="heading-5">
                      <strong className="bold-text-7">Improved Data Quality</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Ensure your data is accurate, consistent, and reliable, eliminating errors and
                  enhancing overall quality.
                </div>
              </div>
              <div
                id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e813b-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e813c-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0075_Data%20Icon%20Five.webp"
                      loading="lazy"
                      width="51"
                      height="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-6">
                      <strong className="bold-text-7">Enhanced Insights</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Gain deeper insights into your business operations, helping you make more informed
                  decisions.
                </div>
              </div>
              <div
                id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e8145-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e8146-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a008a_Data%20Icon%20Four.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-7">
                      <strong className="bold-text-7">Minimized Errors</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Minimize data errors and inconsistencies, ensuring smooth and efficient operations.
                </div>
              </div>
              <div
                id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e814f-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-bf088039-b2c7-60bf-d31e-6203dd5e814f-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0087_Data%20icon%20Three.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-4 newp1">
                      <strong className="bold-text-7">Streamlined Data Analysis</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Integrate and analyze data seamlessly, providing a unified view of your information.
                </div>
              </div>
              <div
                id="w-node-_7ed06034-fb0f-39dc-9571-91fc7ebaa1c5-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-_7ed06034-fb0f-39dc-9571-91fc7ebaa1c6-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp"
                      loading="lazy"
                      width="51"
                      alt="web scraping and web crawling"
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-4">
                      <strong className="bold-text-7">Better Decision-Making</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Rely on accurate and reliable data to make strategic business decisions with
                  confidence.
                </div>
              </div>
              <div
                id="w-node-_9f3ea25f-9534-e5b6-950f-cfebc72f788b-0969ff32"
                className="w-layout-blockcontainer container-3 w-container"
              >
                <div
                  id="w-node-_9f3ea25f-9534-e5b6-950f-cfebc72f788c-0969ff32"
                  className="w-layout-layout quick-stack-2 wf-layout-layout"
                >
                  <div className="w-layout-cell">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0087_Data%20icon%20Three.webp"
                      loading="lazy"
                      width="51"
                      alt=""
                    />
                  </div>
                  <div className="w-layout-cell">
                    <h6 className="heading-4 newp1">
                      <strong className="bold-text-7">Enhanced Efficiency</strong>
                    </h6>
                  </div>
                </div>
                <div className="text-block-5">
                  Optimize operations with streamlined data management, cutting costs and boosting
                  productivity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-one-lead-section">
        <div className="home-one-container home-one-lead-container">
          <div className="home-one-hero-text-one home-one-lead-text-one">
            <div className="home-one-hero-line home-one-management-line home-one-lead-text-one-line"></div>
            <div className="home-one-hero-text-box home-one-management-text-one home-one-lead-text-one-style home-one-text-style">
              <strong>Customized Services</strong>
            </div>
          </div>
          <h2 className="home-one-lead-heading-text">
            Application Solutions to Accelerate Your Business Growth
          </h2>
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
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff79_Lead%20Static%20Image%20Tow.webp"
              alt=""
              width="265"
              height="159"
              className="home-one-lead-box-tow-image-tow"
            />
            <div className="home-one-manage-first-box-first-container width-hundred-persent">
              <div className="home-one-lead-box-bold-text">Big Data Integration Management</div>
            </div>
            <div className="home-one-manage-first-box-right-container width-hundred-persent">
              <p className="home-one-lead-box-paragraph">
                Our solutions provide customized data formats to seamlessly integrate into your
                existing systems, enhancing efficiency and accuracy.
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
            <div className="home-one-manage-second-box-left-container width-hundred-persent">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff77_Lead%20Sattic%20One.webp"
                alt=""
                width="263"
                height="190"
                className="home-one-lead-static-image-one"
              />
              <div className="home-one-lead-box-bold-text text-width">
                Data Science Project Management
              </div>
            </div>
            <div className="home-one-second-box-rigght-container width-hundred-persent">
              <p className="home-one-lead-box-paragraph">
                From custom validation rules to specialized data integration processes, our services
                are designed to fit your specific business needs.
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

      <TestimonialsSection label="Testimonials" heading="Trusted by Industry Leaders" />

      <BusinessSection onContactClick={handleContactClick} />
      <Footer />
    </>
  )
}

