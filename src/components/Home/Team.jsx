import React from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Richard James",
    specialty: "Cardiology",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Sarah White",
    specialty: "Urology",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Emma Brown",
    specialty: "Dental Care",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. John Smith",
    specialty: "Neurology",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const socialIcons = [
  {
    href: "#",
    svgPath:
      "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z", // facebook
  },
  {
    href: "#",
    svgPath:
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z", // twitter
  },
  {
    href: "#",
    svgPath:
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z", // instagram
  },
  {
    href: "#",
    svgPath:
      "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z", // linkedin
  },
];

// Container animation for the entire section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Header animations
const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// 3D Card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    rotateX: -45,
    rotateY: 30,
    scale: 0.7,
    z: -200
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }),
  hover: {
    y: -15,
    rotateX: 10,
    rotateY: 10,
    scale: 1.05,
    z: 50,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Image animation variants
const imageVariants = {
  hidden: { 
    scale: 0.5,
    rotate: -180,
    filter: "blur(10px)"
  },
  visible: {
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Social icons animation
const socialVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + (i * 0.1),
      duration: 0.4,
      type: "spring",
      stiffness: 200
    }
  }),
  hover: {
    scale: 1.3,
    rotate: 360,
    transition: {
      duration: 0.5
    }
  }
};

// Button animation
const buttonVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      type: "spring",
      stiffness: 120
    }
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 30px 8px rgba(214,69,69,0.6)",
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function Team() {
  return (
    <motion.div 
      className="py-12 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h4 
        className="text-gray-500 uppercase text-sm mb-2"
        variants={headerVariants}
      >
        Our Team
      </motion.h4>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        variants={headerVariants}
      >
        Our Expert Doctors
      </motion.h2>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" style={{ perspective: "1000px" }}>
        {doctors.map(({ name, specialty, img }, index) => (
          <motion.div 
            key={name} 
            className="flex flex-col items-center text-center group"
            variants={cardVariants}
            whileHover="hover"
            custom={index}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-48 h-48 mb-4">
              <motion.img
                src={img}
                alt={name}
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                variants={imageVariants}
                whileHover="hover"
              />
              {console.log("Image loaded:", img)}
              {/* 3D Shadow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400/30 to-purple-600/30 -z-10 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, opacity: 0.8 }}
                transition={{ duration: 0.4 }}
                style={{ transform: "translateZ(-20px)" }}
              />
            </div>
            
            <motion.h3 
              className="text-lg font-bold text-red-800 group-hover:text-red-600 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            >
              {name}
            </motion.h3>
            
            <motion.p 
              className="text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            >
              {specialty}
            </motion.p>
            
            <div className="flex space-x-4 text-gray-500">
              {socialIcons.map(({ href, svgPath }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  className="hover:text-red-500 transition-colors duration-300"
                  variants={socialVariants}
                  whileHover="hover"
                  custom={i}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path fill="currentColor" d={svgPath} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-8"
        whileHover="hover"
        whileTap="tap"
      >
        <button 
        onClick={() => window.location.href = "/doctor"}
         className="px-6 py-3 text-white font-semibold rounded-full bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]">
          View More
        </button>
      </motion.div>
    </motion.div>
  );
}