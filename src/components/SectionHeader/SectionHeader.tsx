import './SectionHeader.css'

export interface SectionHeaderProps {
  label: string
  heading: string | React.ReactNode
  labelClassName?: string
  headingClassName?: string
  containerClassName?: string
  lineClassName?: string
  showLine?: boolean
}

export const SectionHeader = ({
  label,
  heading,
  labelClassName = '',
  headingClassName = '',
  containerClassName = '',
  lineClassName = '',
  showLine = true,
}: SectionHeaderProps) => {
  return (
    <div className={`home-one-hero-text-one ${containerClassName}`}>
      {showLine && <div className={`home-one-hero-line ${lineClassName}`}></div>}
      <div className={`home-one-hero-text-bold-two ${labelClassName}`}>{label}</div>
      {typeof heading === 'string' ? (
        <h2 className={headingClassName}>{heading}</h2>
      ) : (
        <div className={headingClassName}>{heading}</div>
      )}
    </div>
  )
}


