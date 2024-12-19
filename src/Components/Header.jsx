import React from 'react';
import banner from '../assets/Banner.png';
import Navbar from './Navbar';
import Container from './Container';

const Header = () => {
  return (
    <Container>
      <div className="bg-gradient-to-b from-white to-gray-100 flex flex-col w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 py-10 md:py-20">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-800 leading-snug">
            We Are Digital{' '}
            <span className="text-[#FF7628]">Marketing</span> Agency
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Use customer data to build exceptional product experiences that convert. Digital marketing’s evolution has transformed the way brands use technology to connect with audiences.
          </p>
          <button className="py-4 px-8 mt-8 bg-[#FF7628] text-white font-bold text-lg rounded-full hover:bg-[#E85D12] shadow-lg transition duration-300">
            Get Free Quote
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            className="w-full max-w-lg md:max-w-full mx-auto md:ml-auto h-auto object-contain"
            src={banner}
            alt="Marketing Banner"
          />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Header;
