import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from '~/components/layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import { getProductionWorks, ProductionWork } from '~/lib/sanity.queries'

import { SharedPageProps } from './_app'

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    productionWorks: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const productionWorks = await getProductionWorks(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      productionWorks,
    },
  }
}

const BookingPage = ({
  productionWorks,
}: {
  productionWorks: ProductionWork[]
}) => {
  return (
    <Layout hasFooter={false} title="Production & Master">
      <section className="bg-black text-white pt-[42px] lg:pt-0 lg:pb-[70px]">
        <div className="container">
          <div className="max-w-[600px] 1.5xl:max-w-[720px] space-y-[42px]">
            <h1 className="!leading-[1.05] title lg:text-[56px] 1.5xl:text-[64px] 3xl:text-[93px] uppercase font-medium">
              prod & <br /> MASTERING
            </h1>
            <p className="lg:text-lg revealing-line 1.5xl:text-xl">
              Nu este neapărat să fii semnat la Versus Artist pentru a lucra cu
              noi. Oferim servicii contra-cost: PRODUCȚIE - SONGWRITING - REC -
              MIX - MASTER. Avem totul, de la oameni, la tehnică, pentru a aduce
              ideea la stadiul de produs final, gata de publica
            </p>
          </div>

          <div className="mt-[18px] xl:w-[85%] mx-auto 1.5xl:w-[80%] 3xl:w-[95%] mb-[100px] relative cursor-grab">
            <div className="w-full h-[1px] bg-white absolute top-[60%] left-0 transform -translate-y-1/2" />
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              loop={true}
              className="w-full production-swiper"
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1900: {
                  slidesPerView: 5,
                },
              }}
            >
              {productionWorks.map((work, i) => (
                <SwiperSlide
                  key={work._id}
                  className="min-w-[300px] flex flex-col items-start"
                >
                  <div className="space-y-[8px] flex flex-col justify-between items-start">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="name opacity-0 transition-all w-full"
                    >
                      <h3 className="uppercase text-lg xl:text-xl !leading-[1.25] tracking-[1px] underline">
                        {work.name} <br />
                        {work.artists}
                      </h3>
                    </a>
                    <div
                      className="image bg-cover w-[200px] h-[133px] bg-no-repeat relative"
                      style={{
                        backgroundImage: `url(${urlForImage(
                          work.image,
                        )?.url()})`,
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center space-y-[42px] flex flex-col justify-center items-center">
            <Link
              href="#"
              className="mobile-subtitle revealing-line inline-block w-fit uppercase lg:text-[28px] 2xl:text-[36px] !leading-tight 3xl:text-[42px]"
            >
              collaborate WITH <br /> OUR PRODUCERS
            </Link>

            <Link
              href="/#production"
              className="mobile-text underline revealing-line inline-block uppercase text-alm-white lg:text-[20px]"
            >
              Close
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BookingPage
