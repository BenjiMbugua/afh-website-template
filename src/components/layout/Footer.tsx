import Link from 'next/link'
import { siteContent } from '@/lib/siteContent'
import type { SiteSettings, FooterSettings } from '@/lib/payload/types'

interface FooterProps {
  siteSettings: SiteSettings
  footerSettings: FooterSettings | null
}

export function Footer({ siteSettings, footerSettings }: FooterProps) {
  const columns = footerSettings?.columns ?? siteContent.footer.columns
  const { business, imagery } = siteContent
  const copyright =
    footerSettings?.copyrightText ??
    `\u00A9 ${new Date().getFullYear()} ${business.legalName}. All rights reserved.`

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--theme-primary) 96%, black), color-mix(in srgb, var(--theme-secondary) 85%, black))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-3 flex items-center gap-3">
              {imagery.logoUrl ? (
                <img src={imagery.logoUrl} alt={`${business.name} logo`} className="h-12 w-12 rounded-xl bg-white object-contain p-1.5" />
              ) : (
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, var(--theme-accent), var(--theme-secondary))' }}
                >
                  {business.name.slice(0, 1)}
                </div>
              )}
              <span>
                <span className="text-white font-bold text-xl">{business.name}</span>
                <span className="block text-white/60 text-xs tracking-wide">{business.type}</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">{siteSettings.tagline}</p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteSettings.phone.replace(/\D/g, '')}`}
                  className="text-white/70 text-sm hover:text-primary transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteSettings.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-white/70 text-sm hover:text-primary transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteSettings.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {siteSettings.address.street}<br />
                  {siteSettings.address.city}, {siteSettings.address.state} {siteSettings.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">{copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">State Licensed Memory Care Facility</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
