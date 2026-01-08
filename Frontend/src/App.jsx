import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import './App.css'

const App = () => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  
};

export default App;
