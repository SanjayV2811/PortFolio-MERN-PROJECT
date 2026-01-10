import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { OwnerContext } from "../context/OwnerContext";
import { useContext } from "react";

export default function OwnerLogin() {
  const { setOwner, setAccessToken } = useContext(OwnerContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const owner = {
      email,
      password,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/owners/login",
        owner,
        { withCredentials: true }
      );

      navigate(location.state?.from || "/");
      setOwner(response.data);
      setAccessToken(response.data.token);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Owner Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-xl focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-xl focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-xl hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
