import { useWindowSize } from '@uidotdev/usehooks'
import clsx from 'clsx'

import { useAppSelector } from '~/store/hooks'

const HomeHero = () => {
  const { isOpen } = useAppSelector((state) => state.menu)
  const { width } = useWindowSize()

  return (
    <section className="hero bg-black text-alm-white h-[calc(100vh-80px)]">
      <div className="container relative">
        {width < 768 && (
          <>
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
              <source
                src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/u43xkt0hdboijvyafiv0"
                type="video/mp4"
              />
            </video>
            <video
              autoPlay
              muted
              loop
              poster="/images/home-video-poster.png"
              className="absolute bottom-0 left-0 right-0 top-0 z-0 w-[calc(100vw-60px)] md:hidden md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] block mx-auto h-screen object-cover"
            >
              <source
                src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/qij5868vutwngjiupaai"
                type="video/mp4"
              />
            </video>
          </>
        )}
        {/* BW */}
        {width >= 768 && (
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
            <source
              src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/l5q18p33cti6oncatemj"
              type="video/mp4"
            />
          </video>
        )}
        {/* Not BW */}
        {width >= 768 && (
          <video
            autoPlay
            muted
            loop
            poster="/images/home-video-poster.png"
            className="absolute bottom-0 left-0 right-0 top-0 hidden md:block z-0 w-[calc(100vw-60px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] mx-auto h-screen object-cover"
          >
            <source
              src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/qosve0frlewkrukavirp"
              type="video/mp4"
            />
          </video>
        )}
      </div>
    </section>
  )
}

export default HomeHero
