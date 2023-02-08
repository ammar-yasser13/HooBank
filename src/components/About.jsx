import React from 'react'
import { IoSend, IoShield, IoStar } from 'react-icons/io5'
import Content from './Content'
import bill from '../assets/images/bill.png'
import card from '../assets/images/card.png'
import quotes from "../assets/images/quotes.svg"
import author1 from "../assets/images/people01.png"
import author2 from "../assets/images/people02.png"
import author3 from "../assets/images/people03.png"
import logo1 from '../assets/images/airbnb.png'
import logo2 from '../assets/images/binance.png'
import logo3 from '../assets/images/coinbase.png'
import logo4 from '../assets/images/dropbox.png'

const About = () => {
    const cards = [
        {
            title: "Rewards",
            text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
            icon: <IoStar size={30} color="#00F6FF"/>,
        },
        {
            title: "100% Secured",
            text: "We take proactive steps make sure your information and transactions are secure",
            icon: <IoShield size={30} color="#00F6FF"/>,
        },
        {
            title: "Balance Transfer",
            text: "A balance transfer credit card can save you a lot of money in interest charges.",
            icon: <IoSend size={30} color="#00F6FF"/>,
        },
    ]
    const authors = [
        {
            name: "Herman Jensen",
            text: "Money is only a tool. It will take you wherever you with, but it will not replace you as the driver.",
            img: author1,
            info: "Founder & Leader",
        },
        {
            name: "Steve Mark",
            text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
            img: author2,
            info: "Founder & Leader",
        },
        {
            name: "Kenn Gallagher",
            text: "It is usually people in the money business, finace, and internationall trade that are really rich.",
            img: author3,
            info: "Founder & Leader",
        },
    ]
    const logos = [logo1,logo2,logo3,logo4]
  return (
    <div>
        <Content isImage={false} content={{title: "You do the business, we'll handle the money.",text: "With the right credit card, you can imporve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market." , buttonText: "Get Started"}}>
            <div className="cards lg:w-[50%] flex flex-col justify-start items-start gap-8">
                {
                    cards.map((card,index) => (
                        <div key={index} className="card flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-start gap-5 rounded-2xl p-5 cursor-pointer">
                            <div className="icon p-5 bg-[#09977C1A] rounded-full">
                                {card.icon}
                            </div>
                            <div className="content flex flex-col justify-start items-center lg:items-start gap-3">
                                <h4 className='text-lg font-bold'>{card.title}</h4>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Content>
        <Content isImage={true} position={true} img={bill} content={{title: "Easily control your billing & invoicing.", text: "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean nequ. Fuce ipsum orci rhoncus aliporttitor integer platea placerat." , buttonText: "Download now"}}/>
        <Content isImage={true} position={false} img={card} content={{title: "Find a better card deal in few easy steps.", text: "Arcu tortor, purus in mattisat sed integer faucibus. Aliquet quis aliquet eget mauris tortor, Aliquet ultrices ac, ametau." , buttonText: "Get Started"}}/>
        <div className="py-16 my-16">
            <div className="container flex flex-col justify-center items-stretch text-center lg:justify-start lg:items-start lg:text-start gap-16">
                <div className="content flex flex-col justify-center items-stretch gap-8 text-center lg:text-start lg:flex-row lg:justify-between lg:items-center my-10">
                    <h2>What people are saying about us</h2>
                    <p className='lg:w-[70%]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div className="cards flex flex-col justify-center items-stretch lg:text-start text-center lg:flex-row lg:justify-between lg:items-center gap-16 w-full">
                    {
                        authors.map((author,index) => (
                            <div key={index} className="card p-5 lg:w-[300px] h-[300px] lg:h-[350px]  rounded-lg flex flex-col justify-center items-stretch text-center lg:text-start lg:justify-center gap-8 lg:items-start">
                                <div className="icon">
                                    <img src={quotes} alt="" />
                                </div>
                                <p className='text-white'>{author.text}</p>
                                <div className="author flex flex-row justify-start items-center gap-3">
                                    <div className="authorImg">
                                        <img src={author.img} alt="" className='w-12'/>
                                    </div>
                                    <div className="info flex flex-col justify-start items-start">
                                        <b>{author.name}</b>
                                        <p>{author.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="logos py-16">
            <div className="container flex lg:flex-row flex-col justify-center items-center gap-[130px]">
                {
                    logos.map((logo,index)=>(
                        <img key={index} src={logo} alt="" className='w-[150px]'/>
                    ))
                }
            </div>
        </div>
        <div className="container py-16 mt-16">
            <div className="gradient flex flex-col lg:flex-row justify-between lg:items-center items-stretch text-center gap-8 lg:text-start p-8 md:p-10 lg:p-16 rounded-3xl">
                <div className="content lg:w-[60%] flex flex-col justify-start items-start">
                    <h2>Let's tr our service now!</h2>
                    <p className=''>Everything you need to accept card payment and grow your business anywhere on the planet.</p>
                </div>
                <a href='/' className="btn w-auto">Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default About