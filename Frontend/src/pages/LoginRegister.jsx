import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

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
        <form className="mt-8 space-y-5">

          {/* Name (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm text-text-tertiary mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Sanjay Baviskar"
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
        </p>
      </div>
    </div>
  );
}
