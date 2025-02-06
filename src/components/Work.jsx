import React from "react";
import projectImage1 from "../assets/project_1.jpg";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import projectData from "../data/projects.json";
import { genNewSearchParamsStr } from '../utils/searchParams';
  import { useOutletContext } from "react-router-dom";

const ITEMS_PER_PAGE = 4;

const Work = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const currentType = searchParams.get("type") || null;
const {darkMode} = useOutletContext();

  const filteredProjects = currentType
    ? projectData.filter((project) => project.type.toLowerCase() === currentType)
    : projectData;


    // Paginate the filtered projects
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
   
     
    const handlePageChange = (page) => {
      setCurrentPage(page);
    }

 

  return (
    <div
    className={`rounded-lg p-[20px] md:p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}
    >
           <div className="relative mb-4">
        <h1
          className={`text-[22px] md:text-[32px] font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Work
        </h1>
        <span
            className="absolute bottom-[18px] md:bottom-[28px] left-[70px] md:left-[180px] h-[2px] w-[95px] md:w-[150px] bg-[#1877F2]"
        ></span>
      </div>

      <div>
        {/* <div className="flex sm:justify-end justify-start flex-wrap  gap-x-[20px] gap-y-[7px]">
          <Link className={`${currentType  === null ? `text-[#1877F2]` : darkMode ? "text-light-gray" : "text-gray-700"}  `}  to={genNewSearchParamsStr("type", null, searchParams)}>All</Link>
          <Link className={`${currentType  === "htmlcss" ? "text-[#1877F2]" :  darkMode ? "text-light-gray" : "text-gray-700"}  `} to={genNewSearchParamsStr("type", "htmlcss", searchParams)}>HTML CSS</Link>
          <Link className={`${currentType  === "react" ? "text-[#1877F2]" :  darkMode ? "text-light-gray" : "text-gray-700"}  `} to={genNewSearchParamsStr("type", "react")}>React</Link>
          <Link className={`${currentType  === "mern" ? "text-[#1877F2]" :  darkMode ? "text-light-gray" : "text-gray-700"} `} to={genNewSearchParamsStr("type", "mern", searchParams)}>MERN</Link>
          <Link className={`${currentType  === "wordpress" ? "text-[#1877F2]" :  darkMode ? "text-light-gray" : "text-gray-700"}  `} to={genNewSearchParamsStr("type", "wordpress", searchParams)}>Wordpress</Link>
        </div> */}

        {displayedProjects.length > 0 ?
        <div className="Projects grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[20px]">
         { displayedProjects?.map((project) => (
            <div key={project.id} className={`project h-[190px] rounded-md  p-[10px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
              <img
                src={project.image}
                alt={project.title}
                className="h-[120px] w-full rounded-md bg-white max-w-[100%] object-center object-contain"
              />
              <div className="info mt-[10px]">
                <h5 className="text-[14px] font-medium">{project.title}</h5>
                <div className="flex justify-between items-center">
                  <Link
                  target="_blank"
                    to={project.previewLink}
                    className="text-[14px] text-[#1877F2]"
                  >
                    Preview
                  </Link>
                  <Link
                    to={project.githubLink}
                    className="text-[14px] text-[#1877F2]"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          ))}  
         
        </div>
        : <div> <h1 className={`${darkMode ? "text-gray-medium" : "text-dark-gray"} text-center mt-20 `}>No Projects Available 🤦‍♀️</h1> </div>}

        <div className="mt-[30px] flex justify-center">
        {filteredProjects.length > ITEMS_PER_PAGE && (
          <div className="mt-[30px] flex justify-center">
            <Pagination
              darkMode={darkMode}
              onPageChange={handlePageChange}
              totalItems={filteredProjects.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Work;
