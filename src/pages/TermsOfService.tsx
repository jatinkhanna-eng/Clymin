import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './TermsOfService.css'

export const TermsOfService = () => {
  const handleContactClick = () => {
    console.log('Contact Us clicked')
  }

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <section className="changelog-hero-section add-padding">
        <div className="container w-container">
          <div>
            <h1 className="no-margin-top text-align-center">Terms & Service</h1>
            <div className="licensing-text-wrapper margin-auto">
              <p className="text-align-center">
                All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="changelog-section">
          <h3>
            <strong>1. Introduction</strong>
          </h3>
          <p>
            Welcome to Clymin. These Terms & Services ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
          </p>

          <h3>
            <strong>2. Definitions</strong>
          </h3>
          <p>
            <strong>"Company," "we," "our," or "us" </strong>refers to Clymin.
            <br />
            <strong>"User," "you," or "your" </strong>refers to any individual or entity using our services.
            <br />
            <strong>"Services" </strong>refers to the data scraping and related services provided by Clymin.
            <br />
            <strong>"Website"</strong> refers to{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.clymin.ai/">
              www.clymin.ai
            </a>
          </p>

          <h3>
            <strong>3. Use of Services</strong>
            <br />
            <br />
            <strong>3.1 Eligibility</strong>
          </h3>
          <p>You must be at least 18 years old and have the legal capacity to enter into these Terms to use our services.</p>

          <h3>
            <strong>3.2 Account Registration</strong>
          </h3>
          <p>
            To access certain features of our services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>

          <h3>
            <strong>3.3 Account Security</strong>
          </h3>
          <p>
            You are responsible for maintaining the confidentiality of your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h3>
            <strong>4. Prohibited Uses</strong>
          </h3>
          <p>
            You agree not to use the services for any unlawful or prohibited activities, including but not limited to:
            <br />
            Violating any applicable laws or regulations.
            <br />
            Infringing on any intellectual property rights.
            <br />
            Distributing viruses or other harmful software.
            <br />
            Engaging in any activity that could damage, disable, or impair the services.
          </p>

          <h3>
            <strong>5. Service Modifications</strong>
          </h3>
          <p>
            We reserve the right to modify or discontinue our services at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the services.
          </p>

          <h3>
            <strong>6. Fees and Payment</strong>
            <br />
            <br />
            <strong>6.1 Fees</strong>
          </h3>
          <p>Some of our services may be subject to fees. You agree to pay all applicable fees as described on the website at the time you use such services.</p>

          <h3>
            <strong>6.2 Payment</strong>
          </h3>
          <p>Payments for services must be made via the methods provided on our website. All fees are non-refundable, except as required by law.</p>

          <h3>
            <strong>7. Intellectual Property</strong>
            <br />
            <br />
            <strong>7.1 Ownership</strong>
          </h3>
          <p>
            All content, features, and functionality of the services, including but not limited to information, software, text, displays, images, and video, are the property of Clymin or its licensors.
          </p>

          <h3>
            <strong>7.2 Limited License</strong>
          </h3>
          <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the services for your personal or internal business purposes.</p>

          <h3>
            <strong>7.3 Restrictions</strong>
          </h3>
          <p>
            You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit any of the material on our services without our prior written consent.
          </p>

          <h3>
            <strong>8. Limitation of Liability</strong>
          </h3>
          <p>
            To the fullest extent permitted by law, Clymin, its affiliates, and their respective officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            <br />
            <br />
            Your use or inability to use the services.
            <br />
            Any unauthorized access to or use of our servers and/or any personal information stored therein.
            <br />
            Any interruption or cessation of transmission to or from our services.
            <br />
            Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party.
            <br />
            Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the services.
          </p>

          <h3>
            <strong>9. Indemnification</strong>
          </h3>
          <p>
            You agree to defend, indemnify, and hold harmless Clymin, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
            <br />
            <br />
            Your use of and access to the services.
            <br />
            Your violation of any term of these Terms.
            <br />
            Your violation of any third-party right, including without limitation any intellectual property, property, or privacy right.
            <br />
            Any claim that your use of the services caused damage to a third party.
          </p>

          <h3>
            <strong>10. Governing Law</strong>
          </h3>
          <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Clymin operates, without regard to its conflict of law provisions.</p>

          <h3>
            <strong>11. Changes to Terms</strong>
          </h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>
      </section>
      <Footer />
    </>
  )
}

