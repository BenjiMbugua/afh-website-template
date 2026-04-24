import { siteContent } from '@/lib/siteContent'

export function WhatHappensNext() {
  const { steps, business } = siteContent

  return (
    <div className="mt-10 bg-cream rounded-2xl p-6 sm:p-8">
      <h3 className="text-navy font-bold text-lg mb-6 flex items-center gap-2">
        <span className="text-primary">→</span>
        What happens after you reach out
      </h3>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-start gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              {step.number}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="font-semibold text-navy text-sm">{step.title}</span>
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                  {step.time}
                </span>
              </div>
              <p className="text-neutral text-sm leading-relaxed">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute left-4 mt-8 w-0.5 h-4 bg-gray-200" aria-hidden />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-neutral">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          No commitment. No pressure. Just a conversation.
        </div>
        <a
          href={business.phoneHref}
          className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Prefer to call? {business.phone}
        </a>
      </div>
    </div>
  )
}
