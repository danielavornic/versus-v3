/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import Div100vh from 'react-div-100vh'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'
import { useAppDispatch } from '~/store/hooks'
import { hideMenu } from '~/store/menuSlice'

const menuLinks = [
  {
    title: 'Artists',
    href: '/#artists',
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
    href: '/#booking',
  },
  {
    title: 'Production & Master',
    href: '/#production',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const year = new Date().getFullYear()

const HomeMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { pathname, asPath, query } = useRouter()
  const isShop = pathname.includes('/shop')

  const dispatch = useAppDispatch()

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
    <Div100vh
      className={clsx(
        'fixed top-0 z-30 w-screen flex text-alm-white transition-all items-stretch duration-700 ease-out',
        {
          'opacity-100 visible': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
          'bg-[#fff]': isShop,
        },
      )}
    >
      <div
        className={clsx('w-[30px] lg:w-[50px] h-ful', {
          'bg-black': !isShop,
          'bg-white': isShop,
        })}
      />
      <div
        className={clsx(
          'w-[calc(100vw-60px)] lg:w-[calc(100vw-100px)] bg-black backdrop-blur-sm bg-opacity-70 h-[calc(100vh-80px)] flex flex-col mt-[80px] bg-cover bg-center',
          {
            '!bg-opacity-100': isShop,
          },
        )}
      >
        {pathname !== '/' && (
          <div className="container relative">
            <video
              autoPlay
              muted
              loop
              poster="/images/home-video-poster.png"
              className="absolute bottom-0 left-0 right-0 top-0 z-0 w-[calc(100vw-60px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-100px)] block mx-auto h-screen object-cover"
            >
              <source src="/videos/home-video-bw.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        <ul className="space-y-6 max-w-[280px] md:max-w-none mx-auto mt-[10vh] lg:mt-[30px] 3xl:mt-[80px]">
          {menuLinks.map((link, i) => (
            <li
              key={i}
              className="text-[34px] md:text-[50px] md:mx-10 lg:mx-0 md:leading-[1.25] 2xl:text-[64px] link font-medium uppercase text-white hover:text-[#CBD2DC] transition-all text-center"
            >
              <Link href={link.href} onClick={() => dispatch(hideMenu())}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:flex-row space-y-[5px] menu-footer absolute bottom-[30px] md:bottom-[60px] 2xl:bottom-[70px] left-0 right-0 lg:space-x-[57px] justify-center lg:space-y-0 items-center">
          <p className="text-[10px] lg:text-[13px] mb-5 lg:mb-0">
            © {year} VERSUSARTIST All Rights Reserved.
          </p>

          <div className="flex lg:text items-center text-alm-white">
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
              className="w-[17px] h-auto mr-[18px] hover:text-youtube transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <YouTube />
            </a>
            <a
              href="https://www.tiktok.com/@versusartist_musiclabel"
              className="w-[15px] h-auto hover:text-tiktok transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <TikTok />
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
      <div
        className={clsx('w-[30px] lg:w-[50px] h-ful', {
          'bg-black': !isShop,
          'bg-white': isShop,
        })}
      />
    </Div100vh>
  )
}

export default HomeMenu
