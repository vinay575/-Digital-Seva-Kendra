import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Services({ services = [] }) {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading subtitle="Digital Seva Kendra" title="Our Services" />
        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`service-card tone-${(i % 4) + 1}`} key={service.id}>
              <div className="service-head">
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}