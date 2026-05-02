import { Reveal } from '@/components/motion/Reveal'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

export function ProofBlock() {
  const { proof, business } = siteContent

  return (
    <section className={isSecuritySite ? 'py-16 bg-[#080b11]' : 'py-16 bg-navy'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-3">{proof.heading}</h2>
          <p className="text-white/65 max-w-xl mx-auto">
            {proof.subheading}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {proof.items.map((item) => (
            <Reveal key={item.label} className={isSecuritySite ? 'bg-white/5 border border-white/10 rounded-md p-5 sm:p-6' : 'bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6'}>
              <div className={isSecuritySite ? 'font-bold text-3xl sm:text-4xl mb-2 text-[var(--theme-accent)]' : 'text-primary font-bold text-3xl sm:text-4xl mb-2'}>{item.value}</div>
              <div className="text-white font-semibold text-sm leading-snug mb-1">{item.label}</div>
              <div className="text-white/45 text-xs">{item.source}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="btn-primary px-8 py-4 text-base">
            {isSecuritySite ? 'Request Security Coverage' : 'Schedule a Free Consultation'}
          </a>
          <a href={business.phoneHref} className="btn-outline px-8 py-4 text-base">
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
