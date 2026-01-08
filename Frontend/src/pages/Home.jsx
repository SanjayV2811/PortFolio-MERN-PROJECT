import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";
import Projects from "./Projects";

const Home = ({ token, setToken }) => {
  console.log(token);
  const handlelogout = () => {
    // TODO: Implement logout logic
    localStorage.removeItem("token");
    setToken(null);
    console.log("Logout clicked");
  };

  return (
    <div className=" text-text-primary bg-bg w-full h-full overflow-x-hidden ">
      <Navbar />
      <a href="/" onClick={handlelogout}>
        logout
      </a>
      <a href="#about" onClick={handlelogout}>
        About
      </a>
      <About />
      <Projects />
    </div>
  );
};

export default Home;
