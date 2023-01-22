import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from './slice/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
})