import { CalendarCheck, Home, KeyRound, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import SEO from '../components/SEO'
import resImg from '../assets/res-optimized.jpg'
import airImg from '../assets/air-optimized.jpg'
import moveImg from '../assets/move-optimized.jpg'
import cleanImg from '../assets/clean-optimized.jpg'
import { business, services } from '../data/site'

const images = [resImg, cleanImg, moveImg, airImg]
const icons = [Home, Sparkles, KeyRound, CalendarCheck]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cleaning services',
  provider: {
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phoneDisplay,
  },
  areaServed: business.areas,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'RiverCity Sparkle Cleaning Services',
    itemListElement: services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
      },
    })),
  },
}

export default function Services() {
  return (
    <main className="page-wrapper">
      <SEO
        title="Cleaning Services & Prices in Louisville"
        description="See RiverCity Sparkle cleaning services and starting prices for residential cleaning, deep cleaning, move-in/move-out cleaning, and short-term rental turnovers in Louisville."
        path="/services"
        schema={schema}
      />
      <section className="page-hero">
        <h1>Cleaning Services & Prices</h1>
        <p>Professional cleaning for homes, short-term rentals, move-outs, and detailed resets in Louisville and surrounding areas.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map((service, i) => {
              const Icon = icons[i]
              return (
                <FadeIn key={service.title} delay={i * 100}>
                  <article className="service-card-full" id={service.slug}>
                    <img src={images[i]} alt={`${service.title} by RiverCity Sparkle`} className="service-card-img" loading="lazy" decoding="async" />
                    <div className="service-card-heading">
                      <div className="service-icon" style={{ width: 54, height: 54 }}>
                        <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="service-price">{service.price}</p>
                        <h2>{service.title}</h2>
                      </div>
                    </div>
                    <p>{service.description}</p>
                    <div className="service-includes">
                      <h4>{service.includesTitle}</h4>
                      <ul>
                        {service.includes.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="service-book-link">Ask about this service</Link>
                  </article>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Service Areas</p>
            <h2 className="section-title">Local Cleaning Help Where Your Customers Search</h2>
            <p className="section-subtitle">
              RiverCity Sparkle proudly serves Louisville, Middletown, St. Matthews, Jeffersontown, and nearby communities. These service-area terms are included naturally to help qualified local leads find the right page.
            </p>
          </div>
          <div className="area-pill-row">
            {business.areas.map(area => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Contact the team and they will help match your space to the right cleaning service.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
