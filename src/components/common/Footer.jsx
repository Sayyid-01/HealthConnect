import {
  FaStethoscope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-gray-200 py-16 px-8"
      style={{
        background: 'linear-gradient(90deg, rgba(36,0,9,1) 0%, rgba(121,9,13,1) 77%, rgba(214,69,69,1) 92%)',
      }}
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-8 flex items-center">
            <FaStethoscope className="mr-3 text-red-400" size={32} />
            Health Connect
          </h1>
          <p className="mb-6 text-red-200 leading-relaxed">
            Connecting you with the best healthcare services for a healthier tomorrow.
          </p>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-full bg-[#240009] border border-red-600 placeholder-red-400 text-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <button
              className="px-6 py-3 bg-[#d64545] text-white font-semibold rounded-r-full transition duration-300 hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)]"
            >
              Subscribe
            </button>
          </div>
          <div className="flex space-x-6 text-red-300">
            {[
              { icon: <FaFacebookF size={20} />, href: '#' },
              { icon: <FaTwitter size={20} />, href: '#' },
              { icon: <FaInstagram size={20} />, href: '#' },
              { icon: <FaGlobe size={20} />, href: '#' },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="transition hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6 border-b border-red-600 pb-2">
            Company
          </h2>
          <ul className="space-y-3 text-red-300">
            {['About Us', 'Departments', 'Find a Doctor', 'News'].map((label, i) => (
              <li key={i}>
                <a
                  href={`/${label.toLowerCase().replace(/\s+/g, '')}`}
                  className="transition hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6 border-b border-red-600 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-3 text-red-300">
            {[
              'Health Checkups',
              'Vaccinations',
              'Emergency Services',
              'Mental Health',
              'Nutrition & Diet',
            ].map((label, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="transition hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6 border-b border-red-600 pb-2">
            Contact Us
          </h2>
          <ul className="space-y-5 text-red-300">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-red-400" size={20} />
              <span>1234 Health Street, Sector 42, Gurgaon, Haryana, India</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-red-400" size={20} />
              <span>+91-98765-43210</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-red-400" size={20} />
              <span>support@healthconnect.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 border-t border-red-600 pt-8 flex flex-col md:flex-row justify-between items-center text-red-400 text-sm space-y-2 md:space-y-0">
        <span>© 2024 All Rights Reserved</span>
        <span>
          This template is made with{' '}
          <span className="text-red-500 drop-shadow-[0_0_4px_rgba(214,69,69,0.7)]">❤️</span> by Health Connect
        </span>
        <span>
          <a href="#" className="hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)] transition">
            Terms &amp; Use
          </a>{' '}
          •{' '}
          <a href="#" className="hover:drop-shadow-[0_0_10px_rgba(214,69,69,0.6)] transition">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
