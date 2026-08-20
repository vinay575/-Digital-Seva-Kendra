import { useState } from 'react'
import Icon from './Icon'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' }
]

function Logo() {
  return (
    <a className="brand" href="#home">
      <span className="brand-mark">DSK</span>
      <span className="brand-text">
        <strong>Digital Seva</strong>
        <em>Kendra</em>
      </span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href="mailto:info@csce-governance.com">
              <Icon name="email" /> info@csce-governance.com
            </a>
            <a href="#commission" target="_blank" rel="noreferrer">
              <Icon name="rupee" /> <u>Commission Chart</u>
            </a>
          </div>
          <div className="topbar-right">
            <a href="#login" className="login-btn">
              <Icon name="lock" /> Login
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-wrap">
        <div className="container nav-container">
          <Logo />
          <div className="gov-badges">
            <img src={`${import.meta.env.BASE_URL}digital-india.png`} alt="Digital India" className="gov-logo" />
            <img src={`${import.meta.env.BASE_URL}mygov.png`} alt="MyGov" className="gov-logo my-gov" />
          </div>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#register" className="nav-register" onClick={() => setOpen(false)}>
              Registration Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}