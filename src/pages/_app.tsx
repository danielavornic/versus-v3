import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-datepicker/dist/react-datepicker.css'
import '~/styles/global.css'
import '~/styles/react-progress-btn.css'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import { lazy } from 'react'
import { useLayoutEffect } from 'react'
import SplitType from 'split-type'

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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to('.versus-logo', {
        yPercent: -20,
        duration: 1,
        delay: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.versus-logo',
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          toggleActions: 'play play reverse reverse',
        },
      })

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
                toggleActions: 'play play reverse reverse',
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
                toggleActions: 'play play reverse reverse',
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
                start: 'top 90%',
                end: 'top 40%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
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
                start: 'top 90%',
                end: 'top 30%',
                scrub: false,
                toggleActions: 'play play reverse reverse',
              },
            },
          )
        })
      })
    })

    return () => ctx?.revert()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </QueryClientProvider>
  )
}
