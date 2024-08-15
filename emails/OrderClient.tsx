import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Tailwind,
  Text,
} from '@react-email/components'

import Font from '~/components/common/Font'
import { urlForImage } from '~/lib/sanity.image'
import { CartState } from '~/store/cartSlice'

interface OrderClientEmailProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  cart?: CartState
  currentTime?: Date
}

const year = new Date().getFullYear()
// TODO: Update src url for images, font
export const OrderClientEmail = (props: OrderClientEmailProps) => {
  const { firstName, lastName, email, phone, cart } = props

  return (
    // <Html lang="en">
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
      <Body>
        <Container className="bg-[#E0E4EA] text-[#050505] max-w-[900px] w-full px-[3vw] pt-10 pb-[60px]">
          <Img
            src="https://versusartist.com/versus-logo-text-black.png"
            alt="Versus Logo"
            className="w-[150px] block mx-auto mb-10"
          />
          <Heading
            as="h1"
            className="text-center text-[64px] clamp leading-[1] mb-4"
          >
            THANK <br /> YOU
          </Heading>
          <Text className="text-sm text-center max-w-[350px] mx-auto mb-20">
            Te vom contacta pentru ați transmite informații despre când poți să
            vii să îți ridici comanda.
          </Text>

          <div className="bg-[#FAFAFA] p-6 mx-[4vw]">
            <h2 className="text-[25px] md:text-[43px] font-semibold mb-10 leading-[1]">
              Detalii comandă
            </h2>
            <div>
              {cart?.items.map(({ product, size, quantity }: any, index) => (
                <div
                  className="space-x-6 flex items-start mb-10 transition-all duration-500"
                  key={index}
                >
                  <a
                    href={`https://versusartist.com/shop/${product.artist?.toLowerCase()}/${
                      product.slug.current
                    }`}
                    target="_blank"
                    className="product-img bg-white align-middle w-[140px] h-[140px] p-3 block md:h-[200px] md:w-[200px]"
                  >
                    <img
                      src={urlForImage(product.mainImage).url()}
                      alt={product.title}
                      className=" align-middle object-contain w-auto h-full block"
                    />
                  </a>

                  <div className="ml-6 max-w-[100px] md:max-w-none product-text">
                    <Link
                      href={`https://versusartist.com/shop/${product.artist?.toLowerCase()}/${
                        product.slug.current
                      }`}
                      target="_blank"
                      className="text-[#050505]"
                    >
                      <span className="text-[9px] font-bold uppercase mb-[8px] ">
                        {product.category}
                      </span>
                      <h4 className="text-[11px] font-bold uppercase mb-[20px]">
                        {product.title}
                      </h4>
                    </Link>
                    {product.category !== 'Album CD' &&
                      product.category !== 'Carnet' && (
                        <>
                          <span className="text-[9px] font-bold mb-[10px] block">
                            Mărimea
                          </span>
                          <div className="m-0 w-[30px] text-[12px] text-center font-semibold h-[30px] uppercase border border-solid border-[#E0E4EA]">
                            <span className="align-middle block mt-[8px]">
                              {size}
                            </span>
                          </div>
                        </>
                      )}
                    <span className="text-[9px] font-bold mt-[16px] mb-[10px] block">
                      Cantitatea
                    </span>
                    <div className="w-[30px] m-0 text-[12px] text-center font-semibold h-[30px] uppercase border border-solid border-[#E0E4EA]">
                      <span className="align-middle block mt-[8px]">
                        {quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[25px] md:text-[43px] font-semibold mb-10 leading-[1] mt-10">
              Detalii personale
            </h2>
            <div className="px-3">
              <Text className="text-xs mb-8">{firstName}</Text>
              <Text className="text-xs mb-8">{lastName}</Text>
              <Text className="text-xs mb-8 text-[#050505] text-decoration-none">
                {email}
              </Text>
              <Text className="text-xs">
                +373
                <span className="mx-[10px] inline-block h-[20px] align-middle w-[1px] bg-[#E0E4EA]" />
                {phone}
              </Text>
            </div>

            <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 leading-[25px] mt-10">
              Livrarea comenzii prin
            </h3>
            <Text className="text-[10px]">
              Ridicare pe adresa Șos. Hîncești nr.61, Chișinău
            </Text>
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 leading-[1] mt-10">
              Metoda de plată
            </h3>
            <Text className="text-[10px]">Cash/Card la ridicare</Text>
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-6 leading-[1] mt-10">
              Total comandă
            </h3>
            <Text className="text-[20px] md:text-[24px]">
              {cart.total}.0 MDL
            </Text>
          </div>

          <div className="footer block mx-auto mt-[120px] md:text-center">
            <Text className="text-[10px] text-center copy leading-[1] mb-[36px] align-middle">
              © {year} VERSUSARTIST All Rights Reserved.
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
      </Body>
    </Tailwind>
    // </Html>
  )
}

export default OrderClientEmail
