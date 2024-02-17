import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useLayoutEffect } from 'react'
import Div100vh from 'react-div-100vh'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Release } from '~/lib/sanity.queries'

import ReleaseCard from './ReleaseCard'

const ReleasesSection = ({ releases }: { releases: Release[] }) => {
  useEffect(() => {
    const windowSize = window.innerWidth
    if (windowSize < 1024) return

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#releases',
          pin: '#releases',
          start: 'top top',
          end: 'bottom top-=' + window.innerHeight,
          scrub: 3,
          invalidateOnRefresh: true,
          toggleActions: 'play none none none',
        },
      })

      tl.to('#release-0', {
        top: '0px',
      })

      tl.to('#release-1', {
        top: '50px',
      })

      tl.to('#release-2', {
        top: '100px',
      })

      tl.to('#release-3', {
        top: '220px',
      })

      tl.to('#release-4', {
        top: '320px',
      })

      tl.to('#release-5', {
        top: '400px',
      })

      tl.to('#release-6', {
        top: '450px',
      })

      tl.to('#release-7', {
        top: '500px',
      })

      tl.to('#release-8', {
        top: '520px',
      })

      tl.to('#release-9', {
        top: '550px',
      })

      tl.to('#release-10', {
        top: '620px',
      })
    })

    return () => {
      ctx.kill()
    }
  }, [])

  return (
    <section
      id="releases"
      className="relative text-white my-[150px] lg:h-screen lg:min-h-screen lg:my-[165px] lg:px-[50px] 3xl:my-[230px]"
    >
      <h2 className="lg:top-[90px] lg:absolute overflow-hidden mb-[42px] lg:mb-0 mobile-title text-center lg:text-left lg:text-[57px] xl:text-[62px] container lg:px-0 lg:w-auto !leading-tight">
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

      <Div100vh className="w-screen lg:block hidden">
        {releases.map((release, index) => (
          <ReleaseCard release={release} index={index} key={index} />
        ))}
      </Div100vh>
    </section>
  )
}

export default ReleasesSection
