import React from "react";
import { IoCodeSlash, IoCodeWorkingSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const {darkMode} = useOutletContext();
  return (
    <div
      className={` rounded-lg p-[20px] md:p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}
    >
      <div className="mb-[40px]">
      <div className="relative mb-4">
        <h1
          className={`text-[22px] md:text-[32px] font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          ABOUT ME
        </h1>
        <span
          className="absolute bottom-[18px] md:bottom-[28px] left-[120px] md:left-[180px] h-[2px] w-[95px] md:w-[150px] bg-[#1877F2]"
        ></span>
      </div>
        <p className={`text-[14px] md:text-[16px] ${darkMode ? " text-light-gray" : ""} `}>
          I am a Web Developer. I graduated with a Bachelor’s degree in Computer
          Science, specializing in MERN Stack Development. I have previously
          worked at ROZI ACADEMY as a Web Developer developer, and I currently
          work as a frontend React developer at K2x Tech.
        </p>
      </div>
      <div className="mt-[20px]">
        <h2 className={`mb-[10px] text-[18px] md:text-[22px] font-semibold ${darkMode ? "text-white" : ""}`}>What I do!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[20px] text-center">
          <div className={` rounded-md px-[6px] md:px-[10px] py-[15px] md:py-[20px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
            <span className={`${darkMode ? "text-gray-medium" : "text-bright-blue"} text-[22px]`}>
                <IoCodeSlash />
              </span>
              <h3 className={`font-semibold text-[12px] md:text-[14px] ${darkMode ? "text-white" : ""}`}>
                Full Stack Development
              </h3>
            </div>
            <p className={`text-[12px] md:text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Expertise in building end-to-end web applications using the MERN
              stack (MongoDB, Express.js, React, Node.js), ensuring scalability
              and performance.
            </p>
          </div>
          <div className={` rounded-md px-[6px] md:px-[10px] py-[15px] md:py-[20px]  ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
            <span className={`${darkMode ? "text-gray-medium" : "text-bright-blue"} text-[22px]`}>
                <FaLaptopCode />
              </span>
              <h3 className={`font-semibold text-[12px] md:text-[14px] ${darkMode ? "text-white" : ""}`}>
                Frontend Development
              </h3>
            </div>
            <p className={`text-[12px] md:text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Creating dynamic and responsive user interfaces with modern
              frontend frameworks like React.js, tailored for enhanced user
              experience.
            </p>
          </div>
          <div className={` rounded-md px-[6px] md:px-[10px] py-[15px] md:py-[20px]  ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
            <span className={`${darkMode ? "text-gray-medium" : "text-bright-blue"} text-[22px]`}>
                <IoCodeWorkingSharp />
              </span>
              <h3 className={`font-semibold text-[12px] md:text-[14px] ${darkMode ? "text-white" : ""}`}>Backend Development</h3>
            </div>
            <p className={`text-[12px] md:text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Building secure, scalable backend architectures using Node.js with
              Express.js, as well as PHP with MySQL for robust database
              management and server-side logic.
            </p>
          </div>
          <div className={`rounded-md px-[6px] md:px-[10px] py-[15px] md:py-[20px]  ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
            <span className={`${darkMode ? "text-gray-medium" : "text-bright-blue"} text-[22px]`}>
                <BiCodeCurly />
              </span>
              <h3 className={`font-semibold text-[12px] md:text-[14px] ${darkMode ? "text-white" : ""}`}>
                WordPress Development
              </h3>
            </div>
            <p className={`text-[12px] md:text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Offering custom WordPress development services, including theme
              customization, plugin integration, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
