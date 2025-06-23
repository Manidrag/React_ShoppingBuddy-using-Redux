import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Provider } from 'react-redux'
import CartStore from './Redux/Store.jsx'
import ProductList from './components/Product_List.jsx'
const Cart = React.lazy(() => import('./components/Cart.jsx'));
const ProductDetails=React.lazy(()=> import( './components/Product_Details.jsx'))
import NotFound from './components/Error.jsx'
const route=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<ProductList/> },
      {
        path:"/product/:id",
        element:<ProductDetails/>
      }
      ,{
    path:"/cart",
    element:<Cart/>
  }
    ],
    errorElement:<NotFound/>
  },
  
])




createRoot(document.getElementById('root')).render(

  <React.Suspense fallback={<Loader />}>
    <StrictMode>
      <Provider store={CartStore}>
        <RouterProvider router={route} />
      </Provider>
    </StrictMode>
  </React.Suspense>
)
