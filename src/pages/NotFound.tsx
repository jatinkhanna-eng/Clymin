import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import './NotFound.css'

export const NotFound = () => {
  return (
    <>
      <div className="password-section">
        <div className="password-container four-hundred-four-container not-found-button background-transparent relative">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0153_Star%206.png"
            alt=""
            width="26"
            height="26"
            className="auto-fit note-star-two"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0154_Star%202%20(1).png"
            alt=""
            width="26"
            height="26"
            className="auto-fit note-star"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0155_Vector%20945%20(1).png"
            alt=""
            width="59"
            height="43"
            className="auto-fit note-icon"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0152_Group%202891.png"
            alt=""
            width="58"
            height="54"
            className="auto-fit note-poly"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0151_404.webp"
            alt="404"
            width="370.5"
            height="161"
            className="auto-fit four-hundred-four-image"
          />
          <h2 className="error-page-heading">Oops! The Page Was Not Found</h2>
          <Link to="/" className="button-font career-detail-hero-button w-inline-block">
            <div className="home-tow-app-button-text">Back To Home</div>
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a008d_Arrow%20162%20(1).webp"
              alt=""
              width="13.5"
              height="8"
              className="auto-fit career-detail-arrow"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

