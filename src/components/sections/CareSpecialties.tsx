import { Reveal } from '@/components/motion/Reveal'
import { siteContent } from '@/lib/siteContent'
import { isSecuritySite } from '@/lib/siteKind'

export function CareSpecialties() {
  const { specialties, business } = siteContent

  return (
    <section className={isSecuritySite ? 'py-20 bg-white' : 'py-20 bg-cream'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <h2 className="section-heading mb-4">{isSecuritySite ? 'Protection Services We Specialize In' : 'Care We Specialize In'}</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {isSecuritySite
              ? `${business.name} focuses on practical security coverage clients can understand quickly: visible presence, controlled access, patrols, and professional reporting.`
              : `Not every home is equipped for every need. Here is where ${business.name} has specific experience and capability.`}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s) => (
            <Reveal key={s.title} className={isSecuritySite ? 'bg-[#0b1220] border border-white/10 rounded-md p-6 shadow-sm flex flex-col gap-4' : 'bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4'}>
              <div className="flex items-start gap-3">
                <span className="text-3xl">{s.icon}</span>
                <h3 className={isSecuritySite ? 'font-bold text-white text-base leading-snug' : 'font-bold text-navy text-base leading-snug'}>{s.title}</h3>
              </div>
              <p className={isSecuritySite ? 'text-white/68 text-sm leading-relaxed flex-1' : 'text-neutral text-sm leading-relaxed flex-1'}>{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className={isSecuritySite ? 'text-xs font-medium text-[#111827] bg-[var(--theme-accent)] px-2.5 py-1 rounded' : 'text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full'}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral mb-4">
            {isSecuritySite
              ? 'Need a specific coverage plan? Call us and we will clarify fit, schedule, and next steps.'
              : 'Have a specific need or diagnosis? Call us — we are honest about what we can and cannot provide.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
            <a href="/contact" className="btn-secondary">
              {isSecuritySite ? 'Request coverage' : 'Ask a question'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
