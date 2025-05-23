import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill all fields");

    navigate("/profile", {
      state: {
        userName: "Logged In User",
        userEmail: email,
      },
    });
  };

  return (
    <div className="h-screen bg-[#f3f4f6] flex items-start justify-center px-4 py-8 overflow-hidden">
      <div className="w-full max-w-[18rem] sm:max-w-[20rem] bg-[#f9fafb] h-[90vh] border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col rounded-none">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-snug">
            Sign in to your <br /> PopX account
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="mt-4 space-y-3 flex-1 flex flex-col justify-start"
        >
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-purple-600">Email address</span>{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              <span className="text-purple-600">Password</span>{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold py-3 rounded-md transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
