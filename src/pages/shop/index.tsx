import Link from 'next/link'

import Layout from '~/components/layout'
import MerchTitle from '~/components/shop/MerchTitle'

const merchCards = [
  {
    img: '/images/shop/dara-banner.png',
    link: '/shop/dara',
    title: 'Shop Dara',
  },
  {
    img: '/images/shop/csd-banner.png',
    link: '/shop/csd',
    title: "Shop Carla's",
  },
  {
    img: '/images/shop/satoshi-banner.png',
    link: '/shop/satoshi',
    title: 'Shop Satoshi',
  },
]

const ShopPage = () => {
  return (
    <Layout title="Shop Merch">
      <section className="bg-[#fff] pt-[43px] lg:pt-[34px] pb-[220px] md:pb-[120px]">
        <div className="container relative md:min-h-[90px]">
          <MerchTitle mobileTitle="Merch" desktopTitle="Versus Merch" />

          <div className="flex flex-col md:flex-row md:space-x-[25px] md:space-y-0 items-center justify-center space-y-[25px]">
            {merchCards.map((card, index) => (
              <Link
                href={card.link}
                key={index}
                className="w-full lg:max-w-[400px] group relative"
              >
                <div
                  className="bg-cover bg-center h-[595px] md:h-[450px] xl:h-[700px] lg:max-w-[400px] lg:h-[595px] min-w-full flex justify-center items-center relative"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <h2 className="text-white text-[24px] xl:text-[32px] 1.5xl:text-[40px] uppercase text-center font-medium z-10">
                    {card.title}
                  </h2>
                  <div className="bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 w-full lg:max-w-[400px] h-[595px] md:h-[450px] lg:h-[595px] xl:h-[700px] absolute" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShopPage
