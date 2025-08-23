import React, { useState } from "react";
import { 
  Heart, 
  Activity, 
  Pill, 
  AlertTriangle, 
  Calendar, 
  Upload, 
  FileText, 
  Stethoscope,
  Plus,
  Eye,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  User
} from "lucide-react";

const MedicalHistory = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const medicalData = {
    allergies: [
      { name: "None Known", severity: "N/A", date: "Verified 2024" }
    ],
    conditions: [
      { 
        name: "Asthma", 
        status: "Controlled", 
        diagnosed: "2018-03-15", 
        severity: "Mild",
        description: "Exercise-induced asthma, well controlled with medication"
      },
      {
        name: "Seasonal Allergies",
        status: "Active",
        diagnosed: "2020-06-10",
        severity: "Mild",
        description: "Pollen allergies during spring season"
      }
    ],
    medications: [
      { 
        name: "Vitamin D3", 
        dosage: "1000 IU daily", 
        prescribed: "2023-01-10",
        prescriber: "Dr. Johnson",
        status: "Active"
      },
      { 
        name: "Albuterol Inhaler", 
        dosage: "2 puffs as needed", 
        prescribed: "2023-03-15",
        prescriber: "Dr. Smith",
        status: "Active"
      },
      {
        name: "Cetirizine",
        dosage: "10mg daily",
        prescribed: "2023-04-20",
        prescriber: "Dr. Johnson",
        status: "Seasonal"
      }
    ],
    reports: [
      { name: "Blood Work Results", date: "2024-01-15", type: "Lab", size: "2.3 MB" },
      { name: "Chest X-Ray", date: "2023-11-20", type: "Imaging", size: "5.1 MB" },
      { name: "Annual Physical", date: "2023-08-10", type: "Report", size: "1.8 MB" }
    ],
    vitals: {
      bloodPressure: "120/80 mmHg",
      heartRate: "72 bpm",
      temperature: "98.6°F",
      weight: "165 lbs",
      height: "5'8\"",
      lastUpdated: "2024-01-20"
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "conditions", label: "Conditions", icon: Stethoscope },
    { id: "medications", label: "Medications", icon: Pill },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "vitals", label: "Vitals", icon: Heart }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      "Mild": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Moderate": "bg-orange-100 text-orange-800 border-orange-200",
      "Severe": "bg-red-100 text-red-800 border-red-200",
      "N/A": "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[severity] || colors["N/A"];
  };

  const getStatusColor = (status) => {
    const colors = {
      "Active": "bg-green-100 text-green-800 border-green-200",
      "Controlled": "bg-blue-100 text-blue-800 border-blue-200",
      "Seasonal": "bg-purple-100 text-purple-800 border-purple-200",
      "Inactive": "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[status] || colors["Active"];
  };

  return (
    <div className="w-full p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4 opacity-20">
          <Stethoscope className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Medical History</h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/90">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Records Verified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Last Updated: Jan 20, 2024</span>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-sm font-medium hidden sm:inline">Upload</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-2">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base font-medium flex-1 sm:flex-none justify-center sm:justify-start min-w-0 ${
                activeTab === id
                  ? "bg-red-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Quick Stats */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm">Conditions</p>
                    <p className="text-2xl font-bold">{medicalData.conditions.length}</p>
                  </div>
                  <Stethoscope className="w-8 h-8 text-red-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-rose-100 text-sm">Medications</p>
                    <p className="text-2xl font-bold">{medicalData.medications.length}</p>
                  </div>
                  <Pill className="w-8 h-8 text-rose-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm">Reports</p>
                    <p className="text-2xl font-bold">{medicalData.reports.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-pink-200" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm">Allergies</p>
                    <p className="text-2xl font-bold">{medicalData.allergies.length}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-200" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Blood work results uploaded</p>
                    <p className="text-sm text-gray-500">January 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Pill className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Medication updated: Cetirizine</p>
                    <p className="text-sm text-gray-500">April 20, 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Annual physical completed</p>
                    <p className="text-sm text-gray-500">August 10, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vital Signs Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Latest Vitals</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Pressure</span>
                  <span className="font-semibold">{medicalData.vitals.bloodPressure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Heart Rate</span>
                  <span className="font-semibold">{medicalData.vitals.heartRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-semibold">{medicalData.vitals.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Temperature</span>
                  <span className="font-semibold">{medicalData.vitals.temperature}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conditions Tab */}
        {activeTab === "conditions" && (
          <div className="space-y-4">
            {medicalData.conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{condition.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(condition.status)}`}>
                        {condition.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(condition.severity)}`}>
                        {condition.severity}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{condition.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      Diagnosed: {new Date(condition.diagnosed).toLocaleDateString()}
                    </div>
                  </div>
                  <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === "medications" && (
          <div className="space-y-4">
            {medicalData.medications.map((medication, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{medication.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(medication.status)}`}>
                        {medication.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">Dosage: {medication.dosage}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Prescribed: {new Date(medication.prescribed).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        By: {medication.prescriber}
                      </div>
                    </div>
                  </div>
                  <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl transition-colors flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Manage</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Reports</h3>
                <p className="text-gray-600">Upload and manage your medical documents</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload New Report</span>
              </button>
            </div>
            
            {medicalData.reports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{report.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(report.date).toLocaleDateString()}
                        </div>
                        <span className="px-2 py-1 bg-gray-100 rounded-lg">{report.type}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-green-50 hover:bg-green-100 text-green-600 p-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vitals Tab */}
        {activeTab === "vitals" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Vitals</h3>
              <div className="space-y-4">
                {Object.entries(medicalData.vitals).filter(([key]) => key !== "lastUpdated").map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-bold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last Updated: {medicalData.vitals.lastUpdated}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vital Trends</h3>
              <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Vital trends chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MedicalHistory;
