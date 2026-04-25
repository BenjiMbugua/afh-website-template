import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { TextImageSection } from '@/components/sections/TextImageSection'
import { StatsBand } from '@/components/sections/StatsBand'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { LocalInfo } from '@/components/sections/LocalInfo'
import { CTABand } from '@/components/sections/CTABand'
import { siteContent } from '@/lib/siteContent'
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
  description: `Learn about ${business.name} — a state-licensed, family-run memory care home in ${siteContent.address.city}, ${siteContent.address.state}. 10+ years serving ${siteContent.address.county} families.`,
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
  body: `${pages.about.subheading} The environment, routines, and communication style are designed to help families feel informed and residents feel safe, known, and respected.`,
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
  body: 'We are a small home intentionally. That means more consistency, more direct communication, and a setting families can actually picture before they visit. The goal is not to feel institutional. It is to feel calm, polished, and deeply personal.',
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
  heading: 'From the Families We Serve',
  testimonials: [],
}

const CTA_BOTTOM: CTABandSection = {
  _type: 'ctaBandSection',
  _key: 'cta-1',
  heading: 'Want to Meet the Team?',
  subheading: 'Schedule a tour of the home. No commitment required — just come see it for yourself.',
  primaryCTAText: 'Schedule a Tour',
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
      <TestimonialsSection section={TESTIMONIALS} />
      <LocalInfo />
      <CTABand section={CTA_BOTTOM} />
    </>
  )
}
