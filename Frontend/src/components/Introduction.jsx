import React from 'react'
import { about, ellipse, defaultImage, gradient, Arrow } from '../assets/images'

const Introduction = () => {
  return (
    <div>
      <div className=' relative z-10 flex-col gap-10 pt-20 w-full pr-90  flex justify-center items-center '>
      <div className='relative'>
        <img className='absolute -left-1/2 top-10 w-30 h-35 cursor-pointer ' src={Arrow} alt="arrow" />
        <h1 className=' relative left-5 top-17'>Hello! I am <span className='text-text-secondary'>Sanjay Baviskar</span></h1>
      </div>

      <div className='relative flex flex-row gap-10'>
        <div className=''>
          <div className='relative'>
            <img src={gradient} className='relative -left-42 w-full h-full object-cover z-0' alt="gradient" />
            <img src={ellipse} className='absolute top-48  -translate-x-26 -translate-y-25 transform cursor-pointer z-10 ' alt="ellipse" />
            <img className='  absolute  top-48  -translate-x-16 -translate-y-25 transform cursor-pointer z-20 ' src={about} alt="arrow" />
          </div>
          <div className='absolute top-59   translate-x-42 -translate-y-25 transform cursor-pointer z-20 '>
            <span className=''>A Web Developer who</span>
            <br />
            <span className='text-4xl'>Builds fast, scalable, and beautiful <span className='text-text-secondary'>web experiences</span>.
            </span>
            <br />
            <span className='text-xs'>Because great design deserves great performance.</span>
          </div>
        </div>
      </div>



    </div>
    </div>
  )
}

export default Introduction