import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Navbar from "./navbar";

const Timeline = ({ events }) => {
  return (

    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 0.5 }}
    className="bg-black w-full h-[100vh] overflow-hidden flex flex-col">

    <div className="flex flex-[1.5] justify-center items-center w-full bg-black">
        <Navbar curPage='Schedule' />
    </div>

    <div className='absolute inset-0 top-20 w-full h-full'>
        <Spline scene="https://prod.spline.design/UcGjuEAl9sGd67-5/scene.splinecode"/>
    </div>

    <div className="flex flex-[1.5] justify-center items-center w-full translate-y-[-4rem] bg-purple-900/40 z-10">
        <h1 className="text-[2rem] lg:text-[4rem] text-purple-300 font-bold">Event Schedule</h1>
    </div>
    
    <div className="flex flex-[7] justify-center items-center translate-y-[-4rem] bg-black/50 overflow-y-auto w-full">
  <div className="relative w-[75%] h-full mx-auto py-12">
    {/* Vertical Line */}
    {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div> */}

    <div className="space-y-24">
      {events.map((event, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          key={index}
          className="relative flex items-center"
        >
          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full shadow-lg"></div>

          {/* Content Box */}
          <div
            className={`w-[50%] p-6 rounded-2xl shadow-xl bg-white text-black ${
              index % 2 === 0 ? "ml-auto mr-0" : "mr-auto ml-0"
            }`}
          >
            <h3 className="text-md lg:text-xl font-bold mb-2">
              {event.title}
            </h3>
            <p className="text-gray-700 max-w-[95%] text-sm lg:text-base break-words">
              {event.description}
            </p>
            <span className="block mt-2 text-xs lg:text-sm text-purple-500">
              {event.time}
            </span>
            <div className="mt-4 w-fit rounded-xl bg-purple-600 p-3 text-white text-xs lg:text-sm">
              {event.type || "Event"}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </motion.div>
  );
};

export default Timeline;
