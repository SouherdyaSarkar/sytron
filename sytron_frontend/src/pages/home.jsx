import React from 'react'
import Navbar from '../components/navbar'
import Pattern from '../components/pattern'
import Loader from '../components/loader'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import Spline from '@splinetool/react-spline';
import ImageCarousel from '../components/carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from '../components/typewriter'
import {ArrowRight} from 'lucide-react'
import { useIsMobile } from '../components/isMobile'
export default function Home() {
    const [loader,setloader] = useState(true);
    const isMobile = useIsMobile(768);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setloader(false);
        }, 3000); // 2.5 seconds delay

        return () => clearTimeout(timer); // Cleanup on unmount
    },[])

    const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

    const imgPaths = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
    ]


   return loader ? (
    <Loader />
) : (

    <div className='h-screen w-full bg-black flex flex-col overflow-x-hidden'>
        {/* Navbar */}
        <motion.div 
        initial={{y:-200}}
        animate={{y:0}}
        transition={{duration:2,delay:0.5}}
          className='flex-[2] flex bg-black items-center justify-center z-30'
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.5))"
          }}
        >
          <Navbar curPage='Home'/>
        </motion.div>

          {/* Content */}
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:2.5,
                duration:1.5}} 
            className='flex-[10] w-screen bg-black flex flex-col justify-start items-center relative'>

            <div 
              className='absolute h-full w-full flex flex-col items-center justify-center text-white z-30'
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.2))"
              }}
            ></div>

                

            {isMobile ? (
            <div className='absolute inset-0 w-full h-full z-20'>
            <Spline scene="https://prod.spline.design/ugOup41G1pZN3EMk/scene.splinecode"/>
            </div>
            )
            : (
              <div className='absolute inset-0 w-full h-full z-20'>
              <Spline scene="https://prod.spline.design/ZuKhoVZIG4G-lbIq/scene.splinecode"/>
            </div>
            )}
              
              
            <div className='flex flex-col w-[85%] justify-between items-center z-50'> 

            <div className='h-[6vh] lg:h-[12vh] w-24 lg:w-44 mb-16 z-60'>
                <Slider 
              {...settings} 
              className="h-full w-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full"
              style={{ width: '100%' }}>
              {imgPaths.map((path, index) => (
                <div key={index} className="h-full flex items-center justify-center">
                  <img
                    src={path}
                    alt={`img-${index}`}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </Slider>
            </div>

            <div className='flex flex-col items-center justify-center mt-8'>
            <h1 className='text-white text-[3.5rem] lg:text-[7rem] font-bold z-50 mb-4'>
                SYTRON
            </h1>
            <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{
                delay:2.5,
                duration:1.5}} 
              className='text-white w-[90%] lg:w-[70%] text-sm lg:text-xl z-50 text-center break-words'>
                <Typewriter text="OOrganised by department of Electronics and Communications with IEEE Student branch in collaboration with all the student branch chapters!" 
                speed={50} />
            </motion.div>
            </div>

            <a href="https://forms.gle/3b7d8c1Z1d8b7f9A6" target="_blank" rel="noopener noreferrer">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:4.5,
                duration:1.5}}
            className='flex flex-row border border-white
            hover:bg-purple-300/50 rounded-3xl items-center justify-between p-2 mt-12 z-50'>
                
                <h1 className='text-white text-xl font-bold p-4'>Be a part of it!</h1>
                {/* Light alive */}
                <div
                className="bg-purple-500 rounded-full p-4 mr-4 
                          shadow-[0_0_40px_12px_rgba(168,85,247,1),inset_0_0_20px_4px_rgba(255,255,255,0.8)] 
                          animate-pulse"
              >
                <ArrowRight className='text-white' size={20} />
              </div>
            </motion.div>
            </a>

            </div>

        </motion.div>
    </div>
)}

