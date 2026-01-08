import React, { useState } from "react";

const AllProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectCategories = [
    "all",
    "frontend",
    "backend",
    "mern",
    "static",
    "responsive",
  ];

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website with smooth animations and responsive design.",
      icon: "💼",
      category: "frontend",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "Full-featured e-commerce platform with authentication, cart, and payment integration.",
      icon: "🛒",
      category: "mern",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description:
        "Role-based admin dashboard with analytics, charts, and real-time data updates.",
      icon: "📊",
      category: "frontend",
    },
    {
      id: 4,
      title: "REST API Server",
      description:
        "Secure REST API built with Node.js, Express, and JWT authentication.",
      icon: "🔐",
      category: "backend",
    },
  ];

  // ✅ DERIVED DATA
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="max-w-[800px] mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">All Projects</h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? "bg-text-secondary text-black"
                : "border-text-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PROJECT LIST */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className=" p-4 rounded-xl bg-text-secondary/10 backdrop-blur"
          >
            <h2 className="text-xl font-semibold">
              {project.icon} {project.title}
            </h2>
            <p className="text-sm mt-2">
              {project.description}
            </p>
            <span className="text-xs text-text-secondary">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
