import { useState } from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Product } from '~/lib/sanity.queries'

import ProductVariantsControls from './ProductVariantsControls'

const ProductOverview = ({ product }: { product: Product }) => {
  const { title, price, category, mainImage, backImage, artist } = product

  const [isHovered, setIsHovered] = useState(false)
  const [qty, setQty] = useState(1)

  return (
    <section className="pb-[120px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:space-y-0 lg:justify-center space-y-[42px] lg:space-x-[42px] xl:space-x-[57px]">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pt-[100%] w-full 3xl:px-[57px]  cursor-pointer 1.5xl:h-[650px] relative lg:inline-block lg:h-fit max-w-[650px] lg:min-w-[500px] 1.5xl:min-w-[650px] lg:pt-0 flex items-center justify-center transition-all group-hover:bg-opacity-20"
          >
            <img
              src={
                isHovered
                  ? urlForImage(backImage)?.url()
                  : urlForImage(mainImage)?.url()
              }
              alt={title}
              className="w-full absolute left-0 right-0 bottom-0 h-[92%] lg:h-auto lg:relative top-1/2 translate-y-[-50%] lg:translate-y-0 lg:top-0  object-contain "
            />
          </div>

          <div className="flex flex-col items-center lg:items-start 3xl:max-w-[734px]">
            <span className="uppercase text-xl font-bold !leading-[1]">
              {category}
            </span>
            <h1 className="text-[43px] leading-[1] my-[24px] font-medium text-center lg:text-left">
              {title}
            </h1>
            <span className="text-xl leading-[1]">{price}.0 MDL</span>

            <ProductVariantsControls
              product={product}
              qty={qty}
              setQty={setQty}
              artist={artist}
            />

            <div className="space-y-[28px]">
              <h3 className="text-xl font-bold text-center lg:text-left">
                Pick-up
              </h3>
              <h4 className="font-okta underline text-xl text-center lg:text-left">
                Nu livrăm momentan!
              </h4>
              <p className="font-okta text-sm">
                Merchul artiștilor Versus Artist pe care poți să-l comanzi pe
                site-ul nostru poate fi ridicat doar la locația noastră -
                Telecentru, strada Șos.Hîncești 61, pe teritoriul Moldova Film.
                <br />
                <br />
                Achitarea se face pe loc, la ridicarea comenzii, în cash sau cu
                cardul.
                <br />
                După ce plasați comanda, veți primi un email cu informațiile
                despre ridicarea acesteia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview
