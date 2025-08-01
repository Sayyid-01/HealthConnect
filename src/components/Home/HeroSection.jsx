import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div ref={ref} className="min-h-screen bg-white overflow-hidden relative mt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto h-full py-16 max-w-[92%]">
        <div className="flex flex-col-reverse lg:flex-row h-full items-center gap-16">

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all border border-red-100 w-fit">
              <span className="text-red-500 animate-pulse mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </span>
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-bold text-xs sm:text-sm">
                Trusted Healthcare Partner
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
              <span className="text-red-900 block">Your</span>
              <span className="bg-clip-text text-red-500 bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 block">Health is</span>
              <span className="text-gray-900 block">Our Priority</span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Experience personalized healthcare through our network of qualified professionals. Your well-being is at the heart of everything we do.
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 pt-5 sm:pt-6">
              <div className="flex items-center gap-3 group shadow-md px-5 py-3 rounded-xl hover:scale-105 transition-all">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-2xl group-hover:bg-blue-300 transition-colors group-hover:shadow-lg">
                  <svg className="lucide lucide-calendar text-blue-600" width="24" height="24" fill="none" stroke="currentColor"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm">24/7 Availability</p>
              </div>

              <div className="flex items-center gap-3 group shadow-md px-5 py-3 rounded-xl hover:scale-105 transition-all">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-2xl group-hover:bg-green-300 transition-colors group-hover:shadow-lg">
                  <svg className="lucide lucide-shield text-green-600" width="24" height="24" fill="none" stroke="currentColor"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm">100% Secure</p>
              </div>
            </div>

            {/* Register Button */}
            <a href="/signup">
              <button className="px-5 py-2.5 mt-8 sm:mt-12 font-semibold rounded-md text-lg sm:text-xl w-full sm:w-auto bg-gradient-to-r from-red-900 via-rose-600 to-red-700 text-white hover:-translate-y-1 active:translate-y-0.5 hover:shadow-xl transition duration-300">
                Register Now
              </button>
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[300px] sm:min-h-[350px]"
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="absolute right-0 w-full h-[120%] bg-gradient-to-bl from-blue-400/20 via-red-300/20 to-orange-200/20 rounded-l-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png"
                alt="Professional Doctor"
                className="object-contain h-[75%] md:h-[85%] rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-6 sm:bottom-10 left-1 sm:-left-10 bg-gradient-to-br from-white/90 to-red-50/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl transition-all transform -translate-x-[32px] border border-red-100">
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">500+</p>
                <p className="text-gray-700 text-sm sm:text-base">Happy Patients</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
