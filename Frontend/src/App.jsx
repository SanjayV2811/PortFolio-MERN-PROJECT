import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import { AuthContext } from "./context/AuthContext";
import './App.css'
import axios from "axios";

const App =  () => {
  const { token } = useContext(AuthContext);
 
  const [tokens , setToken] = useState(null);
 const [api , setapi] = useState(null);

  const fetchApi = async () => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke")

    console.log(response.data.punchline)
    setapi(response.data)
  }

  useEffect(() => {
     console.log(token)
     setToken(token);
     fetchApi()
  }, [token]);

  return (
    <Routes>
      {/* Protected Home route */}
      <Route
        path="/"
        element={tokens ? <Home /> : <Navigate to="/login" />}
      />

      {/* Login/Register */}
      <Route path="/login" element={<LoginRegister />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
