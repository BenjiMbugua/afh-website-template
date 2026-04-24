import { siteContent } from '@/lib/siteContent'

export function CareSpecialties() {
  const { specialties, business } = siteContent

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">Care We Specialize In</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Not every home is equipped for every need. Here is where {business.name} has specific experience and capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-bold text-navy text-base leading-snug">{s.title}</h3>
              </div>
              <p className="text-neutral text-sm leading-relaxed flex-1">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral mb-4">
            Have a specific need or diagnosis? Call us — we are honest about what we can and cannot provide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
            <a href="/contact" className="btn-secondary">
              Ask a question
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
