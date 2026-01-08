import React from "react";
import Introduction from "../components/Introduction";

const About = () => {
  return (
    <div>
      <div className=" min-h-screen">
        <Introduction />
        <div className="py-10 flex flex-col items-center gap-10">
          <div className=" flex flex-col relative right-43">
            <h2 className="text-4xl">I'm a Web Developer. | </h2>
            <p className="text-xl">
              Currently , i am 3rd year Computer Engineering Student
            </p>
          </div>

          <div className="  w-[55%] text-xl">
            I’m a Full-Stack MERN Web Developer with hands-on frontend
            internship experience, passionate about building fast, responsive,
            and user-focused web applications. I enjoy turning ideas into clean,
            scalable code and crafting digital experiences that look great and
            perform even better.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
