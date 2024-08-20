import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFileArrowDown } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
<div className="container">
    <div className="flex justify-center items-center min-h-screen ">
    <div data-aos="fade-up">
    <div className=" h-[600px] w-[1100px] bg-gradient-to-r from-[#7e7e7e] to-[#f3f3f3] rounded-2xl gap-2 p-5">
      <div className=" flex justify-end items-end gap-4 ">
      <Link 
      target='blank' 
      to="https://www.facebook.com/" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-10px] transition-all'
      >
      <FaFacebook className=' text-3xl text-[#0866FF]'/>
      </Link>

      <Link 
      target='blank' 
      to="https://www.linkedin.com/in/sahid-al-masud-aayan-348653301/" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-10px] transition-all'
      >
      <FaLinkedin className=' text-3xl text-[#0A66C2] '/>
       </Link> 

      <Link 
      target='blank' 
      to="https://github.com/Sahid-Al-Masud-Aayan" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-10px] transition-all'
      >
      <FaGithub className=' text-3xl text-[#1F2328] '/>
       </Link> 

      </div>
      <div className=" flex justify-center gap-20 items-center mt-6">
      <div className="flex flex-col justify-start items-start ">
    <div data-aos="fade-left"><h1 className=' text-[82px] mt-2 font-latoNav leading-tight text-white font-semibold '>Sahid Al <br/>Masud Aayan</h1></div>
    <div data-aos="fade-down"><p className=' text-[14px] font-slab text-[#000000]'>I'm Aayan, a skilled React developer<br/>  with extensive experience in building <br/> dynamic and responsive web applications.</p></div>
      <div data-aos="flip-left"><a className=' w-[250px] ml-[9.5rem] h-[52px] bg-gradient-to-r from-[#e65c00] to-[#F9D423] flex justify-center items-center mt-9 rounded-full text-2xl text-white font-narrow hover:scale-[1.2] hover:font-bold duration-500 active:text-[#555]' download="Aayan's CV" href="cv1.pdf">
        <FaFileArrowDown className='mr-3 text-3xl' />Download my CV</a></div>
      </div>
      <div className="absolute w-[300px] h-[380px] bg-[#ff8800] left-[650px] top-[30%] rounded-full "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#ff00f7] left-[720px] top-[30%] rounded-full "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#0400ff] left-[690px] top-[30%] rounded-full "></div>
    <div data-aos="fade-right"><img src="./public/file (5).png" className='w-[300px] h-[410px] rounded-lg relative z-auto' alt="My Image" /></div>
      </div>
  </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard