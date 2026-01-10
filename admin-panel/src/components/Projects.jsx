import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/projects` ,{
      withCredentials: true
    })
      .then(res => {
        console.log(res.data);
        setProjects(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
      {projects.map(p => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
};

export default Projects;
