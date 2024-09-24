import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <Image
        src={require("../../../public/assests/pictures/new.jpg")} 
        alt="mypic" 
        width={100} 
        height={100}
        className='w-{50px}'
        />

      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Iqra Naz 
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

       <Link
       target="_blank"
        href={"https://www.facebook.com/profile.php?id=100022188053240&mibextid=ZbWKwL"}
        className='text-blue-600'
        >
          <FaFacebook className='text-3xl hover:text-blue-800'/>
        </Link>
       
       <Link
       target="_blank"
        href={"https://www.instagram.com/iqranaz2968?igsh=MWsxMmJ0ZGZ6MHZhbg=="}
        className='text-pink-700'
        >
          <FaInstagram className='text-3xl hover:text-pink-700 ml-3'/>
        </Link>

        <Link
       target="_blank"
        href={"https://www.linkedin.com/in/iqra-naz-43899b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
        className='text-blue-600'
        >
          < FaLinkedin className='text-3xl hover:text-blue-800 ml-3'/>
        </Link>
       
        <Link
       target="_blank"
        href={"https://github.com/IqraNaz421"}
        className='text-gray-500'
        >
          < FaGithub className='text-3xl hover:text-black ml-3'/>
        </Link>

       </span> 
    </div>
  </footer>
 </div>
  )
}

export default Footer
