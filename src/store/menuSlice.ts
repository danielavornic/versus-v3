import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  isOpen: boolean
}

const initialState: MenuState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen
    },
    showMenu: (state) => {
      state.isOpen = true
    },
    hideMenu: (state) => {
      state.isOpen = false
    },
  },
})

export const { toggleMenu, showMenu, hideMenu } = menuSlice.actions

export default menuSlice.reducer
