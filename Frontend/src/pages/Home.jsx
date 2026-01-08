import React from 'react'
import About from './About'
import Navbar from '../components/Navbar'
import Projects from './Projects'

const Home = () => {
  return (
    <div className=' text-text-primary bg-bg w-full h-full overflow-x-hidden '>
      <Navbar />
      <About />
      <Projects />
    </div>
  )
}

export default Home