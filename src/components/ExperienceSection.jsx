"use client"
import React, {useState, useRef} from 'react'
import ExperienceCard from './ExpCard'
import ExpData from '@/data/ExperienceData'
import { motion, useInView} from "framer-motion"

const ExperienceSection = () => {  
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const cardVariants ={
    initial: { y:50, opacity:0},
    animate : { y:0, opacity:1},
  };

  return (
    <section id="experience">
        <h2 className='text-center text-4xl font-bold text-white mt-10 mb-2'>Work Experience</h2>
        <ul ref={ref} >
            {ExpData.map((Exp, index)=>
            <motion.li variants={cardVariants} 
            initial="initial" 
            animate={isInView? "animate":"initial"} 
            key={index} 
            transition={{duration:0.3, delay:index*0.2}}>
                <ExperienceCard 
                  key={Exp.id} 
                  title={Exp.title} 
                  description={Exp.description} 
                  company={Exp.company} 
                  duration={Exp.duration}
                  imgUrl={Exp.imgUrl}/>
              </motion.li>)}
        </ul>
    </section>
  )
}

export default ExperienceSection