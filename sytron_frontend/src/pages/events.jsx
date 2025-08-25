import React from 'react'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {eventDetails} from '../utils/eventUtils'
export default function Events() {

  return (
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="bg-black w-full h-[100vh] overflow-hidden flex flex-col">
            
            
        <div className="flex flex-[1.5] justify-center items-center w-full bg-black">
            <Navbar curPage='Events' />
        </div>

         <div className="flex flex-[1.5] justify-center items-center w-full text-white translate-y-[-4rem] 
         bg-purple-900/40 z-10">
           <h1 className='text-xl lg:text-[4rem] font-bold'>Events</h1>
        </div>

        {/* Event Grid*/}
        <div className="flex flex-[7] justify-center items-start 
        bg-black/50 overflow-y-auto w-full px-8">  

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'> 
        {eventDetails.map((event, i) => (

          <motion.div 
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{delay:0.1,
          duration:0.2}}
          key={i} className="p-4  
          transition-scale duration-300 ease-in-out"> {/* padding only, no h-[70vh] */}

            <div className="bg-white rounded-2xl h-full
            shadow-pink-200 hover:scale-105 hover:shadow-pink-400 shadow-lg flex flex-col">
              
              {/* Image Section */}
              <div className="w-full h-48 md:h-64 lg:h-72">
                <img 
                  src={event.img || ''} 
                  alt="Event" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-lg lg:text-2xl font-bold text-purple-700">
                  {event.title}
                </h1>
                <p className="text-sm lg:text-base text-gray-700 mt-2 flex-grow">
                  {event.desc}
                </p>
                <span className="text-xs lg:text-sm text-purple-500 mt-2">
                  {event.type}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
        </div>
            </div>


        
        </motion.div>
  )
}
