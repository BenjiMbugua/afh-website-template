'use client'

import { useState } from 'react'
import Link from 'next/link'
import { isSecuritySite } from '@/lib/siteKind'
import type { NavItem } from '@/lib/payload/types'

interface NavigationProps {
  items: NavItem[]
  phone?: string
}

export function Navigation({ items, phone }: NavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {items.map((item) =>
          item.isButton ? null : (
            <Link
              key={item.href}
              href={item.href}
              className={
                isSecuritySite
                  ? 'px-4 py-2 text-sm font-medium text-white/76 hover:text-white transition-colors'
                  : 'px-4 py-2 text-sm font-medium text-navy hover:text-primary transition-colors'
              }
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        className={isSecuritySite ? 'md:hidden p-2 text-white' : 'md:hidden p-2 text-navy'}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-72 bg-white h-full shadow-xl flex flex-col p-6">
            <button
              className="self-end p-2 text-navy mb-4"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.isButton
                      ? 'mt-4 btn-primary text-center'
                      : 'px-2 py-3 text-navy font-medium border-b border-gray-100 hover:text-primary transition-colors'
                  }
                >
                  {item.label}
                </Link>
              ))}
              {phone && (
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="mt-2 text-sm text-neutral flex items-center gap-2 px-2 py-2"
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phone}
                </a>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
