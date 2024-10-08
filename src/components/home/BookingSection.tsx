import { useGSAP } from '@gsap/react'
import { useWindowSize } from '@uidotdev/usehooks'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP)

const BookingSection = () => {
  const [isReadMore, setIsReadMore] = useState(false)
  const { width: windowWidth } = useWindowSize()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const bookingTexts = document.querySelectorAll('.booking-text')
    bookingTexts.forEach((text, textIdx) => {
      const split = new SplitType(text as HTMLElement, {
        types: 'chars',
      })

      split.chars.forEach((c, i) => {
        gsap.fromTo(
          c,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.75,
            ease: 'power2.out',
            stagger: 0.05,
            delay: i * 0.025 + textIdx * 0.15,
            scrollTrigger: {
              trigger: c,
              start: 'top 90%',
              end: 'top 50%',
              scrub: false,
              toggleActions: 'play play reverse reverse',
            },
          },
        )
      })
    })

    const bookingTextLine = document.querySelector('.booking-text-line')
    const split = new SplitType(bookingTextLine as HTMLElement, {
      types: 'lines',
    })
    split.lines.forEach((line) => {
      gsap.fromTo(
        line,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: bookingTextLine,
            start: 'top 90%',
            end: 'top 80%',
            scrub: false,
            toggleActions: 'play play reverse reverse',
          },
        },
      )
    })
  })

  return (
    <Div100vh
      id="booking"
      data-scroll-section
      className={clsx(
        'bg-black text-white flex items-center justify-center my-[120px] lg:mb-[200px]',
        {
          '!h-full md:!h-screen': isReadMore,
        },
      )}
    >
      <div className="container">
        <div className="relative flex items-center justify-center md:px-12 lg:p-0">
          {!isReadMore ? (
            <>
              <div className="bg-black bg-opacity-50 absolute h-[96vh] -translate-y-1/2 top-[50%] left-0 right-0 z-[1]"></div>
              {windowWidth > 1500 && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/videos/booking-poster.png"
                  className="w-full object-cover h-[95vh] absolute top-[50%] right-0 z-0 left-0 hidden 3xl:block -translate-y-1/2"
                >
                  <source
                    src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/hvba5f90fgij46dj6qim"
                    type="video/mp4"
                  />
                </video>
              )}{' '}
              {windowWidth >= 768 && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/videos/booking-poster.png"
                  className="w-full object-cover md:h-[80vh] lg:h-[95vh] absolute top-[50%] right-0 z-0 left-0 hidden md:block -translate-y-1/2"
                >
                  <source
                    src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/ivjz1btz79j1hlitylwn"
                    type="video/mp4"
                  />
                </video>
              )}{' '}
              {windowWidth < 768 && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/videos/booking-mobile-poster.png"
                  className="w-full object-cover h-[95vh] absolute top-[50%] right-0 z-0 left-0  md:hidden -translate-y-1/2"
                >
                  <source
                    src="https://res.cloudinary.com/deqfi4dkh/video/upload/f_auto:video,q_auto/cljjtgwwwmoqfsg5icxk"
                    type="video/mp4"
                  />
                </video>
              )}
            </>
          ) : (
            <div className="hidden md:block absolute md:top-[50%] md:-translate-y-1/2 left-0 right-0 h-[95vh] w-full bg-cover bg-[url('/images/booking-bg.png')] object-cover" />
          )}

          <div className="flex flex-col z-10 items-center justify-center md:-mt-[150px] lg:-mt-[80px]">
            {!isReadMore ? (
              <>
                <h2
                  data-scroll
                  className="booking-text mobile-header md:text-[70px] mb-[42px] xl:text-[93px] text-center uppercase overflow-hidden"
                >
                  Booking
                </h2>
                <h3
                  data-scroll
                  className="booking-text-line text-center mb-[42px] uppercase overflow-hidden text-[20px] md:text-[28px] xl:text-[42px] !leading-tight"
                >
                  Discover Your <br />
                  Next Headliner
                </h3>
              </>
            ) : (
              <div className="mb-[31px] xl:mb-[65px]  3xl:mb-[122px] space-y-[42px] flex flex-col lg:flex-row z-10 lg:justify-center lg:space-y-0 lg:max-w-[90%] 1.5xl:max-w-[80%]">
                <div className="md:hidden bg-cover h-[400px] bg-[url('/images/event.png')]"></div>

                <p className="uppercase leading-[1.1] overflow-hidden text-[24px] md:text-[28px] flex-1 lg:text-[32px] 1.5xl:text-[36px] 3xl:text-[42px] lg:mr-[42px] xl:mr-[80px] lg:normal-case">
                  Creează propriul Line-Up! Alege artiștii. Restul e muzică.
                  <br />
                  Booking pentru Artiștii Versus și outsource.
                </p>
                <ul className="font-okta font-light space-y-[16px] list-outside list-disc text-lg xl:text-[20px] flex-1 !leading-tight">
                  <li>
                    Crearea și adaptarea ofertelor pentru artiști (format cu
                    band, cu DJ, acoustic, la festivale, evenimente private sau
                    publice) care cuprind riderul tehnic și cel de ospitalitate
                    + stabilirea tuturor costurilor suportate de către
                    beneficiar.
                  </li>
                  <li>
                    Gestionarea procesului legal și contabil: întocmirea
                    contractelor, încasări și plăți. Asigurarea comunicării
                    între client și echipa artistului, elaborarea și aprobarea
                    materialelor promoționale.
                  </li>
                  <li>
                    Asigurarea și gestionarea prezenței și prestației artistului
                    la eveniment, monitorizarea respectării condițiilor tehnice
                    stabilite și soluționarea eventualelor probleme.
                  </li>
                </ul>
              </div>
            )}

            <div className="flex flex-col items-center z-10 lg:flex-row space-y-[42px] lg:space-y-0 lg:space-x-[42px]">
              <Link
                href="/booking"
                className="outline-btn uppercase text-[18px] py-[24px] px-[35px] font-medium align-self-start w-fit justify-center border !leading-[14px] inline-block"
              >
                Get in touch
              </Link>
              <button
                onClick={() => setIsReadMore(!isReadMore)}
                className="underline uppercase font-medium text-left lg:min-w-[134px] text-lg block hover:text-[#D2D2D2] transition-all"
              >
                {isReadMore ? 'Close' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Div100vh>
  )
}

export default BookingSection
