import { useEffect } from 'react'
import { business, services } from '../data/site'

function setMeta(name, content, attribute = 'name') {
  if (!content) return
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function SEO({ title, description, path = '/', schema }) {
  useEffect(() => {
    const fullTitle = path === '/' ? business.name : title.includes(business.name) ? title : `${title} | ${business.name}`
    const canonicalUrl = `${business.siteUrl}${path}`
    const socialImageUrl = `${business.siteUrl}/social-share.jpg`

    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('og:image', socialImageUrl, 'property')
    setMeta('og:image:width', '1200', 'property')
    setMeta('og:image:height', '630', 'property')
    setMeta('og:image:alt', `${business.name} — Bringing Shine to You`, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', socialImageUrl)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${business.siteUrl}/#localbusiness`,
      name: business.name,
      url: business.siteUrl,
      telephone: business.phoneDisplay,
      email: business.email,
      areaServed: business.areas,
      priceRange: '$$',
      description:
        'Professional home, deep, move-in/move-out, and short-term rental cleaning services in Louisville, Kentucky.',
      makesOffer: services.map(service => ({
        '@type': 'Offer',
        name: service.title,
        description: service.summary,
        url: `${business.siteUrl}/services#${service.slug}`,
      })),
    }

    const jsonLd = document.getElementById('page-schema') || document.createElement('script')
    jsonLd.id = 'page-schema'
    jsonLd.type = 'application/ld+json'
    jsonLd.textContent = JSON.stringify(schema ? [localBusinessSchema, schema] : localBusinessSchema)
    document.head.appendChild(jsonLd)
  }, [title, description, path, schema])

  return null
}
