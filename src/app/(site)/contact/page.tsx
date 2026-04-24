import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { siteContent } from '@/lib/siteContent'
import type {
  HeroSection as HeroSectionType,
  ContactSection as ContactSectionType,
  TestimonialsSection as TSection,
} from '@/lib/payload/types'

export const dynamic = 'force-dynamic'

const { business, pages } = siteContent

export const metadata: Metadata = {
  title: `${pages.contact.title} | ${business.name} ${business.type} — ${siteContent.address.city}, ${siteContent.address.state}`,
  description: `Contact ${business.name} in ${siteContent.address.city}, ${siteContent.address.state}. Call ${business.phone} or fill out our form. We respond within 2 hours. Free consultation — no commitment.`,
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
  heading: 'Reach Out Any Way That Works for You',
  subheading: 'Fill out the form and we\'ll call you back within 2 hours — or just call us directly.',
  showForm: true,
}

const TESTIMONIALS: TSection = {
  _type: 'testimonialsSection',
  _key: 'testimonials-1',
  heading: 'What Families Said After Reaching Out',
  testimonials: [],
}

export default function ContactPage() {
  return (
    <>
      <HeroSection section={HERO} />
      <ContactSection section={CONTACT_SECTION} />
      <TestimonialsSection section={TESTIMONIALS} />
    </>
  )
}
