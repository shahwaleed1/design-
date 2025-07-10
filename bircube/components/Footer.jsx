import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#242424]'>
            <div className='container py-6'>
                <hr />
                <div className='flex flex-col sm:flex-row justify-between items-center mt-5 py-2 text-center sm:text-left'>
                    <div className='text-xl font-semibold mb-2 sm:mb-0'>
                        adamkeyes
                    </div>
                    <div className='flex gap-4 text-lg'>
                        <FaGithub />
                        <FaLinkedin />
                        <FaTwitter />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer