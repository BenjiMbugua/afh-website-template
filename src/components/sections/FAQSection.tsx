import type { FAQSection as FAQSectionType, FAQItem } from '@/lib/payload/types'
import { siteContent } from '@/lib/siteContent'

interface FAQSectionProps {
  section: FAQSectionType
}

export function FAQSection({ section }: FAQSectionProps) {
  const faqs =
    section.faqs && section.faqs.length > 0
      ? section.faqs
      : siteContent.faqs

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{section.heading}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-gray-200 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none hover:bg-gray-50">
                <span className="font-semibold text-navy text-base pr-4">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-neutral leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
