import { siteContent } from '@/lib/siteContent'

export function LocalInfo() {
  const { serviceAreas, address, business, localInfo } = siteContent

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Serving {address.county}, {address.state}
            </div>
            <h2 className="section-heading mb-4">
              {localInfo.heading}
            </h2>
            <p className="text-neutral leading-relaxed mb-5">
              {localInfo.description}
            </p>
            <p className="text-neutral leading-relaxed mb-6">
              {localInfo.nearbyText}
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-sm text-navy bg-cream border border-gray-200 px-3 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-bold text-navy text-base mb-4">Find Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-navy">{address.street}</p>
                    <p className="text-sm text-neutral">{address.city}, {address.state} {address.zip}</p>
                    <a
                      href={address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-medium hover:underline mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={business.phoneHref} className="text-sm font-semibold text-primary hover:underline">
                    {business.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-neutral">Response within 2 hours · Mon–Sun 8am–8pm</span>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="btn-primary text-center py-4 text-base"
            >
              Schedule a Tour
            </a>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold rounded-full py-3 text-sm hover:bg-navy hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
