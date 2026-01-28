import { Link } from 'react-router-dom'
import './ProjectSection.css'

export interface ProjectSectionProps {
  heading?: string
  paragraph?: string
  buttonText?: string
  buttonLink?: string
  image?: {
    src: string
    srcSet?: string
    sizes?: string
    alt: string
    width?: number | string
    height?: number | string
    className?: string
  }
  className?: string
  leftSectionClassName?: string
  headingClassName?: string
  paragraphClassName?: string
  buttonClassName?: string
  rightSectionClassName?: string
}

export const ProjectSection = ({
  heading = "Don't let your competitors get ahead",
  paragraph = "Start your journey with Clymin today and harness the power of real-time data and AI-driven insights!",
  buttonText = 'Contact Us',
  buttonLink = '/contact-us',
  image = {
    src: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png',
    sizes: '(max-width: 479px) 100vw, 446px',
    width: '446',
    height: '400',
    alt: 'A cell phone with a number of messages on the screen',
    srcSet: 'https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png 1689w',
    className: 'auto-fit startech-home-one-project-image',
  },
  className = '',
  leftSectionClassName = 'w-layout-blockcontainer home-one-project-left-section align-center w-container',
  headingClassName = 'home-one-project-heading text-center',
  paragraphClassName = 'home-project-paragraph text-center',
  buttonClassName = 'button-font button-width w-button',
  rightSectionClassName = 'home-one-project-right-section',
}: ProjectSectionProps) => {
  return (
    <section className={`home-one-project-box ${className}`}>
      <div className={leftSectionClassName}>
        <h2 className={headingClassName}>{heading}</h2>
        <p className={paragraphClassName}>{paragraph}</p>
        <Link to={buttonLink} className={buttonClassName}>
          {buttonText}
        </Link>
      </div>
      <div className={rightSectionClassName}>
        <img
          src={image.src}
          sizes={image.sizes}
          width={image.width}
          height={image.height}
          alt={image.alt}
          srcSet={image.srcSet}
          className={image.className}
        />
      </div>
    </section>
  )
}

