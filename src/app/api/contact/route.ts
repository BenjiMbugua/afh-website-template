import { NextRequest, NextResponse } from 'next/server'
import { siteContent } from '@/lib/siteContent'

interface ContactPayload {
  name: string
  phone: string
  email: string
  message?: string
  referral?: string
}

export async function POST(req: NextRequest) {
  let body: ContactPayload

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, phone, email, message, referral } = body

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name, phone, and email are required' }, { status: 400 })
  }

  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
  const siteDomain = new URL(siteContent.business.siteUrl).hostname

  console.log('[Contact Form Submission]', {
    name, phone, email, message, referral, submittedAt,
  })

  const smtpHost = process.env.SMTP_HOST
  if (smtpHost) {
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const toEmail = process.env.CONTACT_EMAIL ?? siteContent.business.email

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: toEmail,
        subject: `New Consultation Request from ${name}`,
        text: [
          `New consultation request received via ${siteDomain}`,
          ``,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `How they heard about us: ${referral ?? 'Not specified'}`,
          `Message: ${message ?? '(none)'}`,
          ``,
          `Submitted at: ${submittedAt} (Pacific Time)`,
        ].join('\n'),
        html: `
          <h2 style="color:#000763;">New Consultation Request</h2>
          <p>Received via <strong>${siteDomain}</strong></p>
          <table cellpadding="8" style="border-collapse:collapse;">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Phone</strong></td><td><a href="tel:${phone.replace(/\D/g, '')}">${phone}</a></td></tr>
            <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td><strong>Referral</strong></td><td>${referral ?? 'Not specified'}</td></tr>
            <tr><td><strong>Message</strong></td><td>${message ?? '(none)'}</td></tr>
            <tr><td><strong>Submitted</strong></td><td>${submittedAt} (PT)</td></tr>
          </table>
        `,
      })
    } catch (err) {
      console.error('[Contact Form] Email send failed:', err)
    }
  }

  return NextResponse.json({ success: true, message: 'Thank you for your inquiry.' })
}
