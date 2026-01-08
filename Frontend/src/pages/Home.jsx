import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = ({ token, setToken }) => {
   
  const {logout} = useContext(AuthContext);

  

const handleLogout = (e) => {
  e.preventDefault();
  console.log("Before logout:", localStorage.getItem("token"));
  logout();
  console.log("After logout:", localStorage.getItem("token")); // Should be null
};


  return (
    <div className=" text-text-primary bg-bg w-full h-full overflow-x-hidden ">
      <Navbar />
      <form action="" onSubmit={(e)=>handleLogout(e)}>
        <button type="submit">Logout</button>
      </form>
      
      <About />
      <Projects />
    </div>
  );
};

export default Home;
