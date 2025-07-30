"use client"
import React, {useState} from 'react'
import ProjectCards from './ProjectCards'
import ProjectsData from '@/data/ProjectsData'
import ProjectTag from './ProjectTag'

const ProjectSection = () => {  
  const [tag, setTag] = useState("All");
  const handleTagChange=(newTag)=>{
    setTag(newTag);
  }

const filteredProjects = ProjectsData.filter((project)=>project.name.includes(tag));
  return (
    <section>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name={"All"} isSelected={tag==="All"}/>
            <ProjectTag onClick={handleTagChange} name={"Web"} isSelected={tag==="Web"}/>
            <ProjectTag onClick={handleTagChange} name={"Mobile"} isSelected={tag==="Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=>
                <ProjectCards key={project.id} title={project.title} 
                description={project.description} imgUrl={project.image} tags={project.tag} gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}/>)}
        </div>
    </section>
  )
}

export default ProjectSection