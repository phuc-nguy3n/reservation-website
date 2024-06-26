const Blogs = () => {
  return (
    <>
      <section className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
          <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
            <h2 className='text-primary mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl'>Our Blog</h2>
            <p className='font-light text-gray-500 sm:text-xl'>
              Blog is a form for you to share your knowledge, experience and experiences.
            </p>
          </div>
          <div className='grid gap-8 lg:grid-cols-2'>
            <article className='h-blogItem flex flex-row gap-x-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'>
              <div className='box-img w-2/5'>
                <img
                  className='h-full w-full rounded object-cover'
                  src='https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
              <div className='w-3/5'>
                <h2 className='h-blogTitle mb-2 overflow-hidden text-ellipsis text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  How to quickly deploy a static website
                </h2>
                <p className='h-blogShortContent w-blogItem overflow-hidden text-ellipsis font-light text-gray-500 dark:text-gray-400'>
                  Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of
                  tools that even influence both web designers and developers influence both web designers and
                  developers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
