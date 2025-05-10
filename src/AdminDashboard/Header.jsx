import React from "react";
import { Bell, Search, Menu, X } from "lucide-react";
import { GiRoyalLove } from "react-icons/gi";

import profile from "../assets/profile.jpg"; // Adjust the path as necessary

const Header = ({ toggleSidebar, isMobile, sidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm px-3 sm:px-6 py-3 flex items-center justify-between z-30 relative">
      {/* Logo and Menu Toggle */}
      <div className="flex items-center">
        {/* Menu toggle button - only visible on mobile */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="p-1 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
              <Menu className="h-6 w-6" />
            
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center">
          <GiRoyalLove className="text-blue-500 h-6 w-6" />
          <span className="ml-2 font-semibold text-gray-800 text-lg hidden sm:inline">
            JackalCare
          </span>
          <span className="ml-2 font-semibold text-gray-800 text-sm sm:hidden">
            JackalCare
          </span>
        </div>
      </div>

      {/* Search Input - Responsive positioning */}
      <div className="hidden md:flex items-center flex-1 ml-4 lg:ml-20 mr-4 relative max-w-md mx-auto">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Mobile Search Icon - only visible on mobile */}
      <button className="md:hidden p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
        <Search className="h-5 w-5" />
      </button>

      {/* Notification & Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </div>
        <div className="h-7 w-7 sm:h-9 sm:w-9 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
