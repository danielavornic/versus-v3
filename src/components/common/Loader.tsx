import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import React from 'react'
import Div100vh from 'react-div-100vh'

const unbounded = Unbounded({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--font-unbounded',
})

const year = new Date().getFullYear()

const Loader = () => {
  return (
    <Div100vh
      id="global-loader"
      className={clsx(
        'w-screen bg-black fixed z-[100] top-0 flex justify-center flex-col pb-[86px]',
        unbounded.variable,
      )}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full hidden lg:block"
      >
        <source src="/videos/loader.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full lg:hidden"
      >
        <source src="/videos/loader-mobile.mp4" type="video/mp4" />
      </video>

      <p className="text-[10px] text-center text-alm-white">
        © {year} VERSUSARTIST All Rights Reserved.
      </p>
    </Div100vh>
  )
}

export default Loader
