import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  

  const toggleFavorite = async () => {
    if(project.isFavorite){
      await axios.post(`${import.meta.env.VITE_API_URL}/projects/unfavorite/${project._id}`, {}, {
        withCredentials: true
      });
    }else{
      await axios.post(`${import.meta.env.VITE_API_URL}/projects/favorite/${project._id}`, {}, {
        withCredentials: true
      });
    }
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">

      <img
        src={`${import.meta.env.VITE_API_URL}/projects/image/${project._id}`}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="font-bold mt-2">{project.title}</h3>
      <p className="text-sm">{project.domain}</p>

      <div className="flex justify-between mt-2">
        <a href={project.link} target="_blank" className="text-blue-600">Visit</a>
        <button onClick={toggleFavorite}>
          {project.isFavorite ? "❤️" : "🤍"}
        </button>
        <button className="text-blue-600" onClick={() => navigate(`/projects/edit/${project._id}`)}>Edit</button>
        <button className="text-red-500" onClick={() => {
          if(window.confirm("Are you sure you want to delete this project?")){
            axios.get(`${import.meta.env.VITE_API_URL}/projects/delete/${project._id}`, {
              withCredentials: true
            });
            window.location.reload();
          }
        }}>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
