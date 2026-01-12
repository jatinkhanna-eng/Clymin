import './Chart.css'

export interface ChartDataPoint {
  label: string
  value: number
}

export interface ChartProps {
  data: ChartDataPoint[]
  color?: string
  height?: number
  showGrid?: boolean
  className?: string
}

export const Chart = ({
  data,
  color = '#ff6b35',
  height = 120,
  showGrid = true,
  className = '',
}: ChartProps) => {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100
    const normalizedValue = (point.value - minValue) / range
    const y = 100 - normalizedValue * 80 // Leave 10% margin top and bottom
    return `${x},${y}`
  })

  const pathData = `M ${points.join(' L ')}`

  return (
    <div className={`chart ${className}`} style={{ height: `${height}px` }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="chart__svg"
        style={{ height: '100%', width: '100%' }}
      >
        {showGrid && (
          <g className="chart__grid">
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
              />
            ))}
          </g>
        )}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart__line"
        />
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${pathData} L 100,100 L 0,100 Z`}
          fill={`url(#gradient-${color.replace('#', '')})`}
          className="chart__area"
        />
      </svg>
      <div className="chart__labels">
        {data.map((point, index) => (
          <span key={index} className="chart__label">
            {point.label}
          </span>
        ))}
      </div>
    </div>
  )
}

