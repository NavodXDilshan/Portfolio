"use client"
import React, {useState, useTransition} from 'react'
import Image from "next/image"
import TabButton from './TabButton'
import {animate, motion} from "framer-motion"


const AboutSection = () => {
const [tab, setTab] = useState("Education");
const [isPending, startTransition ] = useTransition();

const handleChange = (id) => {
    startTransition(()=> {
        setTab(id);
});
};

const aboutVariant ={
    initial:{y:50, opacity:0},
    animate:{y:0, opacity:1}
}

const TAB_DATA = [
    {
        title:"Skills",
        id:"Skills",
        content:(
            <ul className="list-disc pl-5">
                <li>C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScrip</li>
                <li>React.js / Next.js</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Node.js</li>
                <li>AWS</li>
                <li>SQL</li>
                <li>SpringBoot</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"Education",
        content:(
            <ul className="list-disc pl-5">
                <li>BSc. Computer Engineering (Reading)<br/>University of Sri Jayewardenepura</li><br/>
                <li>Cambridge English Qualifications</li>
            </ul>
        )
    },
        {
        title:"Certifications",
        id:"Certifications",
        content:(
            <ul className="list-disc pl-5">
                <li>Python for Beginners</li>
                <li>Web Design for Beginners</li>
                <li>Java Object Oriented Programming</li>
                <li>SQL Essential Training</li>
                <li>Learning Linux Shell Scripting</li>
                <li>Learning Jenkins</li>
            </ul>
        )
    },
]
  return (
    <motion.section id="about" 
    variants={aboutVariant}
    initial="initial"
    animate="animate"
    transition={{duration:0.3}}
    className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image src="/images/about.png" alt="about" width={550} height={550} className='rounded-4xl'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                An ambitious and motivated final-year Computer Engineering 
                student with a passion for mobile development, full-stack engineering, 
                and machine learning. Seeking a challenging role to leverage my expertise 
                to drive technological advancements
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton selectTab={()=>(handleChange("Education"))} active={tab=="Education"}>Education</TabButton>
                <TabButton selectTab={()=>(handleChange("Skills"))} active={tab=="Skills"}>Skills</TabButton>
                <TabButton selectTab={()=>(handleChange("Certifications"))} active={tab=="Certifications"}>Certifications</TabButton>

            </div>
            <div className='mt-8 '> 
                {TAB_DATA.find((t)=>(t.id===tab)).content}
            </div>
        </div>
        </div></motion.section>
  )
}

export default AboutSection