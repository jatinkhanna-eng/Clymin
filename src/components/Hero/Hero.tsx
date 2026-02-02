import { Link } from 'react-router-dom'
import './Hero.css'


export const Hero = () => {
  return (
    <section className="home-one-hero-section-two home-tow-hero-section padding-twenty">
      <div className="home-one-container home-one-hero-container home-tow-hero-section-container home-tow-hero-container-style aligne-center align-gap">
        <img
          src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ff9e_Home%20Tow%20Hero%20Vector.webp"
          alt=""
          width="134.5"
          style={{height:"100px"}}
          height="98"
          className="home-tow-hero-vector autofit-image image-27"
          
        />
        <h1 className="home-one-hero-heading-one-two home-tow-hero-heading-text text-align">
          Supercharge your Business with AI-agentic <span className="home-tow-hero-span">Scraping </span>Services
        </h1>
        <p className="paragraph-four home-one-hero-paragraph text-align">
          Get actionable, real-time data customized to your business. Our intelligent AI agents extract, cleanse, and transform data, empowering you to make smarter decisions.
        </p>
        <div className="home-one-hero-button-section home-one-hero-button-padding">
          <Link to="/contact-us" className="button-font w-button">
            Contact Us
          </Link>
          <a
            href="/services/web-app-scraping-ai-services"
            className="home-one-all-button-two home-one-hero-second-button w-inline-block"
          >
            <div className="tartech-home-one-hero-second-button-container">
              <div className="home-tow-app-button-text">Know Features</div>
              <div className="home-one-hero-second-button-underline-two"></div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a00eb_Arrow%203.png"
              height="8"
              alt=""
              className="home-one-hero-arrow-icon"
            />
          </a>
        </div>
        <div className="home-tow-hero-image-section">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a00bb_Land%20Vector%20One.webp"
            alt="Vector Image"
            width="74"
            className="image-27"
          />
          <div className="w-layout-blockcontainer w-container">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min.png"
              srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min-p-1600.png 1600w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min-p-2000.png 2000w, https://cdn.prod.website-files.com/665075d333d845b30969fece/6679105fbe5c7ba035060466_hero%20final%20(4)-min.png 2135w"
              width="841"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 841px"
              alt="web scraping services - Data Extraction from web page"
              className="image-18"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
