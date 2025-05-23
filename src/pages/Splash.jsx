import React from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4">
      {/* Subtly different rectangle box */}
      <div className="w-full max-w-sm sm:max-w-md bg-[#f9fafb] h-[80vh] border border-gray-200 shadow-sm flex flex-col justify-end p-6 sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate('/signup')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate('/login')}
              className="w-full bg-purple-100 hover:bg-purple-200 text-purple-900 font-semibold py-3 px-6 rounded-md transition"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
