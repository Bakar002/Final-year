import React from 'react';
import './Navbar.css'; // Import the custom CSS file for the knife-like shape
import logo from "../../Assets/Logo/logo1.png"
const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-4 text-black relative knife-edge">
               <div className="flex ml-48">
      <img src={logo} alt="Logo" className="w-40 h-auto " /> {/* Adjust width and height as needed */}

    </div>

 <div className="flex space-x-6">
                <a href="#home" className="hover:text-gray-300">Home</a>
                <a href="#features" className="hover:text-gray-300">Features</a>
                <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
                <a href="#dashboard" className="hover:text-gray-300">Dashboard</a>
            </div>
            <div className="flex items-center space-x-4">
                <button  className=" px-3 py-2 ">Sign In</button>
                <button className="bg-my-green px-5 py-2 text-white rounded">Register</button>
            </div>
           
        </nav>
    );
}
export default Navbar;
