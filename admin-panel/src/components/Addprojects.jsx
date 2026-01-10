import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProjects = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    domain: "",
    description: "",
    link: "",
    icon: "",
    category: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    if (image) data.append("image", image);

    await axios.post(`${import.meta.env.VITE_API_URL}/projects/create`, data, {
      withCredentials: true
    });

    alert("Project Added Successfully");
    navigate("/projects");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-3 bg-white p-6 rounded-xl shadow">

        <input name="title" onChange={handleChange} placeholder="Title" className="input" required />
        <input name="domain" onChange={handleChange} placeholder="Domain" className="input" />
        <textarea name="description" onChange={handleChange} placeholder="Description" className="input" />
        <input name="link" onChange={handleChange} placeholder="Project Link" className="input" />
        <input name="icon" onChange={handleChange} placeholder="Icon URL / name" className="input" />
        <input name="category" onChange={handleChange} placeholder="Category" className="input" />

        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />

        <button className="w-full bg-black text-white py-2 rounded-xl">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
