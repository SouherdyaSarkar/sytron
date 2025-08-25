import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import { members} from '../utils/teamUtils'
import MemberCard from '../components/memberCard'

export default function Team() {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="bg-black w-full h-[100vh] overflow-hidden flex flex-col">
            
            
        <div className="flex flex-[1.5] justify-center items-center w-full bg-black">
            <Navbar curPage='Team' />
        </div>

        <div className="flex flex-[1.5] justify-center items-center w-full text-white translate-y-[-4rem] 
         bg-purple-900/40 z-10">
           <h1 className='text-xl lg:text-[4rem] font-bold'>Team</h1>
        </div>

        <div className='flex flex-[7] w-full justify-center overflow-y-auto bg-black'>
            <div className='grid grid-cols-1 w-[80%] lg:w-[70%] gap-8 lg:gap-16 lg:grid-cols-2'>
                {members.map((member,index) => (
                    <MemberCard member={member} index={index}/>
                ))}
            </div>
        </div>
    </motion.div>
  )
}
