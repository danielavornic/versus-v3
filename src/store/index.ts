import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import menuReducer from './menuSlice'
import socialsReducer from './socialsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    socials: socialsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
