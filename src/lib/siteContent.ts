/**
 * Centralized site content configuration.
 * When creating a new client site from this template, replace the values
 * in this file — no other content files need to change.
 *
 * The build pipeline reads this file and applies WebsiteTemplateConfig
 * values from the CRM to customize it per client.
 */

export interface SiteContent {
  business: {
    name: string
    legalName: string
    type: string
    tagline: string
    phone: string
    phoneHref: string
    email: string
    siteUrl: string
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
    county: string
    full: string
    mapsUrl: string
    locationBadge: string
  }
  serviceAreas: string[]
  hero: {
    heading: string
    subheading: string
    ctaText: string
    ctaHref: string
    badges: string[]
    responsePromise: string
    acceptingText: string
    careTypeBadge: string
    licenseText: string
  }
  proof: {
    heading: string
    subheading: string
    items: { value: string; label: string; source: string }[]
  }
  trustSignals: { icon: string; label: string; sub: string }[]
  specialties: { icon: string; title: string; description: string; tags: string[] }[]
  testimonials: { id: string; quote: string; authorName: string; relationship: string; rating: number }[]
  faqs: { id: string; question: string; answer: string; order: number }[]
  goodFit: {
    heading: string
    subheading: string
    fits: string[]
    notFits: string[]
  }
  localInfo: {
    heading: string
    description: string
    nearbyText: string
  }
  theme: {
    palette: {
      primary: string
      secondary: string
      accent: string
      background: string
      text: string
    }
    typography: {
      heading: string
      body: string
    }
    styleTags: string[]
    templateName: string | null
  }
  gallery: {
    heading: string
    slots: {
      id: string
      label: string
      description: string
      purpose: string
      imageUrl: string | null
      alt: string
      priority: 'high' | 'medium' | 'low'
    }[]
  }
  imagery: {
    logoUrl: string | null
    heroBackgroundUrl: string | null
    peoplePhotography: {
      id: string
      label: string
      imageUrl: string | null
      alt: string
      usage: string
    }[]
  }
  trustChecklist: string[]
  footer: {
    columns: { heading: string; links: { label: string; href: string }[] }[]
  }
  pages: {
    home: { title: string; description: string }
    about: {
      title: string
      heading: string
      subheading: string
      bodyHeading: string
      stats: { value: string; label: string }[]
    }
    services: { title: string; heading: string; subheading: string }
    contact: { title: string; heading: string; subheading: string }
  }
  seo: { keywords: string[] }
  steps: { number: string; title: string; description: string; time: string }[]
}

