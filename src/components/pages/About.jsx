import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faPeopleCarry, faUserMd } from "@fortawesome/free-solid-svg-icons";
import Team from "../Home/Team";
import { motion } from "framer-motion";

// Reusable fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-6 mt-10">
      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-center text-white py-16 rounded-lg shadow-md mb-12 transition duration-500 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: "url('https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(220, 38, 38, 0.85)",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Health Connect</h1>
        <p className="text-lg leading-relaxed mx-auto max-w-2xl">
          Connecting you with top healthcare professionals, compassionate care, and a healthier tomorrow.
        </p>
      </motion.section>

      {/* Mission & Vision Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-10">
        {[{
          title: "Our Mission",
          content: "At Health Connect, our mission is to bridge the gap between patients and healthcare providers, ensuring accessible, efficient, and high-quality medical services for everyone.",
        }, {
          title: "Our Vision",
          content: "We envision a world where healthcare is accessible to all, fostering a healthier, happier global community.",
        }].map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md transition duration-500 ease-in-out hover:bg-gray-200 hover:scale-105"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center my-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: faHeartbeat,
            title: "Compassion",
            text: "We care deeply for our patients and treat them like family, providing a compassionate experience at every touchpoint.",
          }, {
            icon: faPeopleCarry,
            title: "Collaboration",
            text: "Working together with patients, doctors, and the community to achieve holistic health for everyone.",
          }, {
            icon: faUserMd,
            title: "Excellence",
            text: "Striving for excellence in every service, from routine checkups to complex procedures.",
          }].map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <FontAwesomeIcon icon={value.icon} className="text-red-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="my-16 text-center"
      >
        <Team />
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-center mt-12"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Connect with Us?</h3>
        <p className="text-gray-600 mb-6">We’re here to support your health journey. Reach out today!</p>
        <a
          href="/contact"
          className="px-6 py-3 text-white font-semibold rounded-full bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)] transition duration-300"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default AboutUs;
