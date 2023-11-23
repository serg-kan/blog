'use client'
import Image from 'next/image'

import { FaLinkedin, FaTelegram, FaGithub, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen">
      <div
        className="flex flex-col md:flex-row items-center space-y-4 md:space-x-10 lg:space-x-20 justify-center bg-repeat bg-pattern m-5 h-4/5" 
        style={{ backgroundImage: "url('/images/bg-pattern.jpg')"}}
      >
        <div className="relative rounded-full border-white border-8 overflow-hidden w-full h-full max-h-[300px] max-w-[300px] min-h-[100px]">
          <Image
                src="/images/photo.jpg"
                fill
                alt="Picture of the author"
                style={{objectFit: "cover"}}
              />
        </div>
        <div className="flex-col justify-center space-y-4 content-center">
          <div className="text-2xl md:text-5xl font-extrabold w-fit mx-auto">
            <h1>Hi. I am Sergey Kan</h1>
          </div>

          <div className="leading-7 lg:text-xl">
            <p>Product Manager, ex-web dev, dad</p>
          </div>
          

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/sergkan/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://t.me/kan_notes" target="_blank" rel="noreferrer">         
              <FaTelegram size={30} />
            </a>
            <a href="https://github.com/serg-kan/" target="_blank" rel="noreferrer">         
              <FaGithub size={30} />
            </a>
            <a href="https://www.youtube.com/@serg_kan" target="_blank" rel="noreferrer">
              <FaYoutube size={30} />
            </a>
            
          </div>

        </div>

      </div>      
    </div>
  )
}
