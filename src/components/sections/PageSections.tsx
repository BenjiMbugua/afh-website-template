import { HeroSection } from './HeroSection'
import { ServicesGrid } from './ServicesGrid'
import { TextImageSection } from './TextImageSection'
import { StatsBand } from './StatsBand'
import { CTABand } from './CTABand'
import { TestimonialsSection } from './TestimonialsSection'
import { ContactSection } from './ContactSection'
import { FAQSection } from './FAQSection'
import { TrustStrip } from './TrustStrip'
import { ProofBlock } from './ProofBlock'
import { CareSpecialties } from './CareSpecialties'
import { GoodFitBlock } from './GoodFitBlock'
import { LocalInfo } from './LocalInfo'
import { GalleryPlaceholder } from './GalleryPlaceholder'
import type { PageSection } from '@/lib/payload/types'

interface PageSectionsProps {
  sections: PageSection[]
  isHomePage?: boolean
}

export function PageSections({ sections, isHomePage }: PageSectionsProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case 'heroSection':
            return <HeroSection key={section._key} section={section} showTrustBadges={isHomePage} />
          case 'servicesGridSection':
            return <ServicesGrid key={section._key} section={section} />
          case 'textImageSection':
            return <TextImageSection key={section._key} section={section} />
          case 'statsBandSection':
            return <StatsBand key={section._key} section={section} />
          case 'ctaBandSection':
            return <CTABand key={section._key} section={section} />
          case 'testimonialsSection':
            return <TestimonialsSection key={section._key} section={section} />
          case 'contactSection':
            return <ContactSection key={section._key} section={section} />
          case 'faqSection':
            return <FAQSection key={section._key} section={section} />
          default:
            return null
        }
      })}
    </>
  )
}
