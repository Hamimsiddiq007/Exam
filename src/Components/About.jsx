import React from 'react';
import images10 from "../assets/images10.png";
import images11 from "../assets/images11.jpg";
import logo2 from "../assets/logo2.png";
import Container from './Container';

const About = () => {
  return (
    <Container>
      <div id='About' className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-4 md:px-8 lg:px-16 py-10">

        {/* Left Section with Image */}
        <div className="w-full lg:w-[48%]">
          <img src={images10} alt="Image 10" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Right Section with Text */}
        <div className="w-full lg:w-[48%] text-center lg:text-left">
          <img src={logo2} alt="Logo" className="mx-auto lg:mx-0 mb-6 w-[120px] md:w-[150px]" />
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] text-[#262626] font-NunSans font-extrabold mb-4">
            Who We Are
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#6C7D93] font-Paprika mb-6">
            We are a Dhaka-based Digital Communication Agency committed to creating actionable strategies, online marketing, and technology solutions for our partners. 
            As a multidisciplinary company, we operate as a unified, collaborative team.
          </p>
          <img src={images11} alt="Image 11" className="w-full md:w-[80%] h-auto mt-6 rounded-lg shadow-md" />
        </div>

      </div>
    </Container>
  );
};

export default About;
