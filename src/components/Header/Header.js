import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-i-green text-white p-5 lg:p-10 flex flex-col lg:flex-row items-center justify-between">
      {/* Title */}
      <div className="text-xl md:text-2xl lg:text-4xl font-normal mb-4 lg:mb-0">
        Vehicle Health Dashboard
      </div>

      {/* Search, Notification, and Profile Icons */}
      <div className="flex items-center justify-between w-full lg:w-auto space-x-4">
        {/* Search Bar */}
        <div className="relative flex-grow lg:flex-grow-0 w-full lg:w-72">
          <input
            type="text"
            className="bg-medium-green text-white rounded-md w-full px-10 py-2 focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-3 top-2.5 text-white" />
        </div>

        {/* Notification Icon */}
        <button className="relative">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">3</span>
        </button>

        {/* Profile Icon */}
        <button className="relative">
          <FaUserCircle className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
