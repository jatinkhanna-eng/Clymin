import './FeatureCard.css'

export interface FeatureCardProps {
  iconSrc: string
  iconAlt: string
  iconWidth?: string | number
  iconHeight?: string | number
  heading: string
  description: string | React.ReactNode
  cardClassName?: string
  iconClassName?: string
  headingClassName?: string
  descriptionClassName?: string
  innerClassName?: string
}

export const FeatureCard = ({
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  heading,
  description,
  cardClassName = '',
  iconClassName = '',
  headingClassName = '',
  descriptionClassName = '',
  innerClassName = '',
}: FeatureCardProps) => {
  return (
    <div className={cardClassName}>
      <div className={`about-one-card-inner-one ${innerClassName}`}>
        <img
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className={`auto-fit about-one-card-icon ${iconClassName}`}
        />
        <div className={`about-one-manage-card-heading ${headingClassName}`}>{heading}</div>
      </div>
      {typeof description === 'string' ? (
        <p className={descriptionClassName}>{description}</p>
      ) : (
        <div className={descriptionClassName}>{description}</div>
      )}
    </div>
  )
}


