"use client"
import React, {useState, useRef} from 'react'
import ResearchCards from './ResearchCards'
import ResearchsData from '../data/ResearchData'
import { motion, useInView} from "framer-motion"

const ResearchSection = () => {  
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const cardVariants ={
    initial: { y:50, opacity:0},
    animate : { y:0, opacity:1},
  };

  return (
    <section id="Research">
        <h2 className='text-center text-4xl font-bold text-white mt-10 mb-6'>My Researches</h2>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {ResearchsData.map((Research, index)=>
            <motion.li variants={cardVariants} 
            initial="initial" 
            animate={isInView? "animate":"initial"} 
            key={index} 
            transition={{duration:0.3, delay:index*0.2}}>
                <ResearchCards 
                  key={Research.id} 
                  title={Research.title} 
                  description={Research.description} 
                  imgUrl={Research.imgUrl}
                  status={Research.published} />
              </motion.li>)}
        </ul>
    </section>
  )
}

export default ResearchSection