import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './eshop/pages/home/home.jsx'
import Cart from './eshop/pages/cart/cart.jsx'
import Shop from './eshop/pages/shop/Shop.jsx'


const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/home', element: <Home />},
  {path: '/cart', element: <Cart />},
  {path: '/shop', element: <Shop />},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
