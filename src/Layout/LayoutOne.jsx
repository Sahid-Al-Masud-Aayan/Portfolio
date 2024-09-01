import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const LayoutOne = () => {
  return (
    <>
          <div className="flex md:flex-row flex-col justify-center items-center">
        <Sidebar />
        <div className="ml-[280px] md:ml-0 flex-1 flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
  </>
  )
}

export default LayoutOne