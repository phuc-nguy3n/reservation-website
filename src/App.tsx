import Header from 'components/Header'
import FormData from 'components/FormData'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='App'>
      <Header setOpen={setOpen} />
      <div className='container mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex justify-end'></div>
      </div>

      <FormData open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
