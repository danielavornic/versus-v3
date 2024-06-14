import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { urlForImage } from '~/lib/sanity.image'
import { decreaseQty, increaseQty, removeFromCart } from '~/store/cartSlice'
import { useAppDispatch } from '~/store/hooks'
import { CartItem as CartItemI } from '~/types/product'

const CartItem = ({ item }: { item: CartItemI }) => {
  const { product, quantity, size } = item
  const { title, slug, artist, category, mainImage } = product

  const [isMobileDeleteOpen, setIsMobileDeleteOpen] = useState(false)

  const dispatch = useAppDispatch()

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setIsMobileDeleteOpen(true)
    },
    onSwipedRight: (eventData) => {
      setIsMobileDeleteOpen(false)
    },
  })

  return (
    <div
      {...handlers}
      onClick={(e) => e.stopPropagation()}
      className="flex items-start overflow-x-hidden group hover:bg-black hover:bg-opacity-20 lg:hover:bg-opacity-100 lg:hover:bg-white transition-all relative"
    >
      <div
        className={clsx(
          'space-x-6 flex items-start transition-all duration-500',
          {
            'translate-x-[-150px]': isMobileDeleteOpen,
          },
        )}
      >
        <Link href={`/shop/${artist?.toLowerCase()}/${slug.current}`}>
          <img
            src={urlForImage(mainImage)?.url()}
            alt={title}
            className="h-[200px] min-w-[150px] object-contain py-3"
          />
        </Link>

        <div>
          <Link href={`/shop/${artist?.toLowerCase()}/${slug.current}`}>
            <span className="text-[9px] font-bold uppercase mb-[10px]">
              {category}
            </span>
            <h4 className="text-[11px] font-bold uppercase mb-[20px] w-full whitespace-nowrap">
              {title}
            </h4>
          </Link>
          {category !== 'Album CD' && category !== 'Carnet' && (
            <>
              <span className="text-[9px] font-bold mb-[10px] block">
                Mărimea
              </span>
              <div className="w-[30px] text-[12px] font-medium h-[30px] uppercase border border-alm-white flex items-center justify-center">
                {size}
              </div>
            </>
          )}
          <span className="text-[9px] font-bold my-[10px] block">
            Cantitatea
          </span>
          <div className="flex space-x-[5px]">
            <button
              className="border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase"
              onClick={() => dispatch(decreaseQty({ product, size }))}
            >
              -
            </button>
            <div className="w-[30px] text-[12px] font-medium h-[30px] uppercase border border-alm-white flex items-center justify-center">
              {quantity}
            </div>
            <button
              className="border-[1px] w-[30px] h-[30px] border-alm-white text-[12px] uppercase"
              onClick={() => dispatch(increaseQty({ product, size }))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:group-hover:block absolute top-[10px] right-[20px]">
        <button
          onClick={() => dispatch(removeFromCart(item as any))}
          className="w-5 h-5 bg-black hover:bg-red flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.3536 2.2373C11.4473 2.14353 11.5 2.01636 11.5 1.88375C11.5 1.75114 11.4473 1.62396 11.3536 1.5302L10.4698 0.646447C10.2745 0.451184 9.95796 0.451185 9.7627 0.646447L6 4.40914L2.2373 0.646447C2.04204 0.451184 1.72546 0.451184 1.5302 0.646447L0.646447 1.5302C0.451184 1.72546 0.451184 2.04204 0.646447 2.2373L4.40914 6L0.646447 9.7627C0.451185 9.95796 0.451184 10.2745 0.646447 10.4698L1.5302 11.3536C1.62396 11.4473 1.75114 11.5 1.88375 11.5C2.01636 11.5 2.14353 11.4473 2.2373 11.3536L6 7.59086L9.7627 11.3536C9.95796 11.5488 10.2745 11.5488 10.4698 11.3536L11.3536 10.4698C11.5488 10.2745 11.5488 9.95796 11.3536 9.7627L7.59086 6L11.3536 2.2373Z"
              stroke="#FAFAFA"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          'min-w-[150px] absolute right-0 flex bg-white items-center justify-center float-right lg:hidden duration-500 h-[200px]',
          {
            'translate-x-0': isMobileDeleteOpen,
            'translate-x-[150px]': !isMobileDeleteOpen,
          },
        )}
      >
        <button
          onClick={() => dispatch(removeFromCart(item as any))}
          className="w-[34px] h-[34px] bg-black hover:bg-red flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <g clip-path="url(#clip0_455_3846)">
              <rect width="34" height="34" fill="#050505" />
              <path
                d="M27.3536 9.12105C27.4473 9.02728 27.5 8.90011 27.5 8.7675C27.5 8.63489 27.4473 8.50771 27.3536 8.41395L25.5861 6.64645C25.3908 6.45118 25.0742 6.45118 24.8789 6.64645L17 14.5254L9.12105 6.64645C8.92579 6.45118 8.60921 6.45118 8.41395 6.64645L6.64645 8.41395C6.45118 8.60921 6.45118 8.92579 6.64645 9.12105L14.5254 17L6.64645 24.8789C6.45118 25.0742 6.45118 25.3908 6.64645 25.5861L8.41395 27.3536C8.50771 27.4473 8.63489 27.5 8.7675 27.5C8.90011 27.5 9.02728 27.4473 9.12105 27.3536L17 19.4746L24.8789 27.3536C25.0742 27.5488 25.3908 27.5488 25.5861 27.3536L27.3536 25.5861C27.5488 25.3908 27.5488 25.0742 27.3536 24.8789L19.4746 17L27.3536 9.12105Z"
                stroke="#FAFAFA"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_455_3846">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CartItem
