import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    group: 'Global',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Menu Items',
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
        {
          name: 'isButton',
          type: 'checkbox',
          label: 'Show as button',
          defaultValue: false,
        },
      ],
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact Us', href: '/contact', isButton: true },
      ],
    },
  ],
}
