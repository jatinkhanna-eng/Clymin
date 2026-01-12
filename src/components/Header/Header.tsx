import { useState, useEffect } from 'react'
import './Header.css'

export interface HeaderProps {
  onContactClick?: () => void
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close desktop dropdown on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsWhatWeDoOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Check on mount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="header header-three-dark header-three-white">
      <div className="home-two-header-background stickeynavbar">
        <div className="header-three-dark header-three-white">
          <div
            data-animation="default"
            data-collapse="tiny"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar startech-about-us-navbar startech-about-one-nav-section navbar-background w-nav"
          >
            <div className="home-one-container startech-home-one-nav-container about-one-nav-container nevbar-second">
              <a href="/" className="header__logo brand brand-two w-nav-brand" aria-label="home">
                <img
                  src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667ac509eca2b49355e2b711_Clymin%20(3).png"
                  alt="Clymin logo"
                  height="32"
                  className="header__logo-img auto-fit startech-about-one-nav-logo"
                />
              </a>

              <div className="nav-menu">
                <div
                  className={`header__dropdown w-dropdown ${isWhatWeDoOpen ? 'w--open' : ''}`}
                  onMouseEnter={() => setIsWhatWeDoOpen(true)}
                  onMouseLeave={() => setIsWhatWeDoOpen(false)}
                >
                  <div
                    className="header__dropdown-toggle dropdown-toggle-6 w-dropdown-toggle"
                    id="w-dropdown-toggle-2"
                    aria-controls="w-dropdown-list-2"
                    aria-haspopup="menu"
                    aria-expanded={isWhatWeDoOpen}
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  >
                    <div className="header__dropdown-text text-block-30">
                      <strong>What we do</strong>
                    </div>
                    <div className="header__dropdown-icon icon-9 w-icon-dropdown-toggle" aria-hidden="true"></div>
                  </div>
                  {isWhatWeDoOpen && (
                    <nav
                      className={`header__dropdown-list w-dropdown-list ${isWhatWeDoOpen ? 'w--open' : ''}`}
                      id="w-dropdown-list-2"
                      aria-labelledby="w-dropdown-toggle-2"
                    >
                      <div
                        id="w-node-_6d0017d1-5792-311e-9005-aacdf2f906a3-1dade6d4"
                        className="w-layout-layout quick-stack-6 wf-layout-layout"
                      >
                        <div className="w-layout-cell">
                          <div
                            id="w-node-aa4b0fd1-7c1b-f5ed-e9d1-a21a82e5cd1d-1dade6d4"
                            className="w-layout-layout quick-stack-6 wf-layout-layout"
                          >
                            <div className="w-layout-cell cell-8">
                              <div className="text-block-31">
                                <strong>Capabilities</strong>
                                <br />‍
                              </div>
                            </div>
                            <div className="w-layout-cell cell-10">
                              <div>
                                <strong>Case studies</strong>
                              </div>
                            </div>
                            <div className="w-layout-cell cell-12">
                              <a
                                href="/services/web-app-scraping-ai-services"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Web & App Scraping AI Services
                              </a>
                              <a
                                href="/services/mobile-app-scraping-services"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Mobile App Scraping Services
                              </a>
                              <a
                                href="/services/real-time-crawling-services"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Real-Time Crawling Services
                                <br />
                              </a>
                              <a
                                href="/services/api-solutions"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                API solutions
                                <br />
                              </a>
                              <a
                                href="/services/data-cleansing-transformation"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Data Cleansing & Transformation
                              </a>
                              <a
                                href="/services/automated-monitoring"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Automated Monitoring
                              </a>
                            </div>
                            <div className="w-layout-cell cell-11">
                              <a
                                href="/food-delivery-with-clymins"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Food delivery{' '}
                              </a>
                              <a
                                href="/blogs/powerful-web-scraping-techniques-to-extract-data-like-a-pro-in-2024"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                E -commerce
                              </a>
                              <a
                                href="/services/data-cleansing-transformation"
                                className="dropdown-link-16 w-dropdown-link"
                                tabIndex={0}
                              >
                                Travel
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  )}
                </div>
              </div>

              <div className="home-one-nav-button-box">
                <a
                  href="/contact-us"
                  onClick={onContactClick}
                  className="button-font responsive-display-none w-button"
                >
                  Contact Us
                </a>
                <button
                  className="header__menu-button menu-button w-nav-button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                  type="button"
                >
                  <img
                    src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0150_Bars%20(1).webp"
                    alt="Menu"
                    width="24"
                    height="24"
                    className="header__menu-icon auto-fit nav-menu-two"
                  />
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div
                className="w-nav-overlay"
                data-wf-ignore=""
                id="w-nav-overlay-1"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setIsMobileMenuOpen(false)
                  }
                }}
              >
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                  <div className="mobile-menu-content">
                    <div
                      className={`mobile-menu-dropdown ${isWhatWeDoOpen ? 'open' : ''}`}
                    >
                      <button
                        className="mobile-menu-item"
                        onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                        aria-expanded={isWhatWeDoOpen}
                      >
                        <strong>What we do</strong>
                        <span className="mobile-menu-arrow">{isWhatWeDoOpen ? '▼' : '▶'}</span>
                      </button>
                      {isWhatWeDoOpen && (
                        <div className="mobile-menu-dropdown-content">
                          <div className="mobile-menu-section">
                            <strong className="mobile-menu-heading">Capabilities</strong>
                            <a
                              href="/services/web-app-scraping-ai-services"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Web & App Scraping AI Services
                            </a>
                            <a
                              href="/services/mobile-app-scraping-services"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Mobile App Scraping Services
                            </a>
                            <a
                              href="/services/real-time-crawling-services"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Real-Time Crawling Services
                            </a>
                            <a
                              href="/services/api-solutions"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              API solutions
                            </a>
                            <a
                              href="/services/data-cleansing-transformation"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Data Cleansing & Transformation
                            </a>
                            <a
                              href="/services/automated-monitoring"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Automated Monitoring
                            </a>
                          </div>
                          <div className="mobile-menu-section">
                            <strong className="mobile-menu-heading">Case studies</strong>
                            <a
                              href="/food-delivery-with-clymins"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Food delivery
                            </a>
                            <a
                              href="/blogs/powerful-web-scraping-techniques-to-extract-data-like-a-pro-in-2024"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              E-commerce
                            </a>
                            <a
                              href="/services/data-cleansing-transformation"
                              className="mobile-menu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Travel
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    <a
                      href="/contact-us"
                      className="mobile-menu-item mobile-menu-button"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        onContactClick?.()
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
