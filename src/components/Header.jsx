import React from "react";
import { Bell, Menu, Search } from "lucide-react";
import { GiRoyalLove } from "react-icons/gi";

import profile from "../assets/profile.jpg"; // Adjust the path as necessary
const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
      {/* Logo & Icon Side */}
      <div className="flex items-center space-x-4">
        <Menu
          className="h-6 w-6 text-gray-500 cursor-pointer"
          onClick={toggleSidebar}
        />
        <div className="flex items-center">
         <GiRoyalLove className="text-blue-500"/>
          <span className="ml-2 font-semibold text-gray-800">JackalCare</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="hidden md:flex items-center flex-1 mx-8 relative">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-500" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </div>
        <div className="h-9 w-9 bg-gray-300 rounded-full overflow-hidden">
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
