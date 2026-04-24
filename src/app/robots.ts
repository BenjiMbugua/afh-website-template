import { MetadataRoute } from 'next'
import { siteContent } from '@/lib/siteContent'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.business.siteUrl

  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
