import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type {
  SiteSettings,
  Navigation,
  FooterSettings,
  Service,
  Testimonial,
  FAQItem,
} from './types'

async function getPayloadClient() {
  return getPayload({ config: configPromise })
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({ slug: 'site-settings' })
    return data as unknown as SiteSettings
  } catch {
    return null
  }
}

export async function getNavigation(): Promise<Navigation | null> {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({ slug: 'navigation' })
    return data as unknown as Navigation
  } catch {
    return null
  }
}

export async function getFooterSettings(): Promise<FooterSettings | null> {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({ slug: 'footer-settings' })
    return data as unknown as FooterSettings
  } catch {
    return null
  }
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      sort: 'order',
      limit: 100,
    })
    return result.docs.map((doc: any) => ({
      id: String(doc.id),
      title: doc.title,
      slug: doc.slug,
      icon: doc.icon,
      shortDescription: doc.shortDescription,
      features: (doc.features ?? []).map((f: { value: string }) => f.value),
      image: doc.image ?? undefined,
      accentColor: doc.accentColor,
      order: doc.order,
    }))
  } catch {
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = result.docs[0]
    if (!doc) return null
    return {
      id: String(doc.id),
      title: doc.title,
      slug: doc.slug,
      icon: doc.icon,
      shortDescription: doc.shortDescription,
      features: (doc.features ?? []).map((f: { value: string }) => f.value),
      image: doc.image ?? undefined,
      accentColor: doc.accentColor,
      order: doc.order,
    }
  } catch {
    return null
  }
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      limit: 50,
    })
    return result.docs.map((doc: any) => ({
      id: String(doc.id),
      quote: doc.quote,
      authorName: doc.authorName,
      relationship: doc.relationship,
      rating: doc.rating,
    }))
  } catch {
    return []
  }
}

export async function getAllFAQItems(): Promise<FAQItem[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'faq-items',
      sort: 'order',
      limit: 50,
    })
    return result.docs.map((doc: any) => ({
      id: String(doc.id),
      question: doc.question,
      answer: doc.answer,
      category: doc.category,
      order: doc.order,
    }))
  } catch {
    return []
  }
}
