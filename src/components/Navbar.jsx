import React, { useState } from 'react'
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'
import logo from '../assets/images/logo.svg'
const Navbar = ({links}) => {
    const [isNav , setIsNav] = useState(false)
  return (
    <nav className='h-[100px] '>
        <div className="container flex flex-row justify-between items-center h-full">
            {/* Logo */}
                <img src={logo} alt="logo" className='h-[40px]' />
            {/* Links */}
            <ul className={`flex z-30 ${isNav ? "translate-x-0 opacity-100" : "translate-x-[-800px] opacity-0"}
                          transition-all duration-500 fixed top-0 left-0 flex-col bg-primary shadow justify-start items-stretch p-5 gap-5 w-[70%] h-screen
                          lg:flex-1 lg:relative lg:bg-transparent lg:shadow-none lg:flex-row lg:gap-16 lg:h-full lg:w-auto
                          lg:justify-end lg:items-center lg:p-5 lg:translate-x-0 lg:opacity-100`}>
                {
                    links.map((link , index) => (
                        <li key={index}><a href="/">{link}</a></li>
                    ))
                }
            </ul>
            {/* show navbar mobile */}
            <div onClick={() => setIsNav(!isNav)} className="menu p-5 block lg:hidden">
                {isNav ? <IoCloseOutline size={30}/> : <IoMenuOutline size={30} />  }
            </div>
        </div>
    </nav>
  )
}

export default Navbar