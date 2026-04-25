import Link from 'next/link'
import { siteContent } from '@/lib/siteContent'
import type { HeroSection as HeroSectionType } from '@/lib/payload/types'

interface HeroSectionProps {
  section: HeroSectionType
  showTrustBadges?: boolean
}

export function HeroSection({ section, showTrustBadges = false }: HeroSectionProps) {
  const bgSrc = section.backgroundImage?.url ?? siteContent.imagery.heroBackgroundUrl ?? siteContent.gallery.slots.find((slot) => slot.priority === 'high' && slot.imageUrl)?.imageUrl ?? null
  const caregiverShot = siteContent.imagery.peoplePhotography.find((item) => item.imageUrl)?.imageUrl ?? null
  const { address, hero, gallery, theme } = siteContent

  return (
    <section className="relative min-h-[88vh] flex items-center">
      {/* Background */}
      {bgSrc ? (
        <>
          <img
            src={bgSrc}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {section.overlay !== false && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/52 to-black/18" />
          )}
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, var(--theme-primary), color-mix(in srgb, var(--theme-secondary) 76%, black))' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div className="max-w-3xl">

            {/* Location + care type badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                {address.locationBadge}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: 'color-mix(in srgb, var(--theme-accent) 82%, black)' }}
              >
                {hero.careTypeBadge}
              </span>
              {theme.templateName && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/85 text-xs font-medium px-3 py-1.5 rounded-full border border-white/15">
                  {theme.templateName}
                </span>
              )}
            </div>

            <h1 className="text-white font-bold leading-[0.96] mb-5 text-4xl md:text-5xl lg:text-7xl">
              {section.heading}
            </h1>

            {section.subheading && (
              <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
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

          <div className="hidden lg:flex lg:flex-col lg:gap-5">
            <div className="rounded-[28px] border border-white/16 bg-white/10 p-4 backdrop-blur-md shadow-2xl">
              {caregiverShot ? (
                <img
                  src={caregiverShot}
                  alt={siteContent.imagery.peoplePhotography[0]?.alt || `${siteContent.business.name} caregiver`}
                  className="h-[300px] w-full rounded-[22px] object-cover"
                />
              ) : (
                <div
                  className="flex h-[300px] w-full items-end rounded-[22px] p-6 text-white"
                  style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))' }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">Prepared for families</p>
                    <p className="mt-2 text-2xl font-semibold">Warm, personal care in a home families can picture clearly.</p>
                  </div>
                </div>
              )}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-white/88">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Design Direction</p>
                  <p className="mt-1 text-sm font-medium">{theme.styleTags.slice(0, 2).join(' · ') || 'Warm · Trust-led'}</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-white/88">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Photo Readiness</p>
                  <p className="mt-1 text-sm font-medium">{gallery.slots.filter((slot) => slot.imageUrl).length} key visuals ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
