import React from 'react'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../assets/1.png'
import {eventDetails} from '../utils/utils.jsx'
export default function Events() {

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 1 second
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="bg-black w-full h-[100vh] overflow-hidden flex flex-col">
            
            
        <div className="flex flex-[1.5] justify-center items-center w-full bg-black">
            <Navbar curPage='Events' />
        </div>

         <div className="flex flex-[1.5] justify-center items-center w-full text-white translate-y-[-4rem] bg-purple-900/40 z-10">
           {/* <div className='flex flex-row h-[50%] w-[80%] lg:w-[60%] gap-4'>
            <div className='flex flex-1 justify-center bg-purple-500 text-black items-center rounded-l-xl'>
                <h1 className='text-lg lg:text-2xl font-bold'>IoT</h1>
            </div>
            <div className='flex flex-1 justify-center bg-purple-700 text-black items-center'>
                <h1 className='text-lg lg:text-2xl font-bold'>Gaming</h1>
            </div>
            <div className='flex flex-1 justify-center bg-purple-400 text-black items-center rounded-r-xl'>
                <h1 className='text-lg lg:text-2xl font-bold'>Regular</h1>
            </div>
           </div> */}
           <h1 className='text-xl lg:text-[4rem] font-bold'>Events</h1>
        </div>

        {/* Event Carousel    */}
        <div className="flex flex-[7] justify-center items-center translate-y-[-4rem] bg-black/50 overflow-hidden w-full px-8">
            <Slider {...settings} className="w-full h-full">
                {eventDetails.map((event, i) => (
                    <div
                    key={i}
                    className="flex flex-col items-center justify-center w-full h-[70vh] p-4"
                    >
                    {/* Card */}
                    <div className="w-full h-full flex flex-col rounded-2xl shadow-lg overflow-hidden">
                        
                    {/* Image Section */}
                    <div className="flex bg-gray-400 overflow-hidden flex-[2] w-full">
                        <img
                            src={pic1}
                            alt="Event"
                            className="w-full h-full object-cover"
                        />
                    </div>

                        {/* Text Section */}
                        <div className="flex-[1] w-full flex flex-col justify-center p-6 bg-gray-50">
                        <h1 className="text-lg lg:text-2xl font-bold text-purple-700">
                            {event.title}
                        </h1>
                        <p className="text-sm lg:text-base text-gray-700 mt-4 flex-grow">
                            {event.desc}
                        </p>
                        <span className="text-xs lg:text-sm text-purple-500 mt-2">
                            {event.type}
                        </span>
                        </div>
                    </div>
                    </div>
                ))}
                </Slider>

            </div>


        
        </motion.div>
  )
}
