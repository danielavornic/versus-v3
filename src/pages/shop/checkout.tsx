import CartCheckoutForm from '~/components/cart/CartCheckoutForm'
import CartSummary from '~/components/cart/CartSummary'
import Layout from '~/components/layout'

const CheckoutPage = () => {
  return (
    <Layout title="Checkout">
      <section className="bg-[#fff] pt-[25px] md:pt-[35px] pb-[220px]">
        <div className="container">
          <h1 className="text-[38px] uppercase font-bold text-center mb-[73px] title lg:text-[50px] 1.5xl:text-[64px] 3xl:text-[93px]">
            Checkout
          </h1>

          <div className="flex flex-col-reverse lg:flex-row lg:justify-between 3xl:justify-center 3xl:space-x-[285px] lg:space-y-0">
            <CartCheckoutForm />
            <CartSummary />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CheckoutPage
