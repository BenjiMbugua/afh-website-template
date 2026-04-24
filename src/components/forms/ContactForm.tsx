'use client'

import { useState } from 'react'

interface ContactFormProps {
  phone: string
  phoneHref: string
}

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  referral: string
}

const INITIAL: FormData = { name: '', phone: '', email: '', message: '', referral: '' }

export function ContactForm({ phone, phoneHref }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function validate() {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
      setErrorMsg(`Something went wrong. Please call us directly at ${phone}.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center gap-4 min-h-[300px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy font-bold text-xl text-center">Thank You!</h3>
        <p className="text-neutral text-center max-w-xs">
          We&apos;ll be in touch within 24 hours. If your need is urgent, please call us at{' '}
          <a href={phoneHref} className="text-primary font-semibold">{phone}</a>.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-navy hover:text-primary transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
      <h3 className="text-navy font-bold text-xl mb-2">Request a Free Consultation</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">
          Your Name <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
          placeholder="Jane Smith"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
          Phone Number <span className="text-primary">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
          placeholder="(253) 555-0100"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="referral" className="block text-sm font-semibold text-navy mb-1">
          How did you hear about us?
        </label>
        <select
          id="referral"
          value={form.referral}
          onChange={(e) => setForm((f) => ({ ...f, referral: e.target.value }))}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="healthcare">Referral from Healthcare Provider</option>
          <option value="family">Family / Friend Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">
          Message / Notes
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
          placeholder="Tell us about your loved one's care needs..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary py-4 text-base disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respond within 24 hours. Your information is never shared.
      </p>
    </form>
  )
}

export default ContactForm
