import Link from 'next/link'
import { useEffect, useState } from 'react'

import Layout from '~/components/layout'
import MerchTitle from '~/components/shop/MerchTitle'

const merchCards = [
  {
    img: '/images/shop/dara-banner.png',
    link: '/shop/dara',
    title: 'Dara',
  },
  {
    img: '/images/shop/csd-banner.png',
    link: '/shop/csd',
    title: "Carla's",
  },
  {
    img: '/images/shop/satoshi-banner.png',
    link: '/shop/satoshi',
    title: 'Satoshi',
  },
  {
    img: ['/images/shop/magnat-banner.png', '/images/shop/feoctist-banner.png'],
    link: '/shop/magnat-feoctist',
    title: 'MAGNAT & FEOCTIST',
  },
]

const ShopPage = () => {
  const [lastImg, setLastImg] = useState(merchCards[3].img[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastImg((lastImg) =>
        lastImg === merchCards[3].img[0]
          ? merchCards[3].img[1]
          : merchCards[3].img[0],
      )
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Layout title="Shop Merch">
      <section className="bg-[#fff] pt-[43px] lg:pt-[34px] pb-[220px] md:pb-[120px]">
        <div className="container relative md:min-h-[90px]">
          <MerchTitle mobileTitle="Merch" desktopTitle="Versus Merch" />

          <div className="grid grid-cols-1 md:flex md:gap-[16px] md:space-y-0 items-center justify-center space-y-[25px]">
            {merchCards.slice(0, 3).map((card, index) => (
              <Link
                href={card.link}
                key={index}
                className="w-full lg:max-w-[400px] group relative"
              >
                <div
                  className="bg-cover bg-top md:bg-center h-[400px] sm:h-[500px] xl:h-[500px] 2xl:h-[700px] lg:max-w-[400px] lg:h-[420px] min-w-full flex justify-center items-center relative"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <h2 className="text-white leading-[1] text-[24px] xl:text-[32px] 1.5xl:text-[40px] uppercase text-center font-medium z-10">
                    {card.title}
                  </h2>
                  <div className="bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 w-full h-[400px] sm:h-[500px] xl:h-[500px] 2xl:h-[700px] lg:max-w-[400px] lg:h-[420px] absolute" />
                </div>
              </Link>
            ))}

            <Link
              href={merchCards[3].link}
              className="w-full lg:max-w-[400px] group relative"
            >
              <div
                className="bg-cover bg-top md:bg-center h-[400px] sm:h-[500px] xl:h-[500px] 2xl:h-[700px] lg:max-w-[400px] lg:h-[420px] min-w-full flex justify-center items-center relative"
                style={{ backgroundImage: `url(${lastImg})` }}
              >
                <h2 className="text-white leading-[1] text-[24px] xl:text-[32px] 1.5xl:text-[40px] uppercase text-center font-medium z-10">
                  {merchCards[3].title}
                </h2>
                <div className="bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 w-full h-[400px] sm:h-[500px] xl:h-[500px] 2xl:h-[700px] lg:max-w-[400px] lg:h-[420px] absolute" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShopPage
