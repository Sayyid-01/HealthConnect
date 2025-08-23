import React, { useEffect, useState } from "react";
import {
  User,
  FileText,
  ClipboardList,
  Lock,
  LifeBuoy,
  Camera,
} from "lucide-react";

import PersonalDetails from "./PersonalDetails";
import MedicalHistory from "./MedicalHistory";
import MyPrescriptions from "./MyPrescriptions";
import ChangePassword from "./ChangePassword";
import SupportHelp from "./SupportHelp";

const sections = [
  { label: "Personal Details", icon: User },
  { label: "Medical History", icon: FileText },
  { label: "My Prescriptions", icon: ClipboardList },
  { label: "Change Password", icon: Lock },
  { label: "Support & Help", icon: LifeBuoy },
];

const MainProfile = () => {
  const [active, setActive] = useState(sections[0].label);
  const [currUser, setCurrUser] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@healthconnect.com",
    membershipType: "Premium Member",
    joinDate: "Jan 2022",
  });
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setCurrUser(JSON.parse(savedUser));

    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setProfilePic(base64);
      localStorage.setItem("profilePic", base64);
    };
    reader.readAsDataURL(file);
  };

  const renderSectionContent = () => {
    switch (active) {
      case "Personal Details":
        return <PersonalDetails user={currUser} />;
      case "Medical History":
        return <MedicalHistory />;
      case "My Prescriptions":
        return <MyPrescriptions />;
      case "Change Password":
        return <ChangePassword />;
      case "Support & Help":
        return <SupportHelp />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-6 mt-10">
      <div className="flex flex-col lg:flex-row gap-6 max-w-10xl mx-auto">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
          {/* Profile Info */}
          <div className="text-center">
            <div className="relative inline-block">
              <label htmlFor="upload-photo" className="cursor-pointer">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-md mx-auto">
                  {profilePic ? (
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-1 right-1 bg-red-600 p-1.5 rounded-full shadow-md">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </label>
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <h2 className="mt-4 font-semibold text-gray-800 text-lg">{currUser.name}</h2>
            <p className="text-sm text-gray-500">{currUser.email}</p>

            {/* KEEP OLD STYLE PREMIUM MEMBERSHIP */}
            <div className="mt-4 bg-gradient-to-r from-red-500 to-red-700 px-4 py-3 rounded-xl text-sm text-white shadow-lg">
              <p className="font-semibold">{currUser.membershipType}</p>
              <p className="text-blue-100">Joined {currUser.joinDate}</p>
            </div>
          </div>

          {/* Nav Menu */}
          <nav className="space-y-2">
            {sections.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex items-center w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === label
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {renderSectionContent()}
        </main>
      </div>
    </div>
  );
};

export default MainProfile;
