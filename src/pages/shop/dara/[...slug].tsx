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

  const productVariantsPromises = product?.variants.map(
    async (variant: any) => {
      return await getProductById(client, variant.product._ref)
    },
  )

  const productVariants = await Promise.all(productVariantsPromises || [])

  product.variants.forEach((variant: any) => {
    const product = productVariants.find(
      (product) => product._id === variant.product._ref,
    )
    variant.product = product
  })

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      product,
      relatedProducts,
    },
  }
}

const SatoshiProduct = ({
  product,
  relatedProducts,
}: {
  product: Product
  relatedProducts: Product[]
  productVariants: Product[]
}) => {
  const { title } = product

  return (
    <Layout title={title} className="bg-[#fff]">
      <img
        src="/images/shop/dara-name.png"
        alt="dara"
        className="absolute left-0 z-1 hidden 1.5xl:block top-[300px]"
      />
      <section>
        <div className="container relative">
          <MerchTitle
            mobileTitle="Merch Dara"
            desktopTitle="Merch Dara"
            hideGrayTitles
            link="/shop/dara"
          />
        </div>
      </section>
      <ProductOverview product={product} />
      <RelatedProducts products={relatedProducts} />
      <RelatedMerchBanners artist="dara" />
    </Layout>
  )
}

export default SatoshiProduct
