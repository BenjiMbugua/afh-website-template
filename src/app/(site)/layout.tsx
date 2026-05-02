import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import '../globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getSiteSettings, getNavigation, getFooterSettings } from '@/lib/payload/queries'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite, siteKind } from '@/lib/siteKind'

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading-default',
  display: 'swap',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-default',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: isSecuritySite
      ? `${siteContent.business.name} | Security & Protection Services`
      : `${siteContent.business.name} ${siteContent.business.type} | ${siteContent.address.city}, ${siteContent.address.state}`,
    template: `%s | ${siteContent.business.name} ${siteContent.business.type}`,
  },
  description: isSecuritySite
    ? `${siteContent.business.tagline || siteContent.hero.subheading} Call ${siteContent.business.phone} for professional security coverage.`
    : `${siteContent.business.tagline}. Call ${siteContent.business.phone} to learn more.`,
  keywords: siteContent.seo.keywords,
  icons: siteContent.imagery.faviconUrl
    ? {
        icon: [{ url: siteContent.imagery.faviconUrl }],
        shortcut: [{ url: siteContent.imagery.faviconUrl }],
        apple: [{ url: siteContent.imagery.faviconUrl }],
      }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: `${siteContent.business.name} ${siteContent.business.type}`,
  },
}

const FALLBACK_SITE = {
  id: 'fallback',
  siteName: `${siteContent.business.name} ${siteContent.business.type}`,
  tagline: siteContent.business.tagline,
  phone: siteContent.business.phone,
  email: siteContent.business.email,
  address: {
    street: siteContent.address.street,
    city: siteContent.address.city,
    state: siteContent.address.state,
    zip: siteContent.address.zip,
  },
} as const

const FALLBACK_NAV = {
  id: 'fallback',
  items: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact', isButton: true },
  ],
} as const

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [siteSettings, navigation, footerSettings] = await Promise.all([
    getSiteSettings().catch(() => null),
    getNavigation().catch(() => null),
    getFooterSettings().catch(() => null),
  ])

  const site = siteSettings ?? FALLBACK_SITE
  const nav = navigation ?? FALLBACK_NAV
  const palette = siteContent.theme.palette
  const typography = siteContent.theme.typography

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body
        className="font-sans bg-white"
        data-site-kind={siteKind}
        style={{
          ['--theme-primary' as string]: palette.primary,
          ['--theme-secondary' as string]: palette.secondary,
          ['--theme-accent' as string]: palette.accent,
          ['--theme-background' as string]: palette.background,
          ['--theme-text' as string]: palette.text,
          ['--theme-heading-font' as string]: `${typography.heading}, var(--font-heading-default), Georgia, serif`,
          ['--theme-body-font' as string]: `${typography.body}, var(--font-body-default), system-ui, sans-serif`,
        }}
      >
        <TopBar />
        <Header siteSettings={site as any} navigation={nav as any} />
        <main>{children}</main>
        <Footer siteSettings={site as any} footerSettings={footerSettings as any} />
      </body>
    </html>
  )
}
