import Icon from './Icon'

const USEFUL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Login', href: '#login' },
  { label: 'Registration Now', href: '#register' }
]

const QUICK_LINKS = [
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Legal Documents', href: '#legal' }
]

const SERVICE_LINKS = [
  'Aadhar Services',
  'Bill Payment Services',
  'Banking Services',
  'GST Services',
  'Registration Services',
  'Government Services'
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">DSK</span>
              <span className="brand-text">
                <strong>Digital Seva</strong>
                <em>Kendra</em>
              </span>
            </a>
            <p>
              We at Digital Seva Kendra provide an easy, efficient and long term solution to all your multi-utility
              payment and document needs. We abide by the Digital India norms in the best possible way.
            </p>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              {USEFUL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul className="contact-list">
              <li>
                <Icon name="email" /> info@csce-governance.com
              </li>
              <li>
                <Icon name="map-pin" /> Electronics Niketan, 3rd Floor, 6 CGO Complex, Lodhi Road, New Delhi - 110003
              </li>
            </ul>
            <h4 className="follow-title">Follow Us:</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Digital Seva Kendra. All Rights Reserved.</span>
          <span className="tricolor-strip">
            <i className="saffron" /><i className="white" /><i className="green" />
          </span>
        </div>
      </div>
    </footer>
  )
}