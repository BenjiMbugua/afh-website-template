import type { StatsBandSection } from '@/lib/payload/types'

const FALLBACK_STATS = [
  { value: '10+', label: 'Years of Care' },
  { value: '9+', label: 'Happy Residents' },
  { value: '6', label: 'Specialized Services' },
  { value: '24/7', label: 'Support Available' },
]

interface StatsBandProps {
  section: StatsBandSection
}

export function StatsBand({ section }: StatsBandProps) {
  const stats = section.stats?.length > 0 ? section.stats : FALLBACK_STATS
  const bg = section.backgroundColor ?? '#FFFAF5'

  return (
    <section className="py-14" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-navy uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
