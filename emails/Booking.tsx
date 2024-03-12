import {
  Container,
  Head,
  Heading,
  Html,
  Img,
  Tailwind,
  Text,
} from '@react-email/components'

import Font from '~/components/common/Font'

interface BookingEmailProps {
  artist?: string
  date?: Date
  eventInfo?: string
  name?: string
  email?: string
  phone?: string
  currentTime?: Date
  mediaLink?: string
}

// TODO: Update src url for images, font
export const BookingEmail = ({
  artist,
  date,
  eventInfo,
  name,
  email,
  phone,
  currentTime,
  mediaLink,
}: BookingEmailProps) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.getMonth()
  const year = dateObj.getFullYear()

  const currentTimeObj = new Date(currentTime)

  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Unbounded"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://versusartist.com/fonts/Unbounded-Regular.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <style>
          {`a {
            color: #fff !important;
            text-decoration: none;
          }
            html, body {
              background-color: #050505;
            }
          `}
        </style>
      </Head>
      <Tailwind>
        <Container className="bg-[#050505] max-w-[768px] w-full px-[6vw] pt-10 pb-[60px]">
          <Img
            src="https://versusartist.com/versus-logo-text-white.png"
            alt="Versus Logo"
            className="w-[150px] block mx-auto mb-10"
          />
          <Heading
            as="h1"
            className="text-center text-white text-[46px] clamp leading-[1] mb-0"
          >
            BOOKING <br />
          </Heading>
          <Heading
            as="h1"
            className="uppercase text-center text-white text-[38px] leading-[1] mt-0"
          >
            {artist}
          </Heading>
          <Text className="text-[12px] text-white mb-1">Data</Text>
          <Text className="text-[12px] text-white mt-0">
            {date ? `${day} ${month + 1} ${year}` : 'Data nu a fost selectata'}
          </Text>

          <Text className="text-[12px] text-white mb-1 mt-6">
            Info Eveniment
          </Text>
          <Text className="text-[14px] text-white mt-0">{eventInfo}</Text>

          <Text className="text-[12px] text-white mb-1 mt-6">
            Nume de contact
          </Text>
          <Text className="text-[14px] text-white mt-0">{name}</Text>

          <Text className="text-[12px] text-white mb-1 mt-6">Email</Text>
          <Text className="text-[14px] !text-white mt-0">
            {email?.toString()}
          </Text>

          <Text className="text-[12px] text-white mb-1 mt-6">
            Numar de telefon
          </Text>
          <Text className="text-[14px] text-white mt-0">+373{phone}</Text>

          {mediaLink && (
            <>
              <Text className="text-[12px] text-white mb-1 mt-6">
                Link Media
              </Text>
              <Text className="text-[14px] text-white mt-0">{mediaLink}</Text>
            </>
          )}

          <Text className="mt-16 text-[12px] text-center text-[#E0E4EA] mb-1">
            Acest email a fost expediat la data
          </Text>
          <Text className="text-center text-[12px ] text-white mt-0">
            {currentTimeObj?.toLocaleString('en-GB')}
          </Text>
        </Container>
      </Tailwind>
    </Html>
  )
}

export default BookingEmail
