import type { GlobalConfig } from 'payload'

export const FooterSettings: GlobalConfig = {
  slug: 'footer-settings',
  label: 'Footer Settings',
  admin: {
    group: 'Global',
  },
  fields: [
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      admin: {
        description: 'Leave empty to auto-generate with current year',
      },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Link Columns',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'showAddress',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showPhone',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showEmail',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
