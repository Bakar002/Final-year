import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-i-green text-white p-10 flex items-center justify-between ">
      {/* Title and Search Bar */}
      <div className="flex flex-row items-center justify-between ">
        <div className="text-4xl font-normal">Vehicle Health Dashboard</div>
       
      </div>

      {/* Notification and Profile Icons */}
      <div className="flex  items-center justify-end space-x-4">
      <div className="relative">
          <input
            type="text"
            className="bg-medium-green text-white rounded-md px-72 py-2 pl-10 focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-3 top-2.5 text-white" />
        </div>
        <button className="relative">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">3</span>
        </button>
        <button className="relative">
          <FaUserCircle className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
