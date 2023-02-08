import React from 'react'
import heroImage from '../assets/images/robot.png'
import {IoArrowUpOutline} from 'react-icons/io5'
const Hero = () => {
  return (
    <div className='h-fit flex flex-col justify-start items-stretch py-10 gap-16'>
        <div className="container flex lg:flex-row flex-col lg:justify-between items-center gap-10">
            <div className="content flex flex-col justify-start items-center lg:text-start text-center lg:items-start gap-8">
                <p className='p-3 rounded-md w-fit' style={{background: "linear-gradient(125.17deg, #272727 0%, #11101D 100%)"}}>20% Discount for 1 month account</p>
                <div className='flex lg:flex-row flex-col justify-start items-center text-center lg:text-start lg:justify-between lg:items-center gap-5'>
                    <h1 className=''>The Next <span>Generation</span> Payment Method.</h1>
                    <a href="/" className='border-secondary border p-8 rounded-full relative'>Get <IoArrowUpOutline size={18} className="absolute top-8 rotate-45 right-8" /> Started</a>
                </div>
                <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
            <div className="imageHero">
                <img src={heroImage} alt="image hero" />
            </div>
        </div>
        <div className="container flex lg:flex-row flex-col justify-between items-start lg:items-center gap-5 lg:gap-10 my-10">
            <div className='flex lg:flex-row justify-center items-center flex-column gap-5 lg:gap-10'>
                <h3>3800+</h3>
                <p className='lead'>User Active</p>
            </div>
            <div className='flex lg:flex-row justify-center items-center flex-column gap-5 lg:gap-10'>
                <h3>230+</h3>
                <p className='lead'>Trusted by comany</p>
            </div>
            <div className='flex lg:flex-row justify-center items-center flex-column gap-5 lg:gap-10'>
                <h3>$230M+</h3>
                <p className='lead'>Transaction</p>
            </div>
        </div>
    </div>
  )
}

export default Hero