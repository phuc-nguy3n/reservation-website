import { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

type BlogItem = {
  title: string
  img: string
  description: string
}

type Blogs = BlogItem[]

const Blogs = () => {
  const blogsInit: Blogs = [
    {
      title: 'How to quickly deploy a static website',
      img: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.'
    }
  ]

  const [blogList, setBlogList] = useState<Blogs>([])

  useEffect(() => {
    fetchBlogData()
  }, [])

  const fetchBlogData = () => {
    setBlogList([...blogsInit])
  }

  return (
    <>
      <section className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
          <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl'>Our Blog</h2>
            <p className='font-light text-gray-500 sm:text-xl'>
              Blog is a form for you to share your knowledge, experience and experiences.
            </p>
          </div>
          <div className='grid gap-8 lg:grid-cols-2'>
            {blogList.map((blog, index) => (
              <BlogItem blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
