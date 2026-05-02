import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

export function TrustStrip() {
  return (
    <div id="trust" className={isSecuritySite ? 'bg-[#090d14] border-y border-white/10 py-6' : 'bg-white border-y border-gray-100 py-6'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteContent.trustSignals.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1 py-2">
              <span className="text-2xl">{s.icon}</span>
              <span className={isSecuritySite ? 'text-white font-semibold text-sm leading-tight' : 'text-navy font-semibold text-sm leading-tight'}>{s.label}</span>
              <span className={isSecuritySite ? 'text-white/52 text-xs leading-tight' : 'text-neutral text-xs leading-tight'}>{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
