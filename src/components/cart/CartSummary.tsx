import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppSelector } from '~/store/hooks'

import CartItem from './CartItem'

const CartSummary = () => {
  const cart = useAppSelector((state) => state.cart)

  const { push } = useRouter()

  useEffect(() => {
    if (cart.items.length === 0) {
      push('/shop')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.items.length])

  return (
    <div className="mb-[92px] lg:mb-0 lg:pt-[42px]">
      <h2 className="text-[20px] font-bold mb-[28px]">Sumar Comandă</h2>

      <div className="space-y-[42px] lg:min-w-[400px] xl:min-w-[500px] 3xl:min-w-[650px]">
        {cart.items.map((item) => (
          <CartItem key={item.product._id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CartSummary
