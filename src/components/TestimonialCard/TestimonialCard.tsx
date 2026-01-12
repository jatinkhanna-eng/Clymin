import './TestimonialCard.css'

export interface TestimonialCardProps {
  name: string
  role: string
  quote: string | React.ReactNode
  commaImageSrc?: string
  commaImageAlt?: string
  cardClassName?: string
  nameClassName?: string
  roleClassName?: string
  quoteClassName?: string
  commaOrder?: 'left' | 'right'
}

export const TestimonialCard = ({
  name,
  role,
  quote,
  commaImageSrc = 'https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a002d_Comas.webp',
  commaImageAlt = '',
  cardClassName = '',
  nameClassName = '',
  roleClassName = '',
  quoteClassName = '',
  commaOrder = 'right',
}: TestimonialCardProps) => {
  return (
    <div className={`about-three-testimonial-card-one ${cardClassName}`}>
      <div className="about-three-testimonial-card-one-inside">
        {commaOrder === 'left' && (
          <img
            src={commaImageSrc}
            alt={commaImageAlt}
            width="48.5"
            height="48"
            className="auto-fit testimonial-commas"
          />
        )}
        <div className="about-three-testimonial-card-user">
          <div className="about-three-testimonial-head-three">
            <div className={`text-block-nine ${nameClassName}`}>
              <strong>{name}</strong>
            </div>
            <div className={`text-block-eight about-three-card-text-size ${roleClassName}`}>
              <strong>{role}</strong>
            </div>
          </div>
        </div>
        {commaOrder === 'right' && (
          <img
            src={commaImageSrc}
            alt={commaImageAlt}
            width="48.5"
            height="48"
            className="auto-fit testimonial-commas"
          />
        )}
      </div>
      {typeof quote === 'string' ? (
        <p className={`about-three-testimonial-card-paragraph ${quoteClassName}`}>{quote}</p>
      ) : (
        <div className={`about-three-testimonial-card-paragraph ${quoteClassName}`}>{quote}</div>
      )}
    </div>
  )
}


