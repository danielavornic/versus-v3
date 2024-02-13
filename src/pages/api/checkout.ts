import OrderClientEmail from 'emails/OrderClient'
import OrderNew from 'emails/OrderNew'
import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const emailData = JSON.parse(req.body)

    const { data: data2, error: error2 } = await resend.emails.send({
      from: 'Versus Artist <shop@versusartist.com>',
      to: 'contact@versusartist.com',
      subject: 'Versus New Order',
      react: OrderNew(emailData),
    })

    if (error2) {
      return res.status(400).json(error2)
    }

    const { data, error } = await resend.emails.send({
      from: 'Versus Artist <contact@versusartist.com>',
      to: emailData.email,
      subject: 'Versus Artist Merch',
      react: OrderClientEmail(emailData),
    })

    if (error) {
      return res.status(400).json(error)
    }

    res.status(200).json({ data, data2 })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
