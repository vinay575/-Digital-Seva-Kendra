import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import blogData from '../data/blogData'
import './blog.css'

const GRADIENT_MAP = {
  Guide: 'blog-gradient-saffron',
  Tips: 'blog-gradient-green',
  News: 'blog-gradient-teal'
}

const ICON_MAP = {
  Guide: 'file-text',
  Tips: 'star',
  News: 'building'
}

const CATEGORIES = ['All', ...new Set(blogData.map((b) => b.category))]

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = active === 'All' ? blogData : blogData.filter((b) => b.category === active)

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-center">
            <h1>Our Blog</h1>
            <p className="blog-hero-sub">
              Stay updated with the latest guides, tips, and news about digital services, CSP opportunities, and business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filter-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="blog-empty">
              <h2>No Posts Found</h2>
              <p>No blog posts found in this category.</p>
              <button className="btn btn-saffron" onClick={() => setActive('All')}>
                View All Posts
              </button>
            </div>
          ) : (
            <div className="blog-cards-grid">
              {filtered.map((post) => (
                <Link to={`/blog/${post.slug}`} className="blog-card" key={post.id}>
                  <div className="blog-card-image">
                    <div className={`blog-card-gradient ${GRADIENT_MAP[post.category] || 'blog-gradient-saffron'}`}>
                      <Icon name={ICON_MAP[post.category] || 'file-text'} className="blog-card-image-icon" />
                    </div>
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-meta-item">
                        <Icon name="user" /> {post.author}
                      </span>
                      <span className="blog-card-meta-item">
                        <Icon name="calendar" /> {formatDate(post.date)}
                      </span>
                      <span className="blog-card-meta-item">
                        <Icon name="clock" /> {post.readTime}
                      </span>
                    </div>
                    <span className="blog-card-read-more">
                      Read More <Icon name="chevron-right" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
