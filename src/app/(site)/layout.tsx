import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getSiteSettings, getNavigation, getFooterSettings } from '@/lib/payload/queries'
import { siteContent } from '@/lib/siteContent'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteContent.business.name} ${siteContent.business.type} | Memory Care ${siteContent.address.city}, ${siteContent.address.state}`,
    template: `%s | ${siteContent.business.name} ${siteContent.business.type}`,
  },
  description: `${siteContent.business.tagline}. Specializing in Alzheimer's, dementia, and post-stroke care. UA Benefits accepted.`,
  keywords: siteContent.seo.keywords,
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

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-white">
        <TopBar />
        <Header siteSettings={site as any} navigation={nav as any} />
        <main>{children}</main>
        <Footer siteSettings={site as any} footerSettings={footerSettings as any} />
      </body>
    </html>
  )
}
