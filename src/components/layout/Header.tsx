// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhoneVolume, FaClock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className="w-full">
//       {/* Top Info Bar */}
//       <div className="bg-blue-100 text-blue-900 text-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-4 lg:gap-0">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-extrabold text-blue-900">MED</h1>
//             <h1 className="text-2xl font-extrabold text-blue-400">DICAL</h1>
//           </div>

//           <div className="flex items-center space-x-2 min-w-[200px]">
//             <FaPhoneVolume className="text-blue-600 text-xl" />
//             <div className="flex flex-col">
//               <span className="font-medium">EMERGENCY</span>
//               <span className="text-blue-400">(237) 681-812-255</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-2 min-w-[200px]">
//             <FaClock className="text-blue-600 text-xl" />
//             <div className="flex flex-col">
//               <span className="font-medium">WORK HOUR</span>
//               <span className="text-blue-400">09:00 - 20:00 Everyday</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-2 min-w-[200px]">
//             <FaMapMarkerAlt className="text-blue-600 text-xl" />
//             <div className="flex flex-col">
//               <span className="font-medium">LOCATION</span>
//               <span className="text-blue-400">0123 Some Place</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav className="bg-[#0B1E4F] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="w-full md:w-auto flex flex-wrap justify-center gap-6 md:gap-4 lg:gap-6">
//             <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
//             <Link to="/about" className="hover:text-blue-300 transition-colors">About us</Link>
//             <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
//             <Link to="/doctors" className="hover:text-blue-300 transition-colors">Doctors</Link>
//             <Link to="/news" className="hover:text-blue-300 transition-colors">News</Link>
//             <Link to="/contacts" className="hover:text-blue-300 transition-colors">Contact</Link>
//           </div>

//           <div className="flex items-center gap-4">
//             <button aria-label="Search" className="p-2 hover:bg-blue-600 rounded-full transition-colors">
//               <FaSearch className="text-xl" />
//             </button>
//             <Link to="/appointment">
//               <button className="bg-blue-400 text-[#0B1E4F] px-5 py-2 rounded-full font-semibold hover:bg-blue-300 transition-colors whitespace-nowrap">
//                 Appointment
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneVolume, FaClock, FaMapMarkerAlt, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-blue-100 text-blue-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-4 lg:gap-0">
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-blue-900">MED</h1>
            <h1 className="text-2xl font-extrabold text-blue-400">DICAL</h1>
          </div>

          <div className="hidden md:flex items-center space-x-2 min-w-[200px]">
            <FaPhoneVolume className="text-blue-600 text-xl" />
            <div className="flex flex-col">
              <span className="font-medium">EMERGENCY</span>
              <span className="text-blue-400">(237) 681-812-255</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 min-w-[200px]">
            <FaClock className="text-blue-600 text-xl" />
            <div className="flex flex-col">
              <span className="font-medium">WORK HOUR</span>
              <span className="text-blue-400">09:00 - 20:00 Everyday</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 min-w-[200px]">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div className="flex flex-col">
              <span className="font-medium">LOCATION</span>
              <span className="text-blue-400">0123 Some Place</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#0B1E4F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Mobile menu button */}
          <div className="w-full md:hidden flex justify-between items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-2 hover:bg-blue-600 rounded-full transition-colors">
                <FaSearch className="text-xl" />
              </button>
              <Link to="/appointment">
                <button className="bg-blue-400 text-[#0B1E4F] px-5 py-2 rounded-full font-semibold hover:bg-blue-300 transition-colors whitespace-nowrap">
                  Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">About us</Link>
            <Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link>
            <Link to="/doctors" className="hover:text-blue-300 transition-colors">Doctors</Link>
            <Link to="/news" className="hover:text-blue-300 transition-colors">News</Link>
            <Link to="/contacts" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:bg-blue-600 rounded-full transition-colors">
              <FaSearch className="text-xl" />
            </button>
            <Link to="/appointment">
              <button className="bg-blue-400 text-[#0B1E4F] px-5 py-2 rounded-full font-semibold hover:bg-blue-300 transition-colors whitespace-nowrap">
                Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden w-full bg-[#0B1E4F] py-4 px-4 space-y-4">
              <Link 
                to="/" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                to="/services" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/doctors" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link 
                to="/news" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/contacts" 
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}