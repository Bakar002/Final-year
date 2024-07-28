import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row lg:justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-6 lg:space-y-4">
          <img src="https://i.imgur.com/uhFDaHz.png" alt="Logo" className="w-32 lg:w-48 mb-4" /> {/* Replace with your logo URL */}
          <p className="text-gray-400">
            Detailed description or company information goes here. This section provides additional context and background about the company or website.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col lg:flex-row lg:gap-16 space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-light-green transition">Company</a></li>
              <li><a href="#" className="hover:text-light-green transition">Team</a></li>
              <li><a href="#" className="hover:text-light-green transition">Careers</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-light-green transition">Consulting</a></li>
              <li><a href="#" className="hover:text-light-green transition">Development</a></li>
              <li><a href="#" className="hover:text-light-green transition">Design</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-light-green transition">Support</a></li>
              <li><a href="#" className="hover:text-light-green transition">Sales</a></li>
              <li><a href="#" className="hover:text-light-green transition">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start space-y-4">
          <p className="mb-4 text-gray-400">Subscribe to our newsletter:</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-light-green"
            />
            <button className="px-6 py-2 bg-light-green text-white rounded-r-lg font-semibold hover:bg-green-600 transition">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
