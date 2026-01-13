import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './ContactUs.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const ContactUs = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.currentTarget
    const name = (form.querySelector('#Name') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('#Email') as HTMLInputElement)?.value || ''
    const phone = (form.querySelector('#Phone') as HTMLInputElement)?.value || ''
    const message = (form.querySelector('#Text') as HTMLTextAreaElement)?.value || ''

    // EmailJS configuration - Replace these with your actual EmailJS credentials
    // See EMAIL_SETUP.md for setup instructions
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
      to_email: 'jatin.khanna@gamyam.co',
    }

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      // Fallback to mailto if EmailJS is not configured
      const subject = encodeURIComponent(`Contact Form Submission from ${name}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      )
      window.location.href = `mailto:jatin.khanna@gamyam.co?subject=${subject}&body=${body}`
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate('/thank-you')
      }, 500)
      setIsSubmitting(false)
      return
    }

    try {
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      form.reset()
      
      // Redirect to thank you page on success
      navigate('/thank-you')
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-one-nav">
      <Header onContactClick={handleContactClick} />
      
      <section className="contact-one-hero-gallery">
        <div className="contact-two-hero-section">
          <div className="services-two-container-two contact-two-contain">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a012f_Vector%20915.webp"
              alt=""
              width="102.5"
              height="75"
              className="auto-fit contact-two-vector"
            />
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0117_Rectangle%203213.png"
              alt=""
              width="30"
              height="30"
              className="contact-two-hero-polygon"
            />
            <div className="home-one-hero-text-one">
              <div className="home-one-hero-line home-one-management-line contact-two-hero-line"></div>
              <div className="home-one-hero-text-bold-two home-one-management-text-one contact-two-hero-text-one">
                Get In Touch
              </div>
            </div>
            <h1 className="contact-two-hero-head">
              Contact <span className="contact-two-span">Us</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="contact-two-from-section">
        <div className="services-two-container-two contact-two-from-container">
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0115_Rectangle%203214.png"
            alt=""
            width="21"
            height="21"
            className="auto-fit contact-two-poly-icon"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0116_Ellipse%20942.png"
            alt=""
            width="18"
            height="18"
            className="auto-fit contact-two-carcel-icon-three"
          />
          <img
            src="https://cdn.prod.website-files.com/665075d333d845b30969fece/665075d333d845b3096a0114_Ellipse%20941.png"
            alt=""
            width="18"
            height="18"
            className="auto-fit contact-two-carcel-icon-one"
          />
          <div className="contact-two-from-background">
            <h2 className="contact-two-from-head">Send A Message</h2>
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                className="form"
                aria-label="Email Form"
                onSubmit={handleSubmit}
              >
                <div className="contact-two-from-input-one-box">
                  <input
                    className="contact-two-from-input-one w-input"
                    maxLength={256}
                    name="Name"
                    data-name="Name"
                    placeholder="Your Name"
                    type="text"
                    id="Name"
                    required
                  />
                  <input
                    className="contact-two-from-input-one w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Email Address"
                    type="email"
                    id="Email"
                    required
                  />
                </div>
                <input
                  className="contact-two-input-three contact-two-input-margin w-input"
                  maxLength={256}
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone Number"
                  type="tel"
                  id="Phone"
                />
                <textarea
                  className="contact-two-input-four w-input"
                  maxLength={5000}
                  name="Text"
                  data-name="Text"
                  placeholder="Your Message"
                  id="Text"
                  required
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait...."
                  className="contact-two-submit contact-two-input-margin w-button"
                  value={isSubmitting ? 'Submitting...' : 'Submit'}
                  disabled={isSubmitting}
                />
              </form>
              {submitStatus === 'error' && (
                <div className="w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure" style={{ display: 'block' }}>
                  <div>Oops! Something went wrong while submitting the form. Please try again.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div
        data-w-id="55c16d39-bb53-005d-4b5d-eef6f0187743"
        className="contact-one-hero-image-section"
        style={{
          willChange: 'transform',
          transform: 'translate3d(-20vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
      ></div>

      <div className="w-layout-grid contact-two-grid">
        <div id="w-node-dd791776-5b8f-509d-b6b4-12c23cd1776f-0969ff3b" className="contact-two-grid-item">
          <div className="contact-two-carcle">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aba1010694a2418bff0cf_location%20icon.png"
              alt="A white pin on a black background"
              width="24"
              height="25"
              className="auto-fit contact-two-icon"
            />
          </div>
          <div className="contact-two-grid-head">
            <strong>505 Montgomery Street, 11th Floor, San Francisco, CA, 94111 USA</strong>
          </div>
          <div className="contact-two-grid-head new">
            <a href="mailto:contact@clymin.com?subject=Clymin%20contact%20email" className="link-35">
              contact@clymin.com
            </a>
          </div>
        </div>
        <div id="w-node-dd791776-5b8f-509d-b6b4-12c23cd17777-0969ff3b" className="contact-two-grid-item">
          <div className="contact-two-carcle">
            <img
              src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aba1010694a2418bff0cf_location%20icon.png"
              alt="A white pin on a black background"
              width="24"
              height="25"
              className="auto-fit contact-two-icon"
            />
          </div>
          <div className="contact-two-grid-head">
            <strong>4th floor, Serinity Square, Hyderabad, Telangana ,500081 iNDIA</strong>
          </div>
          <div className="contact-two-grid-head new">
            <a href="mailto:contact@clymin.com?subject=Clymin%20contact%20email" className="link-34">
              contact@clymin.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

