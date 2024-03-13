import Image from "next/image";
import { TextGenerateEffect } from "./components/ui/text-reveal-effect";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
      <div className="">
      <TextGenerateEffect words="Computer Society of India, established in the year 1965, is today the largest IT professional society in India. The purpose of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science, computer engineering and technology, systems science and engineering, information processing and related arts and sciences." />

      </div>
    </div>
  );
}
