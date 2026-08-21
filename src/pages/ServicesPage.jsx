import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import servicesData from '../data/servicesData'
import './services.css'

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-center">
            <h1>Our Services</h1>
            <p className="services-hero-sub">
              50+ digital services at one place — from banking and bill payments to government registrations and tax filing.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="services-cards-grid">
            {servicesData.map((service) => (
              <Link to={`/services/${service.slug}`} className={`service-card-link service-card-${service.tone}`} key={service.id}>
                <div className="service-card-icon-wrap">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.tagline}</p>
                <div className="service-card-footer">
                  <span className="service-card-count">{service.items.length} services</span>
                  <span className="service-card-arrow">
                    <Icon name="chevron-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
