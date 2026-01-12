import './StepItem.css'

export interface StepItemProps {
  number: string
  heading: string | React.ReactNode
  description: string | React.ReactNode
  numberClassName?: string
  headingClassName?: string
  descriptionClassName?: string
  containerClassName?: string
}

export const StepItem = ({
  number,
  heading,
  description,
  numberClassName = '',
  headingClassName = '',
  descriptionClassName = '',
  containerClassName = '',
}: StepItemProps) => {
  return (
    <div className={`home-dream-right-inner ${containerClassName}`}>
      <div className={`home-three-dream-number ${numberClassName}`}>{number}</div>
      <div className="home-three-dream-text-section">
        {typeof heading === 'string' ? (
          <div className={`home-three-dream-text-heading ${headingClassName}`}>
            <strong>{heading}</strong>
          </div>
        ) : (
          <div className={`home-three-dream-text-heading ${headingClassName}`}>{heading}</div>
        )}
        {typeof description === 'string' ? (
          <p className={`dream-paragraph ${descriptionClassName}`}>{description}</p>
        ) : (
          <div className={`dream-paragraph ${descriptionClassName}`}>{description}</div>
        )}
      </div>
    </div>
  )
}


