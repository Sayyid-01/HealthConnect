import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Edit3,
  Save,
  Heart,
  Activity,
} from "lucide-react";

const PersonalDetails = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "Dr. Sarah Johnson",
    email: user?.email || "sarah.johnson@healthconnect.com",
    phone: user?.phone || "+1 (555) 123-4567",
    dob: user?.dob || "March 15, 1988",
    bloodType: user?.bloodType || "O+",
    emergencyContact:
      user?.emergencyContact || "Mike Johnson - +1 (555) 987-6543",
    address: user?.address || "123 Wellness Street, Health City, HC 12345",
    memberSince: user?.memberSince || "January 2022",
    patientId: user?.patientId || "HC-2024-789123",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("personalDetails", JSON.stringify(form));
    setIsEditing(false);
  };

  return (
    <div className="w-full p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
        <div className="absolute top-4 right-4 opacity-20">
          <Heart className="w-24 h-24 lg:w-32 lg:h-32" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                Personal Health Profile
              </h1>
              <div className="flex flex-wrap gap-3 text-white/90 text-sm">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" /> Verified Patient
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4" /> Active Member
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-xl backdrop-blur-sm border border-white/30 transition transform hover:scale-105 flex items-center gap-2"
          >
            {isEditing ? (
              <>
                <Save className="w-5 h-5 text-white" /> Save
              </>
            ) : (
              <>
                <Edit3 className="w-5 h-5 text-white" /> Edit
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Primary Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-red-600" />
            </span>
            Primary Information
          </h2>
          <div className="space-y-4">
            {[
              { label: "Full Name", name: "name", icon: <User /> },
              { label: "Email Address", name: "email", icon: <Mail /> },
              { label: "Phone Number", name: "phone", icon: <Phone /> },
              { label: "Date of Birth", name: "dob", icon: <Calendar /> },
            ].map((item, i) => (
              <div key={i}>
                <label className="text-sm font-medium text-gray-500 block mb-1">
                  {item.label}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name={item.name}
                    value={form[item.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition">
                    {React.cloneElement(item.icon, {
                      className: "w-4 h-4 text-gray-400",
                    })}
                    <span className="font-medium text-gray-700">
                      {form[item.name]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Medical Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center mr-3">
              <Heart className="w-4 h-4 text-rose-600" />
            </span>
            Medical Information
          </h2>
          <div className="space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Blood Type
                  </label>
                  <input
                    type="text"
                    name="bloodType"
                    value={form.bloodType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Patient ID
                  </label>
                  <input
                    type="text"
                    name="patientId"
                    value={form.patientId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={form.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Member Since
                  </label>
                  <input
                    type="text"
                    name="memberSince"
                    value={form.memberSince}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Blood Type
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                      {form.bloodType}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {form.bloodType}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Patient ID
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="font-mono text-sm">{form.patientId}</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Emergency Contact
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-700 text-sm">
                      {form.emergencyContact}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">
                    Member Since
                  </label>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-700">
                      {form.memberSince}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <MapPin className="w-4 h-4 text-blue-600" />
          </span>
          Address Information
        </h2>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        ) : (
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">{form.address}</p>
              <p className="text-sm text-gray-500 mt-1">Primary residence</p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      {!isEditing && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Active Years",
              value: "2.5",
              icon: <Activity />,
              color: "from-red-500 to-rose-600",
            },
            {
              label: "Appointments",
              value: "24",
              icon: <Calendar />,
              color: "from-rose-500 to-pink-600",
            },
            {
              label: "Health Score",
              value: "92",
              icon: <Heart />,
              color: "from-pink-500 to-red-600",
            },
            {
              label: "Verified",
              value: "✓ Active",
              icon: <Shield />,
              color: "from-red-600 to-rose-700",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-white`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                {React.cloneElement(stat.icon, {
                  className: "w-6 h-6 text-white/80",
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
