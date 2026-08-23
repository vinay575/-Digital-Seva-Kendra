import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { submitContact } from '../services/siteApi'
import './contact.css'

const CONTACT_INFO = [
  { icon: 'email', title: 'Email Us', detail: 'info@csce-governance.com', href: 'mailto:info@csce-governance.com' },
  { icon: 'map-pin', title: 'Visit Us', detail: 'Electronics Niketan, 3rd Floor, 6 CGO Complex, Lodhi Road, New Delhi - 110003', href: null },
  { icon: 'phone', title: 'Call Us', detail: '+91 11 2671 7020', href: 'tel:+911126717020' }
]

const SOCIALS = [
  { icon: 'facebook', label: 'Facebook', href: '#' },
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'youtube', label: 'YouTube', href: '#' }
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await submitContact(form)
      setStatus({ ok: true, msg: res.message || 'Message sent successfully!' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
          <div className="contact-hero-center">
            <h1>Contact Us</h1>
            <p className="contact-hero-sub">
              Have a question or need help? We'd love to hear from you. Reach out and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {CONTACT_INFO.map((item) => (
              <div className="contact-info-card" key={item.title}>
                <div className="contact-info-icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                {item.href ? (
                  <a href={item.href}>{item.detail}</a>
                ) : (
                  <p>{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-wrap">
              <SectionHeading title="Send Us a Message" />
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Write your message here..." />
                </div>
                {status && (
                  <div className={`form-status ${status.ok ? 'success' : 'error'}`}>
                    <Icon name={status.ok ? 'check' : 'close'} /> {status.msg}
                  </div>
                )}
                <button type="submit" className="btn btn-saffron" disabled={sending}>
                  {sending ? 'Sending...' : <><Icon name="email" /> Send Message</>}
                </button>
              </form>
            </div>

            <div className="contact-side">
              <div className="contact-social-card">
                <h3>Follow Us</h3>
                <p>Stay connected with us on social media for the latest updates and news.</p>
                <div className="contact-social-links">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} className="contact-social-link" aria-label={s.label}>
                      <Icon name={s.icon} />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-hours-card">
                <h3>Business Hours</h3>
                <ul className="contact-hours-list">
                  <li><span>Monday - Friday</span><strong>9:00 AM - 6:00 PM</strong></li>
                  <li><span>Saturday</span><strong>10:00 AM - 4:00 PM</strong></li>
                  <li><span>Sunday</span><strong>Closed</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-card">
            <div className="contact-cta-text">
              <h2>Ready to Go Digital?</h2>
              <p>Join over 1 Lakh centres already serving their communities with Digital Seva Kendra.</p>
            </div>
            <div className="contact-cta-btns">
              <a href="#register" className="btn btn-white">Register Now</a>
              <Link to="/services" className="btn btn-white-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
