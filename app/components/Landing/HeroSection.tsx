import Image from 'next/image'
import React from 'react'
import JoinButton from '../JoinButton'

const HeroSection = () => {
  return (
   
        <div className="w-full h-fit -z-10   flex flex-col items-center pt-20 px-8 relative">
          <div className='w-full rounded-3xl pt-20 bg-white h-[600px] text-center   event-background mb-10'>
            <h1 className="text-8xl tracking-tighter uppercase text-center font-bold text-black">Computer Society of India</h1>
            <h2 className="text-2xl font-light tracking-widest text-black">MBCET</h2>
            <Image src={'/collegembcet.png'} width={5000} height={3000} alt='College' className='absolute left-1/2 bottom-10 scale-125 -translate-x-1/2'></Image>
          </div>
            {/* <div className='flex mb-12 relative object-contain gap-10 scale-75'>
          
          
            <Image alt="Logo" width={300} height={20} src={'/logo/Baselios.png'} className='logo2 scale-90 '></Image>
            </div>
            <h2 className='text-lg opacity-65 mb-3 font-light'>Join Us in Driving Technological Advancements</h2>
            <h1 className="text-7xl tracking-tight uppercase text-center font-bold text-white">Computer Society of India</h1>
            <h2 className="text-2xl font-light text-white">MBCET Chapter</h2> */}
           {/* <div className='mt-14'> */}
           {/* <JoinButton large={true} /> */}
           {/* </div>
           <Image alt="Logo" width={1000} height={700} src={'/logo/CSI_Logo_white.png'} className='logo2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5' ></Image> */}
        </div>

  )
}

export default HeroSection