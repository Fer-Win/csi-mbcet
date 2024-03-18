import Image from 'next/image'
import React from 'react'
import JoinButton from '../JoinButton'

const HeroSection = () => {
  return (
   
        <div className="w-full h-screen z-0    flex flex-col justify-center items-center">
            <div className='flex mb-12 gap-10 scale-75'>
            <Image alt="Logo" width={70} height={70} src={'/logo/CSI_Logo_white.png'} ></Image>
          
            <Image alt="Logo" width={300} height={20} src={'/logo/Baselios.png'} className='lgogo2 scale-90 -z-10'></Image>
            </div>
            <h2 className='text-lg opacity-65 mb-3 font-light'>Join Us in Driving Technological Advancements</h2>
            <h1 className="text-7xl tracking-tight uppercase text-center font-bold text-white">Computer Society of India</h1>
            <h2 className="text-2xl font-light text-white">MBCET Chapter</h2>
           <div className='mt-14'>
           <JoinButton large={true} />
           </div>
        </div>

  )
}

export default HeroSection