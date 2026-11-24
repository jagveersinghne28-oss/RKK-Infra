import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { ContactProvider, useContact } from './ContactModal.jsx'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/journey', label: 'Journey' },
  { to: '/projects', label: 'Projects' },
  { to: '/expertise', label: 'Expertise' },
]

const MORE = [
  { to: '/gallery', label: 'Photo Gallery' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/book', label: 'Tunnel Engineering Basics' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/publications', label: 'Publications' },
]

function MoreMenu({ pathname }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const active = MORE.some((m) => m.to === pathname)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="site-header__more" ref={ref}>
      <button
        className={`site-header__link site-header__more-btn${active ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        More <Icon name="chevron" className="icon icon--xs" />
      </button>
      <div className={`site-header__menu${open ? ' is-open' : ''}`}>
        {MORE.map((m) => (
          <NavLink key={m.to} to={m.to} className={({ isActive }) => `site-header__menu-link${isActive ? ' is-active' : ''}`}>
            {m.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { openContact } = useContact()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Dr. Rakesh Kumar Khali — home">
          <span className="site-header__logo">
            <span className="site-header__abbr">RKK</span>
            <span className="site-header__rule" />
            <span className="site-header__name">DR. RAKESH KUMAR KHALI</span>
          </span>
          <span className="site-header__role">SENIOR VICE PRESIDENT — OPERATIONS</span>
        </Link>

        <nav className={`site-header__nav${open ? ' is-open' : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
            >
              {n.label}
            </NavLink>
          ))}
          <MoreMenu pathname={pathname} />
        </nav>

        <div className="site-header__cta">
          <button className="btn btn--dark btn--sm" onClick={openContact}>
            Get in touch
          </button>
          <img className="site-header__avatar" src="/images/profile.png" alt="Dr. Rakesh Kumar Khali" />
          <button
            className="site-header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

const DIRECTORY = [
  ['Overview', '/'],
  ['Executive Journey', '/journey'],
  ['Signature Tunnel Portfolios', '/projects'],
  ['TBM & NATM Methodologies', '/expertise'],
  ['World Tunnel Congress (WTC)', '/'],
  ['Honors & Fellowships', '/certificates'],
]

const MEDIA = [
  ['Case Studies', '/case-studies'],
  ['Publications', '/publications'],
  ['Tunnel Engineering Basics', '/book'],
  ['Certificates', '/certificates'],
  ['Photo Gallery', '/gallery'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">
              <span className="site-header__abbr">RKK ARCHIVE</span>
              <span className="site-header__rule" />
              <span className="site-footer__title">DR. RAKESH KUMAR KHALI</span>
            </div>
            <p className="site-footer__role">
              Senior Vice President - Operations
              <br />G R Infraprojects Limited
            </p>
            <p className="site-footer__sub">Tunnel, Underground Works &amp; Hydro Power Division</p>
            <div className="site-footer__office">
              <span className="mono">EXECUTIVE OFFICE</span>
              <span className="mono" style={{ color: 'var(--muted)' }}>
                28°27'48.2"N 77°04'52.1"E | New Delhi NCR / Gurugram, India
              </span>
            </div>
          </div>

          <div className="site-footer__col">
            <h4>Directory</h4>
            <ul>
              {DIRECTORY.map(([label, to]) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Monographs &amp; Media</h4>
            <ul>
              {MEDIA.map(([label, to]) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Engineering Protocol</h4>
            <p>
              Advancing geotechnical resilience, subterranean transit, and hydro-energy tunneling through technical
              precision and strategic leadership.
            </p>
            <a className="text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <Icon name="arrow" className="icon" />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2025 Dr. Rakesh Kumar Khali. All Rights Reserved.</span>
          <div className="site-footer__bottom-right">
            <span>TECTONIC EDITORIAL SYSTEM</span>
            <span className="site-header__rule" />
            <span>SEC. ARCHIVE / OPERATIONAL LEADERSHIP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <ContactProvider>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </ContactProvider>
  )
}
