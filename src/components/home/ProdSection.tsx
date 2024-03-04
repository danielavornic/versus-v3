import { Autoplay, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { urlForImage } from '~/lib/sanity.image'
import { ProductionWork } from '~/lib/sanity.queries'

import ProducerCard from './ProducerCard'

const ProdWork = ({ work }: { work: ProductionWork }) => {
  return (
    <div className="flex mb-[56px] 1.5xl:mb-[36px] flex-col 1.5xl:flex-row 1.5xl:items-center 1.5xl:justify-end items-end text-alm-white text-right 1.5xl:space-x-[50px]">
      <a href={work.link} target="_blank" rel="noreferrer">
        <h4 className="text-[24px] lg:text-[26px] font-medium hover:text-white">
          {work.artists}
        </h4>
        <p className="text-[24px] lg:text-[26px] hover:text-white">
          {work.name}
        </p>
      </a>

      <a
        href={work.link}
        target="_blank"
        rel="noreferrer"
        className="w-full lg:w-fit inline-block"
      >
        <div
          className="w-full h-[220px] lg:w-[400px] xl:w-[460px] xl:h-[309px] bg-cover bg-center bg-no-repeat mt-[56px] lg:mt-[32px] 1.5xl:mt-0"
          style={{
            backgroundImage: `url(${urlForImage(work.image)?.url()})`,
          }}
        />
      </a>
    </div>
  )
}

const ProdSection = ({
  productionWorks,
}: {
  productionWorks: ProductionWork[]
}) => {
  const slides = [...productionWorks, ...productionWorks]
  return (
    <section
      id="production"
      className="bg-black text-white pb-[220px] lg:pt-[100px] xl:pt-0 lg:pb-[140px] xl:pb-[56px]"
    >
      <div className="container">
        <h2 className="title mobile-title uppercase mb-[56px] lg:mb-[70px] lg:text-[60px] lg:font-medium lg:leading-[1.1] 1.5xl:text-[93px]">
          prod<span className="hidden lg:inline-block">uction</span>
          <br className="hidden lg:block" />& MIX/MASTERING
        </h2>
        <p className="mobile-text revealing-words max-w-[750px] 2xl:max-w-[650px] text-alm-white lg:text-[20px] lg:mb-[80px] 1.5xl:max-w-[746px]">
          Te putem ajuta să faci muzica ta: PRODUCȚIE-SONGWRITING-REC-MIX-MASTER
          - le putem pe toate.
          <br />
          <br />
          Tu vii cu piesa, noi cu tehnica și oamenii.
        </p>

        <div className="flex flex-col mt-[70px] md:flex-row justify-between lg:mt-[120px] xl:space-x-[42px] items-center">
          <div className="space-y-4 lg:space-y-5 2xl:space-y-[25px]">
            <ProducerCard
              name="Tensso"
              image="/images/tensso.png"
              role="Production & Mix/MASTERING"
            />
            <ProducerCard
              name="Nemax"
              image="/images/nemax.png"
              role="Production"
            />
          </div>

          <Swiper
            direction={'vertical'}
            slidesPerView={4}
            scrollbar={true}
            mousewheel={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Mousewheel]}
            className="mt-[220px] hidden md:block md:mt-[100px] lg:mt-0 md:max-h-[900px] lg:max-h-[1080px] xl:max-h-[1400px] lg:ml-auto lg:mr-0 cursor-grab focus:cursor-grabbing 2xl:max-h-[1500px]"
          >
            {slides?.map((work: ProductionWork, index: number) => (
              <SwiperSlide key={index}>
                <ProdWork work={work} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="md:hidden mt-[100px]">
            {productionWorks?.map((work: ProductionWork, index: number) => (
              <SwiperSlide key={index}>
                <ProdWork work={work} />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdSection
