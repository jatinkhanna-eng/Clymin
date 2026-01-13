import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ContactUs } from '@/components/ContactUs'
import { NotFound } from './pages/NotFound'
import { ThankYou } from './pages/ThankYou'
import { TermsOfService } from './pages/TermsOfService'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
