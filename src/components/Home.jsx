import React from "react";
import { IoCodeSlash, IoCodeWorkingSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const {darkMode} = useOutletContext();
  return (
    <div
      className={` container rounded-lg p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}
    >
      <div className="mb-[40px]">
        <h1 className={`mb-[10px] relative text-[32px] before::content-[""] before:block before:w-[150px] before:h-[2px] before:bg-[#1877F2] before:mb-2 before:absolute before:left-[180px] before:top-[20px] ${darkMode ? "text-white" : ""}`}>
          ABOUT ME
        </h1>
        <p className={` ${darkMode ? " text-light-gray" : ""} `}>
          I am a Web Developer. I graduated with a Bachelor’s degree in Computer
          Science, specializing in MERN Stack Development. I have previously
          worked at ROZI ACADEMY as a Web Developer developer, and I currently
          work as a frontend React developer at K2x Tech.
        </p>
      </div>
      <div className="mt-[20px]">
        <h2 className={`mb-[10px] text-[22px] font-semibold ${darkMode ? "text-white" : ""}`}>What I do!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[20px] text-center">
          <div className={` rounded-md px-[10px] py-[20px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[5px]">
            <span className='text-[#1877F2] text-[22px]'>
                <IoCodeSlash />
              </span>
              <h3 className={`font-semibold text-[14px] ${darkMode ? "text-white" : ""}`}>
                Full Stack Development
              </h3>
            </div>
            <p className={`text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Expertise in building end-to-end web applications using the MERN
              stack (MongoDB, Express.js, React, Node.js), ensuring scalability
              and performance.
            </p>
          </div>
          <div className={` rounded-md px-[10px] py-[20px] ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[5px]">
            <span className='text-[#1877F2] text-[22px]'>
                <FaLaptopCode />
              </span>
              <h3 className={`font-semibold text-[14px] ${darkMode ? "text-white" : ""}`}>
                Frontend Development
              </h3>
            </div>
            <p className={`text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Creating dynamic and responsive user interfaces with modern
              frontend frameworks like React.js, tailored for enhanced user
              experience.
            </p>
          </div>
          <div className={` rounded-md px-[10px] py-[20px] ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[5px]">
            <span className='text-[#1877F2] text-[22px]'>
                <IoCodeWorkingSharp />
              </span>
              <h3 className={`font-semibold text-[14px] ${darkMode ? "text-white" : ""}`}>Backend Development</h3>
            </div>
            <p className={`text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
              Building secure, scalable backend architectures using Node.js with
              Express.js, as well as PHP with MySQL for robust database
              management and server-side logic.
            </p>
          </div>
          <div className={`rounded-md px-[10px] py-[20px] ${darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"} `}>
            <div className="flex items-center justify-center gap-[5px] mb-[5px]">
            <span className='text-[#1877F2] text-[22px]'>
                <BiCodeCurly />
              </span>
              <h3 className={`font-semibold text-[14px] ${darkMode ? "text-white" : ""}`}>
                WordPress Development
              </h3>
            </div>
            <p className={`text-[14px] ${darkMode ? " text-light-gray" : ""} `}>
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
