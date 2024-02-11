import { urlForImage } from '~/lib/sanity.image'
import { ProductionWork } from '~/lib/sanity.queries'

import ProducerCard from './ProducerCard'

const ProdSection = ({
  productionWorks,
}: {
  productionWorks: ProductionWork[]
}) => {
  return (
    <section
      id="production"
      className="bg-black text-white pb-[220px] lg:pt-[100px] xl:pt-0 lg:pb-[140px] xl:pb-[56px]"
    >
      <div className="container">
        <h2 className="title mobile-title uppercase mb-[56px] lg:mb-[70px] lg:text-[60px] lg:font-medium lg:leading-[1.1] 1.5xl:text-[93px]">
          prod<span className="hidden lg:inline-block">uction</span>
          <br className="hidden lg:block" />& MASTERING
        </h2>
        <p className="mobile-text max-w-[750px] 2xl:max-w-[650px] text-alm-white lg:text-[20px] lg:mb-[80px] 1.5xl:max-w-[746px]">
          Nu este neapărat să fii semnat la Versus Artist pentru a lucra cu noi.
          Oferim servicii contra-cost: PRODUCȚIE - SONGWRITING - REC - MIX -
          MASTER. <br />
          <br />
          Avem totul, de la oameni, la tehnică, pentru a aduce ideea la stadiul
          de produs final, gata de publicat.
        </p>

        <div className="flex flex-col mt-[70px] md:flex-row justify-between lg:mt-[120px] xl:space-x-[42px] items-center">
          <div className="space-y-4 lg:space-y-5 2xl:space-y-[25px]">
            <ProducerCard name="Tensso" image="/images/tensso.png" />
            <ProducerCard name="Nemax" image="/images/nemax.png" />
          </div>

          <div className="mt-[220px] md:mt-0 md:max-h-[840px] xl:max-h-[1100px] 2xl:max-h-[1500px] overflow-y-auto hidden-scrollbar">
            {productionWorks?.map((work: ProductionWork) => (
              <div
                key={work._id}
                className="flex mb-[56px] 1.5xl:mb-[36px] flex-col 1.5xl:flex-row 1.5xl:items-center 1.5xl:justify-end items-end text-alm-white text-right 1.5xl:space-x-[50px]"
              >
                <a href={work.link} target="_blank" rel="noreferrer">
                  <h4 className="text-[24px] lg:text-[26px] font-medium hover:text-white">
                    {work.artists}
                  </h4>
                  <p className="text-[24px] lg:text-[26px] hover:text-white">
                    {work.name}
                  </p>
                </a>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full lg:w-fit inline-block"
                >
                  <div
                    className="w-full h-[220px] xl:w-[460px] xl:h-[309px] bg-cover bg-center bg-no-repeat mt-[56px] lg:mt-[32px] 1.5xl:mt-0"
                    style={{
                      backgroundImage: `url(${urlForImage(work.image)?.url()})`,
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdSection
