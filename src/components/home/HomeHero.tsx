import clsx from 'clsx'

import { useAppSelector } from '~/store/hooks'

const HomeHero = () => {
  const { isOpen } = useAppSelector((state) => state.menu)

  console.log(isOpen)

  return (
    <section className="hero bg-black text-alm-white h-[calc(100vh-80px)]">
      <div className="container relative">
        <video
          autoPlay
          muted
          loop
          poster="/images/home-video-poster.png"
          className={clsx(
            'absolute bottom-0 left-0 right-0 top-0 m-0 w-[calc(100vw-60px)] transition-all duration-500 md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] block md:hidden mx-[30px] h-screen object-cover',
            {
              'z-20': isOpen,
            },
          )}
        >
          <source src="/videos/home-video-mobile-bw.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          muted
          loop
          poster="/images/home-video-poster.png"
          className={clsx(
            'absolute bottom-0 left-0 right-0 top-0 w-[calc(100vw-60px)] transition-all duration-500 md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] hidden md:block mx-[50px] h-screen object-cover',
            {
              'z-10': isOpen,
            },
          )}
        >
          <source src="/videos/home-video-bw.webm" type="video/webm" />
        </video>

        <video
          autoPlay
          muted
          loop
          poster="/images/home-video-poster.png"
          className="absolute bottom-0 left-0 right-0 top-0 hidden md:block z-0 w-[calc(100vw-60px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] mx-auto h-screen object-cover"
        >
          <source src="/videos/home-video.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          muted
          loop
          poster="/images/home-video-poster.png"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 w-[calc(100vw-60px)] lg:hidden md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] block mx-auto h-screen object-cover"
        >
          <source src="/videos/home-video-mobile.webm" type="video/webm" />
        </video>
      </div>
    </section>
  )
}

export default HomeHero
