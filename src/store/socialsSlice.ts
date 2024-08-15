import { createSlice } from '@reduxjs/toolkit'

interface SocialsState {
  tiktok: string
  insta: string
  fb: string
  yt: string
}

const initialState: SocialsState = {
  tiktok: 'https://www.tiktok.com/@versusartist_musiclabel',
  insta: 'https://www.instagram.com/versusartist/',
  fb: 'https://www.facebook.com/VersusArtistsLabel/',
  yt: 'https://www.youtube.com/@versusartist',
}

export const socialsSlice = createSlice({
  name: 'socials',
  initialState,
  reducers: {
    updateSocials: (state, action) => {
      state.tiktok = action.payload.tiktok
      state.insta = action.payload.insta
      state.fb = action.payload.fb
      state.yt = action.payload.yt
    },
    reset: (state) => {
      state.tiktok = initialState.tiktok
      state.insta = initialState.insta
      state.fb = initialState.fb
      state.yt = initialState.yt
    },
  },
})

export const { updateSocials, reset } = socialsSlice.actions

export default socialsSlice.reducer
