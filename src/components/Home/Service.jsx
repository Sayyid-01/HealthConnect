import React from 'react';
import { services } from '../../data/servicesData.jsx';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const ServicesGrid = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of section is visible
        >
          {services.map(({ id, icon, title, description, action }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              className="rounded-xl font-semibold text-white shadow-md transition-all duration-300
                bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)]
                hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
            >
              <div className="flex flex-col items-center text-center p-10">
                <div className="mb-6">{icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-base mb-6 leading-relaxed">{description}</p>
                <a
                  href={action.href}
                  className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-600 transition duration-300 text-sm font-medium"
                >
                  {action.text}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
