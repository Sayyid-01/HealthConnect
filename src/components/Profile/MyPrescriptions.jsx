import React, { useState } from 'react';
import { Plus, Calendar, Clock, Pill, FileText, Search, Filter, Download } from 'lucide-react';

const MyPrescriptions = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const prescriptions = [
    {
      id: 1,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Johnson',
      datePrescribed: '2024-08-15',
      refillsLeft: 3,
      status: 'active',
      category: 'cardiac'
    },
    {
      id: 2,
      medication: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      prescribedBy: 'Dr. Michael Chen',
      datePrescribed: '2024-08-10',
      refillsLeft: 1,
      status: 'active',
      category: 'diabetes'
    },
    {
      id: 3,
      medication: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'As needed',
      prescribedBy: 'Dr. Emily Rodriguez',
      datePrescribed: '2024-07-28',
      refillsLeft: 0,
      status: 'expired',
      category: 'pain'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: prescriptions.length },
    { id: 'active', label: 'Active', count: prescriptions.filter(p => p.status === 'active').length },
    { id: 'expired', label: 'Expired', count: prescriptions.filter(p => p.status === 'expired').length }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesFilter = activeFilter === 'all' || prescription.status === activeFilter;
    const matchesSearch = prescription.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prescription.prescribedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      cardiac: 'from-red-400 to-red-600',
      diabetes: 'from-blue-400 to-blue-600',
      pain: 'from-purple-400 to-purple-600',
      default: 'from-teal-400 to-teal-600'
    };
    return colors[category] || colors.default;
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                My Prescriptions
              </h1>
              <p className="text-slate-600 text-lg">Manage and track your medications</p>
            </div>
            <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="absolute inset-0 bg-white opacity-20 transform -skew-y-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <div className="flex items-center gap-2 relative z-10">
                <Plus className="w-5 h-5" />
                Upload New Prescription
              </div>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Total Prescriptions</p>
                  <p className="text-3xl font-bold text-slate-800 mt-1">{prescriptions.length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Active Medications</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">
                    {prescriptions.filter(p => p.status === 'active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Pill className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Need Refill</p>
                  <p className="text-3xl font-bold text-orange-600 mt-1">
                    {prescriptions.filter(p => p.refillsLeft <= 1 && p.status === 'active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medications or doctors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prescriptions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrescriptions.map((prescription, index) => (
            <div
              key={prescription.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(prescription.category)} rounded-xl flex items-center justify-center`}>
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                      {prescription.medication}
                    </h3>
                    <p className="text-slate-600">{prescription.dosage} • {prescription.frequency}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(prescription.status)}`}>
                  {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Prescribed: {new Date(prescription.datePrescribed).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">By: {prescription.prescribedBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-600" />
                  <span className={`text-sm ${prescription.refillsLeft <= 1 ? 'text-orange-600 font-medium' : 'text-slate-600'}`}>
                    Refills left: {prescription.refillsLeft}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                  View Details
                </button>
                <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all duration-300">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrescriptions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No prescriptions found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPrescriptions;