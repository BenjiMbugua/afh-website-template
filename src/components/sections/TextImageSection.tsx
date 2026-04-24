import Image from 'next/image'
import Link from 'next/link'
import type { TextImageSection as TextImageSectionType } from '@/lib/payload/types'

interface TextImageSectionProps {
  section: TextImageSectionType
}

export function TextImageSection({ section }: TextImageSectionProps) {
  const isRight = section.imagePosition === 'right'
  const bg = section.backgroundColor ?? '#FFFAF5'

  return (
    <section className="py-20" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isRight ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
          }`}
        >
          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="section-heading">{section.heading}</h2>
            <p className="text-neutral text-lg leading-relaxed">{section.body}</p>
            {section.ctaText && section.ctaHref && (
              <div>
                <Link href={section.ctaHref} className="btn-primary inline-flex">
                  {section.ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            {section.image ? (
              <div className="relative">
                {/* Offset decorative box */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-primary/30" />
                <Image
                  src={section.image.url}
                  alt={section.image.alt ?? section.heading}
                  width={800}
                  height={700}
                  className="relative z-10 rounded-2xl object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              /* Placeholder when no image */
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-primary/30" />
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary aspect-[4/3] bg-gradient-to-br from-cream to-salmon/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-primary/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <p className="text-neutral/60 text-sm">Image coming soon</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
