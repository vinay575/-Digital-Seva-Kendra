import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import './about.css'

const POINTS = [
  'Driving Licence, Passport, Voter ID applications',
  'AEPS (Aadhaar Enabled Payment System)',
  'All state & central certificates',
  'Secure unified payment platforms'
]

const STATS = [
  { value: '50+', label: 'Services' },
  { value: '23+', label: 'Cities' },
  { value: '1 Lakh+', label: 'DSK Centres' },
  { value: '24/7', label: 'Support' }
]

const VALUES = [
  { icon: 'shield', title: 'Trust & Security', desc: 'Bank-grade encryption protects every transaction. Your data stays private and secure.' },
  { icon: 'chart', title: 'Innovation', desc: 'Evolving our platform with the latest digital tools and services for citizens across India.' },
  { icon: 'network', title: 'Inclusion', desc: 'Bridging the digital divide — government and banking services accessible to every Indian.' },
  { icon: 'star', title: 'Excellence', desc: 'Best-in-class service with 24/7 support and a network of over 1 Lakh centres.' }
]

const WHY_CHOOSE = [
  { icon: 'university', text: 'All major banking services under one roof' },
  { icon: 'id-card', text: 'Direct access to government certificates & IDs' },
  { icon: 'shield', text: '100% secure unified payment platform' },
  { icon: 'rupee', text: 'Transparent pricing with no hidden charges' },
  { icon: 'map', text: 'Pan-India network spanning 23+ cities' },
  { icon: 'phone', text: 'Round-the-clock customer support' }
]

const MV_CARDS = [
  { icon: 'chart', color: 'saffron', title: 'Our Mission', text: 'To simplify everyday digital services for every Indian citizen. We aim to create a unified platform where banking, government services, bill payments, and document processing are accessible, secure, and hassle-free.' },
  { icon: 'star', color: 'green', title: 'Our Vision', text: 'To become India\'s largest and most trusted digital services network, bridging the gap between citizens and government institutions. We envision a future where every person can access essential services with just a few clicks.' }
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <div className="about-hero-center">
            <h1>About Us</h1>
            <p className="about-hero-sub">
              Empowering every Indian with easy access to digital services, secure payments, and government solutions — all in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-intro" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}about-bg.jpg')` }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-illustration">
                <div className="illus-card c1"><Icon name="university" /><span>Banking</span></div>
                <div className="illus-card c2"><Icon name="id-card" /><span>Government</span></div>
                <div className="illus-card c3"><Icon name="mobile" /><span>Recharge</span></div>
                <div className="illus-card c4"><Icon name="plane" /><span>Travel</span></div>
                <div className="illus-card c5"><Icon name="file-text" /><span>Tax Filing</span></div>
                <div className="illus-circle" />
                <div className="illus-logo">DSK</div>
              </div>
              <div className="about-float f-secure">
                <Icon name="shield" />
                <span>
                  <strong>100% Secure</strong>
                  Your data is safe with us
                </span>
              </div>
              <div className="about-float f-earn">
                <Icon name="rupee" />
                <span>
                  <strong>Earn ₹1 Lakh</strong>
                  Monthly as a partner
                </span>
              </div>
            </div>
            <div className="about-text">
              <SectionHeading title="Who We Are" />
              <p>
                In this digital age, where everything in business has gone digital, we at{' '}
                <strong>Digital Seva Kendra</strong> provide an easy, efficient, and long term solution to all your
                multi-utility payment and other document needs. We abide by the Digital India norms in the best possible way.
              </p>
              <p>
                Our main aim is to channelize payments to unified digital platforms where you get all the security and
                convenience. Our services range widely — a one stop solution that takes care of all your needs without
                needing you to scour the internet for every form you need.
              </p>
              <ul className="about-points">
                {POINTS.map((p) => (
                  <li key={p}><Icon name="check" /> {p}</li>
                ))}
              </ul>
              <div className="about-stats">
                {STATS.map((s) => (
                  <div className="about-stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mv">
        <div className="container">
          <SectionHeading title="Mission & Vision" />
          <div className="about-mv-grid">
            {MV_CARDS.map((card) => (
              <div className={`about-mv-card mv-${card.color}`} key={card.title}>
                <div className="mv-head">
                  <div className="mv-icon"><Icon name={card.icon} /></div>
                  <h3>{card.title}</h3>
                </div>
                <div className="mv-body"><p>{card.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-values" style={{ background: 'linear-gradient(180deg, var(--saffron-tint) 0%, #fff 100%)' }}>
        <div className="container">
          <SectionHeading title="Core Values" />
          <div className="about-values-grid">
            {VALUES.map((v, i) => (
              <div className={`value-card vc-${i % 2 === 0 ? 'saffron' : 'green'}`} key={v.title}>
                <div className="value-icon"><Icon name={v.icon} /></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-why" style={{ background: 'linear-gradient(180deg, var(--green-tint) 0%, #fff 100%)' }}>
        <div className="container">
          <SectionHeading title="Why Choose Us" />
          <div className="about-why-grid">
            {WHY_CHOOSE.map((item) => (
              <div className="why-card" key={item.text}>
                <div className="why-icon"><Icon name={item.icon} /></div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats-banner">
        <div className="container">
          <SectionHeading light title="Our Achievements" />
          <div className="stats-banner-grid">
            {STATS.map((s) => (
              <div className="stats-banner-card" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-card">
            <div className="cta-text">
              <h2>Ready to Go Digital?</h2>
              <p>Join over 1 Lakh centres already serving their communities with Digital Seva Kendra.</p>
            </div>
            <div className="cta-btns">
              <a href="#register" className="btn btn-white">Register Now</a>
              <Link to="/services" className="btn btn-white-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
