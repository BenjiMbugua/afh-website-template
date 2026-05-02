import { siteContent } from './siteContent'

function includesAny(value: string, signals: string[]) {
  const normalized = value.toLowerCase()
  return signals.some((signal) => normalized.includes(signal))
}

export function getSiteKind() {
  const text = [
    siteContent.business.name,
    siteContent.business.type,
    siteContent.business.tagline,
    siteContent.hero.heading,
    siteContent.hero.subheading,
    ...siteContent.hero.badges,
    ...siteContent.specialties.flatMap((item) => [item.title, item.description, ...item.tags]),
    ...siteContent.seo.keywords,
  ].join(' ')

  if (
    includesAny(text, [
      'security',
      'protection',
      'guard',
      'patrol',
      'surveillance',
      'event safety',
      'executive protection',
      'loss prevention',
    ])
  ) {
    return 'security'
  }

  if (
    includesAny(text, [
      'adult family home',
      'memory care',
      'home care',
      'homecare',
      'caregiver',
      'respite',
      'senior care',
    ])
  ) {
    return 'care'
  }

  return 'business'
}

export const siteKind = getSiteKind()
export const isSecuritySite = siteKind === 'security'
export const isCareSite = siteKind === 'care'
