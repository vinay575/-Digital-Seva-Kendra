import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Icon from '../components/Icon'
import servicesData from '../data/servicesData'
import './services.css'

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = servicesData.find((s) => s.slug === id || String(s.id) === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="services-page">
        <section className="services-hero">
          <div className="services-hero-bg" />
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>Not Found</span>
            </nav>
            <h1>Service Not Found</h1>
            <p className="services-hero-sub">The service you are looking for does not exist.</p>
            <Link to="/services" className="btn btn-saffron" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="chevron-left" /> Back to Services
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="services-page">
      <section className={`service-detail-hero service-hero-${service.tone}`}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <div className="service-detail-hero-center">
            <div className="service-detail-hero-icon">
              <Icon name={service.icon} />
            </div>
            <h1>{service.title}</h1>
            <p className="service-detail-hero-tagline">{service.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section service-detail-about">
        <div className="container">
          <div className="service-detail-about-grid">
            <div className="service-detail-about-text">
              <h2>About {service.title}</h2>
              <p>{service.description}</p>
              <Link to="/services" className="btn btn-outline-dark">
                <Icon name="chevron-left" /> All Services
              </Link>
            </div>
            <div className={`service-detail-about-stat service-stat-${service.tone}`}>
              <span className="stat-value">{service.stats.value}</span>
              <span className="stat-label">{service.stats.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section service-detail-items-section service-items-bg-${service.tone}`}>
        <div className="container">
          <h2 className="service-detail-items-heading">What We Offer</h2>
          <div className="service-detail-items-grid">
            {service.items.map((item, i) => (
              <div className="service-detail-item-card" key={item.name}>
                <div className="service-detail-item-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
