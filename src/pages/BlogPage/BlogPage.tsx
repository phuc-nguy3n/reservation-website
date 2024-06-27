import Blogs from 'components/Blogs'
import Container from 'components/Container'
import React from 'react'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <Container>
      <Blogs />
    </Container>
  )
}

export default BlogPage
