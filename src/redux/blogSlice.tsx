import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlogItems, BlogType } from '../components/Blogs'

const initialState: BlogItems = [
  {
    title: 'How to quickly deploy a static website',
    img: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.'
  }
]

const blogSlice = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogType>) => {
      state.unshift(action.payload)
    }
  }
})

export const { addBlog } = blogSlice.actions
export default blogSlice.reducer
