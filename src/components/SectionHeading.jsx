import Icon from './Icon'

export default function SectionHeading({ subtitle, title, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2>{title}</h2>
      <div className="heading-line">
        <span className="line-saffron" />
        <span className="line-green" />
        <span className="line-saffron" />
      </div>
    </div>
  )
}