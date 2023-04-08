import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './component/Product';
import Home from './component/Home';
const router = createBrowserRouter([

  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/product',
        element:<Product></Product> ,
        loader: ()=> fetch('tshirt.json'),
      },
      // {
      //   path:'/about',
      //   element: <About></About>,
      // }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
