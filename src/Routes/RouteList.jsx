import React from 'react'
import HomePage from '../Frontend/HomePage';
import Cart from '../Frontend/Cart';
import ProductDescription from '../Frontend/ProductDescription';

const RouteList =[
  {
      path: "/",
      element: <HomePage /> 
  },
  {
    path:"/Description",
    element:<ProductDescription />

  },
  {
    path:"/Cart",
    element:<Cart />
  }
]

export default RouteList
