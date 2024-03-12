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
        <button onClick={handleClick} className="text-2xl  text-slate-100 ">
            {label}
        </button>
    )
}

export default TransitionLink