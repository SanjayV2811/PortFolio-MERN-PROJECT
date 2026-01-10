import React, { useEffect, useState } from "react";
import Workcard from "../components/Workcard";
import AllProject from "../components/AllProject";
import axios from "axios";

const Projects = () => {


  const projects = [
    {
      id:1,
      title:"Personal Portfolio",
      description:"",
      image:"",
      link:"",
      category:"frontend"
    }
  ]

  useEffect(() => {
   const res =axios.get(`${import.meta.env.VITE_API_URL}/projects/favorite` )
    console.log(res.data)
  }, [])
  

  
  return (
    <div id="projects" className="  pt-10 text-white">
      {projects.map((project) => (
        <div
          key={project.id}
          className="  w-full h-full pt-10 flex justify-center items-center  "
        >
          <div className="">
            <Workcard project={project} />
          </div>
        </div>
      ))}
      <div>
        <div className=" -mt-49 w-full ">
          <AllProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
