import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faBaby,
  faSyringe,

} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Loader from '../common/Loader'; // Import the Loader component

const iconMapping = {
  faHeartPulse: faHeartPulse,
  faUserMd: faUserMd,
  faTooth: faTooth,
  faEye: faEye,
  faBrain: faBrain,
  faBaby: faBaby,
  faSyringe: faSyringe,
};


const Popular__Departments = ({ isHomePage }) => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
      },
    },
  };



  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://healthconnect-5ad96-default-rtdb.firebaseio.com/doctors.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const uniqueDepartments = Array.from(
          new Map(
            data.map((dept) => [
              dept.speciality.title,
              {
                title: dept.speciality.title,
                icon: iconMapping[dept.speciality.icon] || faUserMd,
              },
            ])
          ).values()
        );
        setDepartments(uniqueDepartments);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false)); // Hide loader after data is loaded
  }, []);

  const handleDepartmentClick = (title) => {
    navigate(`/doctors/${title}`);
  };


  return (
    <>
      {
        isHomePage ? (
          <>
            <section className="py-12 bg-gray-50 text-center ">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                Health Connect Popular Departments
              </motion.h2>

              <motion.p
                className="text-gray-500 mb-10 px-4 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Discover the range of medical specialties that our expert team offers to
                ensure comprehensive health care services.
              </motion.p>
            </section>
          </>
        ) : (
          <>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-24 text-center mt-[200px] "
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              All Available Departments
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-10 px-4 text-center mb-[100px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We provide a wide range of medical specialties to cater to your healthcare needs. Our departments are staffed by <br/> highly qualified professionals who are committed to providing exceptional care.
            </motion.p>
          </>
        )}


      {
        loading ? (
          <p className="text-gray-500">Loading departments...</p>
        ) : (
          <motion.div
            className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-3/4 md:w-full mb-[140px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {departments.map(({ title, icon }, index) => (
              <motion.div
                key={index}
                onClick={() => handleDepartmentClick(title)}
                className="cursor-pointer flex flex-col items-center text-center p-6 rounded-lg shadow-md transition duration-300 text-white bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
                variants={cardVariants}
              >
                <div className="text-white text-5xl mb-4">
                  <FontAwesomeIcon icon={icon} className="text-5xl mb-4" />

                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </motion.div>
            ))}
          </motion.div>
        )
      }

      {isHomePage && (
        <motion.div
          className="mt-10 flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/department"
            className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
          >
            View More
          </Link>
        </motion.div>
      )}

</>

      );
};

      export default Popular__Departments;
