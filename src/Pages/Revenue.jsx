import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { BiTachometer } from "react-icons/bi";
import { BsFileEarmarkCode } from "react-icons/bs";
import { PiBrowsersDuotone } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";

const Revenue = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <div className="container">
    <div className="flex justify-center items-center ">
    <div data-aos="fade-up">
    <div className=" h-[1100px] w-[980px] bg-gradient-to-r from-[#c2e59c] to-[#64b3f4] rounded-3xl flex flex-col items-center gap-2 p-4 mt-[49px] mb-[49px]">
      <div className="flex flex-col">
        <div data-aos="fade-left"><h1 className=' text-[60px] mt-2 font-headFont font-semibold '>Who am I?</h1></div>
      </div>
      <div className="flex gap-6 justify-center items-center mt-10">
      <div data-aos="fade-right"><img src="./public/pfp.jpeg" className='w-[230px] h-[300px] rounded-3xl ' alt="My Image" /></div>
      <div data-aos="zoom-in-up"><p className='w-[600px] text-[18px] font-merri font-semibold text-[#06004b]'>Hey there! I'm <span className=' text-[#ffffff] font-extrabold font-slab text-[23px]'>Aayan,</span> a skilled and dedicated React developer with a strong foundation in modern web development technologies. With expertise in <span className=' text-[#FC490B] text-[23px]'>HTML5, </span> <span className=' text-[#13A1DF] text-[23px]'>CSS3, </span>  <span className=' text-[#F7E018] text-[23px]'>JavaScript, </span> <span className=' text-[#7330FA] text-[23px]'>Bootstrap, </span> <span className=' text-[#0769AD] text-[23px]'>JQuery, </span><span className=' text-[#764ABC] text-[23px]'>Redux, </span><span className=' text-[#17A7BC] text-[23px]'>Tailwind CSS, </span> and <span className=' text-[#42d6ff] text-[23px]'>React, </span> I am equipped to deliver high-quality, responsive, and user-friendly web applications.<br/><br/>With a strong foundation in these technologies, I have successfully delivered numerous projects, ensuring high performance, scalability, and excellent user experiences. I am passionate about clean code, modular architecture, and keeping up with the latest industry trends.</p></div>
      </div>
      <div data-aos="fade-left"><h2 className=' text-[30px] mt-7 font-subHed font-semibold text-[#063c7d]'>What I Offer</h2></div>
      <div data-aos="zoom-in">
      <div className="flex gap-4 justify-center items-center mt-4">
        <div className=" h-[200px] w-[300px] bg-[#00d2ff] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
          <h1 className=' text-center text-[20px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'><TbDeviceDesktopCode className='text-3xl mr-2'/>Custom Web Development</h1>
          <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Tailored solutions to meet your each and every requirement in your website. needs, ensuring a perfect fit for your requirements.</p>
        </div>
        <div className=" h-[200px] w-[300px] bg-[#11998e] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
        <h1 className=' text-center text-[20px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'><MdDevices className='text-3xl mr-2'/>Responsive Design</h1>
        <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Websites and applications that look great on all devices, from desktops to smartphones.</p>
        </div>
        <div className=" h-[200px] w-[300px] bg-[#636fa4] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
        <h1 className=' text-center text-[20px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'>< BiTachometer  className='text-3xl mr-2'/>Performance Optimization</h1>
        <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Ensuring fast load times and smooth interactions for a the best user experience.</p>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-5">
        <div className=" h-[200px] w-[300px] bg-[#f5af19] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
        <h1 className=' text-center text-[20px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'>< BsFileEarmarkCode  className='text-3xl mr-2'/>Code Quality</h1>
        <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Writing clean, modular, and well-documented code for easier maintenance and scalability.</p>
        </div>
        <div className=" h-[200px] w-[300px] bg-[#ef32d9] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
        <h1 className=' text-center text-[19px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'><PiBrowsersDuotone  className='text-3xl mr-2'/>Cross-Browser Compatibility</h1>
        <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Ensure your application works flawlessly across different browsers.</p>
        </div>
        <div className=" h-[200px] w-[300px] bg-[#45b649] rounded-2xl shadow-2xl p-5 hover:scale-[1.1] duration-150">
        <h1 className=' text-center text-[20px] font-bold font-oswaldHd text-[#ffffff] flex justify-center items-center'><IoPeople className='text-3xl mr-2'/>Collaborative Approach</h1>
        <p className=' text-center mt-5 text-[16px] text-[#000000] font-playfair font-semibold'>Working closely with you to understand your vision and deliver results that is just more than your expectations.</p>
        </div>
      </div>
      </div>
  </div>
    </div>
   </div> 
    </div>
    </>
  )
}

export default Revenue