import { NextApiRequest, NextApiResponse } from 'next'

// mock the database
const bookings = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // check if the request method is POST
  if (req.method === 'POST') {
    // get the data from the request body
    const data = req.body

    // add the data to the mock database
    bookings.push(data)

    // send the data back to the client
    res.status(200).json(data)
  } else {
    // if the request method is not POST
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
