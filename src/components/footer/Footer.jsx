import React from 'react';
import { FaDumbbell, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl text-white">
      <div className="container mx-auto px-4 py-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* BRAND SECTION */}
          <div className="space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p className="text-sm text-gray-300">
              "Empowering developers to stay strong in both code and health. Join Coders Gym — where fitness meets focus."
            </p>

            <div className="flex gap-5 pt-4">
              <a href="#"><HiLocationMarker className="text-2xl" /></a>
              <a href="#"><FaInstagram className="text-2xl" /></a>
              <a href="#"><FaFacebook className="text-2xl" /></a>
              <a href="#"><FaLink className="text-2xl" /></a>
            </div>
          </div>

          {/* LINKS SECTIONS */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Important Links */}
            <div>
              <h1 className="text-xl font-semibold mb-4">Important Links</h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h1 className="text-xl font-semibold mb-4">Company Links</h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h1 className="text-xl font-semibold mb-4">Resources</h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; 2024 The Coding Journey. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
