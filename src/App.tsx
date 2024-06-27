import Header from 'components/Header'
import BlogPage from 'pages/BlogPage/BlogPage'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
