// Media type returned by Payload uploads
export interface MediaRef {
  id: string
  url: string
  alt?: string
  width?: number
  height?: number
  filename?: string
  mimeType?: string
}

export interface SEOFields {
  metaTitle?: string
  metaDescription?: string
  ogImage?: MediaRef
  noIndex?: boolean
}

export interface SiteSettings {
  id: string
  siteName: string
  tagline: string
  logo?: MediaRef
  phone: string
  email: string
  address: { street: string; city: string; state: string; zip: string }
  socialLinks?: { id: string; platform: string; url: string }[]
  defaultSeo?: SEOFields
}

export interface NavItem {
  id?: string
  label: string
  href: string
  isButton?: boolean
}

export interface Navigation {
  id: string
  items: NavItem[]
}

export interface FooterColumn {
  id?: string
  heading: string
  links: { id?: string; label: string; href: string }[]
}

export interface FooterSettings {
  id: string
  columns?: FooterColumn[]
  copyrightText?: string
  showAddress?: boolean
  showPhone?: boolean
  showEmail?: boolean
}

export interface Service {
  id: string
  title: string
  slug: string
  icon?: string
  shortDescription: string
  features: string[]
  image?: MediaRef
  accentColor?: string
  order: number
  seo?: SEOFields
}

export interface Testimonial {
  id: string
  quote: string
  authorName: string
  relationship: string
  rating?: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
  order: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo?: MediaRef
  certifications?: string[]
  order: number
}

// Section types — _type and _key kept as discriminators for PageSections.tsx
export interface HeroSection {
  _type: 'heroSection'
  _key: string
  heading: string
  subheading?: string
  ctaText: string
  ctaHref: string
  secondaryCTAText?: string
  secondaryCTAHref?: string
  backgroundImage?: MediaRef
  overlay?: boolean
}

export interface ServicesGridSection {
  _type: 'servicesGridSection'
  _key: string
  heading: string
  subheading?: string
  services?: Service[]
}

export interface TextImageSection {
  _type: 'textImageSection'
  _key: string
  heading: string
  body: string
  image?: MediaRef
  imagePosition: 'left' | 'right'
  backgroundColor?: string
  ctaText?: string
  ctaHref?: string
}

export interface StatsBandSection {
  _type: 'statsBandSection'
  _key: string
  stats: { value: string; label: string }[]
  backgroundColor?: string
}

export interface CTABandSection {
  _type: 'ctaBandSection'
  _key: string
  heading: string
  subheading?: string
  primaryCTAText: string
  primaryCTAHref: string
  secondaryCTAText?: string
  secondaryCTAHref?: string
  backgroundColor?: string
}

export interface TestimonialsSection {
  _type: 'testimonialsSection'
  _key: string
  heading: string
  testimonials?: Testimonial[]
}

export interface ContactSection {
  _type: 'contactSection'
  _key: string
  heading: string
  subheading?: string
  showForm: boolean
}

export interface FAQSection {
  _type: 'faqSection'
  _key: string
  heading: string
  faqs?: FAQItem[]
}

export type PageSection =
  | HeroSection
  | ServicesGridSection
  | TextImageSection
  | StatsBandSection
  | CTABandSection
  | TestimonialsSection
  | ContactSection
  | FAQSection

export interface Page {
  id: string
  title: string
  slug: string
  sections: PageSection[]
  seo?: SEOFields
}
