import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getSiteContent } from './services/siteApi'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Partner from './components/Partner'
import Features from './components/Features'
import Advantages from './components/Advantages'
import DigitalBusiness from './components/DigitalBusiness'
import DownloadApp from './components/DownloadApp'
import RegisterCTA from './components/RegisterCTA'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import LegalPage from './pages/LegalPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'

function HomePage({ content }) {
  return (
    <main>
      <Hero />
      <About />
      <Services services={content.services} />
      <Partner stats={content.stats} />
      <Features />
      <Advantages />
      <DigitalBusiness />
      <DownloadApp />
      <RegisterCTA />
      <Testimonials testimonials={content.testimonials} />
      <Partners partners={content.partners} />
    </main>
  )
}

export default function App() {
  const [content, setContent] = useState({ services: [], testimonials: [], partners: [], stats: [] })

  useEffect(() => {
    let mounted = true
    getSiteContent().then((data) => {
      if (mounted) setContent(data)
    })
    return () => { mounted = false }
  }, [])

  return (
    <div className="site">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage content={content} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}