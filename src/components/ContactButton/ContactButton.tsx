import './ContactButton.css'

export interface ContactButtonProps {
  onClick?: () => void
  href?: string
  text?: string
  className?: string
}

export const ContactButton = ({
  onClick,
  href = '/contact-us',
  text = 'Contact Us',
  className = '',
}: ContactButtonProps) => {
  return (
    <a href={href} onClick={onClick} className={`button-font w-button ${className}`}>
      {text}
    </a>
  )
}


