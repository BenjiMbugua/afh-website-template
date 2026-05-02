import { Reveal } from '@/components/motion/Reveal'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

function getCardSpan(index: number) {
  if (index === 0) return 'md:col-span-2 md:row-span-2'
  if (index === 3) return 'lg:col-span-2'
  return ''
}

export function GalleryPlaceholder() {
  const { gallery, business, imagery } = siteContent
  const populated = gallery.slots.filter((slot) => slot.imageUrl)
  const displaySlots = populated.length > 0 ? populated : gallery.slots
  const highlightPhoto = imagery.peoplePhotography.find((item) => item.imageUrl)

  return (
    <section className={isSecuritySite ? 'py-20 bg-white' : 'py-20'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
          <div>
            <Reveal className="mb-8 max-w-3xl">
              <p
                className={isSecuritySite ? 'mb-3 inline-flex rounded px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]' : 'mb-3 inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]'}
                style={{ background: 'color-mix(in srgb, var(--theme-accent) 18%, white)', color: 'var(--theme-primary)' }}
              >
                {isSecuritySite ? 'Security Visuals' : 'Facility Showcase'}
              </p>
              <h2 className="section-heading mb-4">{gallery.heading}</h2>
              <p className="section-subheading">
                {isSecuritySite
                  ? 'Strong security sites need real visual proof: trained personnel, vehicles, field coverage, and a serious operational tone.'
                  : 'Families choose faster when they can picture the home clearly. This gallery is designed to surface the exterior, shared spaces, bedrooms, and the human warmth of care.'}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]">
              {displaySlots.map((slot, index) => (
                <article
                  key={slot.id}
                  className={`group relative overflow-hidden ${isSecuritySite ? 'rounded-md' : 'rounded-[26px]'} border border-black/5 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${getCardSpan(index)}`}
                >
                  {slot.imageUrl ? (
                    <>
                      <img src={slot.imageUrl} alt={slot.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
                    </>
                  ) : (
                    <div
                      className="flex h-full min-h-[200px] items-end p-6"
                      style={{
                        background:
                          'linear-gradient(180deg, color-mix(in srgb, var(--theme-primary) 14%, white), color-mix(in srgb, var(--theme-secondary) 12%, white))',
                      }}
                    >
                      <div className="rounded-2xl border border-dashed border-black/10 bg-white/70 p-4 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--theme-primary)' }}>
                          {isSecuritySite ? 'Visual Needed' : 'Upload Needed'}
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-700">{slot.label}</p>
                        <p className="mt-1 text-sm text-slate-500">{slot.description}</p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">{slot.purpose}</p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">{slot.label}</h3>
                        <p className="mt-1 max-w-md text-sm text-white/78">{slot.description}</p>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
                        style={{
                          background: slot.priority === 'high'
                            ? 'color-mix(in srgb, var(--theme-accent) 82%, black)'
                            : 'rgba(255,255,255,0.18)',
                          color: slot.priority === 'high' ? '#111827' : '#fff',
                        }}
                      >
                        {slot.priority}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Reveal as="aside" delay={0.12} className={isSecuritySite ? 'rounded-md border border-black/10 bg-[#080b11] p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]' : 'rounded-[30px] border border-black/5 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur'}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--theme-primary)' }}>
              {isSecuritySite ? 'Why visuals matter' : 'Why imagery matters'}
            </p>
            <h3 className={isSecuritySite ? 'mt-3 text-3xl font-semibold text-white' : 'mt-3 text-3xl font-semibold'}>{isSecuritySite ? 'Security buyers judge credibility before they read every word.' : 'Real visuals reduce uncertainty for families.'}</h3>
            <p className={isSecuritySite ? 'mt-4 text-sm leading-7 text-white/62' : 'mt-4 text-sm leading-7 text-slate-600'}>
              {isSecuritySite
                ? 'The page should immediately signal discipline, readiness, and professional coverage through the logo, dark palette, and actual security imagery.'
                : 'The strongest AFH websites do not rely on generic stock photos alone. They blend polished people imagery with honest facility photos so families can feel the tone of care and the reality of the home.'}
            </p>

            {highlightPhoto?.imageUrl ? (
              <img
                src={highlightPhoto.imageUrl}
                alt={highlightPhoto.alt}
                className={isSecuritySite ? 'mt-6 h-56 w-full rounded-md object-cover' : 'mt-6 h-56 w-full rounded-[24px] object-cover'}
              />
            ) : null}

            <div className="mt-6 space-y-3">
              {siteContent.trustChecklist.slice(0, 4).map((item) => (
                <div key={item} className={isSecuritySite ? 'flex items-start gap-3 rounded-md bg-white/8 px-4 py-3' : 'flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3'}>
                  <span
                    className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: 'var(--theme-secondary)' }}
                  >
                    ✓
                  </span>
                  <p className={isSecuritySite ? 'text-sm leading-6 text-white/76' : 'text-sm leading-6 text-slate-700'}>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary">{isSecuritySite ? 'Request Coverage' : 'Schedule a Tour'}</a>
              <a href={business.phoneHref} className="btn-secondary">Call {business.phone}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
