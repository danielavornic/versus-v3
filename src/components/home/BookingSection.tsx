import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { useEffect } from 'react'
import SplitType from 'split-type'

const BookingSection = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to('.booking-img', {
        yPercent: 5,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.booking-img',
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          toggleActions: 'play play reverse reverse',
        },
      })

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
              end: 'top 50%',
              scrub: false,
              toggleActions: 'play play reverse reverse',
            },
          },
        )
      })
    })

    return () => ctx?.revert()
  }, [])

  return (
    <section className="bg-black text-white py-[120px] lg:pt-[80px] lg:pb-0">
      <div className="container 3xl:pr-[50px] lg:pr-0 flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 space-y-[120px]">
        <div className="flex flex-col xl:h-[inherit] xl:pb-[120px] 1.5xl:pb-[145px] justify-center lg:justify-between space-y-[70px] lg:space-y-[100px] lg:pt-[64px]">
          <div className="text-center lg:text-left space-y-10">
            <h2 className="booking-text mobile-header uppercase overflow-hidden">
              Booking
            </h2>
            <h3 className="booking-text overflow-hidden mobile-subtitle lg:text-[48px] xl:text-[62px] !leading-tight">
              Give yourself <br /> a show
            </h3>
          </div>

          <div className="text-center xl:flex xl:space-y-0 3xl:space-y-10 3xl:space-x-0 3xl:flex-col 3xl:items-start xl:space-x-[60px] 2xl:space-x-[85px] xl:items-center lg:text-left uppercase space-y-10">
            <h3 className="booking-text-line overflow-hidden text-[20px] 3xl:text-[42px] !leading-tight">
              Discover Your <br />
              Next Headliner
            </h3>
            <div className="flex flex-col items-center xl:space-y-0 xl:space-x-[60px] 3xl:space-x-0 xl:flex-row space-y-10 3xl:flex-row-reverse xl:items-center 3xl:space-y-[inherit]">
              <Link
                href="/booking"
                className="underline font-medium text-lg block 3xl:ml-10"
              >
                Read more
              </Link>
              <Link
                href="/booking/artists"
                className="text-[18px] py-[24px] px-[35px] font-medium align-self-start w-fit justify-center border !leading-[14px] border-white inline-block"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div
          className='booking-img bg-cover bg-center h-[362px] lg:h-[800px] w-full lg:w-[480px] 1.5xl:h-[1000px] 1.5xl:w-[600px] 2xl:w-[800px] 3xl:w-[910px] bg-[url("/images/booking-section.png")]'
          style={{ backgroundImage: 'url("/images/booking-section.png")' }}
        ></div>
      </div>
    </section>
  )
}

export default BookingSection
