import './MultiLineChart.css'

export interface MultiLineChartData {
  label: string
  values: { [key: string]: number }
}

export interface MultiLineChartProps {
  data: MultiLineChartData[]
  lines: Array<{ key: string; color: string; label: string }>
  height?: number
  showGrid?: boolean
  className?: string
}

export const MultiLineChart = ({
  data,
  lines,
  height = 120,
  showGrid = true,
  className = '',
}: MultiLineChartProps) => {
  if (!data || data.length === 0) return null

  // Get all values to calculate range
  const allValues = data.flatMap((d) => Object.values(d.values))
  const maxValue = Math.max(...allValues)
  const minValue = Math.min(...allValues)
  const range = maxValue - minValue || 1

  return (
    <div className={`multi-line-chart ${className}`} style={{ height: `${height}px` }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="multi-line-chart__svg"
        style={{ height: '100%', width: '100%' }}
      >
        {showGrid && (
          <g className="multi-line-chart__grid">
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
        {lines.map((line) => {
          const points = data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100
            const value = point.values[line.key] || 0
            const normalizedValue = (value - minValue) / range
            const y = 100 - normalizedValue * 80
            return `${x},${y}`
          })

          const pathData = `M ${points.join(' L ')}`

          return (
            <path
              key={line.key}
              d={pathData}
              fill="none"
              stroke={line.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="multi-line-chart__line"
            />
          )
        })}
      </svg>
      <div className="multi-line-chart__labels">
        {data.map((point, index) => (
          <span key={index} className="multi-line-chart__label">
            {point.label}
          </span>
        ))}
      </div>
      <div className="multi-line-chart__legend">
        {lines.map((line) => (
          <div key={line.key} className="multi-line-chart__legend-item">
            <span
              className="multi-line-chart__legend-color"
              style={{ backgroundColor: line.color }}
            />
            <span className="multi-line-chart__legend-label">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

