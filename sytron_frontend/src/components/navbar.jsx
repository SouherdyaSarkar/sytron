import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar({curPage="Home"}) {
    const navigate = useNavigate();
    const navButtons = [
        {name: "Home",
         to : "/"   
        },
        {name: "Schedule",
         to : "/schedule"   
        },
        {name: "Events",
         to : "/events"   
        },
        {name: "Team",
         to : "/team"   
        },
    ]
  return (
    <div className='relative w-full h-[100%]'>

    <div className='absolute w-full h-[93%] bg-[#08001C] z-50 justify-center flex py-2'
    style={{ clipPath: "polygon(0% 0%, 0% 100%, 12% 50%, 88% 50%, 100% 100%, 100% 0%)" }}>

        <div className='w-[70%] h-[45%] mt-0 flex flex-row gap-4 justify-between'> 
            {navButtons.map((button, index) => (
            <div 
            key={index}
            onClick={() => navigate(`${button.to}`)}
            className='flex flex-1 hover:cursor-pointer justify-center items-center h-full'>
                <h1 className={`text-xs lg:text-xl ${button.name === curPage ? 'text-white' : 'text-purple-600'}`}>{button.name}</h1>
            </div>
            ))}
            
        </div>

    </div>
    <div
        className="absolute w-full h-full z-40"
        style={{
            clipPath: "polygon(0% 0%, 0% 100%, 12% 50%, 88% 50%, 100% 100%, 100% 0%)",
            backgroundImage: "linear-gradient(to right, rgba(187,0,255,100) ,rgba(51,51,51,0), rgba(187,0,255,100))"
        }}
        ></div>
    </div>
  )
}
