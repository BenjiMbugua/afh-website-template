import Link from 'next/link'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

export function TopBar() {
  const { business, address, hero } = siteContent

  return (
    <div className={isSecuritySite ? 'bg-[#05070b] text-white text-sm' : 'bg-navy text-white text-sm'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-1 sm:gap-0">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start text-xs sm:text-sm">
            <span className="flex items-center gap-1 text-white/80">
              <span className={isSecuritySite ? 'w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-pulse inline-block' : 'w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block'} />
              {hero.acceptingText}
            </span>
            <span className="hidden sm:block text-white/30">·</span>
            <span className="text-white/70">{address.locationBadge}</span>
            <span className="hidden sm:block text-white/30">·</span>
            <span className="text-white/70">{hero.licenseText}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs hidden md:block">{hero.responsePromise}</span>
            <a
              href={business.phoneHref}
              className={isSecuritySite ? 'flex items-center gap-1.5 bg-[var(--theme-accent)] text-[#05070b] font-semibold px-4 py-1.5 rounded text-xs transition-colors' : 'flex items-center gap-1.5 bg-primary text-white font-semibold px-4 py-1.5 rounded-full text-xs hover:bg-orange-600 transition-colors'}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
