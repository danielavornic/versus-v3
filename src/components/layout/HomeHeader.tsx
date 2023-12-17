import clsx from 'clsx'
import { useEffect, useState } from 'react'

import HomeMenu from './HomeMenu'

const menuLineClass =
  'block h-[4px] w-[26px] bg-white transition-all duration-500'

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.position = isOpen ? 'fixed' : 'static'
  }, [isOpen])

  return (
    <>
      <header className="bg-black h-[80px] text-alm-white flex items-center">
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
