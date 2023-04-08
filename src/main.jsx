import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';
import Layout from './component/Layout/Layout';
import Grandpa from './component/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
