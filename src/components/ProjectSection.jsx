"use client"
import React, {useState, useRef} from 'react'
import ProjectCards from './ProjectCards'
import ProjectsData from '@/data/ProjectsData'
import ProjectTag from './ProjectTag'
import { motion, useInView} from "framer-motion"

const ProjectSection = () => {  
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const handleTagChange=(newTag)=>{
    setTag(newTag);
  }
  const cardVariants ={
    initial: { y:50, opacity:0},
    animate : { y:0, opacity:1},
  };

const filteredProjects = ProjectsData.filter((project)=>project.name.includes(tag));
  return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6 mt-15'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name={"All"} isSelected={tag==="All"}/>
            <ProjectTag onClick={handleTagChange} name={"Web"} isSelected={tag==="Web"}/>
            <ProjectTag onClick={handleTagChange} name={"Mobile"} isSelected={tag==="Mobile"}/>
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index)=>
            <motion.li variants={cardVariants} 
            initial="initial" 
            animate={isInView? "animate":"initial"} 
            key={index} 
            transition={{duration:0.3, delay:index*0.2}}>
                <ProjectCards 
                  key={project.id} 
                  title={project.title} 
                  description={project.description} 
                  imgUrl={project.image} 
                  tags={project.tag}  
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tech={project.tech}/>
              </motion.li>)}
        </ul>
    </section>
  )
}

export default ProjectSection