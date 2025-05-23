import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { userName, userEmail } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-[#f9fafb] h-[80vh] border border-gray-200 shadow-sm p-6 sm:p-8 rounded-xl flex flex-col justify-between">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome, {userName || "Marry Doe"}!
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Here's your account dashboard.
          </p>

          <div className="flex items-start space-x-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                <img
                  src=""
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {userName || "Marry Doe"}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {userEmail || "marry@gmail.com"}
              </p>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="w-24 h-1 bg-gray-300 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
