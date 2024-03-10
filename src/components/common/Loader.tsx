import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'

const unbounded = Unbounded({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--font-unbounded',
})

const year = new Date().getFullYear()

const Loader = () => {
  const [pathname, setPathname] = React.useState('')

  useEffect(() => {
    setPathname(window?.location.pathname)
  }, [])

  if (pathname?.includes('/shop')) {
    return null
  }

  return (
    <Div100vh
      id="global-loader"
      className={clsx(
        'w-screen bg-black fixed z-[1000] top-0 left-0 right-0 flex justify-center items-center flex-col pb-[86px]',
        unbounded.variable,
      )}
    >
      <img
        src="/videos/loader.gif"
        alt="loader"
        className="w-[300px] lg:w-[350px] xl:w-[400px] 3xl:w-[510px] h-auto"
      />

      <p className="text-[10px] font-unbounded text-center fixed bottom-[85px] left-0 right-0 text-alm-white">
        © {year} VERSUSARTIST All Rights Reserved.
      </p>
    </Div100vh>
  )
}

export default Loader
