import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Global',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Jace Care Adult Family Home',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Compassionate Memory Care in Lakewood, WA',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '(253) 317-4024',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'jacecareprovider@gmail.com',
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          type: 'text',
          defaultValue: '5750 100th Ave SW',
        },
        {
          name: 'city',
          type: 'text',
          defaultValue: 'Lakewood',
        },
        {
          name: 'state',
          type: 'text',
          defaultValue: 'WA',
        },
        {
          name: 'zip',
          type: 'text',
          defaultValue: '98499',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
