import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
    <div className=" flex">
    <Navbar/>
    <Outlet/>
    </div>
  </>
  )
}

export default LayoutOne