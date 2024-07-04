import { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import FormData from './FormData'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import blogApi from '../api/blogAPI'
import { init } from '../redux/blogSlice'
import LoadItem from './LoadItem'

export type BlogType = {
  id: string
  title: string
  img: string
  description: string
}

type ModalType = boolean

export type BlogItems = BlogType[]

export const dataInit: BlogType = {
  id: '',
  title: '',
  img: '',
  description: ''
}

const Blogs = () => {
  const blogList = useAppSelector((state) => state.blogList)
  const dispatch = useAppDispatch()

  const [isOpenModal, setIsOpenModal] = useState<ModalType>(false)

  const [blogData, setBlogData] = useState<BlogType>(dataInit)

  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false)

  const [imageLoaded, setImageLoaded] = useState<boolean[]>([])

  useEffect(() => {
    fecthBlogList()
  }, [])

  const fecthBlogList = async () => {
    try {
      setLoadingBlogs(true)
      const res = await blogApi.getAll()
      if (res) {
        dispatch(init(res))
        setLoadingBlogs(false)
      }
    } catch (err) {
      console.log(err)
    }
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

          <div className='mb-5 flex justify-end'>
            <button
              onClick={() => setIsOpenModal(true)}
              className='rounded-full bg-violet-700 px-3 py-2.5 font-bold text-white hover:bg-violet-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='size-6'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </button>
          </div>

          {loadingBlogs ? (
            <div className='flex justify-center'>
              <LoadItem />
            </div>
          ) : (
            <div className='grid gap-8 lg:grid-cols-2'>
              {blogList.map((blog, index) => (
                <BlogItem blog={blog} index={index} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
              ))}
            </div>
          )}
        </div>
      </section>

      {isOpenModal && (
        <FormData open={isOpenModal} setOpen={setIsOpenModal} blogData={blogData} setBlogData={setBlogData} />
      )}
    </>
  )
}

export default Blogs
