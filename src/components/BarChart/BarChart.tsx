import './BarChart.css'

export interface BarChartData {
  label: string
  value: number
  color?: string
}

export interface BarChartProps {
  data: BarChartData[]
  height?: number
  showLabels?: boolean
  className?: string
}

export const BarChart = ({
  data,
  height = 120,
  showLabels = true,
  className = '',
}: BarChartProps) => {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className={`bar-chart ${className}`} style={{ height: `${height}px` }}>
      <div className="bar-chart__container">
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100
          return (
            <div key={index} className="bar-chart__bar-wrapper">
              <div
                className="bar-chart__bar"
                style={{
                  height: `${barHeight}%`,
                  backgroundColor: item.color || '#ff6b35',
                }}
              />
              {showLabels && (
                <span className="bar-chart__label">{item.label}</span>
              )}
            </div>
          )
        })}
      </div>
      {showLabels && (
        <div className="bar-chart__value-labels">
          {data.map((item, index) => (
            <span key={index} className="bar-chart__value-label">
              ${item.value.toLocaleString()}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

