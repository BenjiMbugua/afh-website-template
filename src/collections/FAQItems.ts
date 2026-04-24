import type { CollectionConfig } from 'payload'

export const FAQItems: CollectionConfig = {
  slug: 'faq-items',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      label: 'Category (optional)',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 99,
      label: 'Display Order',
    },
  ],
}
