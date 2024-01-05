import Link from 'next/link'
import React from 'react'

const Conceptualization = () => {
  return (
    <section className="bg-black text-white pb-[220px] 3xl:pb-0">
      <div className="container flex flex-col lg:flex-row lg:items-stretch 3xl:items-center lg:space-y-0 space-y-[70px]">
        <img
          src="/images/event.png"
          alt="Conceptualization"
          className="w-full md:hidden"
        />

        <div
          className="bg-cover bg-[50%_40%] w-full md:h-[400px] lg:min-w-[350px] lg:min-h-[638px] 1.5xl:min-w-[450px] 1.5xl:min-h-[800px] lg:mr-[42px] xl:mr-[70px] 3xl:w-[550px] 3xl:h-[995px] 3xl:mr-[220px] hidden md:block"
          style={{ backgroundImage: 'url("/images/event-desktop.png")' }}
        />

        <div className="flex flex-col">
          <h2 className="mobile-subtitle title uppercase !leading-tight mb-[56px] lg:text-[40px] lg:mb-[42px] 1.5xl:text-[56px] 3xl:text-[64px]">
            CONCEPTUALIZAREA <br />
            EVENIMENTULUI
          </h2>
          <h3 className="mobile-subtitle revealing-line uppercase mb-[56px] lg:mb-[70px] 3xl:mb-[114px] lg:lowercase !leading-tight xl:text-[28px] 1.5xl:text-[42px]">
            identitate, <br />
            mesaje, <br /> linii de comunicare
          </h3>
          <p className="mobile-text revealing-words text-alm-white mb-[70px] xl:text-[20px] xl:max-w-[760px] 3xl:max-w-[900px]">
            Recomandări tehnice: artiști, organizarea line-upului, locații,
            prestatori de logistică, catering, garderobă, security, cleaning,
            ticketing) <br />
            Amenajarea spațiului (scenă, zone de activare, zone de merch, bar)
            <br />
            Marketing/SMM/PR (crearea designului, copywrite-ului, a planului de
            promovare a evenimentului). Atragerea partenerilor financiari &
            media
          </p>
          <Link
            href="/contact"
            className="text-[18px] py-[20px] px-[35px] font-medium mx-auto lg:text-left lg:mx-0 lg:text-sm uppercase w-fit text-center border !leading-[14px] border-white inline-block"
          >
            Contacteaza-ne
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Conceptualization
