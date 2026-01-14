import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OwnerContext = createContext();


export default function OwnerContextProvider({ children }) {

  const navigate = useNavigate();
  const [owner, setOwner] = useState(null);
  const [accessToken, setAccessToken] = useState(() => 
     localStorage.getItem("token") || null
  );

  console.log(accessToken);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    } else {
      localStorage.removeItem("token");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);


  

  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/owners/logout`, { withCredentials: true });
    setAccessToken(null);
    setOwner(null);
    localStorage.removeItem("token");
  };


  return (
    <OwnerContext.Provider value={{ owner, setOwner, accessToken, setAccessToken, logout }}>
      {children}
    </OwnerContext.Provider>
  );
};

export { OwnerContext };