import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessSection } from '@/components/BusinessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ProjectSection } from '@/components/ProjectSection'
import { BenefitItemCard } from '@/components/BenefitItemCard'
import '../components/BusinessSection/BusinessSection.css'
import './MobileAppScrapingServices.css'

export const MobileAppScrapingServices = () => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set())

  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  useEffect(() => {
    // Add body-4 class to body element
    document.body.classList.add('body-4')

    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove('body-4')
    }
  }, [])

  return (
    <>
      <Header onContactClick={handleContactClick} />

      {/* Hero Section */}
      <section className="home-one-hero-section">
        <div className="home-one-container home-one-hero-container">
          <div className="home-one-hero-left-section home-one-hero-left-section-padding home-one-hero-left-padding align-center">
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-line"></div>
              <div className="home-one-hero-text-box home-one-text-style">Our services </div>
            </div>
            <h1 className="home-one-hero-header text-center">
              <strong className="bold-text-12">Mobile App Scraping Services<br /></strong>
            </h1>
            <p className="color-light-grey text-center">
              Our expert scraping services extract valuable insights from both Android and iOS platforms. Stay ahead with data-driven decisions for your business.
            </p>
            <div className="home-one-hero-button-section startech-home-one-hero-button-padding">
              <Link to="/contact-us" className="button-font w-button">Contact Us</Link>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min.png"
            loading="lazy"
            width="403"
            sizes="(max-width: 479px) 100vw, 403px"
            alt=""
            srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d9d9f2d67d45916d788af_Group%201171275397%20(3)-min.png 7031w"
            className="image-46"
          />
        </div>
      </section>

      {/* e-Commerce App Data Scraping Services */}
      <section className="home-one-development-section body-4">
        <div className="w-layout-grid home-one-development-grid">
          <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e6f-d34f12fc" className="home-one-slider-wrapper">
            <div className="home-image-wrapper">
              <div className="home-one-dev-image-one"></div>
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3).png"
                loading="lazy"
                sizes="(max-width: 8498px) 100vw, 8498px"
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3)-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673b06064e613a63b4cf9466_Group%201171275353%20(3).png 8498w"
                alt=""
                className="image-42"
              />
            </div>
          </div>
          <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e74-d34f12fc" className="home-one-development-text-container">
            <div className="home-one-development-text-wrapper">
              <div className="home-one-development-mide-container">
                <div className="home-one-perfomence-text-section">
                  <div className="home-one-hero-text-one">
                    <div className="home-one-hero-line home-one-management-line"></div>
                    <div className="home-one-hero-text-bold-two home-one-management-text-one">
                      <strong>e-Commerce App Data Scraping Services</strong>
                    </div>
                  </div>
                </div>
                <h2 className="home-one-performence-heading-text home-one-development-heading home-one-performance-heading">
                  <strong className="bold-text-59">Competitive Edge in <br />E-Commerce</strong>
                </h2>
                <p className="paragraph-27">
                  Our data scraping solutions help you monitor competitor pricing, track product performance, optimize inventory management, and make informed decisions based on real-time market insights.
                </p>
                <div className="home-one-development-border-two"></div>
                <div className="w-layout-grid grid-two">
                  <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e81-d34f12fc" className="home-tow-solution-grid-box">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="Auto"
                      height="28"
                      className="home-tow-solution-arrow autofit-image"
                    />
                    <p className="home-tow-solution-grid-text">
                      <span className="home-tow-solution-grid-text-bold">
                        <strong className="bold-text-57">Product Information:</strong>
                      </span>{' '}
                      <br />-Product names & titles<br />-Product descriptions<br />-Product images & videos<br />-SKUs and product IDs<br />-Product variations (size, color, etc.)
                    </p>
                  </div>
                  <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e88-d34f12fc" className="home-tow-solution-grid-box">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="28"
                      className="home-tow-solution-arrow autofit-image"
                    />
                    <p className="home-tow-solution-grid-text">
                      <span className="home-tow-solution-grid-text-bold">
                        <strong>Pricing & Inventory</strong>:
                      </span>{' '}
                      <br />-Current prices<br />-Sale prices & discounts<br />-In-stock & out-of-stock status<br />-Inventory levels<br />-Competitor pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food & Grocery App Data Scraping */}
        <div className="w-layout-grid home-one-development-grid">
          <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e98-d34f12fc" className="home-one-development-text-container">
            <div className="home-one-development-text-wrapper">
              <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057e9a-d34f12fc" className="home-one-slider-wrapper">
                <div className="home-image-wrapper">
                  <div className="home-one-dev-image-one"></div>
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402.png"
                    loading="lazy"
                    width="591"
                    sizes="(max-width: 767px) 100vw, 591px"
                    alt=""
                    srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/673d974ac8930f09f6fff2bd_Group%201171275402.png 4267w"
                    className="image-40"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-one-development-mide-container new">
            <div className="home-one-perfomence-text-section">
              <div className="home-one-hero-text-one nn1">
                <div className="home-one-hero-line home-one-management-line"></div>
                <div className="home-one-hero-text-bold-two home-one-management-text-one">
                  <strong>Food & Grocery App Data Scraping</strong>
                </div>
              </div>
            </div>
            <h2 className="home-one-performence-heading-text home-one-development-heading home-one-performance-heading">
              <strong style={{ fontWeight: "500" }}>Unlock Insights in Food & Grocery Market</strong>
            </h2>
            <p className="paragraph-27">
              Our scraping services provide data to optimize menus, analyze competitor strategies, track customer sentiment, and make data-driven decisions to stay ahead.
            </p>
            <div className="home-one-development-border-two"></div>
            <div className="w-layout-grid grid-two">
              <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057eaa-d34f12fc" className="home-tow-solution-grid-box">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="28"
                  className="home-tow-solution-arrow autofit-image"
                />
                <p className="home-tow-solution-grid-text">
                  <span className="home-tow-solution-grid-text-bold">
                    <strong>Menu & Product Data:</strong>
                  </span>{' '}
                  <br />-Dish & item names<br />-Descriptions & ingredients<br />-Dietary information (vegan, gluten-free, etc.)<br />-Nutritional values
                </p>
              </div>
              <div id="w-node-_68718fbe-abd2-347b-5fe9-205de3057eb1-d34f12fc" className="home-tow-solution-grid-box">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="28"
                  className="home-tow-solution-arrow autofit-image"
                />
                <p className="home-tow-solution-grid-text">
                  <span className="home-tow-solution-grid-text-bold">
                    <strong>Pricing & Availability</strong>:
                  </span>{' '}
                  <br />-Menu prices<br />-Special offers & discounts<br />-Real-time availability by location
                </p>
              </div>
              <div className="home-tow-solution-grid-box">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                  alt=""
                  width="28"
                  height="28"
                  className="home-tow-solution-arrow autofit-image"
                />
                <p className="home-tow-solution-grid-text">
                  <span className="home-tow-solution-grid-text-bold">
                    <strong>Delivery & Service Information</strong>:
                  </span>{' '}
                  <br />-Delivery times<br />-Delivery fees<br />-Service area coverage<br />-Customer reviews & ratings<br />-Restaurant ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate App Data Scraping Services */}
        <section className="home-one-development-section">
          <div className="w-layout-grid home-one-development-grid">
            <div id="w-node-_401a7d83-2f15-41a4-e40d-acee303abee5-d34f12fc" className="home-one-slider-wrapper">
              <div className="home-image-wrapper">
                <div className="home-one-dev-image-one"></div>
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min.png"
                  loading="lazy"
                  width="764"
                  sizes="(max-width: 767px) 100vw, 764px"
                  alt="A pair of credit cards with numbers on them"
                  srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667915513c723b61cae32c18_hero3%20(4)-min.png 3415w"
                  className="image-41"
                />
              </div>
            </div>
            <div id="w-node-_401a7d83-2f15-41a4-e40d-acee303abeea-d34f12fc" className="home-one-development-text-container">
              <div className="home-one-development-text-wrapper">
                <div className="home-one-development-mide-container">
                  <div className="home-one-perfomence-text-section">
                    <div className="home-one-hero-text-one">
                      <div className="home-one-hero-line home-one-management-line"></div>
                      <div className="home-one-hero-text-bold-two home-one-management-text-one">
                        <strong>Real Estate App Data Scraping Services</strong>
                      </div>
                    </div>
                  </div>
                  <h2 className="home-one-performence-heading-text home-one-development-heading home-one-performance-heading">
                    <strong className="bold-text-62">Informed Real Estate Investment Decisions</strong>
                  </h2>
                  <p className="paragraph-28">
                    Our scraping solutions provide property listings, pricing trends, market analysis, and neighborhood insights.
                  </p>
                  <div className="home-one-development-border-two"></div>
                  <div className="w-layout-grid grid-two">
                    <div id="w-node-_401a7d83-2f15-41a4-e40d-acee303abefb-d34f12fc" className="home-tow-solution-grid-box">
                      <img
                        src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                        alt=""
                        width="28"
                        height="28"
                        className="home-tow-solution-arrow autofit-image"
                      />
                      <p className="home-tow-solution-grid-text">
                        <span className="home-tow-solution-grid-text-bold">
                          <strong>Property Listings:</strong>
                        </span>{' '}
                        <br />-Property addresses<br />-Property descriptions<br />-Number of bedrooms & bathrooms<br />-Square footage & lot size<br />-Property images
                      </p>
                    </div>
                    <div id="w-node-_401a7d83-2f15-41a4-e40d-acee303abf0c-d34f12fc" className="home-tow-solution-grid-box">
                      <img
                        src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                        alt=""
                        width="28"
                        height="28"
                        className="home-tow-solution-arrow autofit-image"
                      />
                      <p className="home-tow-solution-grid-text">
                        <span className="home-tow-solution-grid-text-bold">Pricing & Market Trends:</span>{' '}
                        <br />-Listing prices<br />-Price history<br />-Median home values<br />-Days on market<br />-Recent sales history
                      </p>
                    </div>
                    <div className="home-tow-solution-grid-box">
                      <img
                        src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                        alt=""
                        width="28"
                        height="28"
                        className="home-tow-solution-arrow autofit-image"
                      />
                      <p className="home-tow-solution-grid-text">
                        <span className="home-tow-solution-grid-text-bold">
                          <strong>Other Property Details:<br />‍</strong>
                        </span>
                        -Amenities (pool, garage, etc.)<br />-School districts<br />-Neighborhood information<br />-Agent ratings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Social Media App Data Scraping Services */}
      <div className="w-layout-grid home-one-development-grid">
        <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977cc9-d34f12fc" className="home-one-development-text-container">
          <div className="home-one-development-text-wrapper">
            <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977ccb-d34f12fc" className="home-one-slider-wrapper">
              <div className="home-image-wrapper">
                <div className="home-one-dev-image-one">
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6679396da2e00db33566298c_herof2%20(1)-min.png"
                    loading="lazy"
                    width="691"
                    sizes="(max-width: 767px) 100vw, 691px"
                    alt="A computer screen with social icons surrounding it"
                    srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6679396da2e00db33566298c_herof2%20(1)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679396da2e00db33566298c_herof2%20(1)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679396da2e00db33566298c_herof2%20(1)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679396da2e00db33566298c_herof2%20(1)-min.png 1281w"
                    className="image-44"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-one-development-mide-container new">
          <div className="home-one-perfomence-text-section">
            <div className="home-one-hero-text-one nn1">
              <div className="home-one-hero-line home-one-management-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one">
                <strong className="bold-text-60">Social Media app Data Scraping Services</strong>
              </div>
            </div>
          </div>
          <h2 className="home-one-performence-heading-text home-one-development-heading home-one-performance-heading">
            <strong className="bold-text-58">Enhance Social Media Strategies with Insights</strong>
          </h2>
          <p className="paragraph-29">
            Monitor brand mentions, track competitor activity, analyze sentiment, and understand trending topics to refine your approach.
          </p>
          <div className="home-one-development-border-two"></div>
          <div className="w-layout-grid grid-two">
            <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977cdb-d34f12fc" className="home-tow-solution-grid-box">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                alt=""
                width="28"
                height="28"
                className="home-tow-solution-arrow autofit-image"
              />
              <p className="home-tow-solution-grid-text">
                <span className="home-tow-solution-grid-text-bold">
                  <strong>User Engagement:</strong>
                </span>{' '}
                <br />-Likes, comments, shares<br />-Mentions and tags<br />-Follower growth
              </p>
            </div>
            <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977ce2-d34f12fc" className="home-tow-solution-grid-box">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                alt=""
                width="28"
                height="28"
                className="home-tow-solution-arrow autofit-image"
              />
              <p className="home-tow-solution-grid-text">
                <span className="home-tow-solution-grid-text-bold">
                  <strong>Content Analysis</strong>:
                </span>{' '}
                <br />-Trending hashtags<br />-Popular topics & keywords<br />-Sentiment analysis
              </p>
            </div>
            <div className="home-tow-solution-grid-box">
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                alt=""
                width="28"
                height="28"
                className="home-tow-solution-arrow autofit-image"
              />
              <p className="home-tow-solution-grid-text">
                <span className="home-tow-solution-grid-text-bold">
                  <strong>Audience Insights</strong>:
                </span>{' '}
                <br />-Demographics (age, location, interests)<br />-User behavior & preferences<br />-Influencer identification<br />-Influencers' activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel App Data Scraping Services */}
      <section className="home-one-development-section">
        <div className="w-layout-grid home-one-development-grid">
          <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977ca0-d34f12fc" className="home-one-slider-wrapper">
            <div className="home-image-wrapper">
              <div className="home-one-dev-image-one"></div>
              <img
                src="https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1).png"
                loading="lazy"
                width="642"
                sizes="(max-width: 767px) 100vw, 642px"
                alt=""
                srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1)-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/67349da8b27574be13793662_travel%20app%20(1)-min%20(2)%20(1)%20(1).png 5670w"
                className="image-43"
              />
            </div>
          </div>
          <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977ca5-d34f12fc" className="home-one-development-text-container">
            <div className="home-one-development-text-wrapper">
              <div className="home-one-development-mide-container">
                <div className="home-one-perfomence-text-section">
                  <div className="home-one-hero-text-one">
                    <div className="home-one-hero-line home-one-management-line"></div>
                    <div className="home-one-hero-text-bold-two home-one-management-text-one">
                      <strong>Travel App Data Scraping Services</strong>
                    </div>
                  </div>
                </div>
                <h2 className="home-one-performence-heading-text home-one-development-heading home-one-performance-heading">
                  <strong>Competitive Advantage in Ride-Sharing Industry</strong>
                </h2>
                <p className="paragraph-28">
                  Our data scraping services offer insights into ride availability, pricing, driver ratings, and other mobility-related data to help you stay ahead in the ride-sharing market.
                </p>
                <div className="home-one-development-border-two"></div>
                <div className="w-layout-grid grid-two new" style={{ display: "block", columnGap: '20px' }}>
                  <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977cb2-d34f12fc" className="home-tow-solution-grid-box">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="28"
                      className="home-tow-solution-arrow autofit-image"
                    />
                    <p className="home-tow-solution-grid-text">
                      <span className="home-tow-solution-grid-text-bold">
                        <strong>Ride Availability & Pricing:<br />‍</strong>
                      </span>
                      -Real-time ride availability for various vehicle types (e.g., sedan, SUV, bike)<br />-Pricing estimates for different vehicle categories<br />-Surge pricing and discount trends<br />-Estimated wait times by location
                    </p>
                  </div><br />
                  <div id="w-node-b5dcc244-ea5b-6696-3d6a-7fcf59977cb9-d34f12fc" className="home-tow-solution-grid-box">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="28"
                      className="home-tow-solution-arrow autofit-image"
                    />
                    <p className="home-tow-solution-grid-text">
                      <span className="home-tow-solution-grid-text-bold">
                        Ride Trends & Demand Analysis:<br />-
                      </span>
                      Popular routes and peak hours<br />-Demand analysis based on location<br />-Seasonal fluctuations in ride demand<br />-User frequency and engagement trends
                    </p>
                  </div><br />
                  <div className="home-tow-solution-grid-box">
                    <img
                      src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff69_Develop%20Arrow.webp"
                      alt=""
                      width="28"
                      height="28"
                      className="home-tow-solution-arrow autofit-image"
                    />
                    <p className="home-tow-solution-grid-text">
                      <span className="home-tow-solution-grid-text-bold">
                        <strong>Customer Sentiment & Service Quality:<br />-</strong>
                      </span>
                      Reviews and ratings for service quality<br />-Analysis of common feedback themes (e.g., safety, driver behavior)<br />-Competitor comparison for customer satisfaction<br />-Monitoring of customer engagement and loyalty
                    </p>
                  </div><br />
                </div>
              </div>
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
          <h2 className="home-one-lead-heading-text">
            <strong>Tailored Scraping Solutions</strong>
          </h2>
          <h6 className="home-one-lead-heading-text n">
            We collaborate to identify the exact data points needed from apps, ensuring our solutions align with your business objectives.
          </h6>
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
              <div className="home-one-lead-box-bold-text" style={{ whiteSpace: "nowrap" }}>
                <strong>Flexible Scheduling</strong>
              </div>
            </div>
            <div className="home-one-manage-first-box-right-container width-hundred-persent">
              <p className="home-one-lead-box-paragraph">
                Choose the frequency of data extraction—whether in real-time or periodic reports.
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

              <div className="home-one-lead-box-bold-text text-width" style={{ whiteSpace: "nowrap" }}>
                <strong>Scalability Options</strong>
              </div>

              <div className="home-one-second-box-rigght-container width-hundred-persent">
                <p className="home-one-lead-box-paragraph">
                  Scalable solutions that expand with your business without compromising quality.
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

              <div className="home-one-lead-box-bold-text text-width" style={{ whiteSpace: "nowrap" }}>
                <strong>Integration Support</strong>
              </div>

              <div className="home-one-second-box-rigght-container width-hundred-persent">
                <p className="home-one-lead-box-paragraph">
                  Our team can assist in integrating extracted data into your systems or databases for easy utilization.
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
          </div>
          <Link to="/contact-us" className="button-font w-button">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Why Choose Clymin Section */}
      <section className="career-data-section">
        <div className="div-block-2">
          <div className="services-two-container career-data-container">
            <div className="home-one-hero-text-one career-hero-text-box-one">
              <div className="home-one-hero-line home-one-management-line career-data-one-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one career-data-one-text">
                <strong >why choose Clymin</strong>
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
                  alt: '',
                }}
                heading="Market Insights"
                description="Clymin analyzes data from popular mobile apps, providing a deeper understanding of market trends and consumer behavior, enabling informed decision-making."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d41-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d42-d34f12fc"
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
                heading="Informed Choices"
                description="Access real-time data through Clymin for swift responses to market changes, ensuring your business remains agile and competitive."
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
                  alt: '',
                }}
                heading="Feedback Analysis"
                description="Scrape user reviews to enhance products and services based on genuine customer feedback, driving innovation and customer satisfaction."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d55-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d56-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />
              <BenefitItemCard
               layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0087_Data%20icon%20Three.webp',
                  width: 51,
                  alt: '',
                }}
                heading="Flexible Analytics"
                description="Clymin offers customizable data extraction solutions tailored to your specific needs, providing flexibility and scalability to adapt as your business grows."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d5f-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d60-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />
              <BenefitItemCard
               layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp',
                  width: 51,
                  alt: 'web scraping and web crawling',
                }}
                heading="Competitive Edge"
                description="Monitor competitors' apps using Clymin to gather insights that inform strategic adjustments, ensuring you stay ahead in the market."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d69-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d6a-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />
              <BenefitItemCard
               layout="row"
                icon={{
                  src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0086_Data%20Icon%20Two.webp',
                  width: 51,
                  alt: 'web scraping and web crawling',
                }}
                heading="Cost Efficiency"
                description="Automate data extraction with Clymin, significantly reducing manpower costs while boosting productivity, allowing your team to focus on core tasks."
                containerId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d73-d34f12fc"
                layoutId="w-node-_83c401e8-0d61-cacd-b893-51c94ad88d74-d34f12fc"
                headingClassName="heading-12"
                strongClassName="pos1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Don't let your competitors get ahead */}
      <ProjectSection />

      {/* How It Works Section */}
      <section id="How-it-works" className="home-three-dream-section padding-twenty">
        <div className="home-three-dream-left"></div>
        <section className="home-three-container home-three-dream-container">
          <div className="home-one-hero-text-one home-three-dream-first-text">
            <div className="home-one-hero-line"></div>
            <div className="home-one-hero-text-bold-two">How It Works</div>
          </div>
          <h2 className="home-three-second-heading home-three-header-tow-small">
            <strong>Your Path to Efficient Data Extraction</strong>
          </h2>
          <div className="home-three-dream-scroll-section">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min.png"
              loading="lazy"
              width="473"
              sizes="(max-width: 479px) 100vw, 473px"
              alt="A screenshot of a cell phone with a conversation bubble above it"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-2600.png 2600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min-p-3200.png 3200w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6678262c7fc5271a7626e231_Group%201171275348-min.png 3798w"
              className="image-21"
            />
            <div className="home-three-dream-right">
              <div className="home-dream-right-inner">
                <div className="home-three-dream-number">01</div>
                <div className="home-three-dream-text-section">
                  <div className="home-three-dream-text-heading">
                    <strong>Identification of Target Apps</strong>
                  </div>
                  <p className="dream-paragraph">Clymin collaborates with you to identify the most relevant mobile apps for your business needs, ensuring focused data extraction.</p>
                </div>
              </div>
              <div className="home-dream-right-inner">
                <div className="home-three-dream-number">02</div>
                <div className="home-three-dream-text-section">
                  <div className="home-three-dream-text-heading">
                    <strong>Data Extraction</strong>
                  </div>
                  <p className="dream-paragraph">We utilize advanced scraping techniques to automate data extraction, providing efficient and reliable access to critical information.</p>
                </div>
              </div>
              <div className="home-dream-right-inner">
                <div className="home-three-dream-number">03</div>
                <div className="home-three-dream-text-section">
                  <div className="home-three-dream-text-heading">Data Cleansing and Structuring</div>
                  <p className="dream-paragraph">Extracted data is rigorously cleansed for accuracy and formatted into user-friendly structures like APIs, CSV or Excel for easy analysis.</p>
                </div>
              </div>
              <div className="home-dream-right-inner">
                <div className="home-three-dream-number">04</div>
                <div className="home-three-dream-text-section">
                  <div className="home-three-dream-text-heading">Analysis and Reporting</div>
                  <p className="dream-paragraph">Clymin generates comprehensive reports highlighting key insights, trends, and actionable recommendations, empowering informed, data-driven decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection label="Testimonials" heading="Trusted by Industry Leaders" />

      {/* FAQ Section */}
      <section className="faq-section-2">
        <div className="container-20">
          <div className="section-title">
            <h1 className="heading-1 bottom-margin-20">FAQs</h1>
            <p className="body-3">
              <strong>Find answers to common questions about our data extraction services.</strong>
            </p>
          </div>
          <div className="w-layout-grid faq-grid">
            <div className="faq-wrap">
              <div
                data-w-id="a5fa4872-716d-5972-6a05-2421b4ad9880"
                className={`faq-question ${openFaqs.has(0) ? 'active' : ''}`}
                onClick={() => toggleFaq(0)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a00cd_Nav%20Drovdown%20Arrow.png"
                  alt=""
                  className={`faq-icon ${openFaqs.has(0) ? 'rotated' : ''}`}
                />
                <h4 className="faq-heading">What types of data can I extract with your services?</h4>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(0) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">We extract a wide range of data from mobile apps, including product information, food & grocery details, travel information, social media insights, and real estate data.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="a5fa4872-716d-5972-6a05-2421b4ad9888"
                className={`faq-question ${openFaqs.has(1) ? 'active' : ''}`}
                onClick={() => toggleFaq(1)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a00cd_Nav%20Drovdown%20Arrow.png"
                  alt=""
                  className={`faq-icon ${openFaqs.has(1) ? 'rotated' : ''}`}
                />
                <h4 className="faq-heading">
                  <strong>Can you scrape data from both Android and iOS apps?</strong>
                </h4>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(1) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">Yes, our solutions are compatible with both Android and iOS platforms, ensuring comprehensive data extraction regardless of the app's operating system.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="a5fa4872-716d-5972-6a05-2421b4ad9890"
                className={`faq-question ${openFaqs.has(2) ? 'active' : ''}`}
                onClick={() => toggleFaq(2)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(2) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>How do I integrate the scraped data into my workflows?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(2) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">We deliver data in formats like API, CSV, Excel, and JSON for easy import into your CRM, databases, and other tools. We can also assist with custom integrations upon request.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="a5fa4872-716d-5972-6a05-2421b4ad9898"
                className={`faq-question ${openFaqs.has(3) ? 'active' : ''}`}
                onClick={() => toggleFaq(3)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(3) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>How do you handle changes in app structures or updates?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(3) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">Our team monitors app updates and changes to ensure scraping accuracy. We proactively adjust our methods to adapt to any modifications, guaranteeing continuous data reliability.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="a5fa4872-716d-5972-6a05-2421b4ad98a0"
                className={`faq-question ${openFaqs.has(4) ? 'active' : ''}`}
                onClick={() => toggleFaq(4)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(4) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>Is mobile app scraping legal?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(4) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">Yes, mobile app scraping is legal as long as it complies with the app's terms of service and respects privacy laws.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="fe83b13e-f9ed-fdd0-1a8b-35579c4da7f5"
                className={`faq-question ${openFaqs.has(5) ? 'active' : ''}`}
                onClick={() => toggleFaq(5)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(5) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>Can I scrape data from any app?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(5) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">We can scrape data from most publicly accessible apps, but some apps may have specific anti-scraping measures or terms of service limitations.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="aacf1e47-6f3e-070f-60e0-d3e14118657e"
                className={`faq-question ${openFaqs.has(6) ? 'active' : ''}`}
                onClick={() => toggleFaq(6)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(6) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>How do you ensure data accuracy?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(6) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">Our advanced scraping techniques include data cleansing and validation processes to ensure the extracted data is accurate, reliable, and correctly formatted.</p>
              </div>
            </div>
            <div className="faq-wrap">
              <div
                data-w-id="279a1c1b-7b39-1707-ba6c-54513de83fd6"
                className={`faq-question ${openFaqs.has(7) ? 'active' : ''}`}
                onClick={() => toggleFaq(7)}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff6c_Nav%20Dropdown.webp"
                  alt=""
                  className={`faq-icon ${openFaqs.has(7) ? 'rotated' : ''}`}
                />
                <h5 className="faq-heading">
                  <strong>How is the extracted data delivered?</strong>
                </h5>
              </div>
              <div
                className={`faq-answer ${openFaqs.has(7) ? 'open' : ''}`}
              >
                <p className="body-3 bottom-margin-30">The data is delivered in user-friendly formats such as APIs, CSV, Excel, or directly integrated into your databases or systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <BusinessSection onContactClick={handleContactClick} />

      {/* Footer */}
      <Footer />
    </>
  )
}
