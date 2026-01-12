import './CounterSection.css'

export const CounterSection = () => {
  return (
    <div id="digits" className="counter-section">
      <div className="main-box">
        <div className="counter-wrapper">
          <div className="number-wrap">
            <div className="number-content">
              <div className="heading-flex">
                <h2 data-duration="3000" {...{ 'counter-element': 'number' }} className="green-number clients">
                  200
                </h2>
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Clients</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <h2 data-duration="5000" {...{ 'counter-element': 'number' }} className="green-number projects">
                  750
                </h2>
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Projects</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <h2 data-duration="3000" {...{ 'counter-element': 'number' }} className="green-number experience">
                  12
                </h2>
                <h2 className="green-number experience">yrs</h2>
                <h2 className="green-number">
                  <span className="large-numbers">+</span>
                </h2>
              </div>
              <div className="text">Experience</div>
            </div>
            <div className="number-content">
              <div className="heading-flex">
                <h2 data-duration="3000" {...{ 'counter-element': 'number' }} className="green-number partners">
                  100
                </h2>
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

