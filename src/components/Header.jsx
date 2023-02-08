import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
    const links = ["Home" , "About Us" , "Features" , "Solution"]
  return (
    <header className=''>
      {/* Navbar */}
        <Navbar links={links}/>
        {/* Hero */}
        <Hero />
    </header>
  )
}

export default Header