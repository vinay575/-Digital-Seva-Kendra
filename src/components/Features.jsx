import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Features() {
  const features = [
    { icon: 'rupee', title: 'High Earning', sub: 'Potential' },
    { icon: 'user-plus', title: 'Easy', sub: 'Onboarding' },
    { icon: 'shield', title: '100% Safe &', sub: 'Secure' },
    { icon: 'certificate', title: 'No Certificate', sub: 'or Exam Needed' }
  ]

  return (
    <section className="section features-section">
      <div className="container features-split">
        <div className="split-head">
          <span className="split-tag">Why choose us</span>
          <h2 className="split-title">Features</h2>
          <p className="split-desc">
            Everything you need to start and grow a successful Digital Seva Kendra from day one.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <Icon name={f.icon} />
              </div>
              <h4>
                {f.title} <br /> {f.sub}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}