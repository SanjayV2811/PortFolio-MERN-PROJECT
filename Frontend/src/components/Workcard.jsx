import React from "react";
import { motion } from "framer-motion";
import { gradient } from "../assets/images";

const Workcard = ({ project, index }) => {
  // Determine slide direction: left for even index, right for odd
  const xInitial = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2, // staggered delay
        ease: "easeOut",
      }}
      className="relative mb-20"
    >
      {/* FIRST CARD */}
      <motion.div
        className="flex relative top-40"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="absolute -left-30 flex justify-center items-center">
          {/* TEXT */}
          <div className="absolute top-0 left-0 flex flex-col gap-8 z-30">
            <div>
              <h2 className="text-text-secondary text-sm">
                {project.domain}
              </h2>
              <p className="text-text-tertiary text-2xl">{project.title}</p>
            </div>

            <p className="w-[520px] h-[125px] text-lg rounded-2xl p-10 leading-tight flex items-center bg-text-secondary/10 backdrop-blur-xl">
              {project.description}
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="absolute rounded-xl top-0 left-110 bg-project-card w-[420px] h-[250px] z-10 overflow-hidden">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block absolute left-15.5 top-12.5 w-6/7 h-4/5 cursor-pointer rounded-tl-3xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={project.projectImage}
                alt="project"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </div>
        </div>

        {/* GRADIENT */}
        <div className="relative">
          <img
            src={gradient}
            alt="gradient"
            className="w-[550px] relative -right-50 object-cover -top-40 z-0"
          />
        </div>
      </motion.div>

      {/* SECOND CARD (MIRRORED) */}
      <motion.div
        className="flex relative top-20"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="absolute -left-30 flex justify-center items-center">
          {/* TEXT */}
          <div className="absolute top-0 left-90 flex flex-col gap-8 z-30">
            <div>
              <h2 className="relative -right-120 text-text-secondary text-sm">
                {project.domain}
              </h2>
              <p className="relative -right-90 text-text-tertiary text-2xl">
                {project.title}
              </p>
            </div>

            <p className="w-[530px] h-[125px] text-lg rounded-2xl p-10 leading-tight flex items-center bg-text-secondary/10 backdrop-blur-xl">
              {project.description}
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="absolute rounded-xl top-0 left-0 bg-project-card w-[420px] h-[250px] z-10 overflow-hidden">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block absolute left-15 top-12.5 w-6/7 h-4/5 cursor-pointer rounded-tl-3xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.projectImage}
                alt="project"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </div>
        </div>

        {/* GRADIENT */}
        <div className="relative">
          <img
            src={gradient}
            alt="gradient"
            className="w-[500px] h-[600px] relative right-50 object-cover -top-50 z-0"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Workcard;
