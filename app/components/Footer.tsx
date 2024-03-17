import Image from 'next/image'
import React from 'react'
import { FaInstagramSquare,FaFacebookSquare  } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import TransitionLink from './TransitionLink';
import { Poppins} from "next/font/google";

const poppins = Poppins({
        subsets: ["latin"],
        weight: '100'
});

const Footer = () => {
  return (
    <div className={`footer w-screen h-fit  overflow-hidden  bg-background px-10 md:px-24 pt-4 md:py-6  bottom-0 border-t-[1px] border-white  `} >
       <div>
       <div className='flex flex-col md:flex-row mx-auto justify-between  w-full gap-10'>
         <div className='flex flex-col'>
                <h1 className='text-4xl font-normal '>CSI SB MBCET</h1>
                <p className='font-extralight mt-1'>Mar Baselios College of Engineering and Technology, Trivandrum.</p>
         </div>
         <div className='flex gap-20 '>
                <div className='flex items-start flex-col justify-start'>
                        <h2 className='text-base'>Follow Us</h2>
                        <div className='flex flex-col items-start justify-start gap-2 mt-3'>
                                <Link href='https://www.instagram.com/csimbcet/' passHref target='_blank' className='text-sm font-extralight '>
                                        Instagram
                                </Link>
                               
                                <Link href='https://www.linkedin.com/company/csi-sbmbcet' passHref target='_blank' className='text-sm font-extralight '>
                                        LinkedIn
                                </Link>
                                </div>
                </div>
                <div className='flex items-start flex-col justify-start'>
                        <h2 className='text-base'>Navigate</h2>
                        <div className='flex flex-col items-start justify-start gap-2 mt-3'>
                                <Link href='/' passHref  className='text-sm font-extralight '>
                                        Home
                                </Link>
                                <Link href='/events' passHref  className='text-sm font-extralight '>
                                        Events
                                </Link>
                                <Link href='/team' passHref className='text-sm font-extralight '>
                                        Team
                                </Link>
                                <Link href='/about' passHref  className='text-sm font-extralight '>
                                        About
                                </Link>
                                </div>
                </div>
               
         </div>
        
       </div>
       <div className='w-full my-6 md:my-4 px-24 h-[1px] bg-opacity-40 bg-white'></div>
       <div className=' mb-6  font-extralight text-sm text-opacity-50'>
        @2024 CSI SB MBCET. All Rights Reserved.
       </div>
       </div>
      
    </div>
  )
}

export default Footer