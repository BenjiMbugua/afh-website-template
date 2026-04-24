import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. personal-care)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Short Description',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Accent Color (hex)',
      defaultValue: '#FF6734',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon name (optional)',
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
