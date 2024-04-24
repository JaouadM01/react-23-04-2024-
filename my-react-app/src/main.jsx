import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx';
import Other from './routes/Other.jsx';
import ProductPage from './routes/ProductPage.jsx';
import Homepage from './routes/Homepage.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/other', element: <Other />},
  {path: '/products', element: <ProductPage />},
  {path: '/home', element: <Homepage />},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
