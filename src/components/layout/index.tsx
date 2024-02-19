import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'

import { useAppDispatch } from '~/store/hooks'
import { reset } from '~/store/socialsSlice'

import Footer from './Footer'
import Header from './Header'
import LeftSocialsBar from './LeftSocialsBar'
import useLocoScroll from '~/hooks/useLocoScroll'

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
        <main className="w-screen">{children}</main>
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
