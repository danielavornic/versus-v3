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
export const BookingEmailClient = ({
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

  const year2 = new Date().getFullYear()

  return (
    <Html lang="en">
      <Tailwind>
        <Head>
          <Font
            fontFamily="Unbounded"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://versusartist.com/fonts/Unbounded-Regular.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <style>
            {`a {
            color: inherit !important;
            text-decoration: !important none;
          }
            html, body {
              background-color: #050505;
              font-family: 'Unbounded', sans-serif;
            }


            .product-prop {
              vertical-align: middle !important;
            }

            @media (min-width: 768px) {
              .copy {
                margin-top: 0 !important;
              }

              .product-img {
                width: 200px !important;
                height: 200px !important;
              }

              .product-text {
                max-width: none !important;
              }
            }
          `}
          </style>
        </Head>
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
            className="uppercase text-center text-white text-[38px] leading-[1] my-0"
          >
            {artist}
          </Heading>
          <Heading
            as="h1"
            className="text-center text-white text-[46px] clamp leading-[1] mt-0"
          >
            SENT <br />
          </Heading>
          <Text className="text-sm text-center text-white max-w-[450px] mx-auto mb-10">
            Mesajul tău a fost trimis cu succes. <br />
            Vei fi contactat in cel mai scurt timp posibil pentru a confirma
            solicitarea. <br />
            Mai jos sunt detaliile transmise.
          </Text>
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
        </Container>
        <Container className="bg-[#E0E4EA] max-w-[768px] w-full">
          <div className="footer block mx-auto md:text-center bg-[#E0E4EA] py-10">
            <Text className="text-[10px] text-center copy text-[#050505] leading-[1] mb-[36px] align-middle">
              © {year2} VERSUSARTIST All Rights Reserved.
            </Text>

            <div className="socials align-middle mx-auto block text-center md:mx-0">
              <a
                href="https://www.instagram.com/versusartist/"
                className="w-[16px] h-[14px] align-middle opacity-50 hover:opacity-100 transition-full"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://versusartist.com/images/email/insta.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/VersusArtistsLabel"
                className="w-[10px] h-[16px] align-middle mx-[18px] opacity-50 hover:opacity-100 transition-full"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://versusartist.com/images/email/fb.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.youtube.com/@versusartist"
                className="w-[17px] h-[12px] align-middle mr-[18px] opacity-50 hover:opacity-100 transition-full"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://versusartist.com/images/email/youtube.png"
                  alt="Youtube"
                />
              </a>
              <a
                href="https://www.tiktok.com/@versusartist_musiclabel"
                className="w-[14px] h-[16px] align-middle opacity-50 hover:opacity-100 transition-full"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://versusartist.com/images/email/tiktok.png"
                  alt="TikTok"
                />
              </a>
            </div>

            <div className="text-center mt-[36px]">
              <a
                href="https://brmg.md"
                target="_blank"
                rel="noreferrer"
                className="brmg text-center font-thin text-[10px] leading-[12px] align-middle text-[#050505] !text-decoration-none"
              >
                part of BRMG
              </a>
            </div>
          </div>
        </Container>
      </Tailwind>
    </Html>
  )
}

export default BookingEmailClient
