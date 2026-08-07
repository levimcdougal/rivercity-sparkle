import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, CalendarCheck, Home, KeyRound, Sparkles, Star } from 'lucide-react'
import whyVideo from '../assets/vid-optimized.mp4'
import whyVideoPoster from '../assets/vid-poster.png'
import galleryImg1 from '../assets/IMG1-optimized.jpg'
import galleryImg2 from '../assets/IMG2-optimized.jpg'
import galleryImg3 from '../assets/IMG3-optimized.jpg'
import galleryImg4 from '../assets/IMG4-optimized.jpg'
import galleryImg5 from '../assets/IMG5-optimized.jpg'
import galleryImg6 from '../assets/IMG6-optimized.jpg'
import galleryImg7 from '../assets/IMG7-optimized.jpg'
import galleryImg8 from '../assets/IMG8-optimized.jpg'
import galleryImg9 from '../assets/IMG9-optimized.jpg'
import galleryImg10 from '../assets/IMG10-optimized.jpg'
import galleryImg11 from '../assets/IMG11-optimized.jpg'
import FadeIn from '../components/FadeIn'
import SEO from '../components/SEO'
import heroBg from '../assets/back-optimized.jpg'
import { services, testimonials, faqs } from '../data/site'

const galleryItems = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
]

const serviceIcons = [Home, Sparkles, KeyRound, CalendarCheck, Building2]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function HomePage() {
  const featuredReviews = testimonials.slice(0, 4)
  const [videoStarted, setVideoStarted] = useState(false)

  return (
    <main className="page-wrapper">
      <link rel="preload" as="image" href={heroBg} fetchPriority="high" />
      <SEO
        title="Professional Home Cleaning in Louisville You Can Trust"
        description="RiverCity Sparkle provides trusted home cleaning, deep cleaning, move-in/move-out cleaning, and short-term rental turnovers in Louisville, Middletown, St. Matthews, and Jeffersontown."
        path="/"
        schema={schema}
      />

      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <h1>Professional Home Cleaning in Louisville You Can Trust</h1>
          <p>
            Trusted cleaning for busy homes, rentals, property managers, and offices. Book in 60 seconds and let RiverCity Sparkle handle the details.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Request a Cleaning</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
          <div className="hero-stats" aria-label="RiverCity Sparkle highlights">
            <div className="hero-stat">
              <span className="hero-stat-num">5-star</span>
              <span className="hero-stat-label">Client feedback</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">60 sec</span>
              <span className="hero-stat-label">Online booking</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">24 hr</span>
              <span className="hero-stat-label">Guarantee window</span>
            </div>
          </div>
        </div>
      </section>

      <section className="give-back-banner" aria-label="Back-to-school cleaning promotion">
        <div className="give-back-inner">
          <div className="give-back-copy">
            <p className="give-back-kicker">RiverCity Sparkle Gives Back</p>
            <h2>Save 20% on Your Back-to-School Cleaning</h2>
            <p>Use code <strong>BACKTOSCHOOL</strong> when scheduling your cleaning.</p>
          </div>
          <Link to="/contact" className="give-back-btn">Claim This Offer</Link>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-inner">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">Services & Prices</p>
              <h2 className="section-title">Sparkling Clean Spaces, Simple Starting Prices</h2>
              <p className="section-subtitle">
                Choose the cleaning service that fits your home, rental, move, or reset. Every service is built around dependable results and clear expectations.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="services-grid">
              {services.map(({ title, summary, price, slug }, index) => {
                const Icon = serviceIcons[index]
                return (
                  <div className="service-card" key={title}>
                    <div className="service-icon">
                      <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                    </div>
                    <p className="service-price">{price}</p>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <Link to={`/services#${slug}`} className="service-link">Learn more</Link>
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-inner">
          <FadeIn>
            <div className="why-split">
              <div className="why-image-wrap">
                <video className="why-image why-video" controls loop playsInline preload="metadata" poster={whyVideoPoster} onPlay={() => setVideoStarted(true)} aria-label="RiverCity Sparkle professional cleaning">
                  <source src={whyVideo} type="video/mp4" />
                </video>
                {!videoStarted && (
                  <div className="why-video-preview" aria-hidden="true">
                    <img src={whyVideoPoster} alt="" />
                    <span className="why-video-play">▶</span>
                  </div>
                )}
              </div>
              <div className="why-content">
                <p className="section-label">Why Choose Us</p>
                <h2 className="section-title">Why Louisville Homeowners & Property Managers Choose RiverCity Sparkle</h2>
                <p className="why-body">
                  RiverCity Sparkle makes professional cleaning simple, reliable, and stress-free for busy homeowners, rental hosts, property managers, and office teams. Every clean is handled by a trusted, background-checked team that respects your home, schedule, and privacy. Their structured cleaning process keeps the details consistent from visit to visit, while direct contact makes it easy to discuss the service you need. If something is not right, the satisfaction guarantee gives you peace of mind: reach out within 24 hours and the team will work to make it right.
                </p>
                <Link to="/contact" className="btn-primary why-cta">Contact the Team</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-inner">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">Customer Reviews</p>
              <h2 className="section-title">Real Experiences from Satisfied Customers</h2>
              <p className="section-subtitle">
                Clients count on RiverCity Sparkle for on-time arrivals, respectful service, and spaces that feel fresh when the work is done.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="reviews-grid">
              {featuredReviews.map(r => (
                <div className="review-card" key={r.name}>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="review-text">"{r.quote}"</p>
                  <div className="review-author">
                    <div className="review-avatar">{r.name[0]}</div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-type">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      <section className="photo-gallery-band">
        <div className="section-inner">
          <FadeIn delay={120}>
            <div className="review-gallery">
              <div className="review-gallery-header">
                <p className="section-label">Photo Gallery</p>
                <h3>See the Sparkle in Motion</h3>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={180}>
          <div className="photo-marquee" aria-label="RiverCity Sparkle photo gallery">
            <div className="photo-marquee-track">
              {[...galleryItems, ...galleryItems, ...galleryItems].map((image, index) => (
                <figure className="photo-marquee-card" key={`${image}-${index}`}>
                  <img src={image} alt={`RiverCity Sparkle cleaning gallery ${(index % galleryItems.length) + 1}`} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready for a Cleaner Space?</h2>
          <p>Contact RiverCity Sparkle to discuss your cleaning needs and available dates.</p>
          <Link to="/contact" className="btn-primary">Request a Cleaning</Link>
        </div>
      </section>

    </main>
  )
}
