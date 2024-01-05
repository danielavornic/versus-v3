import clsx from 'clsx'
import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Release } from '~/lib/sanity.queries'

import ReleaseCard from './ReleaseCard'

const generateLeftClass = (index: number) => {
  if (index === 0) return 'left-0 z-[15]'
  if (index === 1) return 'left-[40px] z-[14]'
  if (index === 2) return 'left-[80px] z-[13]'
  if (index === 3) return 'left-[120px] z-[12]'
  if (index === 4) return 'left-[160px] z-[11]'
  if (index === 5) return 'left-[200px] z-[10]'
  if (index === 6) return 'left-[240px] z-[9]'
  if (index === 7) return 'left-[280px] z-[8]'
  if (index === 8) return 'left-[320px] z-[7]'
  if (index === 9) return 'left-[360px] z-[6]'
  if (index === 10) return 'left-[400px] z-[5]'
  if (index === 11) return 'left-[440px] z-[4]'
  if (index === 12) return 'left-[480px] z-[3]'
  if (index === 13) return 'left-[520px] z-[2]'
  if (index === 14) return 'left-[560px] z-[1]'
  if (index === 15) return 'left-[600px] z-[0]'
}

const ReleasesSection = ({ releases }: { releases: Release[] }) => {
  const lgCDsContainerWidtth = useMemo(() => {
    return 500 + (releases.length - 1) * 40
  }, [releases.length])

  return (
    <section className="bg-black text-white py-[150px] lg:py-[165px] lg:px-[50px] 3xl:py-[250px]">
      <div className="flex flex-col 3xl:flex-row 3xl:justify-between 3xl:items-center 3xl:space-y-0 space-y-[80px]">
        <h2 className="title overflow-hidden mobile-title text-center lg:text-left lg:text-[62px] container lg:px-0 lg:w-auto !leading-tight">
          DON&apos;T STAY <br />
          PRESS PLAY <br />
          NEW TUNES <br />
          ON THEIR WAY
        </h2>

        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          className="w-full lg:hidden"
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={24}
        >
          {releases.map((release) => (
            <SwiperSlide key={release._id} className="min-w-[300px]">
              <div className="flex items-center justify-center">
                <ReleaseCard release={release} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="relative h-[500px] lg:flex hidden right-0"
          style={{ width: `${lgCDsContainerWidtth}px` }}
        >
          {releases.map((release, index) => (
            <div
              key={release._id}
              className={clsx(
                'absolute top-0 w-[500px] h-[500px] transition-all ease-out duration-700 hover:z-[20] hover:top-[-130px]',
                generateLeftClass(index),
              )}
            >
              <ReleaseCard release={release} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReleasesSection
