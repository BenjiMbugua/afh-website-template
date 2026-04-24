import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/lib/siteContent'
import type { HeroSection as HeroSectionType } from '@/lib/payload/types'

interface HeroSectionProps {
  section: HeroSectionType
  showTrustBadges?: boolean
}

export function HeroSection({ section, showTrustBadges = false }: HeroSectionProps) {
  const bgSrc = section.backgroundImage?.url ?? null
  const { address, hero } = siteContent

  return (
    <section className="relative min-h-[88vh] flex items-center">
      {/* Background */}
      {bgSrc ? (
        <>
          <Image
            src={bgSrc}
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {section.overlay !== false && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-blue-800" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">

          {/* Location + care type badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
              {address.locationBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {hero.careTypeBadge}
            </span>
          </div>

          <h1 className="text-white font-bold leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
            {section.heading}
          </h1>

          {section.subheading && (
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
              {section.subheading}
            </p>
          )}

          {/* Response promise */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/75 text-sm">{hero.responsePromise} · {hero.acceptingText}</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={section.ctaHref} className="btn-primary text-base md:text-lg px-8 py-4">
              {section.ctaText}
            </Link>
            {section.secondaryCTAText && section.secondaryCTAHref && (
              <a
                href={section.secondaryCTAHref}
                className="btn-outline text-base md:text-lg px-8 py-4"
              >
                {section.secondaryCTAText}
              </a>
            )}
          </div>

          {/* Inline trust badges — shown on home hero */}
          {showTrustBadges && (
            <div className="mt-10 flex flex-wrap gap-3">
              {hero.badges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/85 text-xs px-3 py-1.5 rounded-full border border-white/15">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
