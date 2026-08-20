import Icon from './Icon'

export default function DigitalBusiness() {
  return (
    <section className="section digital-section" id="blog">
      <div className="container">
        <div className="digital-grid">
          <div className="digital-text">
            <span className="subtitle">Empowering rural India</span>
            <h2>Digital Business</h2>
            <div className="heading-line">
              <span className="line-saffron" />
              <span className="line-green" />
            </div>
            <p>
              Digital Seva Kendra is a transformative initiative that empowers individuals in rural areas to establish
              their Digital Seva Centres, becoming agents of progress within their communities.
            </p>
            <p>
              With the ability to offer essential services like banking, bill payment, and government assistance, these
              centres have bridged the gap between urban and rural India. The project has seen more than{' '}
              <strong>1,000 operational centres</strong>, creating employment opportunities for over{' '}
              <strong>10,000 individuals</strong>.
            </p>
            <ul className="digital-points">
              <li>
                <Icon name="check" /> Environment of growth and connectivity
              </li>
              <li>
                <Icon name="check" /> Progress in previously underserved regions
              </li>
            </ul>
          </div>
          <div className="digital-visual">
            <div className="growth-chart">
              <div className="growth-bars">
                <span style={{ height: '35%' }} />
                <span style={{ height: '50%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '100%' }} />
              </div>
              <div className="growth-float f1">
                <strong>10,000+</strong>
                <span>Jobs created</span>
              </div>
              <div className="growth-float f2">
                <strong>1,000+</strong>
                <span>Active centres</span>
              </div>
              <div className="growth-float f3">
                <strong>50+</strong>
                <span>Services offered</span>
              </div>
              <div className="growth-base">
                <Icon name="university" />
                Digital Seva Kendra
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}