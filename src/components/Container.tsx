import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className='container mx-auto max-w-7xl px-6 lg:px-8'>{children}</div>
    </>
  )
}

export default Container
