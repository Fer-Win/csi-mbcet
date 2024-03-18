import Image from "next/image";
import { TextGenerateEffect } from "./components/anim/text-reveal-effect";
import Paragraph from "./components/anim/Word";
import Banner from "./components/Landing/Banner";
import HeroSection from "./components/Landing/HeroSection";
import UpcomingEvents from "./components/Landing/UpcomingEvents";
import NewsLetter from "./components/NewsLetter";
export default function Home() {
  return (
    <div className="">
      {/* <div className="w-screen h-screen">
          <div>
            Computer Society of India - MBCET Chapter
          </div>
      </div> */}
<HeroSection/>
     <Banner></Banner>
     <UpcomingEvents/>
    <NewsLetter/>
      <div className="">
      {/* <Paragraph  paragraph="Computer Society of India, established in the year 1965, is today the largest IT professional society in India. The purpose of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science, computer engineering and technology, systems science and engineering, information processing and related arts and sciences." /> */}

      </div>
    </div>
  );
}
