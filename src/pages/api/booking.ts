import SubscribeEmail from 'emails/Subscribe'
import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const emailData = JSON.parse(req.body)

    const { data, error } = await resend.emails.send({
      from: 'Versus Artist <contact@versusartist.com>',
      to: 'contact@versusartist.com',
      subject: 'Versus New Booking',
      react: SubscribeEmail(emailData),
    })

    if (error) {
      return res.status(400).json(error)
    }

    res.status(200).json(data)
  } else {
    // if the request method is not POST
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
