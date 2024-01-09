import { ReactLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

import Footer from './Footer'
import HomeHeader from './HomeHeader'
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
}

const Layout = ({
  title,
  description,
  hasFooter = true,
  children,
  hasOnlyMobileFooter = false,
  className,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Versus Artist` : 'Versus Artist'}</title>
        <meta name="description" content={description} />
      </Head>

      <ReactLenis root>
        <div className={clsx(unbounded.variable, oktaNeue.variable, className)}>
          <LeftSocialsBar />
          <HomeHeader />
          <main>{children}</main>
          {hasFooter && <Footer desktopHidden={hasOnlyMobileFooter} />}
        </div>
      </ReactLenis>
    </>
  )
}

export default Layout
