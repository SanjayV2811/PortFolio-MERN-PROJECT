import React from "react";
import { motion } from "framer-motion";
import { about, ellipse, gradient, Arrow } from "../assets/images";

const Introduction = () => {
  return (
    <motion.div
      className="relative z-10 flex flex-col gap-10 pt-20 w-full items-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.div
        className="relative"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.img
          src={Arrow}
          alt="arrow"
          className="absolute -left-1/2 top-10 w-30 h-35 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <h1 className="relative left-5 top-17">
          Hello! I am{" "}
          <span className="text-text-secondary">Sanjay Baviskar</span>
        </h1>
      </motion.div>

      {/* Image + Text */}
      <div className="relative flex gap-10">
        <motion.div
          className="relative"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={gradient}
            className="relative -left-42 w-full h-full object-cover"
            alt="gradient"
          />

          <motion.img
            src={ellipse}
            className="absolute top-48 -translate-x-26 -translate-y-25 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />

          <motion.img
            src={about}
            className="absolute top-48 -translate-x-16 -translate-y-25 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        <motion.div
          className="absolute top-59 translate-x-42 -translate-y-25"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>A Web Developer who</span>
          <br />
          <span className="text-4xl">
            Builds fast, scalable, and beautiful{" "}
            <span className="text-text-secondary">web experiences</span>.
          </span>
          <br />
          <span className="text-xs">
            Because great design deserves great performance.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Introduction;
