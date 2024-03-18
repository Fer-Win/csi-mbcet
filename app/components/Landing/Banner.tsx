import React from 'react'
import { Inter,Hanken_Grotesk,Darker_Grotesque } from "next/font/google";

const grotesk = Darker_Grotesque({ subsets: ["latin"] });
const Banner = () => {
  return (
    <div className={grotesk.className}>
        <div className='w-full h-fit   flex flex-col md:flex-row my-48 justify-around  items-center px-72 '>
            <div className='flex flex-col min-w-72 min-h-72 items-center rounded border border-white  justify-center p-14 hover:bg-white hover:bg-opacity-10'>
                <div className='text-8xl font-bold'>15+</div>
                <div className='text-2xl font-medium'>Technical Events</div>
            </div>
            <div className='flex flex-col min-w-72 min-h-72 items-center rounded border border-white  justify-center p-14 hover:bg-white hover:bg-opacity-10'>
                <div className='text-8xl font-bold'>10+</div>
                <div className='text-2xl font-medium'>Hands On Workshops</div>
            </div >

            <div className='flex flex-col min-w-72  min-h-72 items-center rounded border border-white  justify-center p-14 hover:bg-white hover:bg-opacity-10'>
                 <div className='text-8xl font-bold'>2+</div>
                <div className='text-2xl font-medium'>Hackathons</div>
            </div>
        </div>

    </div>
  )
}

export default Banner