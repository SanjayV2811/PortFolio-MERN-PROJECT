import React, { useContext, useEffect, useState } from 'react'
import {  } from 'react-router-dom'
import { logo } from '../assets/images'
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'
import axios from 'axios'

const Navbar = () => {

  const location = useLocation();
  const  [ hovered, setHovered ] = useState(null)
  const { logout } = useContext(AuthContext)

  

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
  
  
  //   const getScrollLinkClass = (isActive) =>
  // `transition hover:text-[#6804ec] ${isActive ? 'text-[#6804ec]' : ''}`;

  //   const isActive = (path) => {
  //     return location.pathname === path;
  //   }
   
    
   
    
  const handleLogout = () => {
    logout()
  }

   const getProfile = async (e) =>{
    e.preventDefault();
    try {
      
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // }
          // ,
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // const clearUser = () => {
  //   setUser(null);
  // };
  
  

  //  return (
  //    <div className='navbar fixed top-0 bg-transparent left-0 right-0 z-50 w-full py-10 flex justify-around items-center h-16 transition duration-300 ease-in-out  ' >
  //      <div className='logo'>
  //        <h1><img src={logo} alt="logo" className='h-7 w-auto' /></h1>
  //      </div>
  //      <div className="tags flex gap-5">
  //        <ScrollLink to='/' className={`hover:text-[#6804ec]  active:text-[#6804ec] ${path === '/' ? 'text-[#6804ec]' : ''}    transition`}  >Home</ScrollLink>
  //        <ScrollLink to='/about' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/about' ? 'text-[#6804ec]' : ''

  //        }  transition`} >About</ScrollLink>
  //        <ScrollLink to='/projects' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/projects' ? 'text-[#6804ec]' : ''}  transition`} >Projects</ScrollLink>
  //        <ScrollLink to='/resume' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/resume' ? 'text-[#6804ec]' : ''}  transition`} >Resume</ScrollLink>
  //        <ScrollLink to='/contact' className={`hover:text-[#6804ec]  active:text-[#6804ec]  ${path === '/contact' ? 'text-[#6804ec]' : ''}  transition`} >Contact</ScrollLink>
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
        <ScrollLink to="home"  smooth spy offset={-100} duration={500} activeClass='text-text-secondary' className={`hover:text-text-secondary     transition  `}   >Home</ScrollLink>
        <ScrollLink to="about" smooth spy offset={-100} duration={500} activeClass='text-text-secondary' className={`hover:text-text-secondary      transition`}  >About</ScrollLink>
        <ScrollLink to="projects" smooth spy offset={-100} duration={500} activeClass='text-text-secondary' className={`hover:text-text-secondary      transition`}  >Projects</ScrollLink>
        <ScrollLink to="resume" smooth spy offset={-100} duration={500} activeClass='text-text-secondary' className={`hover:text-text-secondary      transition`}  >Resume</ScrollLink>
        <ScrollLink to="contact" smooth spy offset={-100} duration={500} activeClass='text-text-secondary' className={`hover:text-text-secondary      transition`}  >Contact</ScrollLink>
        <button onClick={handleLogout} className="hover:text-text-secondary transition">Logout</button>
        <button onClick={getProfile} className="hover:text-text-secondary transition">Get Profile</button>
         </div>
     </div>
    </div>
  )
}

export default Navbar