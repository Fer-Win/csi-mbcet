import Image from "next/image";
import TransitionLink from "./TransitionLink";

const Navigation =()=>{
    return(
        <nav className="w-gull p-5 flex flex-row place-items-center justify-between px-24 py-10 bg-opacity-65 ">
         <Image alt="Logo" width={100} height={100} src={'/logo/CSI_Logo_White.png'}></Image>
            <div className="flex gap-16">
                    <TransitionLink href="/" label="Home"/>
                    <TransitionLink href="/work" label="Work"/>
                    <TransitionLink href="/about" label="About"/>
            </div>
    </nav>
    )
}

export default Navigation;