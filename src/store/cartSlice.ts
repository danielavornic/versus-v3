import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { Product } from '~/lib/sanity.queries'
import { CartItem } from '~/types/product'

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0,
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; qty: number; size: string }>,
    ) => {
      const { product, qty, size } = action.payload

      const item = state.items.find(
        (item) => item.product._id === product._id && item.size === size,
      )
      if (item) {
        item.quantity += qty
      } else {
        state.items.push({
          product,
          quantity: qty,
          size,
        })
      }
      state.total += product.price * qty
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ product: Product; size: string }>,
    ) => {
      const { product, size } = action.payload
      const item = state.items.find(
        (item) => item.product._id === product._id && item.size === size,
      )
      if (item) {
        state.items = state.items.filter(
          (item) => item.product._id !== product._id || item.size !== size,
        )
        state.total -= product.price * item.quantity
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = shopSlice.actions

export default shopSlice.reducer
