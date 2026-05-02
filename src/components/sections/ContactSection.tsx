import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { WhatHappensNext } from './WhatHappensNext'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'
import type { ContactSection as ContactSectionType } from '@/lib/payload/types'

interface ContactSectionProps {
  section: ContactSectionType
}

export function ContactSection({ section }: ContactSectionProps) {
  const { business, address, trustChecklist } = siteContent

  return (
    <section id="contact" className={isSecuritySite ? 'py-20 bg-[#f7f7f4]' : 'py-20 bg-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <h2 className="section-heading mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="section-subheading max-w-2xl mx-auto">{section.subheading}</p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-navy font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">Phone</p>
                    <a href={business.phoneHref} className="text-primary font-bold text-xl hover:underline">
                      {business.phone}
                    </a>
                    <p className="text-xs text-neutral/60 mt-1">We respond within 2 hours · Mon–Sun 8am–8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">Email</p>
                    <a href={`mailto:${business.email}`} className="text-primary font-semibold hover:underline">
                      {business.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">Address</p>
                    <p className="text-neutral">
                      {address.street}<br />
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <a
                      href={address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust checklist */}
            <div className={isSecuritySite ? 'bg-[#080b11] rounded-md p-6' : 'bg-cream rounded-2xl p-6'}>
              <h4 className={isSecuritySite ? 'text-white font-semibold text-sm uppercase tracking-wide mb-4' : 'text-navy font-semibold text-sm uppercase tracking-wide mb-4'}>{isSecuritySite ? `Why clients choose ${business.name}` : `Why families choose ${business.name}`}</h4>
              <ul className="space-y-2">
                {trustChecklist.map((item) => (
                  <li key={item} className={isSecuritySite ? 'flex items-center gap-2 text-sm text-white/72' : 'flex items-center gap-2 text-sm text-neutral'}>
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form + What happens next */}
          <div>
            {section.showForm && (
              <>
                <ContactForm phone={business.phone} phoneHref={business.phoneHref} />
                <WhatHappensNext />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
