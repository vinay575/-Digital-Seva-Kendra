import Icon from './Icon'

export default function DownloadApp() {
  return (
    <section className="section app-section" id="app">
      <div className="container">
        <div className="app-grid">
          <div className="app-phone">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <span className="app-logo">DSK</span>
                <div className="app-tile t1"><Icon name="mobile" /> Recharge</div>
                <div className="app-tile t2"><Icon name="university" /> AEPS</div>
                <div className="app-tile t3"><Icon name="rupee" /> Pay</div>
                <div className="app-tile t4"><Icon name="id-card" /> Govt</div>
                <div className="app-tile t5"><Icon name="plane" /> Travel</div>
                <div className="app-tile t6"><Icon name="file-text" /> Tax</div>
              </div>
            </div>
          </div>
          <div className="app-text">
            <span className="subtitle">Mobile first</span>
            <h2>Download Our App</h2>
            <div className="heading-line">
              <span className="line-saffron" />
              <span className="line-green" />
            </div>
            <p>
              Digital Seva Kendra is a single unified app to access major banking, bill payment and government services
              anytime, anywhere on your mobile phone.
            </p>
            <ul className="app-features">
              <li>
                <Icon name="check" /> 24/7 Support
              </li>
              <li>
                <Icon name="check" /> Instant Transaction Confirmation
              </li>
              <li>
                <Icon name="check" /> Easy To Use
              </li>
            </ul>
            <a href="#app" className="btn btn-saffron btn-lg">
              <Icon name="play" /> Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}