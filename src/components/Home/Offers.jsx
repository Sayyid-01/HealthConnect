import React from 'react';
import { motion } from 'framer-motion';

const offers = [
  {
    icon: 'microscope',
    title: 'Advanced equipment',
    description: 'State-of-the-art medical equipment for accurate diagnostics and treatment.',
  },
  {
    icon: 'user-doctor',
    title: 'Qualified doctors',
    description: 'Our team includes highly qualified and experienced medical professionals.',
  },
  {
    icon: 'clipboard-check',
    title: 'Certified services',
    description: 'All services are certified to ensure the highest quality standards.',
  },
  {
    icon: 'heart-pulse',
    title: 'Emergency care',
    description: '24/7 emergency services to provide urgent care when you need it most.',
  },
];

// Custom animated variant
const skewFadeVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    skewY: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const OfferForYou = () => (
  <section className="py-16 text-center bg-gradient-to-b from-gray-50 to-white">
    <h4 className="uppercase text-sm mb-2 text-red-400 font-semibold">Why Choose Us?</h4>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Offer for You</h2>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-0">
      {offers.map(({ icon, title, description }, index) => (
        <motion.div
          key={title}
          className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
          variants={skewFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-5xl mb-4 text-red-600">
            <i className={`fas fa-${icon}`}></i>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default OfferForYou;
