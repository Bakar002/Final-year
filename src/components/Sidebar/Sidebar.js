import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Logo/white logo 1.png";
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger icon for small screens */}
      <button 
        className="text-white p-4 lg:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar container */}
      <aside 
        className={`lg:w-44 h-auto lg:h-auto lg:relative bg-i-green text-white p-10 border-r border-black 
        fixed z-40 top-0 left-0 h-screen transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 w-28 mb-8" />

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            </li>
            <li className="mb-4">
              <Link to="/settings" className="hover:text-gray-400">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
