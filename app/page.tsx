import Image from "next/image";
import { TextGenerateEffect } from "./components/anim/text-reveal-effect";
import Paragraph from "./components/anim/Word";
import Banner from "./components/Landing/Banner";
import HeroSection from "./components/Landing/HeroSection";
import UpcomingEvents from "./components/Landing/UpcomingEvents";
import NewsLetter from "./components/NewsLetter";
import Info from "./components/Info";
export default function Home() {
  return (
    <div className="event-background">
      {/* <div className="w-screen h-screen">
          <div>
            Computer Society of India - MBCET Chapter
          </div>
      </div> */}
<HeroSection/>
     <Banner></Banner>
  
     <Info/>
 
     <UpcomingEvents/>
    <NewsLetter/>
     
    </div>
  );
}
