import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { userName, userEmail } = location.state || {};
  const name = userName || "Marry Doe";
  const email = userEmail || "Marry@Gmail.Com";

  const [profileImage, setProfileImage] = useState("/gungun.jpg");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f3f4f6] overflow-hidden">
      <div
        className="origin-top-left scale-[calc(min(100vw/320,100vh/650))]"
        style={{ width: 320, height: 650 }}
      >
        <div className="w-full h-full flex flex-col shadow-md border border-gray-200">
          {/* Heading */}
          <div className="bg-[#f0f1f3] text-lg font-semibold text-gray-800 px-4 py-3 border-b border-gray-200">
            Account Settings
          </div>

          {/* Content Box */}
          <div className="flex-1 bg-[#f9fafb] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="profileImageInput"
                    onChange={handleImageChange}
                  />

                  <label
                    htmlFor="profileImageInput"
                    className="absolute bg-purple-600 rounded-full p-1 cursor-pointer bottom-0 right-0"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                  Erat, Sed Diam
                </p>
              </div>

              <div className="border-b border-dashed border-gray-300 mb-6"></div>
            </div>

            <div className="border-b border-dashed border-gray-300 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
