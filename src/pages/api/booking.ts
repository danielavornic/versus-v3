import BookingEmail from 'emails/Booking'
import BookingEmailClient from 'emails/BookingClient'
import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SPREADSHEET_ID = process.env.SPREADSHEET_ID

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ],
})

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const emailData = JSON.parse(req.body)

    const { data: dataNewBooking, error: error2 } = await resend.emails.send({
      from: 'Versus Artist <versus@brmg.md>',
      to: process.env.ORDER_EMAIL_RECIPIENT,
      subject: 'Versus New Booking',
      react: BookingEmail(emailData),
    })

    if (error2) {
      return res.status(400).json(error2)
    }

    const { data: dataClient, error } = await resend.emails.send({
      from: 'Versus Artist <versus@brmg.md>',
      to: emailData.email,
      subject: 'Versus Artist Booking Confirmation',
      react: BookingEmailClient(emailData),
    })

    if (error) {
      return res.status(400).json(error)
    }

    const formattedRow = {
      Timestamp: new Date().toLocaleString(),
      Artist: emailData.artist,
      ['Event Date']: emailData.date
        ? new Date(emailData.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : 'Not specified',
      ['Event Info']: emailData.eventInfo,
      Name: emailData.name,
      Email: emailData.email,
      Phone: emailData.phone,
      ['Media Link']: emailData.mediaLink || 'Not specified',
    }

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    await sheet.addRow(formattedRow)

    res.status(200).json({ dataClient, dataNewBooking })
  } else {
    // if the request method is not POST
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
