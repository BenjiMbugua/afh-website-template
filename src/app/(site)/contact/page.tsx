import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'
import type {
  HeroSection as HeroSectionType,
  ContactSection as ContactSectionType,
  TestimonialsSection as TSection,
} from '@/lib/payload/types'

export const dynamic = 'force-dynamic'

const { business, pages } = siteContent

export const metadata: Metadata = {
  title: `${pages.contact.title} | ${business.name} ${business.type} — ${siteContent.address.city}, ${siteContent.address.state}`,
  description: isSecuritySite
    ? `Contact ${business.name} for security coverage. Call ${business.phone} or fill out the form for a clear next step.`
    : `Contact ${business.name} in ${siteContent.address.city}, ${siteContent.address.state}. Call ${business.phone} or fill out our form. We respond within 2 hours. Free consultation — no commitment.`,
}

const HERO: HeroSectionType = {
  _type: 'heroSection',
  _key: 'hero-1',
  heading: pages.contact.heading,
  subheading: pages.contact.subheading,
  ctaText: `Call Now — ${business.phone}`,
  ctaHref: business.phoneHref,
  overlay: true,
}

const CONTACT_SECTION: ContactSectionType = {
  _type: 'contactSection',
  _key: 'contact-1',
  heading: isSecuritySite ? 'Request Security Coverage' : 'Reach Out Any Way That Works for You',
  subheading: isSecuritySite ? 'Send the site, timing, and coverage need. We will follow up with practical next steps.' : 'Fill out the form and we\'ll call you back within 2 hours — or just call us directly.',
  showForm: true,
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: isSecuritySite ? 'What Clients Said After Reaching Out' : 'What Families Said After Reaching Out',
  testimonials: [],
}

export default function ContactPage() {
  return (
    <>
      <HeroSection section={HERO} />
      <ContactSection section={CONTACT_SECTION} />
      {!isSecuritySite && <TestimonialsSection section={TESTIMONIALS} />}
    </>
  )
}
