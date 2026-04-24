import { ServiceCard } from '@/components/ui/ServiceCard'
import type { ServicesGridSection, Service } from '@/lib/payload/types'

const FALLBACK_SERVICES: Service[] = [
  { id: '1', title: 'Personal Care', slug: 'personal-care', shortDescription: 'Compassionate support with daily living activities to maintain dignity and independence.', features: ['Bathing, grooming, and hygiene', 'Dressing and personal appearance', 'Toileting and incontinence care'], accentColor: '#FF6734', order: 1 },
  { id: '2', title: 'Companionship Care', slug: 'companionship-care', shortDescription: 'Warm, attentive companionship to prevent isolation and support emotional well-being.', features: ['Friendly conversation and emotional support', 'Accompaniment to appointments and errands'], accentColor: '#e53796', order: 2 },
  { id: '3', title: 'Respite Care', slug: 'respite-care', shortDescription: 'Temporary relief for primary caregivers with reliable, scheduled in-home support.', features: ['Temporary relief for primary caregivers', 'Reliable short-term or scheduled in-home care'], accentColor: '#515ecf', order: 3 },
  { id: '4', title: 'Light Housekeeping', slug: 'light-housekeeping', shortDescription: 'Maintaining a clean, comfortable living environment for residents.', features: ['Laundry and linen changes', 'Tidying up living spaces, kitchen, and bathroom'], accentColor: '#515ecf', order: 4 },
  { id: '5', title: 'Transitional Care', slug: 'transitional-care', shortDescription: 'Support during transitions from hospital or rehabilitation back to daily home life.', features: ['Help with walking or transferring', 'Fall prevention and safe movement'], accentColor: '#FF6734', order: 5 },
  { id: '6', title: 'Post Stroke Care', slug: 'post-stroke-care', shortDescription: 'Specialized care for stroke survivors including medication management.', features: ['Ensuring timely intake of prescribed medication', 'Monitoring for side effects or missed doses'], accentColor: '#e53796', order: 6 },
]

interface ServicesGridProps {
  section: ServicesGridSection
}

export function ServicesGrid({ section }: ServicesGridProps) {
  const services = section.services && section.services.length > 0 ? section.services : FALLBACK_SERVICES

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="section-subheading max-w-2xl mx-auto">{section.subheading}</p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
