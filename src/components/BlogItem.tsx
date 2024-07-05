import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BlogType } from './Blogs'

type BlogItemProps = {
  blog: BlogType
  index: number
  imageLoaded: boolean[]
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

const BlogItem: React.FC<BlogItemProps> = ({ blog, index, imageLoaded, setImageLoaded }) => {
  return (
    <Link to='/blog/detail' state={{ id: blog.id }}>
      <article
        key={'blog-item-' + index}
        className='flex h-blogItem cursor-pointer flex-row gap-x-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'
      >
        <div className='box-img w-2/5'>
          {imageLoaded[index] === undefined && (
            <img
              className={`h-full w-full rounded object-cover ${imageLoaded[index] === undefined ? 'block' : 'hidden'}`}
              src={require('../resources/img/image_loading.gif')}
              alt={`img-blog-${index}`}
            />
          )}
          <img
            className={`h-full w-full rounded object-cover ${imageLoaded[index] ? 'block' : 'hidden'}`}
            src={blog.img}
            alt={`img-blog-${index}`}
            onLoad={() => {
              setImageLoaded((prevImageLoaded) => {
                const newArr = [...prevImageLoaded]
                newArr[index] = true
                return newArr
              })
            }}
          />
        </div>
        <div className='w-3/5'>
          <h2 className='mb-2 max-h-blogTitle overflow-hidden text-ellipsis text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {blog.title}
          </h2>
          <p className='max-w-blogItem h-blogShortContent overflow-hidden text-ellipsis font-light text-gray-500 dark:text-gray-400'>
            {blog.description}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default BlogItem
