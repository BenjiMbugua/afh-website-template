import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CareSpecialties } from '@/components/sections/CareSpecialties'
import { GoodFitBlock } from '@/components/sections/GoodFitBlock'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABand } from '@/components/sections/CTABand'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'
import type {
  HeroSection as HeroSectionType,
  ServicesGridSection,
  TestimonialsSection as TSection,
  CTABandSection,
  FAQSection as FAQSectionType,
} from '@/lib/payload/types'

export const dynamic = 'force-dynamic'

const { business, pages } = siteContent

export const metadata: Metadata = {
  title: isSecuritySite
    ? `${pages.services.title} | ${business.name} Security Services`
    : `${pages.services.title} | ${business.name} — ${siteContent.address.city} ${siteContent.address.state}`,
  description: isSecuritySite
    ? `Security officers, mobile patrol, event protection, and access control from ${business.name}.`
    : `${business.name} services in ${siteContent.address.city}, ${siteContent.address.state}. See if ${business.name} is the right fit.`,
}

const HERO: HeroSectionType = {
  _type: 'heroSection',
  _key: 'hero-1',
  heading: isSecuritySite ? 'Security Coverage Built Around the Site' : 'Care Built Around Your Loved One',
  subheading: isSecuritySite ? 'Focused protection services for businesses, events, properties, and operations that need a visible professional presence.' : 'Six specialized programs — not a one-size-fits-all approach. We start with your family\'s specific needs.',
  ctaText: isSecuritySite ? 'Request Coverage' : 'Schedule a Consultation',
  ctaHref: '/contact',
  secondaryCTAText: `Call ${business.phone}`,
  secondaryCTAHref: business.phoneHref,
  overlay: true,
}

const SERVICES_SECTION: ServicesGridSection = {
  _type: 'servicesGridSection',
  _key: 'services-1',
  heading: 'What We Offer',
  subheading: isSecuritySite ? 'Protection services are scoped around risk, site type, schedule, visibility, and reporting needs.' : 'Each service is tailored to the individual — not bundled into a fixed package.',
  services: [],
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: isSecuritySite ? 'Clients Share Their Experience' : 'Families Share Their Experience',
  testimonials: [],
}

const FAQ: FAQSectionType = {
  _type: 'faqSection',
  _key: 'faq-1',
  heading: 'Frequently Asked Questions',
  faqs: [],
}

const CTA_BOTTOM: CTABandSection = {
  _type: 'ctaBandSection',
  _key: 'cta-1',
  heading: isSecuritySite ? 'Have Questions About Coverage?' : 'Have Questions About a Specific Need?',
  subheading: isSecuritySite ? 'Call us and we will clarify the best coverage path for your site, event, or operation.' : 'Call us and we will be honest about what we can provide — and when another option may be better.',
  primaryCTAText: `Call ${business.phone}`,
  primaryCTAHref: business.phoneHref,
  secondaryCTAText: isSecuritySite ? 'Request coverage' : 'Schedule a consultation',
  secondaryCTAHref: '/contact',
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection section={HERO} />
      <TrustStrip />
      <ServicesGrid section={SERVICES_SECTION} />
      <CareSpecialties />
      <GoodFitBlock />
      {!isSecuritySite && <TestimonialsSection section={TESTIMONIALS} />}
      <FAQSection section={FAQ} />
      <CTABand section={CTA_BOTTOM} />
    </>
  )
}
