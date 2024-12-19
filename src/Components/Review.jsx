import React from 'react'
import Container from './Container'
import logo2 from "../assets/logo2.png";
import images14 from "../assets/images14.png";

const Review = () => {
  return (
    <div>
        <Container>
         <h1 className="flex justify-center items-center text-[24px] mx-auto sm:text-[28px] md:text-[36px] lg:text-[48px] text-[#262626] font-NunSans font-extrabold mt-8 mb-4">Review</h1>
        <div className="mt-10 mb-4 flex flex-wrap justify-between gap-6">
          {/* First Card */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] rounded-[12px] py-10 px-6 sm:px-10 hover:opacity-80 hover:rotate-3 hover:border-2 hover:border-[#FF7628] transition-all duration-300 ease-in-out">
            <img src={logo2} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-center text-xl sm:text-2xl font-NunSans font-semibold text-[#262626] mb-4">Client Review</h2>
            <p className="text-center text-[#6C7D93] text-sm sm:text-base mb-4">
              People use digital devices instead of visiting physical shops, and digital marketing campaigns are becoming more prevalent and efficient.
            </p>
            <img src={images14} alt="Client Review" className="mx-auto" />
          </div>

          {/* Second Card */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] rounded-[12px] py-10 px-6 sm:px-10 hover:opacity-80 hover:rotate-3 hover:border-2 hover:border-[#FF7628] transition-all duration-300 ease-in-out">
            <img src={logo2} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-center text-xl sm:text-2xl font-NunSans font-semibold text-[#262626] mb-4">Client Review</h2>
            <p className="text-center text-[#6C7D93] text-sm sm:text-base mb-4">
              People use digital devices instead of visiting physical shops, and digital marketing campaigns are becoming more prevalent and efficient.
            </p>
            <img src={images14} alt="Client Review" className="mx-auto" />
          </div>

          {/* Third Card */}
          <div className="w-full sm:w-[32%] bg-[#FCF8F8] rounded-[12px] py-10 px-6 sm:px-10 hover:opacity-80 hover:rotate-3 hover:border-2 hover:border-[#FF7628] transition-all duration-300 ease-in-out">
            <img src={logo2} alt="Logo" className="mx-auto mb-4" />
            <h2 className="text-center text-xl sm:text-2xl font-NunSans font-semibold text-[#262626] mb-4">Client Review</h2>
            <p className="text-center text-[#6C7D93] text-sm sm:text-base mb-4">
              People use digital devices instead of visiting physical shops, and digital marketing campaigns are becoming more prevalent and efficient.
            </p>
            <img src={images14} alt="Client Review" className="mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Review
