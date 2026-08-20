import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const BENEFITS = [
  { icon: 'user-plus', text: 'Easy Onboarding' },
  { icon: 'shield', text: '100% Secure' },
  { icon: 'certificate', text: 'No Exam Required' }
]

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return [ref, value]
}

function StatCard({ stat, compact }) {
  const { num, suffix } = parseStat(stat.value)
  const [ref, value] = useCountUp(num)
  return (
    <div className={`stat-card${compact ? ' compact' : ''}`}>
      <div className="stat-icon">
        <Icon name={stat.icon} />
      </div>
      <strong className="stat-value" ref={ref}>
        {value.toLocaleString('en-IN')}
        {suffix}
      </strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

function parseStat(value) {
  const cleaned = value.replace(/,/g, '').replace(/\+/g, '')
  const match = cleaned.match(/^([0-9]+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

const AVATARS = ['R', 'S', 'A', 'K']

export default function Partner({ stats = [] }) {
  return (
    <section className="section partner-section" id="partner">
      <div className="container">
        <div className="partner-banner">
          <div className="partner-banner-text">
            <span className="pb-badge">
              <Icon name="sparkles" /> Earning Opportunity
            </span>
            <h3>Earn up to <em>₹1 Lakh</em> per month</h3>
            <p>Become a Digital Seva Kendra partner and build your own digital business across India.</p>
            <div className="pb-benefits">
              {BENEFITS.map((b) => (
                <span className="pb-benefit" key={b.text}>
                  <Icon name={b.icon} /> {b.text}
                </span>
              ))}
            </div>
            <div className="pb-actions">
              <a href="#register" className="btn btn-saffron btn-rich">
                <span className="btn-rich-icon">
                  <Icon name="user-plus" />
                </span>
                <span className="btn-rich-text">
                  <strong>Become Our Partner</strong>
                  <small>Start Earning Today</small>
                </span>
              </a>
            </div>
          </div>
          <div className="pb-stats">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} compact />
            ))}
          </div>
        </div>

        <p className="partner-desc">
          Launched in over 23 cities with more than 1 Lakh centres already operational, Digital Seva Kendra bridges the
          gap between citizens and government services.
        </p>

        <div className="partner-trust">
          <div className="avatar-stack">
            {AVATARS.map((a, i) => (
              <span key={i} className={`avatar-chip chip-${i + 1}`}>{a}</span>
            ))}
          </div>
          <p>
            <strong>1,00,000+</strong> retailers already earning with Digital Seva Kendra
          </p>
        </div>
      </div>
    </section>
  )
}