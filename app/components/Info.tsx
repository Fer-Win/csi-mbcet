'use client'
import React from 'react'
import Heading from './Heading'
import { IoIosArrowForward } from "react-icons/io";
import { SiEbox ,SiHackthebox } from "react-icons/si";
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Info = () => {

    const router =useRouter();
  return (
    <div className='bg-white text-black py-24 px-10 md:px-24 flex md:flex-row flex-col'>
   <div>
   <div className='w-full md:w-3/6'>
          <Heading refTitle='Innovate' title='Empowering the Future Through Technology' subtitle='At CSI, we believe in the power of technology and innovation to shape the world we live in. Join us as we explore the latest advancements and discover new possibilities.'/>
          </div>
            <div className=' w-full md:w-3/6 py-8 flex'>

                <div className='flex flex-col justify-start items-start gap-23'>
                <SiEbox size={30} className='my-6'/>
                <h1 className='text-2xl'>Technology Hub</h1>
                <h2 className=' font-extralight text-base'>
                Stay updated with the latest trends, news, and insights in the world of technology.
                </h2>
                </div>
                <div className='flex flex-col justify-center items-start gap-23'>
                <SiHackthebox size={30} className='my-6'/>
                <h1 className='text-2xl'>Community Engagement</h1>
                <h2 className=' font-extralight text-base'>
                Connect with like-minded individuals and collaborate on innovative projects.
                </h2>
                </div>

          </div>
          <div className='flex gap-8 py-6'>
          <button className='flex justify-center bg-black text-white items-center border-white border px-4 py-2 border-opacity-25 hover:bg-white hover:border-black hover:text-black transition-all  duration-200 ease-in-out'>
Learn More</button>
            <div className='flex justify-center items-center font-normal group cursor-pointer '><a href="https://forms.gle/XqyrWmPBkx1hU8WLA" target='_blank'>
                Sign Up</a><IoIosArrowForward className='translate-y-[1px] group-hover:translate-x-1 transition-all duration-150 ease-in-out'/></div>
          </div>
   </div>
   <div className='rounded-lg overflow-hidden h-fit  group'>
    <Image alt='Generated Image' src={'/generated.jpg'} width={850} height={850}></Image>
    
   </div>
    </div>
  )
}

export default Info