import Link from 'next/link'
import { Navigation } from './Navigation'
import { siteContent } from '@/lib/siteContent'
import type { SiteSettings, Navigation as NavigationType } from '@/lib/payload/types'

interface HeaderProps {
  siteSettings: SiteSettings
  navigation: NavigationType
}

export function Header({ siteSettings, navigation }: HeaderProps) {
  const ctaItem = navigation.items.find((i) => i.isButton)
  const { business, hero, imagery } = siteContent

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/88 shadow-sm backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Business name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {imagery.logoUrl ? (
              <img
                src={imagery.logoUrl}
                alt={`${business.name} logo`}
                className="h-11 w-11 rounded-xl border border-black/5 bg-white object-contain p-1 shadow-sm"
              />
            ) : (
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-sm"
                style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))' }}
              >
                {business.name.slice(0, 1)}
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold leading-none" style={{ color: 'var(--theme-primary)' }}>
                {business.name}
              </span>
              <span className="text-xs font-medium tracking-wide" style={{ color: 'color-mix(in srgb, var(--theme-text) 72%, white)' }}>
                {business.type}
              </span>
            </div>
          </Link>

          {/* Navigation + CTA (desktop) */}
          <div className="flex items-center gap-4">
            <Navigation items={navigation.items} phone={siteSettings.phone} />

            {/* Desktop: phone + CTA button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteSettings.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: 'var(--theme-primary)' }}
              >
                <svg className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteSettings.phone}
              </a>
              {ctaItem && (
                <Link href={ctaItem.href} className="btn-primary text-sm py-2 px-5">
                  {hero.ctaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
