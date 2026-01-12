import { Link } from 'react-router-dom'
import './BusinessSection.css'

export interface BusinessSectionProps {
  onContactClick?: () => void
}

export const BusinessSection = ({ onContactClick }: BusinessSectionProps) => {
  return (
    <section className="about-one-business-section about-one-overflow">
      <div className="about-container-section about-one-business-container">
        <img
          src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969ffe3_About%20One%20business%20Img%20One.webp"
          alt="Person Image"
          width="127"
          height="135"
          className="auto-fit about-one-business-image-one"
        />
        <div className="home-one-hero-text-one home-three-future-text-section-one about-us-one-hero-one-text-section about-one-business-text-one">
          <div className="home-one-hero-line home-three-future-section-line about-one-business-line"></div>
          <div className="home-one-hero-text-bold-two home-three-future-text-one about-one-hero-one-text about-one-business-text-one-text">
            Start transforming your business today!
          </div>
        </div>
        <h2 className="about-one-business-head-text about-one-small-head-text">
          Contact Us Today For a Free Consultation!
        </h2>
        <p className="about-one-business-paragraph">
          Experience the power of our customized data solutions designed to drive your business forward. Schedule your free consultation now and see the difference!
        </p>
        <Link to="/contact-us" onClick={onContactClick} className="button-font w-button">
          Contact Us
        </Link>
        <img
          src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b30969fff4_About%20one%20business%20Two.webp"
          alt=""
          width="198.5"
          height="97"
          className="auto-fit about-one-business-image-two"
        />
        <img
          src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a00ec_Home%20Three%20Hero%20Polygon.png"
          alt=""
          width="27"
          height="27"
          className="auto-fit about-one-business-polygon"
        />
      </div>
    </section>
  )
}


