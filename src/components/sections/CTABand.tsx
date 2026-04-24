import Link from 'next/link'
import type { CTABandSection } from '@/lib/payload/types'

interface CTABandProps {
  section: CTABandSection
}

export function CTABand({ section }: CTABandProps) {
  const bg = section.backgroundColor ?? '#000763'

  return (
    <section className="py-20" style={{ backgroundColor: bg }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-4">
          {section.heading}
        </h2>
        {section.subheading && (
          <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">{section.subheading}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={section.primaryCTAHref} className="btn-primary text-lg px-8 py-4">
            {section.primaryCTAText}
          </Link>
          {section.secondaryCTAText && section.secondaryCTAHref && (
            <a href={section.secondaryCTAHref} className="btn-outline text-lg px-8 py-4">
              {section.secondaryCTAText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
