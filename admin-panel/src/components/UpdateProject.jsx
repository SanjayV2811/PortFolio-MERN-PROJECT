import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateProject() {
  const { id } = useParams();
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
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
          withCredentials: true
        });
        const p = res.data.data;

        setForm({
          title: p.title || "",
          domain: p.domain || "",
          description: p.description || "",
          link: p.link || "",
          icon: p.icon || "",
          category: p.category || ""
        });

        setPreview(`${import.meta.env.VITE_API_URL}/projects/image/${id}`);
        setLoading(false);
      } catch (err) {
        alert("Failed to load project");
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    if (image) data.append("image", image);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/projects/update/${id}`, data, {
        withCredentials: true
      });
      alert("Project updated successfully");
      navigate("/projects");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-center">Edit Project</h2>

        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-3 rounded-xl" />

        <input name="domain" value={form.domain} onChange={handleChange} placeholder="Domain" className="w-full border p-3 rounded-xl" />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-3 rounded-xl" />

        <input name="link" value={form.link} onChange={handleChange} placeholder="Project Link" className="w-full border p-3 rounded-xl" />

        <input name="icon" value={form.icon} onChange={handleChange} placeholder="Icon" className="w-full border p-3 rounded-xl" />

        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border p-3 rounded-xl" />

        <input type="file" onChange={handleImage} className="w-full" />

        {preview && (
          <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-xl border" />
        )}

        <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">Update Project</button>
      </form>
    </div>
  );
}
