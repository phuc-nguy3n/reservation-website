import { Dialog, DialogBackdrop } from '@headlessui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { BlogType, BlogItems } from './Blogs'
import { useAppDispatch } from '../hooks/hooks'
import { addBlog } from '../redux/blogSlice'

type FormDataProps = {
  open: boolean
  blogList: BlogItems
  setOpen: Dispatch<SetStateAction<boolean>>
  setBlogList: Dispatch<React.SetStateAction<BlogItems>>
}

const FormData: React.FC<FormDataProps> = ({ open, blogList, setOpen, setBlogList }) => {
  const dataInit: BlogType = {
    title: '',
    img: '',
    description: ''
  }

  const inputFiels = [
    {
      id: 'title',
      label: 'Title',
      placeHolder: 'Title here...'
    },

    {
      id: 'img',
      label: 'Featured Image',
      placeHolder: 'Featured Image here...'
    }
  ]

  const dispatch = useAppDispatch()

  const [blogData, setBlogData] = useState<BlogType>(dataInit)

  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target

    setBlogData({
      ...blogData,
      [name]: value
    })
  }

  const hanlePostBlog = () => {
    if (blogData.title && blogData.img && blogData.description) {
      setBlogList([blogData, ...blogList])
      setOpen(false)
      dispatch(addBlog(blogData))
    }
  }

  return (
    <>
      <Dialog className='relative z-10' open={open} onClose={setOpen}>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
            <div className='rounded bg-white p-6 lg:min-w-custom'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900'>Add New Blog</h2>
              <p className='mt-2 text-sm leading-6 text-gray-600'>Add new articles to your experience</p>

              <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6'>
                {inputFiels.map((item) => (
                  <div className='col-span-full'>
                    <label htmlFor={item.id} className='block text-start text-sm font-medium leading-6 text-gray-900'>
                      {item.label}
                    </label>
                    <div className='mt-2'>
                      <input
                        onChange={handleOnChange}
                        type='text'
                        name={item.id}
                        id={item.id}
                        autoComplete={item.id}
                        className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        placeholder={item.placeHolder}
                      />
                    </div>
                  </div>
                ))}

                <div className='col-span-full'>
                  <label
                    htmlFor={'description'}
                    className='block text-start text-sm font-medium leading-6 text-gray-900'
                  >
                    Description
                  </label>
                  <div className='mt-2'>
                    <textarea
                      onChange={handleOnChange}
                      id='description'
                      name='description'
                      rows={3}
                      className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                      placeholder='Description here...'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-6 flex justify-end gap-x-2'>
                <button
                  onClick={() => hanlePostBlog()}
                  className='rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700'
                >
                  Post
                </button>
                <button
                  onClick={() => {
                    setOpen(false)
                  }}
                  className='rounded bg-gray-400 px-4 py-2 font-bold text-white hover:bg-gray-500'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default FormData
