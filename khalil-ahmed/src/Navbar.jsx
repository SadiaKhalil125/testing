import React from 'react';

import './App.css';
const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-900">Khalil Ahmad</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#portfolio" className="text-gray-700 hover:text-black">Portfolio</a>
          <a href="#articles" className="text-gray-700 hover:text-black">Articles</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;