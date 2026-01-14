import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const AllProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects,setProjects] = useState([])
  

  /* -------------------- CATEGORIES -------------------- */
  const projectCategories = [
    "all",
    "frontend",
    "backend",
    "mern",
    "static",
    "responsive",
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/projects`);
        setProjects(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  console.log(import.meta.env.VITE_BASE_URL)

  /* -------------------- PROJECT DATA -------------------- */
  //   const projectData = [
  //   {
  //     id: 1,
  //     title: "Personal Portfolio",
  //     description:
  //       "A modern personal portfolio website with smooth animations and responsive design.",
  //     icon: "💼",
  //     category: "frontend",
  //   },
  //   {
  //     id: 2,
  //     title: "E-Commerce Website",
  //     description:
  //       "Full-featured e-commerce platform with authentication, cart, and payment integration.",
  //     icon: "🛒",
  //     category: "mern",
  //   },
  //   {
  //     id: 3,
  //     title: "Admin Dashboard",
  //     description:
  //       "Role-based admin dashboard with analytics, charts, and real-time data updates.",
  //     icon: "📊",
  //     category: "frontend",
  //   },
  //   {
  //     id: 4,
  //     title: "REST API Server",
  //     description:
  //       "Secure REST API built with Node.js, Express, and JWT authentication.",
  //     icon: "🔐",
  //     category: "backend",
  //   },
  //   {
  //     id: 5,
  //     title: "Landing Page",
  //     description:
  //       "High-conversion static landing page built using HTML, CSS, and Tailwind.",
  //     icon: "🚀",
  //     category: "static",
  //   },
  //   {
  //     id: 6,
  //     title: "Responsive Website",
  //     description:
  //       "Fully responsive website optimized for all screen sizes.",
  //     icon: "📱",
  //     category: "responsive",
  //   },
  // ];

  /* -------------------- FILTERING (DERIVED STATE) -------------------- */
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  /* -------------------- CARD GRADIENTS -------------------- */
  const cardGradients = [
    "linear-gradient(135deg, var(--color-project-card), var(--color-text-secondary), var(--color-bg))",
    "linear-gradient(225deg, var(--color-bg), var(--color-text-secondary), var(--color-project-card))",
    "linear-gradient(to right, var(--color-project-card), var(--color-text-secondary), var(--color-project-card))",
    "linear-gradient(to bottom right, var(--color-bg), var(--color-text-secondary), var(--color-bg))",
    "linear-gradient(160deg, var(--color-project-card), var(--color-text-secondary) 50%, var(--color-bg))",
    "linear-gradient(300deg, var(--color-bg), var(--color-text-secondary) 40%, var(--color-project-card))",
  ];

  /* -------------------- ADD GRADIENTS TO PROJECTS -------------------- */
  const displayProjects = filteredProjects.map((project, index) => ({
    ...project,
    gradient: cardGradients[index % cardGradients.length],
  }));

  return (
    <div className="max-w-[1100px] mx-auto py-20 px-4">
      {/* -------------------- TITLE -------------------- */}
      <h1 className="text-4xl font-bold mb-12 text-text-primary">
        All Projects
      </h1>

      {/* -------------------- CATEGORY BUTTONS -------------------- */}
      <div className="flex gap-4 mb-14 flex-wrap">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border text-sm capitalize transition-all
              ${
                selectedCategory === category
                  ? "bg-text-secondary text-black border-text-secondary"
                  : "border-text-secondary text-text-primary hover:bg-text-secondary/10"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* -------------------- PROJECT GRID -------------------- */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence>
          {displayProjects.map((project, index) => (
            <motion.div
              key={project._id}
              layout
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // animate only once when 30% visible
              transition={{
                duration: 0.6,
                delay: index * 0.15, // stagger effect: each card delayed by 0.15s
                ease: "easeOut",
              }}
              style={{ background: project.gradient }}
              className="
                relative
                w-full
                h-[190px]
                rounded-2xl
                p-6
                overflow-hidden
                shadow-xl
                hover:shadow-white/15
                transition-shadow
                duration-300
                cursor-pointer
                hover:scale-101
              "
            >
              {/* TOP GRADIENT BORDER */}
              <span
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[2px]
                  bg-linear-to-r
                  from-transparent
                  via-text-secondary
                  to-transparent
                  opacity-80
                "
              />

              <h2 className="text-xl font-semibold mb-3 text-text-primary">
                {project.icon} {project.title}
              </h2>

              <p className="text-sm text-text-tertiary mb-6 leading-relaxed">
                {project.description}
              </p>

              <span className="text-xs uppercase tracking-wider opacity-70">
                {project.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AllProject;
