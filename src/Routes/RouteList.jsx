import React from 'react'
import HomePage from '../Frontend/HomePage';
import Cart from '../Frontend/Cart';

const RouteList =[
  {
      path: "/",
      element: <HomePage /> 
  },
  {
    path:"/Cart",
    element:<Cart />
  }
]

export default RouteList
