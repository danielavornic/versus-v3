import { GetServerSideProps } from 'next'
import React from 'react'

import Layout from '~/components/layout'
import MerchTitle from '~/components/shop/MerchTitle'
import ProductCard from '~/components/shop/ProductCard'
import RelatedMerchBanners from '~/components/shop/RelatedMerchBanners'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getProductsByArtist, Product } from '~/lib/sanity.queries'
import { SharedPageProps } from '~/pages/_app'

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    products: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const products = await getProductsByArtist(
    client,
    'd07da7e2-6ee9-4260-a81b-f53bce1f993b',
  )

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      products,
    },
  }
}

const SatoshiMerch = ({ products }: { products: Product[] }) => {
  return (
    <Layout title="Satoshi Merch" className="bg-white">
      <section className="bg-[#fff] pt-[43px] lg:pt-[34px] pb-[220px] md:pb-[120px] lg:pb-[70px]">
        <div className="container relative">
          <MerchTitle
            mobileTitle="Merch Satoshi"
            desktopTitle="Merch Satoshi"
          />
          <div className="mb-[120px] 3xl:mb-[320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 1.5xl:gap-[70px] max-w-[1490px] mx-auto">
            {products?.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <RelatedMerchBanners artist="satoshi" />
        </div>
      </section>
    </Layout>
  )
}

export default SatoshiMerch
