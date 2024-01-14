import { Product } from '~/lib/sanity.queries'
import ProductCard from './ProductCard'

const RelatedProducts = ({ products }: { products: Product[] }) => {
  return (
    <section className="pb-[120px]">
      <div className="container">
        <h2 className="uppercase text-[28px] lg:mb-[52px] !leading-tight mb-[42px] text-center font-bold md:text-[40px] 1.5xl:text-[62px]">
          Related Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] lg:gap-[70px] max-w-[970px] mx-auto">
          {products?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
