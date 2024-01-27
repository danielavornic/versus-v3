import Link from 'next/link'
import { useEffect } from 'react'

import Layout from '~/components/layout'
import { clearCart } from '~/store/cartSlice'
import { useAppDispatch } from '~/store/hooks'

const CheckoutSuccess = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearCart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title="Comanda plasata">
      <section className="bg-[#fff] pt-[50px] md:pt-[100px] xl:pt-[150px] pb-[220px]">
        <div className="container text-center">
          <h1 className="text-[38px] uppercase font-bold text-center mb-[34px] title lg:text-[50px] 1.5xl:text-[64px] 3xl:text-[93px]">
            Thank you
          </h1>
          <h2 className="text-[24px] font-bold lg:text-[43px] leading-[1]">
            Your request <br />
            has been sent
          </h2>

          <Link
            href="/shop"
            className="mt-[47px] lg:mt-[60px] 1.5xl:mt-[94px] w-[350px] h-[55px] bg-black hover:bg-opacity-[0.85] transition-full active:bg-alm-white text-white uppercase flex items-center justify-center mx-auto"
          >
            Back to shop
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default CheckoutSuccess
