import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './ThankYou.css'

export const ThankYou = () => {
  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <section className="changelog-hero-section take-max-height">
        <div className="container w-container">
          <div>
            <h1 className="no-margin-top text-align-center">Thank you!</h1>
          </div>
        </div>
        <div className="text-block-16">
          We will reach out to <br />
          <br />
          you shortly
        </div>
      </section>
      <Footer />
    </>
  )
}

