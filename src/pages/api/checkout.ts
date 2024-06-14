import OrderClientEmail from 'emails/OrderClient'
import OrderNew from 'emails/OrderNew'
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

    const { data: dataNewOrder, error: error2 } = await resend.emails.send({
      from: 'Versus Artist <shop@versusartist.com>',
      to: process.env.ORDER_EMAIL_RECIPIENT,
      subject: 'Versus New Order',
      react: OrderNew(emailData),
    })

    if (error2) {
      return res.status(400).json(error2)
    }

    const { data: dataClient, error } = await resend.emails.send({
      from: 'Versus Artist <shop@versusartist.com>',
      to: emailData.email,
      subject: 'Versus Artist Merch',
      react: OrderClientEmail(emailData),
    })

    if (error) {
      return res.status(400).json(error)
    }

    const formattedRow = {
      Timestamp: new Date().toLocaleString(),
      Name: emailData.lastName,
      Surname: emailData.firstName,
      Phone: emailData.phone,
      Email: emailData.email,
      Items: emailData.cart.items
        .map(
          (item) =>
            `${item.product.title} (${item.size?.toUpperCase()}) x ${
              item.quantity
            }`,
        )
        .join('\n'),
      Total: emailData.cart.total,
    }

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow(formattedRow)

    res.status(200).json({ message: 'Order sent successfully' })

    res.status(200).json({ dataClient, dataNewOrder })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
