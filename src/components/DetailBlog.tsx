import blogApi from 'api/blogAPI'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoadItem from './LoadItem'

const DetailBlog = () => {
  const location = useLocation()

  const [blog, setBlog] = useState<any>({})

  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false)

  useEffect(() => {
    fetchDetailBlog(location.state.id)
  }, [])

  const fetchDetailBlog = async (id: string) => {
    try {
      setLoadingBlogs(true)
      const res = await blogApi.getDetail(id)
      if (res) {
        setBlog(res)
        setTimeout(() => {
          setLoadingBlogs(false)
        }, 300)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      {loadingBlogs ? (
        <div className='flex h-full items-center justify-center'>
          <LoadItem />
        </div>
      ) : (
        <article className='format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl'>
          <div>
            <Link to='/blog'>
              <button className='rounded-full px-3 py-2.5 font-bold underline hover:text-violet-500'>Back</button>
            </Link>
          </div>
          <h2 className='mb-3 text-4xl font-bold'>{blog.title}</h2>
          <p className='my-5 text-justify'>{blog.description}</p>

          <figure>
            <img className='w-full rounded' src={blog.img} alt='img-blog-detail' />
            <figcaption className='mb-2 mt-1 text-center font-semibold'>This is an illustration.</figcaption>
          </figure>
        </article>
      )}
    </>
  )
}

export default DetailBlog
