import { Head, Html, Main, NextScript } from 'next/document'

import Loader from '~/components/common/Loader'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Loader />
        <Main />
      </body>
      <NextScript />
    </Html>
  )
}
