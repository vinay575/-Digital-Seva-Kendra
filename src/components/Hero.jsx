import { useEffect, useState, useCallback } from 'react'
import Icon from './Icon'

const SLIDES = [
  {
    badge: 'Government Backed Program',
    title: 'Become a Digital Seva Kendra Partner',
    highlight: 'Earn up to ₹1 Lakh per month',
    text: 'A one-stop solution for banking, bill payments, government registrations and more — trusted across 23+ cities and 1 Lakh+ centres across India.',
    cta: { icon: 'mobile', label: 'Mobile Recharge', sub: 'Instant • Secure', href: '#services' },
    cta2: { icon: 'university', label: 'AEPS Banking', sub: 'Cash in / Cash out', href: '#services' }
  },
  {
    badge: 'Banking • Recharge • Government Services',
    title: 'All Digital Services at One Place',
    highlight: 'AEPS, Money Transfer & More',
    text: 'Offer 50+ services from your kiosk — from cash deposit and micro ATM to PAN, Voter ID, Passport applications and every government scheme.',
    cta: { icon: 'id-card', label: 'Govt. Services', sub: 'PAN • Voter • Passport', href: '#services' },
    cta2: { icon: 'mobile', label: 'Mobile Recharge', sub: 'Instant • Secure', href: '#services' }
  },
  {
    badge: 'Join 1,00,000+ Retailers',
    title: 'Start Your Own Digital Kiosk Business',
    highlight: 'Easy Onboarding • 100% Secure',
    text: 'No exam or certificate required. Empowering local entrepreneurs across urban and rural India to grow their own business.',
    cta: { icon: 'user-plus', label: 'Become a Partner', sub: 'Start Earning Today', href: '#partner' },
    cta2: { icon: 'mobile', label: 'Mobile Recharge', sub: 'Instant • Secure', href: '#services' }
  }
]

export default function Hero() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive((i) => (i + 1) % SLIDES.length), [])
  const prev = () => setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="hero" id="home">
      <div className="hero-slides">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === active ? 'active' : ''}`}>
            <div className="hero-glow glow-saffron" />
            <div className="hero-glow glow-green" />
            <div className="container hero-content">
              <div className="hero-text">
                <span className="hero-badge">
                  <span className="dot" /> {slide.badge}
                </span>
                <h1>{slide.title}</h1>
                <p className="hero-highlight">{slide.highlight}</p>
                <p className="hero-sub">{slide.text}</p>
                <div className="hero-actions">
                  <a href={slide.cta.href} className="btn btn-saffron btn-rich">
                    <span className="btn-rich-icon">
                      <Icon name={slide.cta.icon} />
                    </span>
                    <span className="btn-rich-text">
                      <strong>{slide.cta.label}</strong>
                      <small>{slide.cta.sub}</small>
                    </span>
                  </a>
                  <a href={slide.cta2.href} className="btn btn-outline btn-rich">
                    <span className="btn-rich-icon">
                      <Icon name={slide.cta2.icon} />
                    </span>
                    <span className="btn-rich-text">
                      <strong>{slide.cta2.label}</strong>
                      <small>{slide.cta2.sub}</small>
                    </span>
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img src="/tree.png" alt="Digital growth" className="hero-tree" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button className="hero-nav nav-prev" onClick={prev} aria-label="Previous slide">
        <Icon name="chevron-left" />
      </button>
      <button className="hero-nav nav-next" onClick={next} aria-label="Next slide">
        <Icon name="chevron-right" />
      </button>
    </section>
  )
}