import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type InquiryPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  guests?: string
  occasion?: string
  message?: string
  from?: string
  to?: string
  days?: string[] | { toString: () => string }[]
  subtotal?: number
  taxes?: number
  total?: number
  pricePerDay?: number
}

function getEnv(name: string) {
  return process.env[name]
}

async function getTransport() {
  const host = getEnv('SMTP_HOST')
  const port = getEnv('SMTP_PORT')
  const user = getEnv('SMTP_USER')
  const pass = getEnv('SMTP_PASS')
  if (host && port && user && pass) {
    return nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    })
  }
  const test = await nodemailer.createTestAccount()
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: test.user, pass: test.pass },
  })
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as InquiryPayload

    const ownerEmail = getEnv('INQUIRY_TO_EMAIL') || 'kennedydjeumi9@gmail.com'
    const fromEmail = getEnv('SMTP_FROM') || 'no-reply@kwamou.example'

    const transport = await getTransport()

    const days = Array.isArray(data.days)
      ? (data.days as any[]).map((d) => d.toString())
      : []

    const subject = `New inquiry: ${data.firstName || ''} ${data.lastName || ''} (${data.from || 'dates'} - ${data.to || ''})`

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 8px 0">Booking inquiry</h2>
        <p><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
        <p><strong>Email:</strong> ${data.email || ''}</p>
        <p><strong>Phone:</strong> ${data.phone || ''}</p>
        <p><strong>Guests:</strong> ${data.guests || ''}</p>
        <p><strong>Occasion:</strong> ${data.occasion || ''}</p>
        <p><strong>Dates:</strong> ${data.from || ''} - ${data.to || ''}</p>
        <h3 style="margin:16px 0 8px 0">Receipt</h3>
        <p>$${(data.pricePerDay ?? 100).toFixed(2)} per day</p>
        <ul>
          ${days.map((d) => `<li>${d} — $${(data.pricePerDay ?? 100).toFixed(2)}</li>`).join('')}
        </ul>
        <p><strong>Subtotal:</strong> $${(data.subtotal ?? 0).toFixed(2)}<br/>
        <strong>Taxes & fees:</strong> $${(data.taxes ?? 0).toFixed(2)}<br/>
        <strong>Total:</strong> $${(data.total ?? 0).toFixed(2)}</p>
        <h3 style="margin:16px 0 8px 0">Message</h3>
        <p>${(data.message || '').replace(/\n/g, '<br/>')}</p>
      </div>
    `

    const info = await transport.sendMail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: data.email || undefined,
      subject,
      html,
    })

    const previewUrl = nodemailer.getTestMessageUrl(info) || undefined
    return NextResponse.json({ ok: true, previewUrl })
  } catch (err: any) {
    console.error('Inquiry error', err)
    return NextResponse.json({ ok: false, error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
