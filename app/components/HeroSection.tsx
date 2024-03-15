import Image from 'next/image'
import React from 'react'
import JoinButton from './JoinButton'

const HeroSection = () => {
  return (
   
        <div className="w-full h-screen -z-10  flex flex-col justify-center items-center">
            <div className='flex mb-24 gap-10'>
            <Image alt="Logo" width={70} height={70} src={'/logo/CSI_Logo_white.png'}></Image>
          
            <Image alt="Logo" width={300} height={20} src={'/logo/Baselios.png'} className='scale-90 -z-10'></Image>
            </div>
            <h2 className='text-3xl opacity-65 font-light'>Join Us in Driving Technological Advancements</h2>
            <h1 className="text-9xl tracking-tight uppercase text-center font-bold text-white">Computer Society of India</h1>
            <h2 className="text-3xl font-light text-white">MBCET Chapter</h2>
           <div className='mt-20'>
           <JoinButton large={true} />
           </div>
        </div>

  )
}

export default HeroSection