import { Reveal } from '@/components/motion/Reveal'
import { isSecuritySite } from '@/lib/siteKind'
import type { Service } from '@/lib/payload/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const accent = service.accentColor ?? '#FF6734'

  return (
    <Reveal
      as="article"
      className={
        isSecuritySite
          ? 'relative flex min-h-[280px] flex-col gap-4 border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]'
          : 'relative bg-white rounded-t-[200px] rounded-b-2xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-lg'
      }
      style={isSecuritySite ? { borderTop: `3px solid ${accent}` } : { border: `4px solid ${accent}` }}
    >
      <h3 className={isSecuritySite ? 'font-semibold text-xl leading-tight text-[#0b1220]' : 'text-navy font-semibold text-xl mt-4'}>{service.title}</h3>
      <p className="text-neutral text-sm leading-relaxed">{service.shortDescription}</p>
      {service.features.length > 0 && (
        <ul className="mt-2 space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral">
              <svg
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: accent }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}
