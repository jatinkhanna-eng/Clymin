import { useEffect, useRef, useState } from 'react'
import './CounterSection.css'

interface CounterProps {
  target: number
  duration: number
  className?: string
}

const AnimatedCounter = ({ target, duration, className }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <h2 ref={counterRef} className={className}>
      {count}
    </h2>
  )
}

export const CounterSection = () => {
  return (
    <div id="digits" className="counter-section">
      <div className="main-box">
        <div className="counter-wrapper">
          <div className="number-wrap">
            <div className="number-content">
              <div className="heading-flex">
                <AnimatedCounter target={200} duration={3000} className="green-number clients" />
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Clients</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <AnimatedCounter target={750} duration={5000} className="green-number projects" />
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Projects</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <AnimatedCounter target={12} duration={3000} className="green-number experience" />
                <h2 className="green-number experience">yrs</h2>
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Experience</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <AnimatedCounter target={100} duration={3000} className="green-number partners" />
                <h2 className="green-number partners">b</h2>
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Data Extracted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

