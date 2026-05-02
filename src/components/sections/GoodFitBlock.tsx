import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

export function GoodFitBlock() {
  const { goodFit, business } = siteContent

  return (
    <section className={isSecuritySite ? 'py-16 bg-[#f7f7f4]' : 'py-16 bg-white'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">{goodFit.heading}</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {goodFit.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Good fit */}
          <div className={isSecuritySite ? 'bg-white border border-slate-200 rounded-md p-6 sm:p-8' : 'bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8'}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-navy text-lg">{isSecuritySite ? 'This coverage is a good fit if...' : 'This home is a good fit if...'}</h3>
            </div>
            <ul className="space-y-3">
              {goodFit.fits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral leading-relaxed">
                  <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit + CTA */}
          <div className="flex flex-col gap-6">
            <div className={isSecuritySite ? 'bg-white border border-slate-200 rounded-md p-6 sm:p-8' : 'bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8'}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy text-lg">Not the right fit if...</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.notFits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral leading-relaxed">
                    <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral/60 mt-4">
                {isSecuritySite ? 'Not sure? Call us anyway. We can clarify whether the requested coverage is realistic and appropriate.' : 'Not sure? Call us anyway — we are happy to help you find the right option even if that is not us.'}
              </p>
            </div>

            <div className={isSecuritySite ? 'bg-[#080b11] rounded-md p-6 text-white flex flex-col gap-4' : 'bg-navy rounded-2xl p-6 text-white flex flex-col gap-4'}>
              <p className="font-semibold text-lg leading-snug">Still wondering if we are the right fit?</p>
              <p className="text-white/75 text-sm">A 10-minute call is all it takes. No pressure, no commitment.</p>
              <div className="flex flex-col gap-2">
                <a href={business.phoneHref} className="btn-primary text-center py-3">
                  Call {business.phone}
                </a>
                <a href="/contact" className="btn-outline text-center py-3 text-sm">
                  Send a message instead
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
