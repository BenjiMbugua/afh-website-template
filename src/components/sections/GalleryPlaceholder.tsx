import { siteContent } from '@/lib/siteContent'

const IMAGE_SLOTS = [
  {
    id: 'exterior',
    label: 'Home Exterior',
    description: 'Front of the home — families need to picture where their loved one will live',
    purpose: 'Safety & familiarity',
    placeholder: true,
    aspectRatio: 'aspect-[16/9]',
    priority: 'HIGH — needed before launch',
  },
  {
    id: 'common-area',
    label: 'Living / Common Area',
    description: 'Main shared space where residents spend time together',
    purpose: 'Home feel vs. institutional',
    placeholder: true,
    aspectRatio: 'aspect-[4/3]',
    priority: 'HIGH — needed before launch',
  },
  {
    id: 'bedroom',
    label: 'Resident Bedroom',
    description: 'A clean, comfortable, personalizable room',
    purpose: 'Comfort and dignity',
    placeholder: true,
    aspectRatio: 'aspect-[4/3]',
    priority: 'HIGH — needed before launch',
  },
  {
    id: 'caregiver',
    label: 'Caregiver / Staff',
    description: 'Caregiver with resident or smiling at camera — human face of care',
    purpose: 'Trust and warmth',
    placeholder: true,
    aspectRatio: 'aspect-[3/4]',
    priority: 'HIGH — needed before launch',
  },
  {
    id: 'outdoor',
    label: 'Outdoor / Garden',
    description: 'Outdoor space, porch, or garden area',
    purpose: 'Quality of life signal',
    placeholder: true,
    aspectRatio: 'aspect-[16/9]',
    priority: 'MEDIUM',
  },
  {
    id: 'dining',
    label: 'Dining / Kitchen',
    description: 'Meal time or kitchen — families want to know about food and routine',
    purpose: 'Daily life reassurance',
    placeholder: true,
    aspectRatio: 'aspect-[4/3]',
    priority: 'MEDIUM',
  },
]

export function GalleryPlaceholder() {
  const { gallery, business } = siteContent

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">{gallery.heading}</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We want families to picture the home before they visit. Photos coming soon.
          </p>
          <div className="mt-4 inline-block bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs px-4 py-2 rounded-full font-medium">
            CMS: Upload real photos to replace these placeholders before launch
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMAGE_SLOTS.map((slot) => (
            <div key={slot.id} className={`${slot.aspectRatio} bg-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300`}>
              <div className="text-3xl opacity-40">📷</div>
              <p className="font-semibold text-gray-600 text-sm text-center">{slot.label}</p>
              <p className="text-gray-500 text-xs text-center">{slot.description}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${slot.priority.includes('HIGH') ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {slot.priority}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-neutral mb-4">
            Want to see the home in person?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">Schedule a Tour</a>
            <a href={business.phoneHref} className="btn-secondary">Call {business.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
