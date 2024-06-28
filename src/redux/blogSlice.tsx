import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlogItems, BlogType } from '../components/Blogs'

const initialState: BlogItems = []

const blogSlice = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogType>) => {
      state.push(action.payload)
    }
  }
})

export const { addBlog } = blogSlice.actions
export default blogSlice.reducer
