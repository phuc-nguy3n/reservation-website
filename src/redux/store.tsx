import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogSlice'

export const store = configureStore({
  reducer: {
    blogList: blogReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
