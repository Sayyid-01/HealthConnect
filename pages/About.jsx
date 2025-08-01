import React from 'react';

const About = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat text-white py-20 px-6"
        style={{
          backgroundImage: "url('https://preview.colorlib.com/theme/mediplus/images/bg_1.jpg.webp')",
        }}
      >
        <div className="bg-red-900 bg-opacity-80 py-20 px-6 rounded-lg">
          <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Health Connect</h1>
          <p className="text-xl text-center">Your trusted platform for connecting with healthcare professionals.</p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-12 px-6 mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out w-full">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Our Mission</h2>
            <p className="text-gray-700">To provide accessible and reliable healthcare solutions through innovative technology and compassionate care.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out w-full">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">To revolutionize the healthcare experience by connecting patients with top-tier professionals seamlessly and securely.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value Card */}
          {[
            {
              icon: (
                <svg className="w-12 h-12 text-red-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 1 1 4 6.292V20a2 2 0 0 1-4 0V10.646a4 4 0 1 1-4-6.292" />
                </svg>
              ),
              title: 'Compassion',
              text: 'We treat every patient with empathy and kindness.',
            },
            {
              icon: (
                <svg className="w-12 h-12 text-red-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ),
              title: 'Collaboration',
              text: 'We believe in the power of teamwork and shared knowledge.',
            },
            {
              icon: (
                <svg className="w-12 h-12 text-red-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" />
                </svg>
              ),
              title: 'Excellence',
              text: 'We strive for the highest standards in healthcare delivery.',
            },
          ].map((val, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
              {val.icon}
              <h3 className="text-2xl font-semibold mb-2 text-red-700">{val.title}</h3>
              <p className="text-gray-700">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Doctors Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-10">Our Expert Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Sarah Johnson', role: 'Cardiologist', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
            { name: 'Dr. Michael Lee', role: 'Dermatologist', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
            { name: 'Dr. Emily Davis', role: 'Pediatrician', img: 'https://randomuser.me/api/portraits/women/3.jpg' },
            { name: 'Dr. James Smith', role: 'Neurologist', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
          ].map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
              <img src={doc.img} alt={doc.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-700">{doc.name}</h3>
              <p className="text-gray-700 mb-4">{doc.role}</p>
              <div className="flex justify-center gap-4 text-red-600">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
