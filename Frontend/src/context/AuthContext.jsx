import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState( setUser|| null);

  // Sync localStorage whenever token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

//   Optionally, fetch user profile if token exists on mount
  useEffect(() => {
    const fetchUser = async () => {
      if (token && !user) {
        try {
          const res = await fetch("http://localhost:3000/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          setUser(data.user);
        } catch (err) {
          console.error(err);
          setToken(null);
          setUser(null);
        }
      }
    };
    fetchUser();
  }, [token, user]);

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
