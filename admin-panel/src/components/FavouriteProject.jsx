import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const FavoriteProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/projects/favorite")
      .then(res => setProjects(res.data.data));
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-4">
      {projects.map(p => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
};

export default FavoriteProjects;
