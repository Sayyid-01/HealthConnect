import { React, useState ,  useEffect} from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import { Stethoscope, Menu, X, User2 } from 'lucide-react';
import '../../../src/App.css'; // Ensure you have the correct path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Handle user name retrieval from local storage
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUserName(storedUsername);
    }
  }, []);
  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUserName('');
    window.location.href = '/signin'; // Redirect to sign-in page
  };





  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Stethoscope className="text-red-600 text-4xl" />
          <Link to="/" className="text-2xl font-bold text-black-600">Health Connect</Link>
        </div>



        {/* Links for large screen */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 text-lg font-medium transition-all duration-300 ease-in-out hover:text-red-900 hover:font-bold hover:-translate-y-1 transform"

              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>


       {/* User Profile Dropdown for Desktop */}
      {userName ? (
        <div className="relative hidden md:block z-10">
      <button
        className="flex items-center space-x-2 text-gray-800 focus:outline-none"
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      >
        <FontAwesomeIcon icon={faUser} className="text-2xl text-red-600" />
        <span className="font-medium uppercase">{userName}</span>
        <FontAwesomeIcon icon={faCaretDown} className="text-gray-500 text-sm" /> {/* Dropdown icon */}
      </button>
      
      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          <a
            href="/appointments"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-red-500" />
            My Appointments
          </a>
          <Link
              to="/Profile"
              className=" px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 flex "
            >
              <span><User2 className='text-red-500 mr-2 -ml-1' /></span> My Profile
            </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 flex items-center hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-red-500" />
            Logout
          </button>
        </div>
      )}
    </div>
      ) : (
        <button className="hidden md:block px-6 py-2 rounded-xl font-semibold text-white shadow-md transition-all duration-300 bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]">
          <a href="/signup">Signup</a>
        </button>
      )}




        {/* Hamburger for mobile (non-functional here) */}
        <div className="lg:hidden w/1/4  cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden w-2xs bg-transparent">
          <ul className="flex flex-col gap-4 p-4 w-[300px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 text-lg font-medium transition-all duration-300 ease-in-out hover:text-red-900 hover:font-bold hover:-translate-y-1 transform"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {userName ? (
          <>
            <a
              href="/appointments"
              className="block px-4 py-2 text-gray-800 font-medium hover:bg-gray-100"
            >
              My Appointments
            </a>
            <div
              href="/profile-Section"
              className=" px-4 py-2 text-gray-800 font-medium hover:bg-gray-100"
            >
              My Profile
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <a
            href="/signup"
            className="block px-4 py-2 border-t border-gray-200 text-red-500 font-medium hover:bg-red-50 hover:text-red-600 transition duration-300"
          >
            Signup
          </a>
        )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
