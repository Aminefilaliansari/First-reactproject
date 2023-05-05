import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'



const router = createBrowserRouter([

  {
    path :"/",
    element: <Root/>,
    children : [

      {
        path:"Home",
        element: <Home/>,
    
      },
      {
        path:"About",
        element: <About/>,
    
      }

    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
