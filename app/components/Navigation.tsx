import Image from "next/image";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import JoinButton from "./JoinButton";

const Navigation =()=>{
    return(
        <nav className="w-full flex flex-row place-items-center justify-between px-24 py-3 bg-red-500 bg-opacity-65 fixed backdrop-blur-md z-30">
       <Link href='/'>
        <Image alt="Logo" width={70} height={70} src={'/logo/CSI_Logo_white.png'}></Image>
        <div className="font-extralight text-center text-sm tracking-tighter">MBCET</div>
       </Link>
            <div className="flex gap-16 text-slate-950">
                    <TransitionLink href="/" label="Home"/>
                    <TransitionLink href="/events" label="Events"/>
                    <TransitionLink href="/team" label="Team"/>
                    <TransitionLink href="/about" label="About"/>
                    <JoinButton large={false}/>
            </div>
    </nav>
    )
}

export default Navigation;