import React, { useEffect } from "react";
import { IoCodeSlash, IoCodeWorkingSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {

    
  const { darkMode } = useOutletContext();
  return (
    <>
    <Helmet>
  <title>Shuaib Khan - Home</title>
  <meta name="description" content="Welcome to Shuaib Khan's portfolio! A MERN stack and WordPress developer specializing in React, Node.js, and custom web solutions. Explore my work and expertise." />
</Helmet>

    <div
      className={` rounded-lg p-[20px] md:p-[50px] md:w-full ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
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
          <span className="absolute bottom-[18px] md:bottom-[28px] left-[120px] md:left-[180px] h-[2px] w-[95px] md:w-[150px] bg-[#1877F2]"></span>
        </div>
        <p
          className={`text-[14px] md:text-[16px] ${
            darkMode ? " text-light-gray" : ""
          } `}
        >
         Web Developer with one plus year of experience specializing in the MERN stack. Proficient in creating dynamic and
responsive web applications using React. Skilled in both front-end and back-end development, from design to
integration
        </p>
      </div>
      <div className="mt-[20px]">
        <h2
          className={`mb-[10px] text-[18px] md:text-[22px] font-semibold ${
            darkMode ? "text-white" : ""
          }`}
        >
          What I do!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[20px] text-center">
          <div
            className={` rounded-md px-[20px] py-[20px] ${
              darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"
            } `}
          >
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
              <span
                className={`${
                  darkMode ? "text-gray-medium" : "text-bright-blue"
                } text-[22px]`}
              >
                <IoCodeSlash />
              </span>
              <h3
                className={`font-semibold text-[12px] md:text-[14px] ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Full Stack Development
              </h3>
            </div>
            <p
              className={`text-[12px] md:text-[14px] ${
                darkMode ? " text-light-gray" : ""
              } `}
            >
              Expertise in building end-to-end web applications using the MERN
              stack (MongoDB, Express.js, React, Node.js), ensuring scalability
              and performance.
            </p>
          </div>
          <div
            className={` rounded-md px-[20px] py-[20px]  ${
              darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"
            } `}
          >
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
              <span
                className={`${
                  darkMode ? "text-gray-medium" : "text-bright-blue"
                } text-[22px]`}
              >
                <FaLaptopCode />
              </span>
              <h3
                className={`font-semibold text-[12px] md:text-[14px] ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Frontend Development
              </h3>
            </div>
            <p
              className={`text-[12px] md:text-[14px] ${
                darkMode ? " text-light-gray" : ""
              } `}
            >
              Creating dynamic and responsive user interfaces with modern
              frontend frameworks like React.js, tailored for enhanced user
              experience.
            </p>
          </div>
          <div
            className={` rounded-md px-[20px] py-[20px]   ${
              darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"
            } `}
          >
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
              <span
                className={`${
                  darkMode ? "text-gray-medium" : "text-bright-blue"
                } text-[22px]`}
              >
                <IoCodeWorkingSharp />
              </span>
              <h3
                className={`font-semibold text-[12px] md:text-[14px] ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Backend Development
              </h3>
            </div>
            <p
              className={`text-[12px] md:text-[14px] ${
                darkMode ? " text-light-gray" : ""
              } `}
            >
              Building secure, scalable backend architectures using Node.js with
              Express.js, as well as PHP with MySQL for robust database
              management and server-side logic.
            </p>
          </div>
          <div
            className={`rounded-md px-[20px] py-[20px]  ${
              darkMode ? "bg-dark-gray" : "bg-[#EBF2FA]"
            } `}
          >
            <div className="flex items-center justify-center gap-[5px] mb-[2px] md:mb-[5px]">
              <span
                className={`${
                  darkMode ? "text-gray-medium" : "text-bright-blue"
                } text-[22px]`}
              >
                <BiCodeCurly />
              </span>
              <h3
                className={`font-semibold text-[12px] md:text-[14px] ${
                  darkMode ? "text-white" : ""
                }`}
              >
                WordPress Development
              </h3>
            </div>
            <p
              className={`text-[12px] md:text-[14px] ${
                darkMode ? " text-light-gray" : ""
              } `}
            >
              Offering custom WordPress development services, including theme
              customization, plugin integration, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
