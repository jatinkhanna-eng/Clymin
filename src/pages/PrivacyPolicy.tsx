import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './PrivacyPolicy.css'

export const PrivacyPolicy = () => {
  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <section className="changelog-hero-section">
        <div className="container w-container">
          <div>
            <h1 className="no-margin-top text-align-center">Privacy Policy</h1>
          </div>
        </div>
      </section>
      <section className="changelog-section">
        <h3>
          <strong>1. Introduction</strong>
        </h3>
        <p>
          Welcome to Clymin. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>

        <h3>
          <strong>2. Information We Collect</strong>
        </h3>
        <p>We collect several types of information from and about users of our services, including:</p>
        <p>
          <strong>Personal Identification Information:</strong> Name, email address, phone number, and other similar contact information.
          <br />
          <strong>Technical Information:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.
          <br />
          <strong>Usage Data:</strong> Information about how you use our website, products, and services.
          <br />
          <strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.
        </p>

        <h3>
          <strong>4. Use of Your Information</strong>
        </h3>
        <p>
          We use the information we collect in the following ways:
          <br />
          <strong>To Provide and Improve Our Services:</strong> Processing your data to deliver our services and improve the quality of our offerings.
          <br />
          <strong>To Communicate with You:</strong> Sending you updates, promotional materials, and other information that may be of interest to you.
          <br />
          <strong>To Comply with Legal Obligations:</strong> Ensuring compliance with applicable laws and regulations.
          <br />
          <strong>For Internal Use:</strong> Data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and improving our services.
        </p>

        <h3>
          <strong>5. Disclosure of Your Information</strong>
        </h3>
        <p>
          We may share your personal information in the following circumstances:
          <br />
          <strong>With Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.
          <br />
          <strong>For Legal Reasons:</strong> If required by law or if we believe that disclosure is necessary to protect our rights, investigate fraud, or respond to a government request.
          <br />
          <strong>Business Transfers:</strong> In connection with a merger, sale, or other transfer of all or part of our business.
        </p>

        <h3>
          <strong>6. Data Security</strong>
        </h3>
        <p>
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. However, no system can be completely secure, and we cannot guarantee the absolute security of your personal data.
        </p>

        <h3>
          <strong>7. Data Retention</strong>
        </h3>
        <p>
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h3>
          <strong>8. Your Data Protection Rights</strong>
        </h3>
        <p>
          Depending on your location, you may have the following rights regarding your personal data:
          <br />
          <br />
          <strong>Access:</strong> Request access to your personal data.
          <br />
          <strong>Correction:</strong> Request correction of the personal data that we hold about you.
          <br />
          <strong>Deletion:</strong> Request deletion of your personal data.
          <br />
          <strong>Objection:</strong> Object to processing of your personal data.
          <br />
          <strong>Restriction:</strong> Request the restriction of processing your personal data.
          <br />
          <strong>Portability:</strong> Request the transfer of your personal data to another party.
        </p>

        <h3>
          <strong>9. Changes to Our Privacy Policy</strong>
        </h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes we make will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. If you have any questions about this Privacy Policy, please contact us.
        </p>
      </section>
      <Footer />
    </>
  )
}

