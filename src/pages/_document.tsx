import { Head, Html, Main, NextScript } from 'next/document'

import Loader from '~/components/common/Loader'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="invisible-scrollbar">
        <Main />
      </body>
      <Loader />
      <NextScript />
    </Html>
  )
}
