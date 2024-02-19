import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Headroom from 'react-headroom'

import useClickOutside from '~/hooks/useClickOutside'
import { useAppDispatch, useAppSelector } from '~/store/hooks'
import { hideMenu, toggleMenu } from '~/store/menuSlice'

import CartDropdown from '../cart/CartDropdown'
import HomeMenu from './HomeMenu'

const menuLineBaseClass = 'block h-[4px] w-[26px] transition-all duration-500'

const Header = () => {
  const { pathname, asPath, events, query } = useRouter()
  const isShop = pathname.includes('/shop')

  const cart = useAppSelector((state) => state.cart)
  const menu = useAppSelector((state) => state.menu)
  const isMenuOpen = menu.isOpen

  const dispatch = useAppDispatch()

  const [isShopOpen, setIsShopOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(dropdownRef, () => setIsShopOpen(false))

  const menuLineClass = clsx(menuLineBaseClass, {
    'bg-black': isShop,
    'bg-alm-white': !isShop,
  })

  useEffect(() => {
    document.documentElement.style.position = isMenuOpen ? 'fixed' : 'static'
  }, [isMenuOpen])

  useEffect(() => {
    document.documentElement.style.position = isShopOpen ? 'fixed' : 'static'
  }, [isShopOpen])

  return (
    <>
      <Headroom
        style={{
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out',
          zIndex: 100,
        }}
      >
        <header
          className={clsx('h-[80px] top-0 z-[80] w-screen flex items-center', {
            'bg-[#fff] text-black': isShop,
            'bg-black text-alm-white': !isShop,
          })}
        >
          <div className="pl-[30px] md:pl-[40px] lg:pl-[50px] z-40">
            <Link href="/">
              <img
                src={
                  isShop
                    ? '/versus-logo-text-black.svg'
                    : '/versus-logo-text-white.svg'
                }
                alt="Versus Artist"
                className="w-[150px]"
              />
            </Link>
          </div>

          <div className="container flex items-center relative justify-end">
            {isShop && (
              <div ref={dropdownRef} className="relative">
                <button
                  className="flex items-center"
                  onClick={() => setIsShopOpen(!isShopOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="none"
                  >
                    <path
                      d="M20.625 6.875H16.5V5.5C16.5 4.04131 15.9205 2.64236 14.8891 1.61091C13.8576 0.579463 12.4587 0 11 0C9.54131 0 8.14236 0.579463 7.11091 1.61091C6.07946 2.64236 5.5 4.04131 5.5 5.5V6.875H1.375C1.01033 6.875 0.660591 7.01987 0.402728 7.27773C0.144866 7.53559 0 7.88533 0 8.25V23.375C0 24.469 0.434597 25.5182 1.20818 26.2918C1.98177 27.0654 3.03098 27.5 4.125 27.5H17.875C18.969 27.5 20.0182 27.0654 20.7918 26.2918C21.5654 25.5182 22 24.469 22 23.375V8.25C22 7.88533 21.8551 7.53559 21.5973 7.27773C21.3394 7.01987 20.9897 6.875 20.625 6.875ZM8.25 5.5C8.25 4.77065 8.53973 4.07118 9.05546 3.55546C9.57118 3.03973 10.2707 2.75 11 2.75C11.7293 2.75 12.4288 3.03973 12.9445 3.55546C13.4603 4.07118 13.75 4.77065 13.75 5.5V6.875H8.25V5.5ZM19.25 23.375C19.25 23.7397 19.1051 24.0894 18.8473 24.3473C18.5894 24.6051 18.2397 24.75 17.875 24.75H4.125C3.76033 24.75 3.41059 24.6051 3.15273 24.3473C2.89487 24.0894 2.75 23.7397 2.75 23.375V9.625H5.5V11C5.5 11.3647 5.64487 11.7144 5.90273 11.9723C6.16059 12.2301 6.51033 12.375 6.875 12.375C7.23967 12.375 7.58941 12.2301 7.84727 11.9723C8.10513 11.7144 8.25 11.3647 8.25 11V9.625H13.75V11C13.75 11.3647 13.8949 11.7144 14.1527 11.9723C14.4106 12.2301 14.7603 12.375 15.125 12.375C15.4897 12.375 15.8394 12.2301 16.0973 11.9723C16.3551 11.7144 16.5 11.3647 16.5 11V9.625H19.25V23.375Z"
                      fill="#050505"
                    />
                  </svg>
                  <span
                    className={clsx(
                      'text-[26px] ml-[9px] font-medium text-right min-w-[25px] md:block',
                      {
                        'text-[#fff] pointer-events-none': !cart.items?.length,
                      },
                    )}
                  >
                    {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </button>
                <CartDropdown isOpen={isShopOpen} setIsOpen={setIsShopOpen} />
              </div>
            )}
            <button
              onClick={() => dispatch(toggleMenu())}
              className={clsx('space-y-1 block z-40 relative', {
                'ml-auto': !isShop,
                'ml-[53px] lg:ml-[29px]': isShop,
              })}
            >
              <span
                className={clsx(menuLineClass, 'transform-gpu', {
                  'rotate-45': isMenuOpen,
                  'translate-y-2.5': isMenuOpen,
                })}
              ></span>
              <span
                className={clsx(menuLineClass, {
                  'opacity-0': isMenuOpen,
                  'opacity-100': !isMenuOpen,
                })}
              ></span>
              <span
                className={clsx(menuLineClass, 'transform-gpu', {
                  '-rotate-45': isMenuOpen,
                  '-translate-y-1.5': isMenuOpen,
                })}
              ></span>
            </button>
          </div>
        </header>
      </Headroom>
      <HomeMenu isOpen={isMenuOpen} />
    </>
  )
}

export default Header
