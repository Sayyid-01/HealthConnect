import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../common/Loader'; // Import the Loader component

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const iconMapping = {
  faHeartPulse: faHeartPulse,
  faUserMd: faUserMd,
  faTooth: faTooth,
  faEye: faEye,
  faBrain: faBrain,
  faSyringe: faSyringe,
};



const Doctor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const { department: initialDepartment } = useParams();
  const [departments, setDepartments] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(
    initialDepartment || "All"
  );





  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        // fetch doctors
        const response = await fetch("https://backend-health-connect.vercel.app/doctors");
        const data = await response.json();
        setDoctors(data);


        // filter doctors by department if initialDepartment is set
        if (initialDepartment && initialDepartment !== "All") {
          const deptResponse = await fetch(
            `https://backend-health-connect.vercel.app/doctors/department/${initialDepartment.toLowerCase()}`
          );
          const deptData = await deptResponse.json();
          setFilteredDoctors(deptData);
        } else {
          setFilteredDoctors(data);
        }

        // fetch departments
        const deptResponse = await fetch("https://backend-health-connect.vercel.app/doctors/department");
        const deptData = await deptResponse.json();
        setDepartments(["All", ...deptData.departments]);

 
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [initialDepartment]);



  const handleDepartmentClick = async (department) => {
    setSelectedDepartment(department);
    try {
      setLoading(true);
      if (department === "All") {
        setFilteredDoctors(doctors);
      } else {
        const response = await fetch(
          `https://backend-health-connect.vercel.app/doctors/department/${department.toLowerCase()}`
        );
        const data = await response.json();
        setFilteredDoctors(data);
      }
    } catch (error) {
      console.error("Error filtering doctors:", error);
    } finally {
      setLoading(false);
    }
    navigate(`/doctors/${department}`);
  };

  const handleDoctorClick = (doctorId) => {
    navigate(`/appointment/${doctorId}`);
  };

  const getHeadingText = () => {
    if (selectedDepartment === "All" || !selectedDepartment) {
      return "Browse through all doctors specialist.";
    }
    return (
      <>
        Browse through{" "}
        <span className="text-red-700 font-semibold">
          {selectedDepartment.toUpperCase()}
        </span>{" "}
        doctors near you.
      </>
    );
  };

  if (loading) {
    return <Loader />;
  }



  return (
    <div className="container mx-auto py-12 px-6 mt-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-500 mb-4">
              Filter by Departments
            </h3>
            <div className="space-y-2 ">
              {departments.map((department) => (
                <div
                  key={
                    typeof department === "string"
                      ? department
                      : department.title
                  }
                  onClick={() =>
                    handleDepartmentClick(
                      typeof department === "string"
                        ? department
                        : department.title
                    )
                  }
                  className={`flex cursor-pointer items-center gap-3 p-3  rounded-lg transition-colors ${selectedDepartment ===
                      (typeof department === "string"
                        ? department
                        : department.title)
                      ? "transition-all duration-300 text-white bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
                      : "bg-gray-50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                  }`}
                >
              {typeof department === "string" ? (
                <span className="text-white-700">{department}</span>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={iconMapping[department.icon]}
                    className={`text-lg mr-2 ${selectedDepartment === department.title
                        ? "text-white"
                        : "text-black-600"
                      }`}
                  />
                  <span
                    className={
                      selectedDepartment === department.title
                        ? "text-white"
                        : "text-gray-700"
                    }
                  >
                    {department.title}
                  </span>
                </>
              )}
            </div>
              ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4">
        <h4 className="md:text-3xl text-2xl font-bold text-gray-800 mb-8">
          {getHeadingText()}
        </h4>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-md flex h-min flex-col items-center text-center cursor-pointer"
              onClick={() => handleDoctorClick(doctor.id)}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="font-semibold mb-2">
                <ul className="list-none pl-4">
                  <li className="flex items-center space-x-2">
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse ${doctor.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      style={{ minWidth: "6px", minHeight: "6px" }}
                    ></span>
                    <span
                      className={`${doctor.available ? "text-green-500" : "text-red-500"
                        }`}
                    >
                      {doctor.available ? "Available" : "Unavailable"}
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-gray-500">{doctor.speciality.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div >
  )
}

export default Doctor