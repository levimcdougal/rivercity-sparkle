import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    desc: 'Call, text, email, or book online to share your home, rental, or move-out cleaning needs.',
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
        <p>Book online, call, text, or email for professional cleaning in Louisville and nearby communities.</p>
      </section>

      <section className="section direct-contact-section">
        <div className="section-inner">
          <FadeIn>
            <div className="contact-intro">
              <h2>We're Here to Help</h2>
              <p>Choose the contact method that works best for you. The RiverCity Sparkle team is ready to answer questions and help with scheduling.</p>
            </div>
            <div className="contact-cards">
              {contactMethods.map(({ Icon, label, value, desc, btnLabel, href }) => (
                <article className="contact-card" key={label}>
                  <div className="contact-card-icon">
                    <Icon size={28} color="var(--blue)" strokeWidth={1.8} />
                  </div>
                  <h3>{label}</h3>
                  <p className="contact-card-value">{value}</p>
                  <p className="contact-card-desc">{desc}</p>
                  <a href={href} className="contact-card-btn">{btnLabel}</a>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready to Schedule Your Cleaning?</h2>
          <p>Choose your service, date, and time through our secure online booking page.</p>
          <Link to="/book" className="btn-primary">Book Now</Link>
        </div>
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

      <section className="hours-banner">
        <p className="hours-banner-label">Service Areas</p>
        <div className="hours-banner-areas">{business.areas.join(' • ')}</div>
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
