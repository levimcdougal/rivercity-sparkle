import { useState } from 'react'
import { CalendarCheck, ChevronDown, Mail, MessageSquare, Phone, Sparkles, ThumbsUp } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SEO from '../components/SEO'
import { business, faqs } from '../data/site'

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: business.phoneDisplay,
    desc: 'Call RiverCity Sparkle for quote questions, service fit, or scheduling help.',
    btnLabel: 'Call Now',
    href: business.phoneHref,
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: business.phoneDisplay,
    desc: 'Prefer to text? Send a message and the team will respond as soon as possible.',
    btnLabel: 'Send a Text',
    href: business.smsHref,
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: business.email,
    desc: 'Email for cleaning questions, property manager requests, or recurring service details.',
    btnLabel: 'Send Email',
    href: business.emailHref,
  },
]

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Reach Out',
    desc: 'Call, text, email, or send the contact form to share your home, rental, or move-out cleaning needs.',
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Schedule Your Clean',
    desc: 'The team will follow up with available dates and confirm any details needed for your cleaning.',
  },
  {
    Icon: Sparkles,
    step: '03',
    title: 'We Clean with Care',
    desc: 'The team follows detailed checklists and uses pet-safe, non-toxic products.',
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Enjoy the Result',
    desc: 'If something is not right, reach out within 24 hours so RiverCity Sparkle can make it right.',
  },
]

const faqSchema = {
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

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  const handleContactSubmit = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Cleaning inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone') || 'Not provided'}\nService: ${form.get('service')}\n\nMessage:\n${form.get('message')}`,
    )

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
  }

  return (
    <main className="page-wrapper">
      <SEO
        title="Contact RiverCity Sparkle"
        description="Contact RiverCity Sparkle for Louisville home cleaning, deep cleaning, move-out cleaning, and short-term rental turnover services."
        path="/contact"
        schema={faqSchema}
      />
      <section className="page-hero">
        <h1>Get In Touch</h1>
        <p>Call, text, email, or send an inquiry for professional cleaning in Louisville and nearby communities.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <FadeIn>
            <div className="contact-layout">
              <div className="booking-form-card contact-form-card" id="contact-form">
                <div className="section-header contact-form-header">
                  <p className="section-label">Send an Inquiry</p>
                  <h2 className="section-title">Tell Us About Your Cleaning Needs</h2>
                  <p className="section-subtitle">Share a few details and your email app will open a message addressed to RiverCity Sparkle.</p>
                </div>
                <form className="booking-form" onSubmit={handleContactSubmit}>
                  <label>
                    Name
                    <input type="text" name="name" autoComplete="name" required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" autoComplete="email" required />
                  </label>
                  <label>
                    Phone (optional)
                    <input type="tel" name="phone" autoComplete="tel" />
                  </label>
                  <label>
                    Service
                    <select name="service" defaultValue="Residential Cleaning">
                      <option>Residential Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In/Move-Out Cleaning</option>
                      <option>Short-Term Rental Cleaning</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </label>
                  <label>
                    How can we help?
                    <textarea name="message" required />
                  </label>
                  <button type="submit" className="btn-primary">Send Inquiry</button>
                </form>
              </div>

              <aside className="direct-contact-panel">
                <p className="section-label">Contact Directly</p>
                <h2>Prefer a quick conversation?</h2>
                <p>Reach the RiverCity Sparkle team using any of these options.</p>
                <div className="direct-contact-list">
                  {contactMethods.map(({ Icon, label, value, href }) => (
                    <a href={href} className="direct-contact-item" key={label}>
                      <span className="direct-contact-icon">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span>
                        <strong>{label}</strong>
                        <small>{value}</small>
                      </span>
                    </a>
                  ))}
                </div>
                <p className="contact-privacy-note">Please do not send payment or other sensitive information.</p>
              </aside>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="hours-banner">
        <p className="hours-banner-label">Service Areas</p>
        <div className="hours-banner-areas">{business.areas.join(' • ')}</div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">The Process</p>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              The old site promised simple, reliable, stress-free cleaning. This page keeps that promise clear for new visitors.
            </p>
          </div>
          <FadeIn delay={150}>
            <div className="steps-grid">
              {steps.map(({ Icon, step, title, desc }) => (
                <div className="step-card" key={step}>
                  <div className="step-number">{step}</div>
                  <div className="step-icon">
                    <Icon size={24} color="var(--blue)" strokeWidth={1.75} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Helpful answers for people comparing cleaning companies before they book.
            </p>
          </div>
          <FadeIn>
            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
