import SEO from '../components/SEO'
import { policyIntro, policySections } from '../data/privacyPolicy'

function PolicyText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    return link ? <a key={index} href={link[2]}>{link[1]}</a> : part
  })
}

export default function PrivacyPolicy() {
  return (
    <main className="page-wrapper">
      <SEO
        title="Privacy Policy"
        description="Read RiverCity Sparkle LLC's privacy and customer information policies, service policies, and terms agreement."
        path="/privacy-policy"
      />
      <section className="page-hero">
        <h1>Privacy Policy</h1>
        <p>RiverCity Sparkle LLC</p>
      </section>
      <section className="section">
        <article className="policy-content">
          <h2>Service Policy &amp; Terms Agreement</h2>
          {policyIntro.map(text => <p key={text}>{text}</p>)}
          {policySections.map(({ title, paragraphs }) => (
            <section key={title}>
              <h2>{title}</h2>
              {paragraphs.map((text, index) => (
                <p key={index}><PolicyText text={text} /></p>
              ))}
            </section>
          ))}
        </article>
      </section>
    </main>
  )
}
