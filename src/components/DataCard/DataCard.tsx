import { ReactNode } from 'react'
import { Card } from '@/components/Card'
import './DataCard.css'

export interface DataCardProps {
  title: string
  value?: string | number
  subtitle?: string
  trend?: {
    value: string
    isPositive: boolean
  }
  children?: ReactNode
  className?: string
}

export const DataCard = ({
  title,
  value,
  subtitle,
  trend,
  children,
  className = '',
}: DataCardProps) => {
  return (
    <Card variant="elevated" padding="medium" className={`data-card ${className}`}>
      <div className="data-card__header">
        <h3 className="data-card__title">{title}</h3>
        {value && <div className="data-card__value">{value}</div>}
        {subtitle && <p className="data-card__subtitle">{subtitle}</p>}
        {trend && (
          <div className={`data-card__trend ${trend.isPositive ? 'positive' : 'negative'}`}>
            <span className="data-card__trend-icon">
              {trend.isPositive ? '↑' : '↓'}
            </span>
            <span className="data-card__trend-value">{trend.value}</span>
          </div>
        )}
      </div>
      {children && <div className="data-card__content">{children}</div>}
    </Card>
  )
}

