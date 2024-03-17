'use client'

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../utils/loadings"


const TransitionLink = ({href, label}: {href: string, label: string}) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if(pathname !== href){
            animatePageOut(href,router);
        }
       
    }
    return(
        <button onClick={handleClick} className="text- group   text-slate-100 hover:text-slate-300 font-light   transition-all ease-in-out duration-150 ">
            {label}
            <div className="h-[1px] bg-blue-50 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-center"></div>
        </button>
    )
}

export default TransitionLink