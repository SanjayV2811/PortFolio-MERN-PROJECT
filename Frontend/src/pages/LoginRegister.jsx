import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");

   const {user,setUser} = useContext(AuthContext)
    console.log(user,setUser)
  

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const formData = {
      name,
      email,
      password
      
    };
   try {
    if(password === confirmPassword && !isLogin){
      // Call API
      const res = await axios.post(
      "http://localhost:3000/users/register",
      formData
    );
    const token = res.data.token;
    console.log(token);

    console.log(res.data); // ✅ REAL response
    setUser(res.data.user);
    console.log(user)
    } else if( isLogin){
      // Call API
      const res = await axios.post(
      "http://localhost:3000/users/login",
      {email: formData.email, password: formData.password},
       { withCredentials: true }
    );

    const token = res.data.token;
    localStorage.setItem("token", token);
    
    console.log(token);

    console.log(res.data); // ✅ REAL response
    setUser(res.data.user);
    console.log(user)
    }
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
  };


  const getProfile = async (e) =>{
    e.preventDefault();
    try {
      const token = localStorage.getItem("Accesstoken");
      const res = await axios.get(
        "http://localhost:3000/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
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

          {/* Confirm Password (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm text-text-tertiary mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-navbar text-text-primary
                border border-purple-800/40 focus:outline-none focus:ring-2
                focus:ring-text-secondary"
              />
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r
            from-text-secondary to-primary text-white font-medium
            hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
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

          <button className="text-text-secondary hover:underline ml-2" onClick={(e) => getProfile(e)}>Profile</button>
        </p>
      </div>
    </div>
  );
}
