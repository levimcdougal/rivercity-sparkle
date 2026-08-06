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

        <div className="footer-bottom">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
