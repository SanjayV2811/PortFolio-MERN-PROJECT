import React, { useEffect, useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { logo } from '../assets/images'

const Navbar = () => {

  const  [ hovered, setHovered ] = useState(null)

  window.onscroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').classList.remove('bg-transparent')
      document.querySelector('.navbar').classList.add('bg-navbar')
    } else {
      document.querySelector('.navbar').classList.add('bg-transparent')
      document.querySelector('.navbar').classList.remove('bg-navbar')
    } 
  }

  window.onmousemove = (e) => {
    setHovered(e.target.tagName)
    console.log(hovered)
  }

  window.onmouseleave = ( e ) => {
    if (e.target.tagName === 'A') {
      setHovered(false)
    }
    console.log(hovered)
  }

  const path = window.location.pathname
  console.log(path);
  
  
    const getLinkClass = (isActive) =>
  `transition hover:text-[#6804ec] ${isActive ? 'text-[#6804ec]' : ''}`;

   
    
  
  
  

  //  return (
  //    <div className='navbar fixed top-0 bg-transparent left-0 right-0 z-50 w-full py-10 flex justify-around items-center h-16 transition duration-300 ease-in-out  ' >
  //      <div className='logo'>
  //        <h1><img src={logo} alt="logo" className='h-7 w-auto' /></h1>
  //      </div>
  //      <div className="tags flex gap-5">
  //        <Link to='/' className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/' ? 'text-[#6804ec]' : ''}    transition`}  >Home</Link>
  //        <Link to='/about' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/about' ? 'text-[#6804ec]' : ''

  //        }  transition`} >About</Link>
  //        <Link to='/projects' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/projects' ? 'text-[#6804ec]' : ''}  transition`} >Projects</Link>
  //        <Link to='/resume' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/resume' ? 'text-[#6804ec]' : ''}  transition`} >Resume</Link>
  //        <Link to='/contact' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/contact' ? 'text-[#6804ec]' : ''}  transition`} >Contact</Link>
  //        </div>
  //    </div>
  //  )


  return (
    <div>
         <div className='navbar fixed top-0 bg-transparent left-0 right-0 z-50 w-full py-10 flex justify-around items-center h-16 transition duration-300 ease-in-out  ' >
       <div className='logo'>
         <h1><img src={logo} alt="logo" className='h-7 w-auto' /></h1>
       </div>
       <div className="tags flex gap-5">
        <Link to="/" smooth
  spy
  activeClass="text-[#6804ec]" className={`hover:text-[#6804ec]  active:text-[#6804ec]   transition`}   >Home</Link>
        <Link to="/about" className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/about' ? 'text-[#6804ec]' : ''}    transition`}  >About</Link>
        <Link to="/projects" className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/projects' ? 'text-[#6804ec]' : ''}    transition`}  >Projects</Link>
        <Link to="/resume" className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/resume' ? 'text-[#6804ec]' : ''}    transition`}  >Resume</Link>
        <Link to="/contact" className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/contact' ? 'text-[#6804ec]' : ''}    transition`}  >Contact</Link>
         </div>
     </div>
    </div>
  )
}

export default Navbar