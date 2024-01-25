import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Facebook, Instagram, YouTube } from '~/icons'

import LoadingButton from '../common/LoadingButton'

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
    link: '/booking',
  },
  {
    name: 'Prod & Master',
    link: '/production',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const year = new Date().getFullYear()

const Footer = ({ desktopHidden = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    trigger,
  } = useForm({
    mode: 'onChange',
  })
  const email = watch('email')

  const [buttonState, setButtonState] = useState('')
  const [showLoadingBtn, setShowLoadingBtn] = useState(false)

  const onSubmit = () => mutate()

  const { mutate } = useMutation({
    mutationFn: () => {
      const res = fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
      })
      console.log(res)
      return res
    },
    onSuccess: () => {
      setTimeout(() => {
        reset()
        setButtonState('success')
      }, 3000)

      setTimeout(() => {
        setShowLoadingBtn(false)
        setButtonState('')
      }, 6000)
    },
  })

  useEffect(() => {
    if (errors.email === undefined && email) {
      setShowLoadingBtn(true)
    }
  }, [errors, email])

  useEffect(() => {
    trigger()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <footer
      className={clsx(
        'bg-black text-white pt-[130px] pb-[50px] lg:pt-[100px] lg:pb-[70px]',
        {
          'lg:hidden': desktopHidden,
        },
      )}
    >
      <div className="container 3xl:px-[160px]">
        <div className="flex flex-col space-y-[82px] lg:flex-row justify-between items-center lg:space-y-0">
          <div className="flex flex-col text-center lg:text-left items-center justify-center lg:items-start">
            <h2 className="text uppercase title text-[52px] leading-[1] font-extrabold mb-[24px] lg:mb-[42px]">
              versus <br />
              artist
            </h2>
            <ul className="space-y-[22px] text-center lg:text-left">
              {footerLinks.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="text-[18px] font-semibold uppercase lg:text-[20px] revealing-words"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="flex flex-col items-center text-center justify-center lg:justify-start md:max-w-[450px] 1.5xl:max-w-[500px]"
            onSubmit={handleSubmit(onSubmit)}
            id="subscribe-form"
          >
            <h3 className="title text-[43px] lg:text-[56px] 1.5xl:text-[62px] font-medium uppercase leading-[1.15] bg-subscribeGradient bg-clip-text mb-[28px]">
              SUBSCRIBE <br />
              TO VERSUS
            </h3>
            <p className="text-[18px] revealing-line leading-[24px] 1.5xl:text-[20px] text-alm-white">
              Subscribe to receive email updates about Versus Artist’s projects
              and releases
            </p>
            <input
              placeholder="your email"
              type="email"
              className="w-[100%] mt-[24px] mb-[42px] p-[15px] rounded-[10px] text-xs bg-black border border-white text-white focus:outline-none max-w-[300px] md:max-w-[400px]"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                  message: 'Email-ul este invalid',
                },
              })}
            />
            {showLoadingBtn ? (
              <LoadingButton
                text="Subscribe"
                type="submit"
                form="subscribe-form"
                buttonState={buttonState}
                setButtonState={setButtonState}
              />
            ) : (
              <button
                type="submit"
                form="subscribe-form"
                className={clsx(
                  'text-[18px] cursor-not-allowed uppercase h-[64px] w-[240px] font-medium transition-all align-self-start justify-center border !leading-[14px] border-white inline-block',
                )}
              >
                Subscribe
              </button>
            )}
          </form>
        </div>

        <div className="flex flex-col items-center justify-center mt-[132px] md:mt-[100px] 1.5xl:flex-row-reverse 1.5xl:justify-between">
          <div className="space-y-[34px] text-center md:flex md:space-y-0 md:space-x-[28px] 3xl:space-x-[64px]">
            <a
              href="https://maps.app.goo.gl/D6X7mPgLgAtyg9H56"
              target="_blank"
              className="block"
            >
              Hîncești Highway 61, Chișinău
            </a>
            <a href="tel:+373022544344" target="_blank" className="block">
              022 544 344
            </a>
            <a
              href="mailto:contact@versusartist.com"
              target="_blank"
              className="block"
            >
              contact@versusartist.com
            </a>
          </div>

          <p className="text-alm-white text-[13px] text-center mt-[70px] mb-[57px] md:hidden">
            &copy; {year} VERSUSARTIST. All rights reserved.
          </p>

          <div className="flex items-center justify-center space-x-[57px] md:mt-[42px] 1.5xl:mt-0 1.5xl:space-x-[28px] 3xl:space-x-[57px]">
            <img
              src="/versus-icon.svg"
              alt="versus icon"
              className="w-[45px] lg:w-[57px]"
            />

            <p className="text-alm-white hidden md:block text-center">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
