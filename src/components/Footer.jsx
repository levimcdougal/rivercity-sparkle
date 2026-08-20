import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'
import { business, services } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              {business.name}
            </div>
            <p className="footer-tagline">
              Professional home cleaning, deep cleaning, move-in/move-out cleaning, and short-term rental turnovers in Louisville.
            </p>
            <p className="footer-areas">{business.areas.join(' • ')}</p>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              {services.map(service => (
                <li key={service.slug}>
                  <Link to={`/services#${service.slug}`}>{service.title}</Link>
                </li>
              ))}
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/book">Book Now</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {business.phoneDisplay}<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {business.phoneDisplay}<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {business.email}
            </p>
          </div>
        </div>

        <div className="footer-socials" aria-label="RiverCity Sparkle social profiles">
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow RiverCity Sparkle on Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
          <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow RiverCity Sparkle on Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M14 8.5V7c0-.8.5-1 1-1h2V2.2C16.4 2.1 15.2 2 13.8 2 10.9 2 9 3.8 9 7.1v1.4H6V13h3v9h4.5v-9h3.2l.5-4.5H14Z" />
            </svg>
            <span>Facebook</span>
          </a>
          <a href={business.googleProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="View RiverCity Sparkle on Google">
            <span className="google-icon" aria-hidden="true">G</span>
            <span>Google</span>
          </a>
        </div>

        <div className="footer-bottom">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
