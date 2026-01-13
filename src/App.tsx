import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ContactUs } from '@/components/ContactUs'
import { NotFound } from './pages/NotFound'
import { ThankYou } from './pages/ThankYou'
import { TermsOfService } from './pages/TermsOfService'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { FoodDeliveryCaseStudy } from './pages/FoodDeliveryCaseStudy'
import { EcommerceBlog } from './pages/EcommerceBlog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/food-delivery-with-clymins" element={<FoodDeliveryCaseStudy />} />
        <Route path="/blogs/powerful-web-scraping-techniques-to-extract-data-like-a-pro-in-2024" element={<EcommerceBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
