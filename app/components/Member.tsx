import Image from 'next/image'
import React from 'react'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
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

  return (
   <div className='flex flex-col gap-2 ml-10 '>
     <div className='w-72 h-72 bg-slate-300 bg-center bg-cover rounded-tr-2xl rounded-b-2xl rounded-tl-sm  overflow-hidden'>
    <Image src={img} height={400} width={400} alt={name}></Image>
    </div>
    <div className={`flex flex-col gap-2   p-3 rounded-tr-2xl text-black rounded-b-2xl rounded-tl-sm  w-full` }style={{backgroundColor:randomPastelColor}}>
    <div className='flex px-5 py-1 text-lg  border-black border-2 w-fit rounded-full '>{name}</div>
    <div>
        {position}
    </div>
    <div className='flex gap-2 '>
            <a href={linkedin} target="_blank" rel="noreferrer" className='text-2xl'><FaLinkedin></FaLinkedin></a>
            <a href={instagram} target="_blank" rel="noreferrer" className='text-2xl'><FaInstagram></FaInstagram></a>
    </div>
    </div>
   </div>
  )
}

export default Member