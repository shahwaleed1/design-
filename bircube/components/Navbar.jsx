import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Navbar = () => {
  return (
    <div className='bg-[#151515]'>
        <div className='container flex items-center justify-between text-xl p-4'>
                <div className='font-semibold'>adamkeyes</div>
                <div className='flex gap-4'>
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
        </div>
    </div>
  )
}

export default Navbar