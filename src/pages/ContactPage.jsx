import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { submitContact } from '../services/siteApi'
import './contact.css'

const CONTACT_INFO = [
  { icon: 'email', title: 'Email Us', detail: 'info@csce-governance.com', href: 'mailto:info@csce-governance.com', color: '#f97316' },
  { icon: 'phone', title: 'Call Us', detail: '+91 11 2671 7020', href: 'tel:+911126717020', color: '#16a34a' },
  { icon: 'map-pin', title: 'Visit Us', detail: 'Electronics Niketan, 3rd Floor, 6 CGO Complex, Lodhi Road, New Delhi - 110003', href: null, color: '#6366f1' }
]

const SOCIALS = [
  { icon: 'facebook', label: 'Facebook', href: '#', color: '#1877f2' },
  { icon: 'instagram', label: 'Instagram', href: '#', color: '#e4405f' },
  { icon: 'youtube', label: 'YouTube', href: '#', color: '#ff0000' }
]

const QUICK_LINKS = [
  { label: 'General Inquiry', icon: 'email' },
  { label: 'Partnership', icon: 'users' },
  { label: 'Technical Support', icon: 'shield' },
  { label: 'Feedback', icon: 'check' }
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)
  const [activeQuickLink, setActiveQuickLink] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleQuickLink(label) {
    setActiveQuickLink(label)
    setForm((prev) => ({ ...prev, subject: label }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await submitContact(form)
      setStatus({ ok: true, msg: res.message || 'Message sent successfully!' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setActiveQuickLink(null)
    } catch {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="contact-hero-v2">
        <div className="hero-bg-shapes">
          <div className="hero-orb hero-orb--1"></div>
          <div className="hero-orb hero-orb--2"></div>
          <div className="hero-orb hero-orb--3"></div>
          <div className="hero-grid-lines"></div>
        </div>
        <div className="container">
          <nav className="breadcrumb-v2">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </nav>
          <div className="contact-hero-content">
            <span className="hero-badge">
              <Icon name="email" /> Get in Touch
            </span>
            <h1 className="hero-title-v2">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="hero-subtitle-v2">
              Have a question, suggestion, or want to partner with us? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Horizontal Info Cards ── */}
      <section className="contact-info-v2-section">
        <div className="container">
          <div className="contact-info-v2-grid">
            {CONTACT_INFO.map((item, i) => (
              <a
                key={item.title}
                href={item.href || '#'}
                className="contact-info-v2-card"
                style={{ '--accent': item.color, animationDelay: `${i * 0.12}s` }}
              >
                <div className="info-v2-icon-wrap" style={{ background: `${item.color}18` }}>
                  <div className="info-v2-icon" style={{ background: item.color }}>
                    <Icon name={item.icon} />
                  </div>
                </div>
                <div className="info-v2-text">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <div className="info-v2-arrow">
                  <Icon name="check" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Side Panel ── */}
      <section className="contact-main-v2">
        <div className="container">
          <div className="contact-main-grid">

            {/* Form Side */}
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <div className="quick-links-row">
                {QUICK_LINKS.map((ql) => (
                  <button
                    key={ql.label}
                    type="button"
                    className={`quick-link-chip ${activeQuickLink === ql.label ? 'active' : ''}`}
                    onClick={() => handleQuickLink(ql.label)}
                  >
                    <Icon name={ql.icon} />
                    {ql.label}
                  </button>
                ))}
              </div>

              <form className="contact-form-v2" onSubmit={handleSubmit}>
                <div className="form-grid-v2">
                  <div className="form-field-v2">
                    <label htmlFor="name">Full Name</label>
                    <div className="field-input-wrap">
                      <Icon name="users" />
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="form-field-v2">
                    <label htmlFor="email">Email Address</label>
                    <div className="field-input-wrap">
                      <Icon name="email" />
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="form-field-v2">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="field-input-wrap">
                      <Icon name="phone" />
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="form-field-v2">
                    <label htmlFor="subject">Subject</label>
                    <div className="field-input-wrap">
                      <Icon name="shield" />
                      <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" />
                    </div>
                  </div>
                </div>
                <div className="form-field-v2 full-width">
                  <label htmlFor="message">Your Message</label>
                  <div className="field-input-wrap textarea-wrap">
                    <Icon name="email" />
                    <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Tell us what you need..." />
                  </div>
                </div>
                {status && (
                  <div className={`form-status-v2 ${status.ok ? 'success' : 'error'}`}>
                    <Icon name={status.ok ? 'check' : 'close'} /> {status.msg}
                  </div>
                )}
                <button type="submit" className="submit-btn-v2" disabled={sending}>
                  {sending ? (
                    <span className="btn-loading"><span className="spinner"></span> Sending...</span>
                  ) : (
                    <>Send Message <Icon name="check" /></>
                  )}
                </button>
              </form>
            </div>

            {/* Side Panel */}
            <div className="contact-side-v2">
              <div className="side-panel-sticky">
                <div className="side-info-card">
                  <div className="side-card-glow"></div>
                  <h3>Other Ways to Reach Us</h3>
                  <p className="side-desc">Prefer a more direct approach? Use any of the methods below.</p>

                  <div className="side-features">
                    <div className="side-feature">
                      <div className="side-feature-icon" style={{ background: '#f9731620', color: '#f97316' }}>
                        <Icon name="email" />
                      </div>
                      <div>
                        <strong>Quick Response</strong>
                        <span>We reply within 24 hours</span>
                      </div>
                    </div>
                    <div className="side-feature">
                      <div className="side-feature-icon" style={{ background: '#16a34a20', color: '#16a34a' }}>
                        <Icon name="phone" />
                      </div>
                      <div>
                        <strong>Direct Call</strong>
                        <span>Mon-Fri, 9AM to 6PM</span>
                      </div>
                    </div>
                    <div className="side-feature">
                      <div className="side-feature-icon" style={{ background: '#6366f120', color: '#6366f1' }}>
                        <Icon name="map-pin" />
                      </div>
                      <div>
                        <strong>Visit Our Office</strong>
                        <span>New Delhi, India</span>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="side-hours-card">
                  <h3>Business Hours</h3>
                  <div className="hours-v2-list">
                    <div className="hours-v2-item">
                      <span>Mon - Fri</span>
                      <span className="hours-v2-time">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="hours-v2-item">
                      <span>Saturday</span>
                      <span className="hours-v2-time">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="hours-v2-item closed">
                      <span>Sunday</span>
                      <span className="hours-v2-time">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="contact-cta-v2">
        <div className="container">
          <div className="cta-v2-card">
            <div className="cta-v2-bg">
              <div className="cta-orb cta-orb--1"></div>
              <div className="cta-orb cta-orb--2"></div>
            </div>
            <div className="cta-v2-content">
              <div className="cta-v2-left">
                <h2>Ready to Go Digital?</h2>
                <p>Join over 1 Lakh centres already serving their communities with Digital Seva Kendra.</p>
              </div>
              <div className="cta-v2-right">
                <a href="#register" className="cta-btn-v2 cta-btn-solid">Register Now</a>
                <Link to="/services" className="cta-btn-v2 cta-btn-outline">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
