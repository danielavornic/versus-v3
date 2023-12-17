import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import { PropsWithChildren, useEffect } from 'react'

import HomeHeader from './HomeHeader'
import LeftSocialsBar from './LeftSocialsBar'

const unbounded = Unbounded({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-unbounded',
})

const oktaNeue = localFont({
  src: './../../assets/OktaNeue-Regular.woff2',
  variable: '--font-okta',
})

interface LayoutProps {
  title?: string
  description?: string
}

const Layout = ({
  title,
  description,
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Versus Artist` : 'Versus Artist'}</title>
        <meta name="description" content={description} />
      </Head>

      {/* TODO: config lenis */}
      <ReactLenis root>
        <div className={clsx(unbounded.variable, oktaNeue.variable)}>
          <LeftSocialsBar />
          <HomeHeader />
          <main>{children}</main>
        </div>
      </ReactLenis>
    </>
  )
}

export default Layout
