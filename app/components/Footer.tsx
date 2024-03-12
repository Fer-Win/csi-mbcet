import Image from 'next/image'
import React from 'react'
import { FaInstagramSquare,FaFacebookSquare  } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='w-full h-[60vh]  pb-10 overflow-hidden  bg-background flex absolute   bottom-0 z-30 rounded-t-[3rem]  '>
        <div className='px-24 w-full h-full flex flex-col pt-20 text-white justify-around  '>
                <div className=' text-[14rem] leading-none bflex flex-col w-1/3 '>
                        <h1 className='font-extrabold'>CSI</h1>
                        <h1 className='text-xl text-right pr-16'>MBCET Chapter</h1>
                </div>
                <div className='flex flex-col gap-7'>
                        <div className='flex gap-10 text-2xl font-thin '>
                                <Link href={'/'}>Home</Link>
                                <Link href={'/team'}>Team</Link>
                                <Link href={'/events'}>Events</Link>
                                <Link href={'/about'}>About</Link>
                        </div>
                        <div className='flex text-4xl gap-16'> 
                        <FaFacebookSquare />
                         <FaInstagramSquare />
                         <BsLinkedin />
                        </div>
                        <h1 className='text-2xl'>@ 2024  Computer Society of India | MBCET. All rights reserved.</h1>
                        <div className='text-xl opacity-70'>Made with 💟 by <Link className='cursor-pointer animate-pulse text-violet-200 hover:text-violet-400 transition-all ease-in-out duration-150' href={'https://www.linkedin.com/in/ferwin-lopez/'}>Ferwin Lopez</Link></div>
                </div>
        </div>
        {/* <Image src={'/Footer_Image.png'} width={700} height={700} alt='Footer Image' className='scale-125'></Image> */}
            
       <div className='w-full h-full absolute bg-red-500 -z-10'>
   
       </div>
    </footer>
  )
}

export default Footer