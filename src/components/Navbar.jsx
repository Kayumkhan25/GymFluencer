import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/GFLogo2_png.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 flex items-center gap-10 py-2 px-4 justify-between">
      {/* Logo Section */}
      <a href="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-12 md:h-16" />
          <p className="text-xl md:text-3xl font-semibold text-white">
            Gym<span className="gradient">Fluencer</span>
          </p>
        </div>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex gap-6 md:gap-10 text-sm md:text-xl text-slate-300">
          <a href="./#home" className="hover:text-white">
            <li>Home</li>
          </a>
          <a href="./#about" className="hover:text-white">
            <li>About</li>
          </a>
          <a href="./#services" className="hover:text-white">
            <li>Our Services</li>
          </a>
          <a href="./#benifits" className="hover:text-white">
            <li>Benefits</li>
          </a>
          <a href="./#location" className="hover:text-white">
            <li>Find</li>
          </a>
          <a href="./#blogs" className="hover:text-white">
            <li>Blogs</li>
          </a>
          <a href="./#faq" className="hover:text-white">
            <li>FAQ</li>
          </a>
          <a href="./#contact" className="hover:text-white">
            <li>Contact</li>
          </a>
        </ul>
      </div>

      {/* Join Us Button */}
      <div className="py-2 px-4 text-sm md:text-lg rounded-full bg-gradient-to-tr from-purple-500 hover:from-purple-600 to-purple-700 text-white">
        <a href="/">
          <button className="uppercase">Join Us Now</button>
        </a>
      </div>

      {/* Mobile Navigation (Hamburger Menu - optional implementation) */}
      <div className="block md:hidden">
        {/* Add hamburger menu logic here if needed */}
        <button className="text-white text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
