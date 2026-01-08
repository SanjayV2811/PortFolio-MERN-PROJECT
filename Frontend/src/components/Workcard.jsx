import React from "react";
import { gradient } from "../assets/images";

const Workcard = ({ project }) => {
  return (
    <div>
      <div className=" flex relative top-20">
      <div className="absolute  -left-30  flex justify-center items-center  ">
        <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full gap-8 z-30 ">
          <div className="">
            <h2 className="text-text-secondary text-sm">{project.domain}</h2>
            <p className="text-text-tertiary text-2xl ">{project.title}</p>
          </div>
          <div>
            <p className="w-[520px] h-[125px]  text-lg rounded-2xl p-10 leading-tight  items-center flex  bg-text-secondary/10  backdrop-blur-xl  ">
              {project.description}
            </p>
          </div>
        </div>
        <div className="absolute rounded-xl top-0 left-110 bg-project-card w-[420px] h-[250px] z-10 overflow-hidden">
          <a className="block absolute left-15.5 top-12.5 bg-red-500 w-6/7 h-4/5 cursor-pointer rounded-tl-3xl overflow-hidden" href={project.link} target="_blank" rel="noopener noreferrer">
            <img className=" w-full h-full object-cover" src={project?.projectImage} alt="project image" />
          </a>
          
        </div>
      </div>
      <div className="relative">
        <img
          src={gradient}
          alt="about"
          className="w-[550px] relative -right-50 object-cover -top-40 z-0"
        />
      </div>
    </div>

    <div className=" flex relative ">
      <div className="absolute  -left-30  flex justify-center items-center  ">
        <div className="absolute top-0 left-90 flex flex-col justify-between items-start w-full gap-8 z-30 ">
          <div className=" ">
            <h2 className="relative -right-120 text-text-secondary text-sm">{project.domain}</h2>
            <p className="relative -right-90 text-text-tertiary text-2xl ">{project.title}</p>
          </div>
          <div>
            <p className="w-[530px] h-[125px]  text-lg rounded-2xl p-10 leading-tight  items-center flex bg-text-secondary/10  backdrop-blur-xl  ">
              {project.description}
            </p>
          </div>
        </div>
        <div className="absolute rounded-xl top-0 left-0 bg-project-card w-[420px] h-[250px] z-10 overflow-hidden">
         <a className="block absolute left-15 top-12.5 bg-red-500 w-6/7 h-4/5 cursor-pointer rounded-tl-3xl overflow-hidden" href={project.link} target="_blank" rel="noopener noreferrer">
            <img className=" w-full h-full object-cover" src={project?.projectImage} alt="project image" />
          </a>
          
        </div>
      </div>
      <div className="relative">
        <img
          src={gradient}
          alt="about"
          className="w-[500px] h-[600px]  relative right-50 object-cover -top-50 z-0"
        />
      </div>
    </div>


    </div>

    
  );
};

export default Workcard;
