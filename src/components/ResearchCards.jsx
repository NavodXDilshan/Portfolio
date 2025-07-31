import React from 'react'
import { EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

const ResearchCards = ({title, description, imgUrl, status }) => {
  return (
    <div>
        <div className="h-52 nd:h-72 rounded-t-xl relative group"
            style={{background:`url(${imgUrl})`, backgroundSize:"cover"}}>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
            <p className='flex bg-purple-500 rounded-full justify-center items-center text-white sm:text-2xl text-base mt-5'>Published : {status}</p>

        </div>
    </div>
  )
}

export default ResearchCards