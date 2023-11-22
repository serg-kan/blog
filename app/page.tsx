'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import { FaLinkedin, FaTelegram, FaGithub, FaYoutube } from "react-icons/fa";
import Typewriter from 'typewriter-effect';



export default function Home() {
  return (
    <div className="h-screen">
      <div
        className="flex flex-col md:flex-row items-center space-y-4 md:space-x-10 lg:space-x-20 justify-center bg-repeat bg-pattern m-5 h-4/5" 
        style={{ backgroundImage: "url('/images/bg-pattern.jpg')"}}
      >
        <div className="relative rounded-full border-white border-8 overflow-hidden w-full h-full max-h-[300px] max-w-[300px]">
          <Image
                src="/images/photo.jpg"
                fill
                alt="Picture of the author"
                style={{objectFit: "cover"}}
              />
        </div>
        <div className="flex-col space-y-4 content-center	">
          <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight">
            Hi. I am Sergey Kan
          </h1>

          <div className="leading-7 lg:text-xl">
            <Typewriter
              options={{
                strings: ['Welcome to my blog'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          

          <div className="flex justify-center md:justify-start space-x-4">
            <FaLinkedin size={30}/>
            <FaTelegram size={30} />
            <FaGithub size={30} />
            <FaYoutube size={30} />
          </div>

        </div>

      </div>      
    </div>
  )
}
