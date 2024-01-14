import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import HomeMenu from './HomeMenu'

const menuLineBaseClass = 'block h-[4px] w-[26px] transition-all duration-500'

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useRouter()

  const isShop = pathname.includes('/shop')

  const menuLineClass = clsx(menuLineBaseClass, {
    'bg-black': isShop,
    'bg-alm-white': !isShop,
  })

  useEffect(() => {
    document.documentElement.style.position = isOpen ? 'fixed' : 'static'
  }, [isOpen])

  return (
    <>
      <header
        className={clsx('h-[80px] w-screen flex items-center', {
          'bg-[#fff] text-black': isShop,
          'bg-black text-alm-white': !isShop,
        })}
      >
        {pathname !== '/' && (
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
        )}
        <div className="container">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="space-y-1 ml-auto block z-40 relative"
          >
            <span
              className={clsx(menuLineClass, 'transform-gpu', {
                'rotate-45': isOpen,
                'translate-y-2.5': isOpen,
              })}
            ></span>
            <span
              className={clsx(menuLineClass, {
                'opacity-0': isOpen,
                'opacity-100': !isOpen,
              })}
            ></span>
            <span
              className={clsx(menuLineClass, 'transform-gpu', {
                '-rotate-45': isOpen,
                '-translate-y-1.5': isOpen,
              })}
            ></span>
          </button>
        </div>
      </header>

      <HomeMenu isOpen={isOpen} />
    </>
  )
}

export default HomeHeader
