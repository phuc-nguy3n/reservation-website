import Header from 'components/Header'
import FormData from 'components/FormData'
import { useState } from 'react'
import Container from 'components/Container'
import Blogs from 'components/Blogs'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='App'>
      <Header setOpen={setOpen} />
      <Container>
        <Blogs />
      </Container>

      <FormData open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
