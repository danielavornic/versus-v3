import clsx from 'clsx'
import Link from 'next/link'

import { clearCart } from '~/store/cartSlice'
import { useAppDispatch, useAppSelector } from '~/store/hooks'

import CartItem from './CartItem'

interface CartDropdownProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const CartDropdown = ({ isOpen, setIsOpen }: CartDropdownProps) => {
  const cart = useAppSelector((state) => state.cart)
  const cartItemsLength = cart?.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  )

  const dispatch = useAppDispatch()

  return (
    <div
      className={clsx(
        'fixed top-[80px] right-0 w-screen z-10 transition-all duration-500 md:w-[500px] lg:w-[600px] 1.5xl:w-[650px] min-h-[500px] bg-[#fff] pt-[16px] pb-[60px] px-[30px]',
        {
          'opacity-100 ': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
        },
      )}
    >
      {cart.items?.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-[42px] pt-[100px]">
          <span className="text-[24px] font-medium lg:text-[43px] text-center !leading-[1]">
            Nici un produs
            <br /> în coș
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-black text-white w-[250px] h-[55px] flex items-center justify-center transition-full hover:bg-opacity-[85] active:bg-alm-white text-[18px] font-medium uppercase"
          >
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="flex items-baseline space-x-[10px]">
              <span className="text-black text-[43px] font-medium">Coș</span>
              <span className="text-[20px]">{cartItemsLength} IT.</span>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_455_3805)">
                  <path
                    d="M8 6.05564L2.5908 0.646447C2.49703 0.552678 2.36986 0.5 2.23725 0.5C2.10464 0.5 1.97746 0.552678 1.8837 0.646447L0.646447 1.8837C0.552678 1.97746 0.5 2.10464 0.5 2.23725C0.5 2.36986 0.552678 2.49703 0.646447 2.5908L6.05564 8L0.646447 13.4092C0.552678 13.503 0.5 13.6301 0.5 13.7628C0.5 13.8954 0.552678 14.0225 0.646447 14.1163L1.8837 15.3536C2.07896 15.5488 2.39554 15.5488 2.5908 15.3536L8 9.94436L13.4092 15.3536C13.6045 15.5488 13.921 15.5488 14.1163 15.3536L15.3536 14.1163C15.5488 13.921 15.5488 13.6045 15.3536 13.4092L9.94436 8L15.3536 2.5908C15.5488 2.39554 15.5488 2.07896 15.3536 1.8837L14.1163 0.646447C14.0225 0.552678 13.8954 0.5 13.7628 0.5C13.6301 0.5 13.503 0.552678 13.4092 0.646447L8 6.05564Z"
                    fill="#050505"
                    stroke="#050505"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_455_3805">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="max-h-[290px] xl:max-h-[420px] overflow-y-auto mt-[50px] space-y-5 black-scrollbar">
            {cart.items.map((item) => (
              <CartItem key={item.product._id} item={item} />
            ))}
          </div>

          <div className="pt-[60px] 1.5xl:pt-[82px] flex flex-col items-center">
            <div className="flex justify-between md:justify-center space-x-[42px]">
              <span className="text-[20px]">Sub-total</span>
              <span className="text-[20px]">{cart.total}.0 MDL</span>
            </div>
            <Link
              href="/shop/checkout"
              className="w-[300px] h-[48px] bg-black text-white hover:bg-opacity-[0.85] focus:bg-alm-white transition-all  text-[18px] font-medium mx-auto mt-[42px] mb-[25px] text-center flex items-center justify-center"
            >
              Finalizează
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation()
                dispatch(clearCart())
              }}
              className="text-[18px] text-black hover:underline transition-all font-medium text-center"
            >
              Șterge coșul
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartDropdown
