import React, {  useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import AddProject from "./components/Addprojects";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./App.css";
import OwnerLogin from "./pages/ownerLogin";
import { useLocation } from "react-router-dom";
import OwnerContext from "./context/OwnerContext";
import FavoriteProjects from "./components/FavouriteProject";
import UpdateProject from "./components/UpdateProject";


const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
// const {project} = useContext(OwnerContext);

  useEffect(() => {
    if (location.pathname === "/login") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location]);


  return (
    <div className={` ${isLogin ? "ml-64" : ""} h-screen bg-[#52969A54] `}>
      {isLogin && (
        <div className="">
          <div>
            <Sidebar />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        )}
      <Routes>
        <Route path="/" element={isLogin ? <Dashboard /> : <OwnerLogin />} />
        <Route
          path="/projects"
          element={isLogin ? <Projects /> : <OwnerLogin />}
        />
        <Route
          path="/add-project"
          element={isLogin ? <AddProject /> : <OwnerLogin />}
        />
        <Route path="/login" element={<OwnerLogin />} />
        <Route
          path="/favorite-projects"
          element={isLogin ? <FavoriteProjects /> : <OwnerLogin />}
        />
        <Route path="/projects/edit/:id" element={isLogin ? <UpdateProject /> : <OwnerLogin />} />
        </Routes>
      
    </div>
  );
};

export default App;
