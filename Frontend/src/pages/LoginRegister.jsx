import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const [error, setError] = useState("");

  

  const {user,setUser,token, setToken} = useContext(AuthContext)
  useEffect(() => {
    console.log(user)
    console.log(token)
    console.log(import.meta.env.VITE_BASE_URL)
  }, [user,token,setUser])
  

  

    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!isLogin) {
        

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, {
          name,
          email,
          password,
        }
        ,{
          withCredentials: true,
        }
        );
        console.log(res.data)
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/");
      } else {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
          email,
          password,
        }
        ,{
          withCredentials: true,
        }
      );
        console.log(res.data)
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };


  const getProfile = async (e) =>{
    e.preventDefault();
    try {
      
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // }
          // ,
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const clearUser = () => {
    setUser(null);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-full max-w-md bg-project-card rounded-2xl p-8 shadow-2xl border border-purple-900/40">
       
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-text-primary text-center">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-sm text-text-secondary text-center mt-2">
          {isLogin
            ? "Login to continue building great experiences"
            : "Register to start your journey"}
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={(e)=>{
          handleSubmit(e);
        }}>

          {/* Name (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm text-text-tertiary mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Sanjay Baviskar"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-navbar text-text-primary
                border border-purple-800/40 focus:outline-none focus:ring-2
                focus:ring-text-secondary"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm text-text-tertiary mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-navbar text-text-primary
              border border-purple-800/40 focus:outline-none focus:ring-2
              focus:ring-text-secondary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-text-tertiary mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-navbar text-text-primary
              border border-purple-800/40 focus:outline-none focus:ring-2
              focus:ring-text-secondary"
            />
          </div>

         
          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r
            from-text-secondary to-primary text-white font-medium
            hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
          <button onClick={getProfile} className="w-full py-3 rounded-lg bg-gradient-to-r
            from-text-secondary to-primary text-white font-medium
            hover:opacity-90 transition">Get Profile</button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-text-tertiary mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-text-secondary hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>

        </p>
      </div>
    </div>
  );
}
