import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProofBlock } from '@/components/sections/ProofBlock'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CareSpecialties } from '@/components/sections/CareSpecialties'
import { GalleryPlaceholder } from '@/components/sections/GalleryPlaceholder'
import { FAQSection } from '@/components/sections/FAQSection'
import { LocalInfo } from '@/components/sections/LocalInfo'
import { CTABand } from '@/components/sections/CTABand'
import { siteContent } from '@/lib/siteContent'
import type { HeroSection as HeroSectionType, ServicesGridSection, TestimonialsSection as TSection, CTABandSection, FAQSection as FAQSectionType } from '@/lib/payload/types'

export const dynamic = 'force-dynamic'

const { business, hero, pages } = siteContent

export const metadata: Metadata = {
  title: `${business.name} ${business.type} | ${siteContent.address.city}, ${siteContent.address.state}`,
  description: `${hero.subheading} Call ${business.phone}.`,
}

const HERO: HeroSectionType = {
  _type: 'heroSection',
  _key: 'hero-1',
  heading: hero.heading,
  subheading: hero.subheading,
  ctaText: hero.ctaText,
  ctaHref: hero.ctaHref,
  secondaryCTAText: `Call ${business.phone}`,
  secondaryCTAHref: business.phoneHref,
  overlay: true,
}

const SERVICES_SECTION: ServicesGridSection = {
  _type: 'servicesGridSection',
  _key: 'services-1',
  heading: pages.services.heading,
  subheading: pages.services.subheading,
  services: [],
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: 'What Families Are Saying',
  testimonials: [],
}

const FAQ_SECTION: FAQSectionType = {
  _type: 'faqSection',
  _key: 'faq-1',
  heading: 'Questions Families Ask First',
  faqs: [],
}

const CTA_BOTTOM: CTABandSection = {
  _type: 'ctaBandSection',
  _key: 'cta-1',
  heading: 'Ready to Talk About Care?',
  subheading: `No forms to fill out right now. Just call. ${hero.responsePromise}.`,
  primaryCTAText: `Call ${business.phone}`,
  primaryCTAHref: business.phoneHref,
  secondaryCTAText: 'Or fill out a contact form',
  secondaryCTAHref: '/contact',
}

export default function HomePage() {
  return (
    <>
      <HeroSection section={HERO} showTrustBadges />
      <TrustStrip />
      <GalleryPlaceholder />
      <ServicesGrid section={SERVICES_SECTION} />
      <ProofBlock />
      <TestimonialsSection section={TESTIMONIALS} />
      <CareSpecialties />
      <FAQSection section={FAQ_SECTION} />
      <LocalInfo />
      <CTABand section={CTA_BOTTOM} />
    </>
  )
}
