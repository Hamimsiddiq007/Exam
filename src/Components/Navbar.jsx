import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Tracks the state of the mobile menu

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-32" />

        {/* Navbar Links (Desktop) */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex gap-7 text-black font-semibold`}
        >
          <a href="#Home" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            About
          </a>
          <a href="#Service" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Service
          </a>
          <a href="#Portfolio" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Portfolio
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Price
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Blog
          </a>
        </ul>

        {/* Contact Us Button (Desktop) */}
        <button className="hidden md:block text-white bg-[#FF7628] px-6 py-3 rounded-full hover:bg-[#E85D12] transition duration-300">
          Contact Us
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-[#FF7628] hover:text-[#E85D12] transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle the menuOpen state
          >
            {menuOpen ? 'X' : '☰'} {/* Toggle between hamburger and close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-0 left-0 w-full bg-white p-4 shadow-md`}
      >
        <ul className="flex flex-col items-center gap-6">
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Home
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            About
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Service
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Portfolio
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Price
          </a>
          <a href="#" className="cursor-pointer hover:text-[#FF7628] transition duration-300">
            Blog
          </a>
          <button className="text-white bg-[#FF7628] px-6 py-3 rounded-full mt-6 hover:bg-[#E85D12] transition duration-300">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


