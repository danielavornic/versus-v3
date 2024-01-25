import { NextApiRequest, NextApiResponse } from 'next'

const mailchimpClient = require('@mailchimp/mailchimp_marketing')

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

const listID = process.env.MAILCHIMP_LIST_ID

const addUserToSubscribersList = async (email_address: string) => {
  await mailchimpClient.lists.addListMember(listID, {
    email_address,
    status: 'subscribed',
    merge_fields: {
      FNAME: email_address.split('@')[0],
      EMAIL: email_address,
      COMPANY: 'Company',
    },
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // check if the request method is POST
  if (req.method === 'POST') {
    const data = JSON.parse(req.body)

    addUserToSubscribersList(data.email)

    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
