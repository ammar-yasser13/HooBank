import React from 'react'

const Content = ({children,isImage,content,position,className,img}) => {
  return (
    <div className='my-16 py-16'>
        <div className={`container flex ${position ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col gap-10 lg:justify-between lg:items-center justify-center items-stretch text-center lg:text-start ${className}`}>
            <div className="flex flex-col justify-start lg:items-start items-stretch text-center lg:text-start gap-8 lg:w-[70%]">
                <h2>{content.title}</h2>
                <p>{content.text}</p>
                <a href="/" className="btn">{content.buttonText}</a>
            </div>
            {isImage
                ? 
                <div className="image lg:w-[70%]">
                    <img src={img} alt="" className='w-full'/>
                </div>
                : ""
            }
            {children}
        </div>
    </div>
  )
}

export default Content