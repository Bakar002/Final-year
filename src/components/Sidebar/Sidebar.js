import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Logo/white logo 1.png";

const Sidebar = () => {
  return (
<aside className="w-44 h-auto bg-i-green text-white p-10 border-r border-black">
<img src={logo} alt="Logo" className="h-14 w-28" />

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
  );
};

export default Sidebar;
