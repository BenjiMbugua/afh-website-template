import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { TextImageSection } from '@/components/sections/TextImageSection'
import { StatsBand } from '@/components/sections/StatsBand'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { LocalInfo } from '@/components/sections/LocalInfo'
import { CTABand } from '@/components/sections/CTABand'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'
import type {
  HeroSection as HeroSectionType,
  TextImageSection as TextImageSectionType,
  StatsBandSection,
  TestimonialsSection as TSection,
  CTABandSection,
} from '@/lib/payload/types'

export const dynamic = 'force-dynamic'

const { business, pages } = siteContent

export const metadata: Metadata = {
  title: `${pages.about.title} | ${business.name} ${business.type} — ${siteContent.address.city}, ${siteContent.address.state}`,
  description: isSecuritySite
    ? `Learn about ${business.name}, a professional security and protection provider serving clients who need reliable coverage.`
    : `Learn about ${business.name} in ${siteContent.address.city}, ${siteContent.address.state}.`,
}

const HERO: HeroSectionType = {
  _type: 'heroSection',
  _key: 'hero-1',
  heading: pages.about.heading,
  subheading: pages.about.subheading,
  ctaText: 'Contact Us',
  ctaHref: '/contact',
  secondaryCTAText: `Call ${business.phone}`,
  secondaryCTAHref: business.phoneHref,
  overlay: true,
}

const ABOUT_SECTION: TextImageSectionType = {
  _type: 'textImageSection',
  _key: 'text-1',
  heading: `About ${business.legalName}`,
  body: isSecuritySite
    ? `${pages.about.subheading} The site should immediately reflect the discipline, credibility, and operational readiness clients expect from a protection company.`
    : `${pages.about.subheading} The environment, routines, and communication style are designed to help families feel informed and residents feel safe, known, and respected.`,
  imagePosition: 'right',
  backgroundColor: '#FFFAF5',
  image: siteContent.gallery.slots.find((slot) => slot.id === 'living-space' || slot.id === 'home-exterior')?.imageUrl
    ? {
        url: siteContent.gallery.slots.find((slot) => slot.id === 'living-space' || slot.id === 'home-exterior')!.imageUrl!,
        alt: siteContent.gallery.slots.find((slot) => slot.id === 'living-space' || slot.id === 'home-exterior')!.alt,
      } as any
    : undefined,
}

const COMMITMENT_SECTION: TextImageSectionType = {
  _type: 'textImageSection',
  _key: 'text-2',
  heading: 'What Sets Us Apart',
  body: isSecuritySite
    ? 'The strongest security websites feel direct, credible, and field-ready. The priority is a clear protection offer, visible ways to contact the team, serious imagery, and proof that the company can handle real-world coverage needs.'
    : 'We are a small home intentionally. That means more consistency, more direct communication, and a setting families can actually picture before they visit. The goal is not to feel institutional. It is to feel calm, polished, and deeply personal.',
  imagePosition: 'left',
  backgroundColor: '#ffffff',
  image: siteContent.gallery.slots.find((slot) => slot.id === 'caregiver-team' || slot.id === 'daily-life')?.imageUrl
    ? {
        url: siteContent.gallery.slots.find((slot) => slot.id === 'caregiver-team' || slot.id === 'daily-life')!.imageUrl!,
        alt: siteContent.gallery.slots.find((slot) => slot.id === 'caregiver-team' || slot.id === 'daily-life')!.alt,
      } as any
    : undefined,
}

const STATS: StatsBandSection = {
  _type: 'statsBandSection',
  _key: 'stats-1',
  stats: pages.about.stats,
  backgroundColor: '#FFFAF5',
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: isSecuritySite ? 'From the Clients We Serve' : 'From the Families We Serve',
  testimonials: [],
}

const CTA_BOTTOM: CTABandSection = {
  _type: 'ctaBandSection',
  _key: 'cta-1',
  heading: isSecuritySite ? 'Ready to Discuss Coverage?' : 'Want to Meet the Team?',
  subheading: isSecuritySite ? 'Send the site details, timing, and coverage goal. We will respond with practical next steps.' : 'Schedule a tour of the home. No commitment required — just come see it for yourself.',
  primaryCTAText: isSecuritySite ? 'Request Coverage' : 'Schedule a Tour',
  primaryCTAHref: '/contact',
  secondaryCTAText: `Call ${business.phone}`,
  secondaryCTAHref: business.phoneHref,
}

export default function AboutPage() {
  return (
    <>
      <HeroSection section={HERO} />
      <TrustStrip />
      <TextImageSection section={ABOUT_SECTION} />
      <StatsBand section={STATS} />
      <TextImageSection section={COMMITMENT_SECTION} />
      {!isSecuritySite && <TestimonialsSection section={TESTIMONIALS} />}
      {!isSecuritySite && <LocalInfo />}
      <CTABand section={CTA_BOTTOM} />
    </>
  )
}
