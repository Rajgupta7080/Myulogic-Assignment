import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Homepage from '../../Pages/Homepage/Homepage'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} ></Route>
   </Routes>
  )
}

export default AllRoutes