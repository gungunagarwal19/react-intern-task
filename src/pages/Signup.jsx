import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [agency, setAgency] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, email, password } = formData;

    if (!fullName || !phone || !email || !password || !agency) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    navigate("/profile", {
      state: {
        userName: fullName,
        userEmail: email,
      },
    });
  };

  return (
    <div className="min-h-screen max-h-screen bg-[#f3f4f6] flex items-start justify-center px-4 py-8 overflow-hidden">
      <div className="w-full max-w-[18rem] sm:max-w-[20rem] bg-[#f9fafb] min-h-[93vh] border border-gray-200 shadow-sm flex flex-col p-4 sm:p-6 rounded-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          Create your <br />
          PopX account
        </h2>

        <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                <span className="text-purple-600">Full Name</span>{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                <span className="text-purple-600">Phone number</span>{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength="10"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                <span className="text-purple-600">Email address</span>{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                <span className="text-purple-600">Password</span>{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                <span className="text-purple-600">Company name</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Agency */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Are you an Agency? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="agency"
                      value={option}
                      checked={agency === option}
                      onChange={() => setAgency(option)}
                      className="h-4 w-4 text-purple-600 border-gray-300"
                    />
                    <span className="text-gray-800 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6 mt-auto">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-xl transition"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
