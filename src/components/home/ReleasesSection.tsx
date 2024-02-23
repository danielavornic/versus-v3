import { useWindowSize } from '@uidotdev/usehooks'
import { gsap } from 'gsap'
import { useEffect, useLayoutEffect } from 'react'
import Div100vh from 'react-div-100vh'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Release } from '~/lib/sanity.queries'

import ReleaseCard from './ReleaseCard'

const randomX = (direction: number) => {
  return direction * (Math.random() * 10 + 400)
}

const randomY = (direction: number) => {
  return direction * (Math.random() * 10 + 20)
}

const randomDelay = (direction: number) => {
  return direction * (Math.random() * 1)
}

const randomTime = (direction: number) => {
  return direction * (Math.random() * 3 + 5)
}

const randomTime2 = (direction: number) => {
  return direction * (Math.random() * 5 + 10)
}

const randomAngle = (direction: number) => {
  return direction * (Math.random() * 8)
}

const ReleasesSection = ({ releases }: { releases: Release[] }) => {
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth < 1024) return

    let ctx = gsap.context(() => {
      const releases = document.querySelectorAll('.release')

      gsap.config({
        nullTargetWarn: false,
      })

      const animations = new Map()

      const moveX = (element, direction) => {
        const anim = gsap.to(element, {
          x: randomX(direction),
          duration: randomTime(direction),
          delay: randomDelay(direction),
          ease: 'power1.inOut',
          onComplete: () => moveX(element, -direction),
        })
        return anim
      }

      const moveY = (element, direction) => {
        const anim = gsap.to(element, {
          y: randomY(direction),
          duration: randomTime2(direction),
          delay: randomDelay(direction),
          ease: 'power1.inOut',
          onComplete: () => moveY(element, -direction),
        })
        return anim
      }

      const rotate = (element, direction) => {
        const anim = gsap.to(element, {
          rotation: randomAngle(direction),
          duration: randomTime(direction),
          delay: randomDelay(direction),
          ease: 'power1.inOut',
          onComplete: () => rotate(element, -direction),
        })
        return anim
      }

      releases.forEach((release) => {
        gsap.set(release, {
          x: randomX(-1),
          y: randomY(1),
          rotation: randomAngle(-1),
        })

        const anims = [
          moveX(release, 1),
          moveY(release, -1),
          rotate(release, 1),
        ]
        animations.set(release, anims)

        release.addEventListener('mouseenter', () => {
          gsap.to(release, {
            scale: 1.25,
            duration: 0.1,
            ease: 'power1.out',
          })
        })

        release.addEventListener('mouseleave', () => {
          gsap.to(release, {
            scale: 1,
            duration: 0.1,
            ease: 'power1.out',
          })
        })
      })

      return () => {
        ctx?.revert()
      }
    }, [windowWidth, releases])
  })

  if (windowWidth < 1024) {
    return (
      <section
        id="releases-mobile"
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
      className="relative hidden lg:block text-white lg:pt-[80px] my-[150px] lg:h-screen lg:min-h-screen lg:my-[165px] lg:px-[50px] 3xl:my-[230px]"
    >
      <h2 className="overflow-hidden revealing-line lg:inline relative z-10 mb-[42px] lg:mb-0 mobile-title text-center lg:text-left lg:text-[57px] xl:text-[62px] container lg:px-0 lg:w-auto !leading-tight">
        DON&apos;T STAY <br />
        PRESS PLAY <br />
        NEW TUNES <br />
        ON THEIR WAY
      </h2>

      {releases.map((release, index) => (
        <ReleaseCard release={release} index={index} key={index} />
      ))}
    </Div100vh>
  )
}

export default ReleasesSection
