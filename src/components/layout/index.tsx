import { ReactLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import SplitType from 'split-type'

import { useAppDispatch } from '~/store/hooks'
import { reset } from '~/store/socialsSlice'

import Footer from './Footer'
import Header from './Header'
import LeftSocialsBar from './LeftSocialsBar'

const unbounded = Unbounded({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-unbounded',
})

const oktaNeue = localFont({
  src: './../../assets/OktaNeue-Regular.woff2',
  variable: '--font-okta',
})

interface LayoutProps {
  title?: string
  description?: string
  hasFooter?: boolean
  hasOnlyMobileFooter?: boolean
  className?: string
  fullHeight?: boolean
  hideDesktopLinks?: boolean
}

const Layout = ({
  title,
  description,
  hasFooter = true,
  children,
  hasOnlyMobileFooter = false,
  className,
  hideDesktopLinks,
}: PropsWithChildren<LayoutProps>) => {
  const { pathname } = useRouter()
  const isShop = pathname.includes('shop')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pathname !== '/booking') {
      dispatch(reset())
    }
  }, [pathname, dispatch])

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.registerPlugin(ScrollTrigger)

  //     const titles = document.querySelectorAll('.title')
  //     titles.forEach((title) => {
  //       const split = new SplitType(title as HTMLElement, {
  //         types: 'chars',
  //       })
  //       split.chars.forEach((line, i) => {
  //         gsap.fromTo(
  //           line,
  //           { yPercent: 100 },
  //           {
  //             yPercent: 0,
  //             duration: 1.2,
  //             ease: 'power2.out',
  //             stagger: 0.035,
  //             delay: i * 0.025,
  //             scrollTrigger: {
  //               trigger: title,
  //               start: 'top 90%',
  //               end: 'top 70%',
  //               scrub: false,
  //               toggleActions: 'play play reverse reverse',
  //             },
  //           },
  //         )
  //       })
  //     })

  //     const revealingLines = document.querySelectorAll('.revealing-line')
  //     revealingLines.forEach((line) => {
  //       const split = new SplitType(line as HTMLElement, {
  //         types: 'lines',
  //       })
  //       split.lines.forEach((line) => {
  //         gsap.fromTo(
  //           line,
  //           { yPercent: 100 },
  //           {
  //             yPercent: 0,
  //             duration: 1,
  //             ease: 'power2.out',
  //             stagger: 0.05,
  //             scrollTrigger: {
  //               trigger: line,
  //               start: 'top 95%',
  //               end: 'top 70%',
  //               scrub: false,
  //               toggleActions: 'play play reverse reverse',
  //             },
  //           },
  //         )
  //       })
  //     })

  //     const revealingWords = document.querySelectorAll('.revealing-words')
  //     revealingWords.forEach((text) => {
  //       const split = new SplitType(text as HTMLElement, {
  //         types: 'words',
  //       })

  //       split.words.forEach((c, i) => {
  //         gsap.fromTo(
  //           c,
  //           { yPercent: 100 },
  //           {
  //             yPercent: 0,
  //             duration: 1,
  //             ease: 'power2.out',
  //             stagger: 0.05,
  //             delay: 0.05,
  //             scrollTrigger: {
  //               trigger: c,
  //               start: 'top 100%',
  //               end: 'top 70%',
  //               scrub: false,
  //               toggleActions: 'play play reverse reverse',
  //             },
  //           },
  //         )
  //       })
  //     })
  //   })

  //   return () => ctx?.revert()
  // }, [])

  return (
    <>
      <Head>
        <title>{title ? `${title} | Versus Artist` : 'Versus Artist'}</title>
        <meta name="description" content={description} />
      </Head>

      <div
        className={clsx(unbounded.variable, oktaNeue.variable, className)}
        id="app"
      >
        {!isShop && <LeftSocialsBar />}
        <Header />
        {hasFooter && (
          <Footer
            desktopHidden={hasOnlyMobileFooter}
            hideDesktopLinks={hideDesktopLinks}
          />
        )}
      </div>
    </>
  )
}

export default Layout
