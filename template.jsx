"use client";
import { usePathname } from "next/navigation"
import { useEffect } from "react";
import { animateLogoIn, animatePageIn } from "./utils/loadings";
import Image from "next/image";


export default function Template({ children }) {
  const pathname = usePathname();
    useEffect(() => {
     
      if(pathname ==='/'){
        animateLogoIn();
    }
        animatePageIn();
    },[])

  return (
    <div className="z-50">
      <div
        id="banner-1"
        className="min-h-screen bg-slate-100 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-slate-100 fixed top-0 left-1/4 w-1/4"
      >

      </div>
      <div
        id="banner-3"
        className="min-h-screen bg-slate-100 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-slate-100 fixed top-0 left-3/4 w-1/4"
      ></div>
      <div id="logo" className="text-white text-7xl font-bold absolute top-1/2 opacity-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image alt="Logo" width={200} height={200} src={'/logo/CSI_Logo_Black.png'}></Image>
      </div>
{children}
    </div>
  );
}
