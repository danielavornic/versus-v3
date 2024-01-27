import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import { urlForImage } from '~/lib/sanity.image'
import { Product } from '~/lib/sanity.queries'
import { addToCart } from '~/store/cartSlice'
import { useAppDispatch } from '~/store/hooks'

const ProductCard = ({
  product,
  hasPadding = false,
}: {
  product: Product
  hasPadding?: boolean
}) => {
  const { title, slug, artist, category, price, mainImage, backImage } = product

  const dispatch = useAppDispatch()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full group space-y-[42px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pt-[100%] relative flex items-center justify-center transition-all bg-[#fff] group-hover:bg-black group-hover:bg-opacity-20">
        <div className="z-[1] bg-black opacity-0 transition-all group-hover:opacity-100 font-medium top-5 absolute left-0 w-[140px] h-[44px] text-white flex items-center justify-center text-xs">
          {price} MDL
        </div>

        <button
          onClick={() => dispatch(addToCart({ product, qty: 1, size: 's' }))}
          className="z-[1] bg-black hover:bg-opacity-[85%] active:bg-alm-white transition-all opacity-0 group-hover:opacity-100 font-medium bottom-5 absolute mx-auto right-0 left-0 w-[230px] h-[44px] text-white flex items-center justify-center text-lg !leading-[1]"
        >
          Adaugă în coș
        </button>

        <Link href={`/shop/${artist?.toLowerCase()}/${slug.current}`}>
          <img
            src={
              isHovered
                ? urlForImage(backImage)?.url()
                : urlForImage(mainImage)?.url()
            }
            alt={title}
            className={clsx(
              'w-full absolute left-0 right-0 bottom-0  top-1/2 translate-y-[-50%]  object-contain ',
              {
                'h-[92%]': hasPadding,
              },
            )}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-20 transition-all"></div>
        </Link>
      </div>

      <Link
        href={`/shop/${artist?.toLowerCase()}/${slug.current}`}
        className="flex flex-col items-center space-y-[12px]"
      >
        <span className="uppercase text-xl font-semibold !leading-tight">
          {category}
        </span>
        <h4 className="text-xl text-center">{title}</h4>
      </Link>
    </div>
  )
}

export default ProductCard
