import { useState } from 'react'
import Home from './home.jsx'
import './App.css'
import Login from './assets/account.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Blogs from './blog.jsx';
import Account from './assets/account.jsx'
import Service from './service.jsx';

function App() {
  


const router= createBrowserRouter([

  {
    path: '/',
    element: <Home title="Kanha Saloon"  />,
  },
  { 
    path:"/account",
    element:<Account/>
  },
{
  path:"/blogs/:id",
  element:<Blogs/>
},
{
  path:"/services",
  element:<Service/>
},

])
  
let [themes, setThemes] = useState(false);
  return (
    < >
   

    <div
      className={`min-h-screen transition-colors duration-500 ${
        themes ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <RouterProvider router={router} />

      
    </div>

    
    
  
    </>
  )
}

export default App
