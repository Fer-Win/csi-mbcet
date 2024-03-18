import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className='w-screen h-80 bg-[#0099ff] m-0 flex justify-evenly items-center '>
            <div className='flex flex-col items-start'>
                <div className='text-8xl font-bold'>15+</div>
                <div className='text-2xl font-medium'>Technical Events</div>
            </div>
            <div className='h-full  w-[3px] bg-black'></div>
            <div className='flex flex-col items-start '>
                <div className='text-8xl font-bold'>10+</div>
                <div className='text-2xl font-medium'>Hands On Workshops</div>
            </div >

            <div className='h-full w-[3px] bg-black'></div>
            <div className='flex flex-col items-start'>
                 <div className='text-8xl font-bold'>2+</div>
                <div className='text-2xl font-medium'>Hackathons</div>
            </div>
        </div>

    </div>
  )
}

export default Banner