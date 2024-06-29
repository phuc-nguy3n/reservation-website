import { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import FormData from './FormData'
import { useAppSelector } from '../hooks/hooks'

export type BlogType = {
  title: string
  img: string
  description: string
}

type ModalType = boolean

export type BlogItems = BlogType[]

const Blogs = () => {
  const blogList = useAppSelector((state) => state.blogList)

  const [isOpenModal, setIsOpenModal] = useState<ModalType>(false)

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
          <div className='grid gap-8 lg:grid-cols-2'>
            {blogList.map((blog, index) => (
              <BlogItem blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {isOpenModal && <FormData open={isOpenModal} setOpen={setIsOpenModal} />}
    </>
  )
}

export default Blogs
