import { useState } from 'react'
import Home from './home.jsx'
import './App.css'

import Account from './assets/account.jsx'
import Blogs from './blog.jsx'
import Service from './service.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [themes] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home title="Kanha Saloon" />,
    },
    {
      path: '/account',
      element: <Account />,
    },
    {
      path: '/blogs',
      element: <Blogs />,
    },
    {
      path: '/services',
      element: <Service />,
    },
  ])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      themes ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App