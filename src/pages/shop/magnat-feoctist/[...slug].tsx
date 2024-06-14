import { GetServerSideProps } from 'next'

import Layout from '~/components/layout'
import MerchTitle from '~/components/shop/MerchTitle'
import ProductOverview from '~/components/shop/ProductOverview'
import RelatedMerchBanners from '~/components/shop/RelatedMerchBanners'
import RelatedProducts from '~/components/shop/RelatedProducts'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getProductById, getProductBySlug, Product } from '~/lib/sanity.queries'
import { SharedPageProps } from '~/pages/_app'

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    product: any
    relatedProducts: any
  }
> = async ({ params, draftMode = false }) => {
  const slug = params?.slug
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const product = await getProductBySlug(client, String(slug))

  const relatedProductsPromises = product?.relatedProducts.map(
    async (product: any) => {
      return await getProductById(client, product._ref)
    },
  )
  const relatedProducts = await Promise.all(relatedProductsPromises || [])

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      product,
      relatedProducts,
    },
  }
}

const MagnatFeoctistProduct = ({
  product,
  relatedProducts,
}: {
  product: Product
  relatedProducts: Product[]
}) => {
  const { title } = product

  return (
    <Layout title={title} className="bg-[#fff]">
      <section>
        <div className="container relative">
          <MerchTitle
            mobileTitle="MERCH MAGNAT & FEOCTIST"
            desktopTitle="MERCH MAGNAT & FEOCTIST"
            hideGrayTitles
            link="/shop/magnat-feoctist"
          />
        </div>
      </section>
      <ProductOverview product={product} />
      <RelatedProducts products={relatedProducts} hasPadding />
      <RelatedMerchBanners artist="magnat-feoctist" />
    </Layout>
  )
}

export default MagnatFeoctistProduct
