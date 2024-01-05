import Link from 'next/link'

const ProdSection = () => {
  return (
    <section className="bg-black text-white pb-[220px]">
      <div className="container flex flex-col md:flex-row md:items-center md:space-y-0 space-y-[70px] md:space-x-[42px] lg:space-x-[70px] 2xl:space-x-[100px] 3xl:space-x-[220px]">
        <div>
          <img
            src="/images/prod-section.png"
            alt="prod-section"
            className="mx-auto w-full md:hidden"
          />
          <div
            className="hidden md:block bg-cover bg-no-repeat bg-center w-[300px] h-[680px] mx-auto lg:w-[400px] lg:h-[750px] 1.5xl:w-[450px] 1.5xl:h-[800px] 3xl:w-[550px] 3xl:h-[995px]"
            style={{ backgroundImage: 'url(/images/prod-section-lg.png)' }}
          />
        </div>

        <div className="space-y-[56px] lg:space-y-0">
          <h2 className="title mobile-title uppercase lg:text-[60px] lg:font-medium lg:mb-[42px] lg:leading-tight 1.5xl:text-[93px]">
            prod & <br className="hidden lg:block" />
            MASTERING
          </h2>
          <p className="mobile-text revealing-words text-alm-white lg:text-[20px] lg:mb-[80px] 1.5xl:max-w-[746px]">
            Nu este neapărat să fii semnat la Versus Artist pentru a lucra cu
            noi. Oferim servicii contra-cost: PRODUCȚIE - SONGWRITING - REC -
            MIX - MASTER. Avem totul, de la oameni, la tehnică, pentru a aduce
            ideea la stadiul de produs final, gata de publica
          </p>

          <div>
            <Link
              href="#"
              className="mobile-subtitle revealing-line inline-block w-fit uppercase lg:!mt-[80px] lg:!mb-[42px] lg:text-[28px] 2xl:text-[36px] !leading-tight 3xl:text-[42px]"
            >
              collaborate WITH <br /> OUR PRODUCERS
            </Link>
          </div>

          <Link
            href="/production"
            className="mobile-text revealing-line inline-block uppercase text-alm-white lg:text-[20px]"
          >
            SEE MUSIC PRODUCED <br className="lg:hidden" />
            BY TENSSO
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProdSection
