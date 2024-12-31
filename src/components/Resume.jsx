  import React from "react";
  import { PiBagLight } from "react-icons/pi";
  import { RiGraduationCapLine } from "react-icons/ri";
  import Pagination from "./Pagination";
  import experiences from "../data/experience.json"
import { useOutletContext } from "react-router-dom";
  const ITEMS_PER_PAGE = 2;

  const Resume = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const {darkMode} = useOutletContext();

    const reversedExperiences = experiences.slice().reverse();

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedProjects = reversedExperiences.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    }



    return (
      <section
      className={` container rounded-lg p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}
      >
         <h1 className={`mb-[10px] relative text-[32px] before::content-[""] before:block before:w-[150px] before:h-[2px] before:bg-[#1877F2] before:mb-2 before:absolute before:left-[180px] before:top-[20px] ${darkMode ? "text-white" : ""}`}>
          Resume  
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-[30px] justify-between">
          <div>
            <h3 className="text-[18px] flex gap-[5px] items-center font-medium">
            
              <span className="text-[#1877F2]">
                <RiGraduationCapLine />
              </span>
              Education
            </h3>
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <div className={` rounded-sm space-y-[2px] px-[8px] py-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                <span className="text-gray-600 text-[14px] flex gap-[10px] "> <span>2017</span> - <span>2019</span> </span>
                <h5 className="font-semibold text-[14px]">FSC</h5>
                <p className="text-[14px]">GHSS Swat, Pakistan</p>
              </div>
              <div className={` rounded-sm space-y-[2px] px-[8px] py-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                <span className="text-gray-600 text-[14px] flex gap-[10px]"> <span>2019</span> - <span>2023</span> </span>
                <h5 className="font-semibold text-[14px]">BSCS</h5>
                <p className="text-[14px]">UET Peshawr, Pakistan</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] flex gap-[5px] items-center font-medium">
              
              <span className="text-[#1877F2]">
                <PiBagLight />
              </span>
              Experience
            </h3>
            <div className="flex flex-col gap-[10px] mt-[10px]">
            {displayedProjects.map((exp, index) => (
          <div
            key={index}
            className={` rounded-sm space-y-[2px] px-[8px] py-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`} >
            <h5 className="text-gray-600 text-[14px] flex items-center gap-[10px]">
              <span>{exp.startDate}</span> -<span className={`${exp.endDate.toLowerCase() === "present" ? "bg-[#4BB543] px-1 py-1 rounded-sm text-white":""}`}>{exp.endDate}</span>
            </h5>
            <h5 className="font-semibold text-[14px]">{exp.position}</h5>
            <p className="text-[14px]">
              {exp.companyName}, {exp.location}
            </p>
          </div>
        ))}
              <div>
                <Pagination darkMode={darkMode} onPageChange={handlePageChange} itemsPerPage={ITEMS_PER_PAGE} totalItems={experiences.length} currentPage={currentPage}/>
              </div>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-[30px] mt-[20px] py-[20px] px-[10px] justify-between">
            <div>
              <h3 className="text-[18px] font-medium"> Work Skills</h3>
              <div className="flex flex-wrap gap-[10px]  mt-[10px]">
                <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  HTML
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  CSS
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  JS
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  ReactJS
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  NodeJS
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  MONGODB
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  MYSQL
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  Wordpress
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-medium">Languages</h3>
              <div className="flex flex-wrap gap-[10px]  mt-[10px]">
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  English
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  Urdu
                </span>
                  <span className={` rounded-sm py-[3px] px-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                  Pushto
                </span>
              </div>
            </div>
          </div>
    
      </section>
    );
  };

  export default Resume;
