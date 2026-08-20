import Icon from './Icon'
import SectionHeading from './SectionHeading'

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

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading title="About Us" />
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-illustration">
              <div className="illus-card c1">
                <Icon name="university" />
                <span>Banking</span>
              </div>
              <div className="illus-card c2">
                <Icon name="id-card" />
                <span>Government</span>
              </div>
              <div className="illus-card c3">
                <Icon name="mobile" />
                <span>Recharge</span>
              </div>
              <div className="illus-card c4">
                <Icon name="plane" />
                <span>Travel</span>
              </div>
              <div className="illus-card c5">
                <Icon name="file-text" />
                <span>Tax Filing</span>
              </div>
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
            <p>
              In this digital age, where everything in business has gone digital, we at{' '}
              <strong>Digital Seva Kendra</strong> provide an easy, efficient, and long term solution to all your
              multi-utility payment and other document needs. We abide by the Digital India norms in the best possible
              way.
            </p>
            <p>
              Our main aim is to channelize payments to unified digital platforms where you get all the security and
              convenience. Our services range widely — a one stop solution that takes care of all your needs without
              needing you to scour the internet for every form you need.
            </p>
            <ul className="about-points">
              {POINTS.map((p) => (
                <li key={p}>
                  <Icon name="check" /> {p}
                </li>
              ))}
            </ul>
            <p>
              Based in Delhi, our dream is to build one of the biggest portals where every Indian can find relevant
              information without any hassle — with secure transactions and protected personal data, every single time.
            </p>
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
  )
}