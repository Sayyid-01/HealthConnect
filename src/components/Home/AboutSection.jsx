import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center md:items-start py-12 px-6 md:px-16 mb-10 md:mb-20 mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left Images */}
      <motion.div
        className="relative w-full md:w-1/2 mb-8 md:mb-0 hidden md:flex justify-center"
        variants={itemVariants}
      >
        <div className="relative">
          <img
            src="https://preview.colorlib.com/theme/docmed/img/about/1.png"
            alt="Dentist performing a procedure"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://preview.colorlib.com/theme/docmed/img/about/2.png"
            alt="Doctor consulting with a patient"
            className="absolute top-10 left-20 transform translate-x-10 translate-y-10 rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
        variants={itemVariants}
      >
        <motion.h4
          className="text-red-500 font-semibold text-sm uppercase mb-2"
          variants={itemVariants}
        >
          Welcome to Health Connect
        </motion.h4>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Best Care For Your Good Health
        </motion.h2>

        <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
          At Health Connect, we prioritize compassionate, personalized care that meets the unique needs of every patient. Our team of experienced professionals is committed to providing the highest quality medical services, ensuring you receive the best care possible.
        </motion.p>

        <motion.ul className="space-y-3 mb-6 text-gray-600" variants={itemVariants}>
          {[
            "State-of-the-art medical facilities and equipment.",
            "Experienced doctors and friendly, supportive staff.",
            "Comprehensive care to each patient’s needs."
          ].map((text, idx) => (
            <motion.li key={idx} className="flex items-center text-sm md:text-base" variants={itemVariants}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="circle-check"
                className="w-5 h-5 text-red-500 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -4,
            
          }}
          whileTap={{
            scale: 0.55,
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
          className="px-6 py-3 rounded-md font-semibold text-white shadow-md transition-all duration-300 bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)]"
          //  
          variants={itemVariants}
        >
          Learn More
        </motion.button>

      </motion.div>
    </motion.section>
  );
};

export default AboutSection;