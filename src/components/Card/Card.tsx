import { HTMLAttributes, forwardRef } from 'react'
import './Card.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'small' | 'medium' | 'large'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'medium',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClass = 'card'
    const variantClass = `card--${variant}`
    const paddingClass = `card--padding-${padding}`
    const combinedClass = [baseClass, variantClass, paddingClass, className]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={combinedClass} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

