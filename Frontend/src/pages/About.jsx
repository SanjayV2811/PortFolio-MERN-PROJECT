import React from "react";
import { motion } from "framer-motion";
import Introduction from "../components/Introduction";

const About = () => {
  return (
    <div id="about" className="min-h-screen">
      <Introduction />

      <motion.div
        className="py-10 flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative text-center">
          <h2 className="text-4xl">
            I'm a Web Developer.
          </h2>
          <p className="text-xl">
            Currently, I am a 3rd year Computer Engineering Student
          </p>
        </div>

        <motion.div
          className="w-[55%] text-xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a Full-Stack MERN Web Developer with hands-on
          frontend internship experience, passionate about
          building fast, responsive, and user-focused web
          applications.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
