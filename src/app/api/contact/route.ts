import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName, lastName, company, email,
      landline, mobile, productSystem, solution,
      projectDescription
    } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Modsol Website" <${process.env.SMTP_USER}>`,
      to: 'sales@modsol.co.uk',
      replyTo: email,
      subject: `New Enquiry — ${firstName} ${lastName} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
          <div style="border-bottom: 3px solid #C6FF02; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #C6FF02; font-size: 28px; margin: 0;">NEW ENQUIRY</h1>
            <p style="color: #888; margin: 8px 0 0;">Via modsol.co.uk contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${company}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #C6FF02;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Landline</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${landline || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Mobile</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${mobile || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">System</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${productSystem}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Solution</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${solution}</td></tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #111; border-left: 3px solid #C6FF02;">
            <p style="color: #C6FF02; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 12px;">Project Brief</p>
            <p style="margin: 0; line-height: 1.7; color: #ccc;">${projectDescription}</p>
          </div>

          <p style="margin-top: 30px; color: #444; font-size: 12px;">Sent via modsol.co.uk — Reply directly to this email to respond to ${firstName}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
