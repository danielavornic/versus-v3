import { ReactLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

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
  fullHeight = false,
  hideDesktopLinks,
}: PropsWithChildren<LayoutProps>) => {
  const { pathname } = useRouter()
  const isShop = pathname.includes('shop')

  const innerDiv = (
    <div
      className={clsx(unbounded.variable, oktaNeue.variable, className)}
      id="app"
    >
      {!isShop && <LeftSocialsBar />}
      <Header />
      <main className="mt-[80px]">{children}</main>
      {hasFooter && (
        <Footer
          desktopHidden={hasOnlyMobileFooter}
          hideDesktopLinks={hideDesktopLinks}
        />
      )}
    </div>
  )

  return (
    <>
      <Head>
        <title>{title ? `${title} | Versus Artist` : 'Versus Artist'}</title>
        <meta name="description" content={description} />
      </Head>

      {/* {!fullHeight ? <ReactLenis root>{innerDiv}</ReactLenis> : innerDiv} */}
      {innerDiv}
    </>
  )
}

export default Layout
