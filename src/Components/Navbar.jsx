import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";



const Navbar = () => {
  return (
   <>
   <div className=" flex">
<div className=' w-[280px] min-h-screen bg-gradient-to-r from-[#662D8C] to-[#ED1E79] flex justify-center'>
    <ul>
        <div className="container">
            <div className=" flex flex-col gap-3">
                <div className=" flex flex-col justify-center items-center">
                <img className=' h-[150px] w-[135px] mt-4 rounded-2xl mb-3 ' src="public\iPhone 1.jpg" alt="Logo" />
                
                    <h3 className='text-[#c3c3c3] font-semibold text-[26px] text-center font-oswaldHd'>Sahid Al Masud Aayan</h3>
                <p className=' text-[#303030] text-[18px] font-bold text-center font-merri'>React Developer</p>
                </div>
            </div>
            <div className=" flex items-center gap-4 mt-[74px]">
            <IoHome className=' text-[24px] text-white'/> 
             <NavLink to='/' className={({isActive}) => isActive ? "text-[28px]  text-[#888] font-bold font-nav ":" text-[24px]  text-white font-nav "}>Home
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <FaAddressCard className=' text-[24px] text-white'/> 
            <NavLink to='/about' className={({isActive}) => isActive ? "text-[28px]  text-[#888] font-bold font-nav":" text-[24px]  text-white font-nav "}>About
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <MdSettingsSuggest className=' text-[24px] text-white'/> 
            <NavLink to='/projects' className={({isActive}) => isActive ? "text-[28px]  text-[#888] font-bold font-nav":" text-[24px]  text-white font-nav "}>Projects
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <FaTableList className=' text-[24px] text-white'/> 
            <NavLink to='/skills' className={({isActive}) => isActive ? "text-[28px]  text-[#888] font-bold font-nav":" text-[24px]  text-white font-nav "}>Skills
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <MdContactPhone className=' text-[24px] text-white'/> 
            <NavLink to='/contact' className={({isActive}) => isActive ? "text-[28px]  text-[#888] font-bold font-nav":" text-[24px]  text-white font-nav "}>Contact
            </NavLink>
            </div>
        </div>
    </ul>
   </div>
   </div>
   
   
   </>
  )
}

export default Navbar