export const siteContent: SiteContent = {
  business: {
    name: 'Jace Care',
    legalName: 'Jace Care Adult Family Home LLC',
    type: 'Adult Family Home',
    tagline: 'Compassionate Memory Care in Lakewood, WA',
    phone: '(253) 317-4024',
    phoneHref: 'tel:+12533174024',
    email: 'jacecareprovider@gmail.com',
    siteUrl: 'https://jacecareafh.com',
  },

  address: {
    street: '5750 100th Ave SW',
    city: 'Lakewood',
    state: 'WA',
    zip: '98499',
    county: 'Pierce County',
    get full() { return `${this.street}, ${this.city}, ${this.state} ${this.zip}` },
    get mapsUrl() { return `https://maps.google.com/?q=${encodeURIComponent(this.full)}` },
    get locationBadge() { return `${this.city}, ${this.state} \u00B7 ${this.county}` },
  },

  serviceAreas: [
    'Lakewood, WA',
    'Tacoma, WA',
    'University Place, WA',
    'Steilacoom, WA',
    'DuPont, WA',
    'Pierce County',
  ],

  hero: {
    heading: 'A Safe, Loving Home for Your Family Member',
    subheading: 'Certified memory care in Lakewood, WA. Small home, personal attention, and caregivers who know your loved one by name.',
    ctaText: 'Get a Free Consultation',
    ctaHref: '/contact',
    badges: ['State Licensed', 'UA Benefits OK', 'Hospice Ready', '24/7 Care'],
    responsePromise: 'We respond within 2 hours',
    acceptingText: 'Currently accepting new residents',
    careTypeBadge: 'Memory Care \u00B7 UA Benefits Accepted',
    licenseText: 'State Licensed Memory Care',
  },

  proof: {
    heading: 'Why families trust us',
    subheading: 'These are not broad promises — they are specific facts about how we operate.',
    items: [
      { value: '10+', label: 'Years serving families', source: 'Est. in Lakewood, WA' },
      { value: '2 hrs', label: 'Typical response time to inquiries', source: 'Monday – Sunday, 8am–8pm' },
      { value: 'DSHS', label: 'Washington State licensed facility', source: 'Dept. of Social & Health Services' },
      { value: '6', label: 'Specialized care programs', source: 'Memory \u00B7 Stroke \u00B7 Respite & more' },
      { value: '9+', label: 'Residents currently served', source: 'Small home — intentionally personal' },
      { value: '24/7', label: 'Caregiver coverage every day', source: 'No staffing gaps' },
    ],
  },

  trustSignals: [
    { icon: '\uD83C\uDFDB\uFE0F', label: 'State Licensed', sub: 'Washington DSHS Certified' },
    { icon: '\uD83D\uDCC5', label: '10+ Years', sub: 'Serving Families' },
    { icon: '\u2705', label: 'UA Benefits', sub: 'Accepted' },
    { icon: '\uD83D\uDD50', label: '24/7 Coverage', sub: 'Around-the-Clock Care' },
    { icon: '\uD83E\uDD1D', label: 'Hospice Ready', sub: 'Coordination Available' },
    { icon: '\uD83D\uDCCB', label: 'Trained Staff', sub: "Alzheimer's & Dementia Certified" },
  ],

  specialties: [
    { icon: '\uD83E\uDDE0', title: "Alzheimer's & Dementia Care", description: 'Our caregivers are certified in dementia care techniques. We use structured routines, familiar environments, and calming approaches specifically proven to help residents with memory conditions.', tags: ['Memory Care', 'WA Licensed', 'Certified Staff'] },
    { icon: '\uD83E\uDEC0', title: 'Post-Stroke Recovery', description: 'We support stroke survivors with daily movement assistance, medication management, monitoring for complications, and coordination with therapy and medical providers.', tags: ['Medication Management', 'Mobility Support', 'Monitoring'] },
    { icon: '\uD83E\uDD32', title: 'Personal Daily Care', description: "Bathing, grooming, dressing, and hygiene assistance delivered with dignity and respect. We adapt to each resident's preferences and routines.", tags: ['Personal Care', 'Hygiene', 'Dignity First'] },
    { icon: '\uD83D\uDC8A', title: 'Medication Oversight', description: 'Timely administration, accurate dosing, and monitoring for side effects or interactions. We maintain detailed medication logs and communicate with prescribers.', tags: ['On-Schedule', 'Logged', 'Provider Coordination'] },
    { icon: '\uD83C\uDFE0', title: 'Respite for Family Caregivers', description: 'Short-term or scheduled relief for family caregivers who need a break. Your loved one receives the same consistent, attentive care whether it is for a weekend or a month.', tags: ['Short-Term OK', 'Flexible Schedule', 'Family Support'] },
    { icon: '\uD83D\uDD4A\uFE0F', title: 'Hospice Coordination', description: 'We work alongside hospice providers to ensure residents receive compassionate end-of-life care in a peaceful, home-like environment surrounded by familiarity.', tags: ['Hospice Partner', 'Comfort-Focused', 'Family Included'] },
  ],

  testimonials: [
    { id: '1', quote: 'The staff treat my mother like she is part of their own family. I have peace of mind knowing she is in such loving hands.', authorName: 'Maria T.', relationship: 'Daughter of resident', rating: 5 },
    { id: '2', quote: "Finding a memory care facility that truly understands Alzheimer's care was so important to us. They exceeded all our expectations.", authorName: 'Robert K.', relationship: 'Son of resident', rating: 5 },
    { id: '3', quote: 'The transition from the hospital was seamless. Their team is professional, compassionate, and always available to answer questions.', authorName: 'Angela S.', relationship: 'Referred by hospital social worker', rating: 5 },
  ],

  faqs: [
    { id: '1', question: 'What types of residents do you serve?', answer: "Adults requiring memory care, including those with Alzheimer's, dementia, and related conditions. We also serve residents needing post-stroke and transitional care.", order: 1 },
    { id: '2', question: 'Do you accept UA (Uniform Assessment) Benefits?', answer: 'Yes, we proudly accept UA Benefits to help make quality memory care accessible to more families in Washington State.', order: 2 },
    { id: '3', question: 'Is hospice care available?', answer: 'Yes. We coordinate with hospice providers to ensure residents receive compassionate end-of-life care in a familiar, home-like setting.', order: 3 },
    { id: '4', question: 'Are utilities included in the cost?', answer: 'Yes, all standard home utilities are included in the base price. Personal cell phone plans are paid for by the resident or their family.', order: 4 },
    { id: '5', question: 'How do I get started?', answer: "The best first step is to call us or fill out our contact form. We'll schedule a free consultation to learn more about your loved one's needs.", order: 5 },
  ],

  goodFit: {
    heading: 'Is This the Right Home?',
    subheading: 'We want every family to feel confident before reaching out. Here is who we serve well — and when another option might be a better fit.',
    fits: [
      "Adults with Alzheimer's or other forms of dementia",
      'Seniors who need memory care in a home-like setting',
      'Post-stroke recovery with medication management needs',
      'Residents who benefit from UA (Uniform Assessment) Benefits',
      'Families seeking hospice-coordinated care',
      'Adults needing help with daily activities while maintaining dignity',
      'Families wanting a small, personal setting (not a large facility)',
      'Residents needing respite care or short-term placement',
    ],
    notFits: [
      'Residents requiring acute hospital-level medical intervention',
      'Individuals who need constant IV or ventilator management',
      'Those requiring locked behavioral health units',
    ],
  },

  localInfo: {
    heading: 'Local, Licensed, and Part of the Community',
    description: 'We are a small, certified Adult Family Home serving families across the area. We are not a corporate chain. Every resident is known by name.',
    nearbyText: 'Our home is close to major medical centers — so coordinating with your loved one\'s medical team is straightforward.',
  },

  theme: {
    palette: {
      primary: '#12355b',
      secondary: '#325f74',
      accent: '#d5a65a',
      background: '#fcf7f1',
      text: '#1f2937',
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Manrope',
    },
    styleTags: ['warm', 'editorial', 'conversion-focused', 'hospitality'],
    templateName: 'AFH Signature',
  },

  gallery: {
    heading: 'Inside Our Home',
    slots: [
      {
        id: 'hero-caregiver',
        label: 'Welcome moment',
        description: 'A warm, reassuring photo of care and connection that sets the tone immediately.',
        purpose: 'Immediate trust',
        imageUrl: null,
        alt: 'Caregiver welcoming a resident',
        priority: 'high',
      },
      {
        id: 'home-exterior',
        label: 'Home exterior',
        description: 'The residence and entry experience so families can picture arrival.',
        purpose: 'Physical context',
        imageUrl: null,
        alt: 'Exterior of the adult family home',
        priority: 'high',
      },
      {
        id: 'living-space',
        label: 'Common area',
        description: 'The main shared space where residents spend time together.',
        purpose: 'Home feel',
        imageUrl: null,
        alt: 'Common living area',
        priority: 'high',
      },
      {
        id: 'caregiver-team',
        label: 'Caregiver portrait',
        description: 'A genuine portrait that shows the human side of care.',
        purpose: 'Human connection',
        imageUrl: null,
        alt: 'Caregiver portrait',
        priority: 'high',
      },
      {
        id: 'bedroom',
        label: 'Resident bedroom',
        description: 'A clean, personalizable room that communicates dignity and calm.',
        purpose: 'Comfort and privacy',
        imageUrl: null,
        alt: 'Resident bedroom',
        priority: 'medium',
      },
      {
        id: 'daily-life',
        label: 'Daily life',
        description: 'Dining, activity, or outdoor moments that make the home feel lived in and warm.',
        purpose: 'Routine and warmth',
        imageUrl: null,
        alt: 'Daily life in the home',
        priority: 'medium',
      },
    ],
  },

  imagery: {
    logoUrl: null,
    heroBackgroundUrl: null,
    peoplePhotography: [
      {
        id: 'caregiver-welcome',
        label: 'Caregiver welcome portrait',
        imageUrl: null,
        alt: 'Caregiver welcoming a family',
        usage: 'Hero and top-of-page trust signal',
      },
      {
        id: 'resident-connection',
        label: 'Resident and caregiver moment',
        imageUrl: null,
        alt: 'Resident and caregiver connection',
        usage: 'Proof of warmth and lived experience',
      },
      {
        id: 'family-tour',
        label: 'Family tour conversation',
        imageUrl: null,
        alt: 'Family tour consultation',
        usage: 'Consultation and conversion sections',
      },
    ],
  },

  trustChecklist: [
    'State licensed — Washington DSHS certified',
    'UA Benefits accepted',
    'Hospice coordination available',
    'All utilities included in base price',
    '24/7 caregiver coverage',
    'Small home — your loved one is known by name',
  ],

  footer: {
    columns: [
      {
        heading: 'Services',
        links: [
          { label: 'Personal Care', href: '/services' },
          { label: 'Companionship Care', href: '/services' },
          { label: 'Respite Care', href: '/services' },
          { label: 'Light Housekeeping', href: '/services' },
          { label: 'Transitional Care', href: '/services' },
          { label: 'Post Stroke Care', href: '/services' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Contact Us', href: '/contact' },
        ],
      },
    ],
  },

  pages: {
    home: {
      title: '',
      description: '',
    },
    about: {
      title: 'About Us',
      heading: 'A Safe, Loving Home for Your Family Member',
      subheading: 'A small, licensed adult family home — where residents are known by name and care is personal.',
      bodyHeading: 'About Us',
      stats: [
        { value: '10+', label: 'Years in Operation' },
        { value: '6', label: 'Care Programs' },
        { value: '24/7', label: 'Caregiver Coverage' },
        { value: 'DSHS', label: 'State Licensed' },
      ],
    },
    services: {
      title: 'Home Care Services',
      heading: 'What We Provide',
      subheading: 'Six care programs — each built around your loved one\'s specific needs.',
    },
    contact: {
      title: 'Contact Us',
      heading: 'Talk to Us — No Commitment Required',
      subheading: 'Whether you have a question or you are ready to start the conversation, we are here.',
    },
  },

  seo: {
    keywords: [
      'adult family home',
      'memory care',
      'senior care',
      'respite care',
    ],
  },

  steps: [
    { number: '1', title: 'You reach out', description: 'Call us or submit the form above. There is no commitment required.', time: 'Right now' },
    { number: '2', title: 'We call you back', description: 'A member of our care team will call you within 2 hours to listen and answer questions.', time: 'Within 2 hours' },
    { number: '3', title: 'Free care consultation', description: "We talk through your loved one's specific needs, preferences, and situation — no pressure.", time: 'Within a few days' },
    { number: '4', title: 'Tour our home', description: 'Visit in person. Meet the caregivers. See the bedrooms, common areas, and outdoor space.', time: 'At your convenience' },
    { number: '5', title: 'Move-in planning', description: "If it feels right, we guide you through every step — paperwork, transition support, and settling in.", time: "When you're ready" },
  ],
}
