import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Loader() {

    const [width,setwidth] = useState('0%')
    
useEffect(() => {
    const timeout = setTimeout(() => {
        const interval = setInterval(() => {
            setwidth((prevWidth) => {
                if (prevWidth === '100%') {
                    clearInterval(interval);
                    return '0%';
                }
                return `${parseInt(prevWidth) + 1}%`;
            });
        }, 25);
    }, 1000); // 1 second delay

    return () => {
        clearTimeout(timeout);
    };
}, []);

  return (
    <motion.div 
    initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:0.5,
                duration:0.5}} 
        className='flex flex-col items-center justify-center h-screen w-screen bg-black'>
        <h1 className='text-white text-6xl font-bold'>
            SYTRON
        </h1>

        {/* Loading bar */}
        <motion.div 
         initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:1,
                duration:0.5}} className='mt-12 h-3 rounded-lg w-[80%] lg:w-[30%] bg-gray-400'>

            <motion.div
            
            className='h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse rounded-lg' 
            style={{ width: width }}/>

        </motion.div>
    </motion.div>
  )
}
