import React from 'react'
import { motion } from 'framer-motion'

export default function MemberCard({member,index}) {
  return (
    <motion.div 
    initial={index % 2 === 0 ? { x: '-100vw' } : { x: '100vw' }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5, delay:0.7 + index*0.3 }}
    className={`flex flex-row h-36 lg:h-44 ${member.addRole === 'Core Organiser' ? `bg-purple-700/50 rounded-2xl 
        shadow-inner shadow-purple-500/60 [box-shadow:inset_0_0_30px_10px_rgba(168,85,247,1)]` : 
        `bg-blue-600/50 rounded-2xl shadow-inner shadow-blue-300/60 [box-shadow:inset_0_0_30px_10px_rgba(0,0,255,0.7)]` } 
        `}>

        <div className='flex flex-[2] min-w-[33%] rounded-l-2xl items-center bg-white justify-center'>
            <img src={member.img} alt='Image' className='w-full h-full object-cover rounded-l-2xl'></img>
        </div>

        <div className='flex flex-col py-4 px-8 flex-[4] items-start text-white justify-center'>
            <h1 className='text-md lg:text-xl font-semibold'>{member.name || 'Chairman'}</h1>
            <h2 className='text-sm lg:text-lg'>{member.role || 'Patron'}</h2>
            <h2 className='text-sm lg:text-lg'>{member.addRole || 'Patron'}</h2>
        </div>
    </motion.div>
  )
}
