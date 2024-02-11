import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-datepicker/dist/react-datepicker.css'
import '~/styles/global.css'
import '~/styles/react-progress-btn.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
import { lazy, useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import SplitType from 'split-type'

import Loader from '~/components/common/Loader'
import { store } from '~/store'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps

  const queryClient = new QueryClient()

  const { pathname } = useRouter()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      const artistNames = document.querySelectorAll('.artist-name')
      artistNames.forEach((char) => {
        const split = new SplitType(char as HTMLElement, {
          types: 'lines',
        })

        split.lines.forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.05,
              scrollTrigger: {
                trigger: char,
                start: 'top 90%',
                end: 'top 50%',
                scrub: false,
                // toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const titles = document.querySelectorAll('.title')
      titles.forEach((title) => {
        const split = new SplitType(title as HTMLElement, {
          types: 'chars',
        })
        split.chars.forEach((line, i) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.2,
              ease: 'power2.out',
              stagger: 0.035,
              delay: i * 0.025,
              scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                end: 'top 50%',
                scrub: false,
                // toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const revealingLines = document.querySelectorAll('.revealing-line')
      revealingLines.forEach((line) => {
        const split = new SplitType(line as HTMLElement, {
          types: 'lines',
        })
        split.lines.forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.05,
              scrollTrigger: {
                trigger: line,
                start: 'top 95%',
                end: 'top 80%',
                scrub: false,
                // toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })

      const revealingWords = document.querySelectorAll('.revealing-words')
      revealingWords.forEach((text) => {
        const split = new SplitType(text as HTMLElement, {
          types: 'words',
        })

        split.words.forEach((c, i) => {
          gsap.fromTo(
            c,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.5,
              ease: 'power2.out',
              stagger: 0.05,
              delay: 0.05,
              scrollTrigger: {
                trigger: c,
                start: 'top 100%',
                end: 'top 50%',
                scrub: false,
                // toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })
    })

    return () => ctx?.revert()
  }, [pathname])

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true))
    Router.events.on('routeChangeComplete', () => setLoading(false))
    Router.events.on('routeChangeError', () => setLoading(false))
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true))
      Router.events.off('routeChangeComplete', () => setLoading(false))
      Router.events.off('routeChangeError', () => setLoading(false))
    }
  }, [])

  if (loading) return <Loader />

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </Provider>
    </QueryClientProvider>
  )
}
