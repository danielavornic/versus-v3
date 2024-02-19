import clsx from 'clsx'
import Link from 'next/link'

import { Facebook, Instagram, TikTok, YouTube } from '~/icons'

const footerLinks = [
  {
    name: 'Artists',
    link: '/#artists',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Booking',
    link: '/#booking',
  },
  {
    name: 'Production & Mix Master',
    link: '/#production',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const year = new Date().getFullYear()

const Footer = ({ desktopHidden = false, hideDesktopLinks = false }) => {
  return (
    <footer
      className={clsx(
        'bg-black text-white pt-[70px] pb-[50px] lg:pt-[100px] lg:pb-[100px]',
        {
          'lg:hidden': desktopHidden,
        },
      )}
    >
      <div className="container 3xl:px-[160px]">
        <div
          className={clsx(
            'flex flex-col space-y-[82px] lg:flex-row justify-between lg:justify-center items-center lg:space-y-0',
            {
              'lg:hidden': hideDesktopLinks,
            },
          )}
        >
          <div className="flex flex-col text-center items-center justify-center">
            <h2 className="text uppercase title text-[52px] leading-[1] font-extrabold mb-[24px] lg:mb-[70px]">
              versus <br />
              artist
            </h2>
            <ul className="space-y-[22px] lg:flex lg:space-y-0 lg:justify-center lg:space-x-[24px] xl:space-x-[52px] text-center lg:text-left">
              {footerLinks.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={`${process.env.NEXT_PUBLIC_HOST}/${link}`}
                    className="text-[18px] font-semibold uppercase lg:text-[20px] hover:text-[#CBD2DC] transition-all revealing-words"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            'flex flex-col items-center justify-center mt-[120px] md:mt-[95px] 2xl:flex-row-reverse lg:flex-col-reverse 1.5xl:justify-between',
            {
              '1.5xl:!justify-center': hideDesktopLinks,
            },
          )}
        >
          <div
            className={clsx(
              'space-y-[34px] text-center md:flex md:space-y-0 md:space-x-[28px] 3xl:space-x-[64px] lg:mt-[70px] 2xl:mt-0',
              {
                'lg:hidden': hideDesktopLinks,
              },
            )}
          >
            <a
              href="https://maps.app.goo.gl/D6X7mPgLgAtyg9H56"
              target="_blank"
              className="block revealing-line hover:text-[#CBD2DC] transition-all"
            >
              Hîncești Highway 61, Chișinău
            </a>
            <a
              href="tel:+373022544344"
              target="_blank"
              className="block revealing-line hover:text-[#CBD2DC] transition-all"
            >
              022 544 344
            </a>
            <a
              href="mailto:contact@versusartist.com"
              target="_blank"
              className="block revealing-line hover:text-[#CBD2DC] transition-all"
            >
              contact@versusartist.com
            </a>
          </div>

          <p className="text-alm-white text-[13px] revealing-line text-center mt-[70px] mb-[57px] md:hidden">
            &copy; {year} VERSUSARTIST. All rights reserved.
          </p>

          <div className="flex items-center justify-center space-x-[57px] md:mt-[42px] 1.5xl:mt-0 1.5xl:space-x-[28px] 3xl:space-x-[57px]">
            <img
              src="/versus-icon.svg"
              alt="versus icon"
              className="w-[45px] lg:w-[57px]"
            />

            <p className="text-alm-white revealing-line hidden md:block text-center">
              &copy; {year} VERSUSARTIST. All rights reserved.
            </p>

            <div className="flex space-x-[16px]">
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
                href="https://www.tiktok.com/@versusartist_musiclabel"
                className="w-[15px] h-auto hover:text-tiktok transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <TikTok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
