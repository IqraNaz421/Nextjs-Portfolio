import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiDownloadCloudFill } from 'react-icons/ri';


const Navbar = () => {
  return (
    < div className='bg-black z-50 sticky top-0'>
      <header className="text-white body font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image 
        src={require("../../../public/assests/pictures/new.jpg")} 
        alt="mypic" 
        width={100} 
        height={100}
        className='w-{50px}'
        />

      <span className="ml-3 text-xl text-white">Iqra Naz</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-pink-600">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-pink-600">About</Link>
      <Link href={"#skill"} className="mr-5  hover:text-pink-600">Skills</Link>
      <Link href={"#project"} className="mr-5  hover:text-pink-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5  hover:text-pink-600">Contact</Link>
    </nav>

    <a href="/assests/cv/mycv.pdf">
    <button className="inline-flex items-center bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded text-base mt-4 md:mt-0">

      Download CV 
      <RiDownloadCloudFill className='text-xl ml-0'/>
    </button>
    </a>

  </div>

</header>

    </div>
  )
}

export default Navbar
