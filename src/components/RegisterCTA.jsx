import Icon from './Icon'

export default function RegisterCTA() {
  return (
    <section className="register-banner" id="register">
      <div className="container register-row">
        <div className="register-text">
          <h2>Apply for Digital Seva Kendra</h2>
          <p>Start your own digital kiosk and start earning today.</p>
        </div>
        <a href="#register" className="btn btn-white btn-lg register-now">
          <Icon name="user-plus" /> Registration Now
        </a>
      </div>
    </section>
  )
}