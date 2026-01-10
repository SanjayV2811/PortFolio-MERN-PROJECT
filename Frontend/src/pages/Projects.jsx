import React, { useEffect } from "react";
import Workcard from "../components/Workcard";
import AllProject from "../components/AllProject";
import axios from "axios";
import { useState } from "react";

const Projects = () => {

  const [projects, setProjects] = useState([]) 

  // const projects = [
  //   {
  //     id:1,
  //     title:"Personal Portfolio",
  //     description:"",
  //     image:"",
  //     link:"",
  //     category:"frontend"
  //   }
  // ]


  

  useEffect( () => {
    const fetchProjects = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/projects/favorite`)
      console.log(res.data)
      setProjects(res.data.data)
    }
    fetchProjects()
  }, [])
  
  useEffect(() => {
    console.log(projects)
  }, [projects])

  
  return (
    <div id="projects" className="  pt-10 text-white">
      {
        <div
          
          className="  w-full h-full pt-10 flex justify-center items-center  "
        >
          <div className="">
            <Workcard project={projects || []} />
          </div>
        </div>
      }
      <div>
        <div className=" -mt-49 w-full ">
          <AllProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
