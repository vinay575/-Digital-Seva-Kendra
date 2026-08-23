import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Icon from '../components/Icon'
import blogData from '../data/blogData'
import './blog.css'

const GRADIENT_MAP = {
  Guide: 'blog-gradient-saffron',
  Tips: 'blog-gradient-green',
  News: 'blog-gradient-teal'
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function getInitials(name) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase()
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = blogData.find((b) => b.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>Not Found</span>
            </nav>
            <h1>Post Not Found</h1>
            <p className="blog-hero-sub">The blog post you are looking for does not exist.</p>
            <Link to="/blog" className="btn btn-saffron" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="chevron-left" /> Back to Blog
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const related = blogData.filter((b) => b.id !== post.id && b.category === post.category).slice(0, 3)
  if (related.length < 3) {
    const extra = blogData.filter((b) => b.id !== post.id && b.category !== post.category).slice(0, 3 - related.length)
    related.push(...extra)
  }

  return (
    <div className="blog-page">
      <section className={`blog-detail-hero blog-detail-hero-${post.category.toLowerCase()}`}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
          <div className="blog-detail-hero-center">
            <span className="blog-detail-hero-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-detail-hero-meta">
              <span><Icon name="user" /> {post.author}</span>
              <span><Icon name="calendar" /> {formatDate(post.date)}</span>
              <span><Icon name="clock" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-detail-section">
        <div className="container">
          <Link to="/blog" className="blog-detail-back">
            <Icon name="chevron-left" /> All Posts
          </Link>

          <div className="blog-detail-layout">
            <div>
              <div className="blog-detail-tags">
                {post.tags.map((tag) => (
                  <span className="blog-detail-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <article className="blog-detail-article" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <aside className="blog-detail-sidebar">
              <div className="blog-detail-author-card">
                <div className="blog-detail-author-avatar">{getInitials(post.author)}</div>
                <div className="blog-detail-author-name">{post.author}</div>
                <div className="blog-detail-author-role">Author</div>
              </div>

              {related.length > 0 && (
                <div className="blog-detail-related">
                  <h3>Related Posts</h3>
                  {related.map((r) => (
                    <Link to={`/blog/${r.slug}`} className="blog-detail-related-link" key={r.id}>
                      <h4>{r.title}</h4>
                      <span>{formatDate(r.date)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
