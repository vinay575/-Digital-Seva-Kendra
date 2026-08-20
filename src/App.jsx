import { useEffect, useState } from 'react'
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
      <Footer />
    </div>
  )
}