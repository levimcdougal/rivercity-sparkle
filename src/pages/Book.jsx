import { useEffect } from 'react'
import SEO from '../components/SEO'
import { business } from '../data/site'

// `?w` is Launch27's Default form. Named forms such as `w_cleaning`
// require the Premium Booking Forms feature on the Launch27 account.
const widgetUrl = 'https://rivercitysparkle.launch27.com/?w'
const scriptUrl = 'https://rivercitysparkle.launch27.com/jsbundle'

export default function Book() {
  useEffect(() => {
    const resizeWidget = event => {
      if (event.origin !== 'https://rivercitysparkle.launch27.com') return
      if (event.data?.type !== 'iframeHeight') return

      const iframe = document.getElementById('booking-widget-iframe')
      const height = Number(event.data.height)
      if (iframe && Number.isFinite(height) && height > 0) {
        iframe.style.height = `${height}px`
      }
    }

    window.addEventListener('message', resizeWidget)

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement('script')
      script.src = scriptUrl
      script.async = true
      document.body.appendChild(script)
    }

    return () => window.removeEventListener('message', resizeWidget)
  }, [])

  return (
    <main className="page-wrapper booking-page">
      <SEO
        title="Book a Cleaning Online"
        description="Book professional home, deep, move-in/move-out, and short-term rental cleaning with RiverCity Sparkle in Louisville."
        path="/book"
      />

      <section className="page-hero booking-hero">
        <h1>Book Now</h1>
        <p>Choose your cleaning service, date, and time below.</p>
      </section>

      <section className="booking-widget-section" aria-label="Online booking form">
        <aside className="commercial-booking-notice">
          <h2>Commercial Cleaning</h2>
          <p>
            Commercial cleaning cannot be booked online. Call us directly at{' '}
            <a href={business.phoneHref}>{business.phoneDisplay}</a> or complete our walkthrough form so we can confirm your needs and provide custom pricing.
          </p>
          <a
            href={business.commercialWalkthroughUrl}
            className="service-book-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Walkthrough
          </a>
        </aside>
        <div className="residential-booking-intro">
          <h2>Residential Cleaning Booking</h2>
          <p>The form below is for scheduling residential cleaning services only.</p>
        </div>
        <div className="booking-widget-container">
          <iframe
            id="booking-widget-iframe"
            className="skip-lazy"
            src={widgetUrl}
            title="Book a cleaning with RiverCity Sparkle"
            scrolling="yes"
          />
        </div>
      </section>
    </main>
  )
}
