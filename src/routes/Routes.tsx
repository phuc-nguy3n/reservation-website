import App from 'App'
import AboutPage from 'pages/AboutPage/AboutPage'
import BlogPage from 'pages/BlogPage/BlogPage'
import HomePage from 'pages/HomePage/HomePage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'blog', element: <BlogPage /> }
    ]
  }
])
