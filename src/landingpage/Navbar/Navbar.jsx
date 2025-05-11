import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center md:flex-row flex-wrap relative">
      <div className="text-xl font-bold text-blue-600">JackalCare</div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </div>
      
      {/* Navigation Links */}
      <ul className={`md:flex md:space-x-6 text-gray-700 absolute md:static bg-white w-full md:w-auto left-0 md:left-auto top-16 md:top-0 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <li className="hover:text-blue-500 cursor-pointer p-2 md:p-0">Home</li>
        <li className="hover:text-blue-500 cursor-pointer p-2 md:p-0">Services</li>
        <li className="hover:text-blue-500 cursor-pointer p-2 md:p-0">About Us</li>
        <li className="hover:text-blue-500 cursor-pointer p-2 md:p-0">Contact</li>
      </ul>
      
      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-blue-600 hover:underline">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navigation;


