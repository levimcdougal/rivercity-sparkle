import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { business } from '../data/site'
import logo from '../assets/logo-optimized.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const isTransparent = pathname === '/' && !scrolled

  return (
    <nav className={`navbar${isTransparent ? ' navbar-transparent' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt={business.name} width="700" height="467" decoding="async" />
        </NavLink>

        <div className="navbar-actions">
          <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/book" className="navbar-cta" onClick={() => setOpen(false)}>
              Book Now
            </NavLink>
          </li>
          </ul>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          <a className="navbar-phone" href={business.phoneHref} aria-label={`Call RiverCity Sparkle at ${business.phoneDisplay}`}>
            <Phone className="navbar-phone-icon" size={17} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>

        {open && <button className="nav-backdrop" aria-label="Close navigation menu" onClick={() => setOpen(false)} />}
      </div>
    </nav>
  )
}
