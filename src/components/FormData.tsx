import { Dialog, DialogBackdrop } from '@headlessui/react'
import { Dispatch, SetStateAction } from 'react'

type FormDataProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const FormData: React.FC<FormDataProps> = ({ open, setOpen }) => {
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
                <div className='col-span-full'>
                  <label htmlFor='title-blog' className='block text-start text-sm font-medium leading-6 text-gray-900'>
                    Title
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='title-blog'
                      id='title-blog'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      placeholder='Title here...'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='featured-img-blog'
                    className='block text-start text-sm font-medium leading-6 text-gray-900'
                  >
                    Featured Image
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='featured-img-blog'
                      id='featured-img-blog'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      placeholder=' Featured Image here...'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='description-blog'
                    className='block text-start text-sm font-medium leading-6 text-gray-900'
                  >
                    Description
                  </label>
                  <div className='mt-2'>
                    <textarea
                      id='description-blog'
                      name='description-blog'
                      rows={3}
                      className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                      placeholder='Description here...'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-6 flex justify-end gap-x-2'>
                <button className='rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700'>Post</button>
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
