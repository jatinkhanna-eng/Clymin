import { Link } from 'react-router-dom'
import './ContactButton.css'

export interface ContactButtonProps {
  onClick?: () => void
  to?: string
  text?: string
  className?: string
}

export const ContactButton = ({
  onClick,
  to = '/contact-us',
  text = 'Contact Us',
  className = '',
}: ContactButtonProps) => {
  return (
    <Link to={to} onClick={onClick} className={`button-font w-button ${className}`}>
      {text}
    </Link>
  )
}


