import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Advantages() {
  const advantages = [
    {
      icon: 'location',
      title: 'Accessibility',
      text: 'Grahak Seva Kendra is accessible across India, making it easy for people in even remote areas to access these services.'
    },
    {
      icon: 'user-tie',
      title: 'Empowering Local Entrepreneurs',
      text: 'It empowers local entrepreneurs to become Retailers and earn a commission while providing essential services to their community.'
    },
    {
      icon: 'link',
      title: 'Bridging the Digital Divide',
      text: 'A step towards bridging the digital divide in India by making essential services available to all, regardless of location or digital literacy.'
    }
  ]

  return (
    <section className="section advantage-section">
      <div className="container">
        <SectionHeading title="Advantages of Digital Seva Kendra" />
        <div className="advantage-grid">
          {advantages.map((a, i) => (
            <div className={`advantage-card tone-${i + 1}`} key={a.title}>
              <div className="adv-head">
                <div className="adv-icon">
                  <Icon name={a.icon} />
                </div>
                <h3>{a.title}</h3>
              </div>
              <div className="adv-body">
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}