import React, { useState } from 'react';
import logo from '../assets/images/GFLogo2_png.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const menu = [
    { href: './#home', label: 'Home' },
    { href: './#about', label: 'About' },
    { href: './#services', label: 'Our Services' },
    { href: './#benifits', label: 'Benefits' },
    { href: './#location', label: 'Find' },
    { href: './#blogs', label: 'Blogs' },
    { href: './#faq', label: 'FAQ' },
    { href: './#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 flex items-center py-2 px-4 justify-between">
      {/* Logo Section */}
      <a href="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 md:h-14" />
          <p className="text-lg md:text-2xl font-semibold text-white">
            Gym<span className="gradient">Fluencer</span>
          </p>
        </div>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex gap-6 md:gap-8 text-sm md:text-lg text-slate-300">
          {menu.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white">
              <li>{link.label}</li>
            </a>
          ))}
        </ul>
      </div>

      {/* Join Us Button */}
      <div className="hidden md:block py-2 px-4 text-sm md:text-lg rounded-full bg-gradient-to-tr from-purple-500 hover:from-purple-600 to-purple-700 text-white">
        <a href="/">
          <button className="uppercase">Join Us Now</button>
        </a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="block md:hidden">
        <button
          className="text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-12 right-0 w-1/2 h-screen bg-black bg-opacity-90 flex flex-col items-center gap-6 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-6 text-sm text-slate-300">
            {
            menu.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-white"
                onClick={toggleMobileMenu}
              >
                <li>{link.label}</li>
              </a>
            ))}
          </ul>
          <div className="py-2 px-4 text-sm rounded-full bg-gradient-to-tr from-purple-500 hover:from-purple-600 to-purple-700 text-white">
            <a href="/">
              <button className="uppercase" onClick={toggleMobileMenu}>
                Join Us Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
