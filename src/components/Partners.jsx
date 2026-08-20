import SectionHeading from './SectionHeading'

const LOGOS = [
  'Kotak',
  'Indusland',
  'ICICI',
  'Hdfc',
  'canara',
  'central',
  'bharat',
  'union',
  'sbi',
  'RBI',
  'punjab-national',
  'paytm',
  'LIC'
]

export default function Partners() {
  return (
    <section className="section partners-section">
      <div className="container">
        <SectionHeading title="Our Partners" />
        <div className="partners-marquee">
          <div className="marquee-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div className="partner-logo" key={`${logo}-${i}`}>
                <img src={`/partners/${logo}.png`} alt={logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}