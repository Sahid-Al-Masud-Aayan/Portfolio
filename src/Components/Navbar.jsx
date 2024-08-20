import React from 'react'
import { NavLink } from 'react-router-dom';
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
                <img className=' h-[130px] w-[130px] mt-4 rounded-full ' src="public\iPhone 1.jpg" alt="Logo" />
                
                    <h3 className='text-[#c3c3c3] font-semibold text-[26px] text-center font-oswaldHd'>Sahid Al Masud Aayan</h3>
                <p className=' text-[#303030] text-[18px] font-bold text-center font-merri'>React Developer</p>
                </div>
            </div>
            <div className="mt-[90px]">
             <NavLink to='/' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-bold font-nav duration-200 rounded-lg":"flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30  text-[24px]  text-white font-nav rounded-lg"}>
            <IoHome className='text-[24px] text-white'/> 
             Home
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <NavLink to='/about' className={({isActive}) => isActive ? "flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-bold font-nav hover:text-[#bebebe] duration-200":"flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30  text-[24px]  text-white font-nav hover:text-[#bebebe] duration-200 "}>
            <FaAddressCard className=' text-[24px] text-white'/>
            About
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <MdSettingsSuggest className=' text-[24px] text-white'/> 
            <NavLink to='/projects' className={({isActive}) => isActive ? "flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30 text-[24px]  text-[#ffffff] font-bold font-nav hover:text-[#bebebe] duration-200":"flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30  text-[24px]  text-white font-nav hover:text-[#bebebe] duration-200"}>Projects
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <FaTableList className=' text-[24px] text-white'/> 
            <NavLink to='/skills' className={({isActive}) => isActive ? "flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-bold font-nav hover:text-[#bebebe] duration-200":"flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30  text-[24px]  text-white font-nav  hover:text-[bebebe3] duration-200"}>Skills
            </NavLink>
            </div>
            <div className=" flex items-center gap-4 mt-[41px]">
            <MdContactPhone className=' text-[24px] text-white'/> 
            <NavLink to='/contact' className={({isActive}) => isActive ? "flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-bold font-nav hover:text-[#bebebe] duration-200":"flex justify-center items-center gap-4 p-5 backdrop-blur-lg bg-white/30  text-[24px]  text-white font-nav hover:text-[#bebebe] duration-200 "}>Contact
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