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
  title: `${pages.services.title} | ${business.name} — Memory Care ${siteContent.address.city} ${siteContent.address.state}`,
  description: `Personal care, memory care, post-stroke support, respite, and more in ${siteContent.address.city}, ${siteContent.address.state}. UA Benefits accepted. See if ${business.name} is the right fit.`,
}

const HERO: HeroSectionType = {
  _type: 'heroSection',
  _key: 'hero-1',
  heading: 'Care Built Around Your Loved One',
  subheading: 'Six specialized programs — not a one-size-fits-all approach. We start with your family\'s specific needs.',
  ctaText: 'Schedule a Consultation',
  ctaHref: '/contact',
  secondaryCTAText: `Call ${business.phone}`,
  secondaryCTAHref: business.phoneHref,
  overlay: true,
}

const SERVICES_SECTION: ServicesGridSection = {
  _type: 'servicesGridSection',
  _key: 'services-1',
  heading: 'What We Offer',
  subheading: 'Each service is tailored to the individual — not bundled into a fixed package.',
  services: [],
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: 'Families Share Their Experience',
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
  heading: 'Have Questions About a Specific Need?',
  subheading: 'Call us and we will be honest about what we can provide — and when another option may be better.',
  primaryCTAText: `Call ${business.phone}`,
  primaryCTAHref: business.phoneHref,
  secondaryCTAText: 'Schedule a consultation',
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
      <TestimonialsSection section={TESTIMONIALS} />
      <FAQSection section={FAQ} />
      <CTABand section={CTA_BOTTOM} />
    </>
  )
}
