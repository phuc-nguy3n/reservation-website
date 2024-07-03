import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlogItems, BlogType } from '../components/Blogs'

const initialState: BlogItems = []

const blogSlice = createSlice({
  name: 'blogList',
  initialState,

  reducers: {
    init: (state, action: PayloadAction<any>) => {
      return action.payload
    },
    addBlog: (state, action: PayloadAction<BlogType>) => {
      state.unshift(action.payload)
    }
  }
})

export const { addBlog, init } = blogSlice.actions
export default blogSlice.reducer
