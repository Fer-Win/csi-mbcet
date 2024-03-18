'use client'
import Image from "next/image";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import JoinButton from "./JoinButton";
import { IoMenuOutline,IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Headroom from "react-headroom"
import { useRouter } from "next/router";

const menuItems = ()=>{
    return(
        <div className="flex flex-col gap-4">
          
            <TransitionLink href="/" label="Home"/>
            <TransitionLink href="/events" label="Events"/>
            <TransitionLink href="/team" label="Team"/>
            <TransitionLink href="/about" label="About"/>
            <JoinButton large={false}/>
        </div>
    )

}

const Navigation =()=>{
    const [showMenu, setShowMenu] = useState(false);
    return(
   
          <nav className="w-screen flex flex-row place-items-center justify-between px-10 md:px-24 py-3   backdrop-blur-md z-10 bg-transparent ">
       <Link href='/'>
        <Image alt="Logo" width={60} height={60} src={'/logo/CSI_Logo_white.png'}></Image>
        <div className="font-normal text-opacity-20 text-center text-sm tracking-tighter">MBCET</div>
       </Link>
            <div className="  hidden md:flex gap-16  text-slate-950">
                    <TransitionLink href="/" label="Home"/>
                    <TransitionLink href="/events" label="Events"/>
                    <TransitionLink href="/team" label="Team"/>
                    <TransitionLink href="/about" label="About"/>
                    <a href="https://forms.gle/XqyrWmPBkx1hU8WLA" target="_blank">
                    <button className='flex justify-center bg-white text-black items-center border-white border px-4 py-2 border-opacity-25 hover:bg-black hover:border-white hover:text-white transition-all  duration-200 ease-in-out'>
          Join CSI
        </button>
                    </a>
            </div>
            <div className="md:hidden block">
             <IoMenuOutline size={50} className="text-lg font-extralight" onClick={()=>setShowMenu(!showMenu)}/>
            </div>
           {
            showMenu &&  <div className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-slate-950 flex flex-col place-items-center z-50 justify-center gap-8 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <IoCloseCircleOutline size={40} className="absolute top-40 right-10 text-opacity-50" onClick={()=>setShowMenu(false)} />
                {menuItems()}
                
                
            </div>
           }
    </nav>
    //  </Headroom>
    )
}

export default Navigation;