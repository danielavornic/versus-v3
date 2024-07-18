import { render } from '@react-email/components'
import OrderClientEmail from 'emails/OrderClient'
import OrderNew from 'emails/OrderNew'
import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const GOOGLE_SERVICE_ACCOUNT_EMAIL =
  'versus-merch@vesus-artist.iam.gserviceaccount.com'
const GOOGLE_SERVICE_PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMAb2VIs/kjLjq\nMnULq5FrWCQ8KyMUxn3GUnqZmwmDNCJ2yrReh0WZBqctBoQjbYXD222PAHuouvUc\n1UBGd4m0Gnck9AMGzwpCRCI4zOLwyBac+nmEk44RQ0YPRJqVPIpLutKVaKjs7Pit\neV/pXOsfcT70mcQ7qL+OlUtaKalN4OBVUFxgk8DDEp4rgj2nz8Bpftw2CKEybnWB\nrnQD5fzlTugcO2RRYzMGwrzQzzDc8OggoMU6vlPPJvnCcBIKMCMJVCe5YtlDFEBg\nL5XzJFAvGtyVR/oRZEhtB57W7X8jL9owqVW2wmBieLKF4J7i+Gj7JTxcAhJyLYmX\nG/5v7eNrAgMBAAECggEAAhfia7WxVXxpXhzTy87kNCTo/L8qqWNuuyIXyW62YSkr\ne7VRUM7MoMLRwoK1yFyP8QNye/T3DwV/sQg+i3/ErRFNV8+i/Okz94blmJwlsQNf\ng+wdsCgBJXXt1WYy8wqHvUIDqT3itUoUMPMPkiUK3RDy5V9hCfeJLYXkGp78b29H\nlZlKmpNOQ5WSEP2Gcx3HeDn9FN+vhfTpnTDRVjOQCnFlmrZIUNmVOLzqwsbFW0Ii\n+bviO6qrnmFxaqbz5rsHBGs58+bhcwd5e3gDm4MEYV2jHE5Iak1wGierdU6sdVV3\nFijvk1OHVwGegz0QXD4jhK/AvkcCZoG29o9uhIlkOQKBgQDFUbB1ZcPxlRAZix7p\nLZo92y0LZ5KqTRQOIvlR9eDiGOMPBKixfuqnr7gkgWhExUw4rrKkTRlqxHUqSxIp\nm63ReTp0OHj6uuuIkvlPpFL/AXueb1TqrYhtYHpO5wc1bpqR+AJVbgd20+hSEoWk\nPWEplEnaG/CewIt2Elvl7NLbqQKBgQC1pL9Zs9EEadQCK3XYv67O+QQgcHphKERI\n5Evmv7FVAmqlPg5alqPWJ8BKkGdY3YAdnnBmKc1ycOc/UEFyHZ1i1uGpKjMg3yYw\ngOpnCm6W4L1VGwYVfisQ9dLxLH3hH1ZM/2qPSyzZtmluACxhpKITLvHE0H4w2xIW\nO8U81xmS8wKBgGFCDZcgDP/TuHbOsvK+Tot0r/QyHgGhMmRxarCyYCExoSFy629p\nnmH+4+XifzF+ij5aJaWEdyXAJfwtuosVuAxLE7vbZg43+gZ8YzSVS290HKmQOKvf\n0yIObtrbVxtIJBoUw5m2PSmd86IYjRTSSEUFWY2PPgAR6evNysw++gPZAoGAXbxy\n8ruUtY5XVfdPjVb9wtlGg+cHgHPjKSqG8MEjphblKfjoN19dlPpWhSQX8Qf9QUut\n/Uq9Nr2E2Gt2Goml2ofBVCbu05vUfVtJm3sKrtmzWuPjM9w0JUB2Zvbqzu34/ysf\ntmq47nDv31A/lvP6n6OuKD7foB6tKsQVeNwX2nkCgYBEUQCisvbRH8xJDW2VeBMd\naU1EQz82e3z5DQ4fQCJ/E73iMcjQwykWzB7yHVmWDA21rk2TkYZ5B1rg2s2L3YYJ\nWdRrSWVBfGo00q1M5+Ro3Vs+70lXyhbq5aM1+9RapMgrlX3N321L2SHG9dXP7jjq\nk8mXgru3/raODaS3J/KSeA==\n-----END PRIVATE KEY-----\n'
const SPREADSHEET_ID = '15bxFLr44uxPfM2WPmJMsAKbu92ioVQcdRxahM7F6NMw'

const serviceAccountAuth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
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
  try {
    const emailData = JSON.parse(req.body)

    const { data: dataNewOrder, error: error2 } = await resend.emails.send({
      from: 'Versus Artist <shop@versusartist.com>',
      to: [process.env.ORDER_EMAIL_RECIPIENT],
      subject: 'Versus New Order',
      html: render(OrderNew(emailData)),
    })

    if (error2) {
      return res.status(400).json(error2)
    }

    const { data: dataClient, error } = await resend.emails.send({
      from: 'Versus Artist <shop@versusartist.com>',
      to: [emailData.email],
      subject: 'Versus Artist Merch',
      html: render(OrderClientEmail(emailData)),
    })

    if (error) {
      return res.status(400).json(error)
    }

    const formattedRow = {
      Timestamp: new Date().toLocaleString(),
      Name: emailData.firstName,
      Surname: emailData.lastName,
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
  } catch (error) {
    res.status(400).json(error)
  }
}
