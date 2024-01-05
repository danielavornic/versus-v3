import Link from 'next/link'

import ConcertPicsDesktop from './ConcertPicsDesktop'

const ConcertsSection = () => {
  return (
    <section className="bg-black text-white pb-[220px]">
      <h2 className="mobile-header revealing-line uppercase lg:text-[50px] 1.5xl:text-[64px] 3xl:text-[93px] text-center mb-[42px]">
        ORGANIZARE CONCERTE
      </h2>

      <div className="flex md:hidden w-full justify-between overflow-x-auto">
        <div>
          <img src="/images/concerts/1.png" alt="Concert" className="w-full" />
        </div>
        <div>
          <img src="/images/concerts/2.png" alt="Concert" className="w-full" />
        </div>
        <div>
          <img src="/images/concerts/3.png" alt="Concert" className="w-full" />
        </div>
        <div>
          <img src="/images/concerts/4.png" alt="Concert" className="w-full" />
        </div>
      </div>
      <img
        src="/images/concerts/satoshi.png"
        alt="Satoshi"
        className="w-full mt-[30px] md:hidden"
      />

      <ConcertPicsDesktop />

      <div className="container mt-[70px] md:mt-[40px] lg:mt-[70px] 1.5xl:mt-[100px] space-y-[42px]">
        <p className="mobile-text revealing-words !leading-normal max-w-[800px] lg:text-[24px] xl:text-[36px] xl:max-w-[940px]">
          Versus Artist are o echipă care a desfășurat așa evenimente ca: Noroc
          Fest, RAZYOB, DARA Solo la BR Media Group, Lansarea BR Media Group,
          Turneul Satoshi Berserk Fall Tour.
        </p>

        <Link
          href="/contact"
          className="text-[20px] revealing-line font-bold underline inline-block"
        >
          Te putem ajuta în organizarea concertului tău
        </Link>
      </div>
    </section>
  )
}

export default ConcertsSection
