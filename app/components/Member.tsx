'use client'
import Image from 'next/image'
import React from 'react'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { transform } from 'next/dist/build/swc';

interface MemberProps {
    img : string,
    name : string,
    linkedin : string,
    instagram : string,
    position : string
}
const pastelColors = [
    "#B2DFDB", // Light Aqua
    "#FFE0B2", // Light Orange
    "#FFCCBC", // Light Coral
    "#F0F4C3", // Light Green
    "#C5CAE9", // Light Blue
    "#FFCC80", // Light Amber
    "#E1BEE7", // Light Lavender
    "#DCEDC8", // Light Lime
    "#FFF59D", // Light Yellow
    "#FFD180", // Light Deep Orange
  ];
  

const Member:React.FC<MemberProps> = ({img,name,linkedin,instagram,position }) => {
    const randomPastelColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start 0.95", "start 0.25"]
    })
  

  return (
  <motion.div
  ref={container}
  style={{scale:scrollYProgress, opacity:scrollYProgress}}
  className=' max-w-60 relative -z-10 flex flex-col gap-3 ml-0 md:ml-10 '>
     <div className='w-60 h-60 bg-slate-300 group bg-center relative rounded-tr-2xl rounded-b-2xl rounded-tl-sm  overflow-hidden'>
    <Image className='group-hover:scale-125 transition-all relative ease-in-out duration-200' src={img} height={400} width={400} alt={name}></Image>
    </div>
    <div className={`flex flex-col gap-2   p-3 rounded-tr-2xl text-black rounded-b-2xl rounded-tl-sm  w-full` }style={{backgroundColor:randomPastelColor}}>
    <div className='flex px-5 py-1 text-base  border-black border-2 w-fit rounded-full '>{name}</div>
    <div className='flex justify-between'>
    <div className=''>
        {position}
    </div>
    <div className='flex gap-2 '>
            <a href={linkedin} target="_blank" rel="noreferrer" className='text-2xl'><FaLinkedin></FaLinkedin></a>
            <a href={instagram} target="_blank" rel="noreferrer" className='text-2xl'><FaInstagram></FaInstagram></a>
    </div>
    </div>
    </div>
   </motion.div>
  )
}

export default Member