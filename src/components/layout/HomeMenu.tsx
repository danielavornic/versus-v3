/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useLayoutEffect } from 'react'

import { Facebook, Instagram, YouTube } from '~/icons'

const menuLinks = [
  {
    title: 'Artists',
    href: '#artists',
  },
  {
    title: 'Shop',
    href: '/shop',
  },
  {
    tite: 'Unsession',
    href: '/unsession',
  },
  {
    title: 'Booking',
    href: '#booking',
  },
  {
    title: 'Prod & Master',
    href: '#prod-master',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

const HomeMenu = ({ isOpen }: { isOpen: boolean }) => {
  useLayoutEffect(() => {
    if (!isOpen) return

    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        '.link',
        { opacity: 0, yPercent: -80 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.1,
          ease: 'power4',
          delay: 0.5,
        },
      )

      tl.fromTo(
        '.menu-footer',
        { opacity: 0, yPercent: 80 },
        {
          opacity: 1,
          yPercent: 0,
          ease: 'power4',
          duration: 1,
        },
        '>',
      )
    })

    return () => ctx?.revert()
  }, [isOpen])

  return (
    <div
      className={clsx(
        'fixed top-0 z-30 h-screen w-full flex bg-black text-alm-white transition-all items-stretch duration-700 ease-out',
        {
          'opacity-100 visible': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
        },
      )}
    >
      <div className="w-[30px] lg:w-[50px] h-full" />
      <div
        className="w-full bg-opacity-100 h-[calc(100vh-80px)] flex flex-col mt-[80px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://cdn.sanity.io/images/ny7niosc/production/c63856b8621d8e5c86758780dcd333825d3e9d9c-1820x1000.png)',
        }}
      >
        <ul className="space-y-6 max-w-[250px] md:max-w-none mx-auto mt-[10vh] lg:mt-[60px] 3xl:mt-[80px]">
          {menuLinks.map((link) => (
            <li
              key={link.title}
              className="text-[34px] md:text-[50px] 2xl:text-[64px] link font-medium uppercase text-white text-center"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:flex-row space-y-[50px] menu-footer absolute bottom-[30px] md:bottom-[60px] 2xl:bottom-[70px] left-0 right-0 lg:space-x-[57px] justify-center lg:space-y-0 items-center">
          <p className="text-[10px] lg:text-[13px]">
            © 2023 VERSUSARTIST All Rights Reserved.
          </p>

          <div className="flex lg:text items-center">
            <img
              src="/versus-icon.svg"
              alt="versus icon"
              className="w-[45px] mr-[50px] lg:w-[57px]"
            />

            <a
              href="https://www.instagram.com/versus.artist/"
              className="w-[16px] h-auto hover:text-instagram transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/versus.artist"
              className="w-[10px] h-auto mx-[18px] hover:text-facebook transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.youtube.com/c/soundversus"
              className="w-[17px] h-auto hover:text-youtube transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <YouTube />
            </a>

            <a
              href="https://brmg.md"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:block ml-[57px] font-thin text-[13px]"
            >
              part of BRMG
            </a>
          </div>
        </div>
      </div>
      <div className="w-[30px] lg:w-[50px] h-full" />
    </div>
  )
}

export default HomeMenu
