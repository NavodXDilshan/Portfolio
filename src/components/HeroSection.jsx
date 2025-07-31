'use client';
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import {animate, motion} from "framer-motion"

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div 
        initial={{opacity: 0, scale:0.5}} 
        animate={{opacity: 1, scale:1}}
        transition={{duration:0.5}}
        className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span>
              <br/>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Navod Dilshan',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'a Web Developer',
                  1000,
                  'a Mobile Developer',
                  1000,
                  'an AI/ML Enthusiast',
                  1000
                  ]}
               wrapper="span"
              speed={50}
              repeat={Infinity}
              />
            </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
                An ambitious and motivated final-year Computer Engineering 
                student with a passion for mobile development, full-stack engineering, 
                and machine learning. Seeking a challenging role to leverage my expertise 
                to drive technological advancements
          </p>
          <div>
            <button onClick={() => window.open('/research/1.pdf', '_blank')} className='px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
          </div>
        </motion.div>

        <motion.div  
          initial={{opacity: 0, scale:0.5}} 
          animate={{opacity: 1, scale:1}}
          transition={{duration:0.5}}
          className="col-span-5 place-self-center mt-4 lg:mt-0 lg:ml-8 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-3 border-purple-500">
            <Image
              src="/images/hero.png"
              alt="hero"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={340}
              height={340}
            />
             <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-[#000000] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
