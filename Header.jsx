import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"
export const Header = () => {
  return (
    <>
      <div className='h-[13vh] w-[100%] bg-black flex items-center fixed z-40 justify-center'>
      <div className='h-[13vh] w-[25%] flex justify-center items-center'>
        <p className='text-[#ABC502] text-[2.5vw] font-[Roboto] font-bold'>FITX</p>
      </div>
      <div className='h-[13vh] w-[75%] text-[0.85vw] text-white font-bold flex justify-center items-center ml-[3.5vw]'>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center ml-[6vw] hover:ddtext-[#ABC502] duration-300'><Link to="/">HOME</Link></div>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/about">ABOUT US</Link></div>
        <div className='h-[13vh] w-[6vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/class">CLASSES</Link></div>
        <div className='h-[13vh] w-[6.5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/trainer">TRAINERS</Link></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/gallery">GALLERY</Link></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/blog">BLOG</Link></div>
        <div className='h-[13vh] w-[5vw] flex justify-center items-center hover:text-[#ABC502] duration-300'><Link to="/contact">CONTACT</Link></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center ml-[1vw]"><FaFacebookF className="text-[#ABC502] text-[1.2vw] hover:text-white duration-300"/></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center"><FaTwitter className="text-[#ABC502] text-[1.2vw]  hover:text-white duration-300"/></div>
        <div className="h-[13vh] w-[3vw] flex justify-center items-center"><FaInstagram className="text-[#ABC502] text-[1.3vw]  hover:text-white duration-300"/></div>
      </div>
    </div>
    </>
  )
}