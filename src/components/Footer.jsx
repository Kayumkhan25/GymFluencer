import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/GFLogo2_png.png';
import { MdMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PiTwitterLogoBold } from 'react-icons/pi';

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'Workout Plan',
    url: '/'
  },
  {
    text: 'Diet Plan',
    url: '/'
  },
  {
    text: 'FAQ',
    url: '/'
  }
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black text-slate-300 border-t border-slate-600 pt-10 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center gap-10">
        {/* Brand Section */}
        <div className="flex flex-col justify-center items-start gap-4 md:w-1/3">
          <div className="flex items-center lg:mb-1 mb-3">
            <img src={logo} alt="logo" className="h-16 md:h-24" />
            <p className="text-2xl md:text-4xl font-semibold ml-2">
              Gym<span className="gradient">Fluencer</span>
            </p>
          </div>
          <p className="text-lg text-slate-200">Where Fitness Meets Social Connection!</p>
          <p className="mt-2 flex items-center gap-2 text-slate-300">
            <MdMail className="text-white text-xl" />
            <span>hello@gym.birlaventures.com</span>
          </p>
        </div>

        <div className='flex gap-20 justify-center'>
            {/* Links Section */}
            <div className="flex flex-col gap-4 md:w-1/5">
            {links.map((link, index) => (
                <Link
                key={index}
                to={link.url}
                className="hover:text-white transition-colors"
                >
                {link.text}
                </Link>
            ))}
            </div>

            {/* Policies Section */}
            <div className="flex flex-col gap-4 md:w-1/5">
            <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white transition-colors cursor-pointer">Support</p>
            </div>

        </div>
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/4">
          <p>© {new Date().getFullYear()} GymFluencer. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:text-white transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:text-white transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-full hover:text-white transition-colors"
            >
              <PiTwitterLogoBold size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
