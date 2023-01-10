import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Homepage from '../../Pages/Homepage/Homepage'
import Test1 from '../../Pages/Questions/Test1'
import Test2 from '../../Pages/Questions/Test2'
import Test3 from '../../Pages/Questions/Test3'
import Test4 from '../../Pages/Questions/Test4'
import Test5 from '../../Pages/Questions/Test5'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>} ></Route>
    <Route path='/test1' element={<Test1/>}></Route>
    <Route path='/test2' element={<Test2/>}></Route>
    <Route path='/test3' element={<Test3/>}></Route>
    <Route path='/test4' element={<Test4/>}></Route>
    <Route path='/test5' element={<Test5/>}></Route>
   </Routes>
  )
}

export default AllRoutes