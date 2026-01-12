import { ButtonHTMLAttributes, forwardRef } from 'react'
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClass = 'button'
    const variantClass = `button--${variant}`
    const sizeClass = `button--${size}`
    const widthClass = fullWidth ? 'button--full-width' : ''
    const combinedClass = [baseClass, variantClass, sizeClass, widthClass, className]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} className={combinedClass} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

