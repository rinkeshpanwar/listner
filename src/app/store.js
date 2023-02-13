import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from './slice/searchSlice'
import { authSlice } from './slice/authSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: authSlice.reducer,
  },
})