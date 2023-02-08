import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
    const date = new Date();
    const icons = [<IoLogoInstagram size={23} />,<IoLogoFacebook size={23} />,<IoLogoTwitter size={23} />,<IoLogoLinkedin size={23} />]
  return (
    <footer className='h-[80px] bg-[#07080d]'>
        <div className="container h-full flex flex-row justify-between items-center  ">
            <p>&copy; All Rights Reserved HooBank {date.getFullYear()}</p>
            <div className="socialIcons hidden md:flex gap-5">
                {
                    icons.map((icon,index) => (
                        <div key={index} className="icon">
                            {icon}
                        </div>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer