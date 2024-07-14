import { useGSAP } from '@gsap/react'
import { useWindowSize } from '@uidotdev/usehooks'
import { gsap } from 'gsap'
import { useRef } from 'react'
import Div100vh from 'react-div-100vh'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Release } from '~/lib/sanity.queries'

import ReleaseCard from './ReleaseCard'

gsap.registerPlugin(useGSAP)

const ReleasesSection = ({ releases }: { releases: Release[] }) => {
  const { width: windowWidth } = useWindowSize()
  const container = useRef<HTMLDivElement>(null)
  const containerMobile = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (windowWidth < 1024 || !container?.current) return

      const containerRect = container.current.getBoundingClientRect()

      function moveMe(target, initialPosition) {
        const newPos = {
          x: Math.max(
            0,
            Math.min(
              gsap.utils.random(
                initialPosition.x - 150,
                initialPosition.x + 150,
              ),
              containerRect.width - target.offsetWidth,
            ),
          ),
          y: Math.max(
            80,
            Math.min(
              gsap.utils.random(
                initialPosition.y - 50,
                initialPosition.y + 100,
              ),
              containerRect.height - 200,
            ),
          ),
        }

        gsap.to(target, {
          x: newPos.x - initialPosition.x,
          y: newPos.y - initialPosition.y,
          duration: gsap.utils.random(2, 4.5),
          ease: 'none',
          onComplete: moveMe,
          onCompleteParams: [target, initialPosition],
        })
      }

      gsap.utils.toArray('.release-desktop').forEach((el: any) => {
        const rect = el.getBoundingClientRect()
        const initialPosition = {
          x: rect.left - containerRect.left,
          y: rect.top - containerRect.top,
        }
        moveMe(el, initialPosition)
      })
    },
    { dependencies: [releases, windowWidth, container], scope: container },
  )

  if (windowWidth < 1024) {
    return (
      <section
        id="releases-mobile"
        ref={containerMobile}
        className="relative lg:hidden text-white lg:pt-[80px] my-[150px] lg:h-screen lg:min-h-screen lg:my-[165px] lg:px-[50px] 3xl:my-[230px]"
      >
        <h2 className="overflow-hidden lg:pt-[80px] mb-[42px] lg:mb-0 mobile-title text-center lg:text-left lg:text-[57px] xl:text-[62px] container lg:px-0 lg:w-auto !leading-tight">
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
          {releases.map((release, index) => (
            <SwiperSlide key={release._id} className="min-w-[300px]">
              <div className="flex items-center justify-center">
                <ReleaseCard release={release} index={index} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }

  return (
    <Div100vh
      id="releases"
      ref={container}
      className="relative hidden lg:block text-white lg:pt-[80px] my-[150px] lg:h-screen lg:min-h-screen lg:my-[165px] lg:px-[50px] 3xl:mt-[230px]"
    >
      <h2 className="overflow-hidden revealing-line lg:inline relative z-10 mb-[42px] lg:mb-0 mobile-title text-center lg:text-left lg:text-[57px] xl:text-[62px] container lg:px-0 lg:w-auto !leading-tight">
        DON&apos;T STAY <br />
        PRESS PLAY <br />
        NEW TUNES <br />
        ON THEIR WAY
      </h2>

      {releases.map((release, index) => (
        <ReleaseCard
          release={release}
          index={index}
          key={index}
          className="release-desktop"
        />
      ))}
    </Div100vh>
  )
}

export default ReleasesSection
