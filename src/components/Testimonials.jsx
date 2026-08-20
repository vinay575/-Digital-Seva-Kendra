import { useEffect, useState, useCallback } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function usePerView() {
  const getPerView = () => (typeof window !== 'undefined' && window.innerWidth < 860 ? 1 : 3)
  const [perView, setPerView] = useState(getPerView)
  useEffect(() => {
    const onResize = () => setPerView(getPerView())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return perView
}

export default function Testimonials({ testimonials = [] }) {
  const perView = usePerView()
  const [active, setActive] = useState(0)
  const maxIndex = Math.max(0, testimonials.length - perView)

  const next = useCallback(() => setActive((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex])
  const prev = () => setActive((i) => (i <= 0 ? maxIndex : i - 1))

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const visible = testimonials.slice(active, active + perView)
  if (visible.length < perView && testimonials.length > perView) {
    visible.push(...testimonials.slice(0, perView - visible.length))
  }

  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionHeading title="Testimonials" />
        <div className="testimonial-row">
          {visible.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="quote-mark">
                <Icon name="quote" />
              </div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <i key={s} className={`fa-solid fa-star ${s < t.rating ? 'filled' : ''}`} />
                ))}
              </div>
              <p className="quote">“{t.quote}”</p>
              <div className="author">
                <div className="avatar">{t.name.charAt(0)}</div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
                <span className="verified">
                  <Icon name="check" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-nav">
          <button onClick={prev} aria-label="Previous testimonial">
            <Icon name="chevron-left" />
          </button>
          <button onClick={next} aria-label="Next testimonial">
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
    </section>
  )
}