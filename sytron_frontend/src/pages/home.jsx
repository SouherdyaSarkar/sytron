import React from 'react'
import Navbar from '../components/navbar'
import Pattern from '../components/pattern'
import Loader from '../components/loader'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/Societies/1.png'
import img2 from '../assets/Societies/2.png'
import img3 from '../assets/Societies/3.png'
import img4 from '../assets/Societies/4.png'
import img5 from '../assets/Societies/5.png'
import img6 from '../assets/Societies/6.png'
import img7 from '../assets/Societies/7.png'
import img8 from '../assets/Societies/8.png'
import img9 from '../assets/Societies/9.png'
import img10 from '../assets/Societies/10.png'
import img11 from '../assets/Societies/11.png'
import img12 from '../assets/Societies/12.png'
import Spline from '@splinetool/react-spline';
import iemLogo from '../assets/Members/iem-logo.png';
import uemLogo from '../assets/Members/uem-logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from '../components/typewriter'
import {ArrowRight, ArrowRightCircle} from 'lucide-react'
import { useIsMobile } from '../components/isMobile'
import { Download } from 'lucide-react'
import fontLogo from '../assets/font-logo.png'

export default function Home() {
    const [loader,setloader] = useState(true);
    const isMobile = useIsMobile(768);
    const [isForm,setisForm] = useState(false);

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
        img9,
        img8,
        img10,
        img11,
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

        {isForm && 
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50" onClick={()=>setisForm(!isForm)}>
            <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{
              duration:0.3,
              delay:0.1
            }}
            className="flex justify-center items-center w-[80%] lg:w-[30%]  bg-white rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 cursor-pointer">

                
                  <div className="flex justify-center items-center 
                    bg-purple-500 p-4 lg:col-span-2 text-white rounded-xl lg:rounded-l-xl"
                    onClick={() => window.location.href = "https://forms.gle/gQvvjDUx243uePNh8"}>
                    Main Registration form
                    <ArrowRightCircle className="ml-4"/>
                  </div>
                

                <a 
                  href="https://drive.google.com/file/d/1M-FBQS8HOCPfUN30QWDE0rTEUjPp2L40/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center bg-white border 
                    border-purple-500 p-4 lg:col-span-1 text-black text-xs rounded-xl lg:rounded-r-xl">
                    Main Brochure
                    <ArrowRightCircle className="ml-2"/>
                  </div>
                </a>

                
                  <div className="flex justify-center items-center 
                    bg-purple-500 p-4 lg:col-span-2 text-white text-sm rounded-xl lg:rounded-l-xl"
                    onClick={() => window.location.href = "https://forms.gle/avcicVw9eyC6sKMNA"}>
                    Robotics Registration form
                    <ArrowRightCircle className="ml-4"/>
                  </div>
              

                <a 
                  href="https://drive.google.com/file/d/1p5ukejacD1MJmTW5aG2h-vmVExgcjFq3/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center bg-white border 
                    border-purple-500 p-4 lg:col-span-1 text-black text-xs rounded-xl lg:rounded-r-xl">
                    Robotics Brochure
                    <ArrowRightCircle className="ml-2"/>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        }



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
              

            <div className='absolute flex justify-between top-0 w-[80%] lg:w-[60%] p-4 h-[12vh] lg:h-[18vh] z-40'>
              <img className='object-cover h-full aspect-square' src={iemLogo} alt='IEM'/>
              <img className='object-cover h-full aspect-square' src={img12}/>
              <img className='object-cover h-full aspect-square' src={uemLogo} alt='UEM'/>
            </div>
              
            <div className='flex flex-col w-[85%] justify-between items-center z-40'> 
            <div className='flex flex-col gap-4 items-center justify-center mt-[8rem] lg:mt-[5rem]'>
            {/* <h1 className='text-white text-[3.5rem] lg:text-[7rem] font-bold z-40 mb-4'>
                SYTRON
            </h1> */}

            <div className='h-[40%] max-w-[80%]'>
                <img src={fontLogo} className='object-cover h-full w-full'/>
            </div>

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

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:4.5,
                duration:1.5}}
            className='flex flex-row border border-white
            hover:bg-purple-300/50 rounded-3xl items-center justify-between p-2 mt-[2rem] lg:mt-0 z-50'
            onClick={()=> setisForm(true)}>
                
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


            <div className='min-h-[10vh] max-w-[90%] lg:h-[5vh] mt-6 z-60'>
            <div className="grid lg:grid-cols-11 grid-cols-5 gap-4">
              {imgPaths.map((path, index) => {
                const isLast = index === imgPaths.length - 1;
                return (
                  <div
                    key={index}
                    className={`h-full flex items-center justify-center
                      ${isLast ? isMobile ? "col-start-3" : "" : ''}`}
                  >
                    <img
                      src={path}
                      alt={`img-${index}`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                );
              })}
            </div>
            </div>

            </div>

        </motion.div>
    </div>
)}

