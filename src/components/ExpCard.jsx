import React from 'react'


const ExperienceCard = (props) => {
  return (
    <div className='md:grid md:grid-cols-12 gap-2  '>
      <div className='flex mt-8 md:col-span-5 items-center justify-center'>
        <img src={props.imgUrl} alt={props.title} className=' rounded-xl hover:scale-110 p-2 w-[300px] h-[300px]' />
      </div>
      <div className='md:col-span-7 text-white mt-8 md:border-l-2 md:pl-4 '>
        <div className='md:text-3xl font-bold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text hover:text-transparent'>{props.title}</div>
        <div className='md:flex md:flex-row md:justify-between md:items-center md:mb-3 '>
          <div className='md:text-lg text-base font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text hover:text-transparent'>{props.company}</div>
          <div className='font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text hover:text-transparent'>{props.duration}</div>
        </div>
        <div>
          <ul className='list-disc pl-5 mt-2'>
          {props.description.map((des,index)=>(
            <li key={index} className='mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text hover:text-transparent'>{des}</li>
          ))}
        </ul>
        </div>
      </div>

    </div>
  )
}

export default ExperienceCard