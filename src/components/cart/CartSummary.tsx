import { useAppSelector } from '~/store/hooks'

import CartItem from './CartItem'

const CartSummary = () => {
  const cart = useAppSelector((state) => state.cart)

  return (
    <div className="mb-[92px] lg:mb-0 lg:pt-[42px]">
      <h2 className="text-[20px] font-bold mb-[28px]">Sumar Comandă</h2>

      {cart.items.length === 0 ? (
        <div className="text-[18px] lg:min-w-[400px] xl:min-w-[500px] 3xl:min-w-[650px] font-medum mb-[28px]">
          Nu ai niciun produs în coș
        </div>
      ) : (
        <div className="space-y-[42px] lg:min-w-[400px] xl:min-w-[500px] 3xl:min-w-[650px]">
          {cart.items.map((item) => (
            <CartItem key={item.product._id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CartSummary
