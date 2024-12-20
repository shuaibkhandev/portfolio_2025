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
    className={` rounded-lg p-[50px] ${darkMode ? "bg-dark-blue text-white" : "bg-white"}`}
      style={{ width: "calc(100% - 350px)" }}
    >
      <h1 className='mb-[10px] relative text-[32px] before::content-[""] before:block before:w-[150px] before:h-[2px] before:bg-[#1877F2] before:mb-2 before:absolute before:left-[95px] before:top-[25px]'>
        Work

      </h1>

      <div>
        <div className="flex justify-end gap-[20px]">
          <Link className={`${currentType  === null ? "text-[#1877F2]" : ""}  `}  to={genNewSearchParamsStr("type", null, searchParams)}>All</Link>
          <Link className={`${currentType  === "htmlcss" ? "text-[#1877F2]" : ""}  `} to={genNewSearchParamsStr("type", "htmlcss", searchParams)}>HTML CSS</Link>
          <Link className={`${currentType  === "react" ? "text-[#1877F2]" : ""}  `} to={genNewSearchParamsStr("type", "react")}>React</Link>
          <Link className={`${currentType  === "mern" ? "text-[#1877F2]" : ""}  `} to={genNewSearchParamsStr("type", "mern", searchParams)}>MERN</Link>
          <Link className={`${currentType  === "wordpress" ? "text-[#1877F2]" : ""}  `} to={genNewSearchParamsStr("type", "wordpress", searchParams)}>Wordpress</Link>
        </div>

        <div className="Projects grid grid-cols-2 gap-[20px] mt-[20px]">
          {displayedProjects?.map((project) => (
            <div key={project.id} className={`project h-[190px] w-[350px] rounded-md  p-[10px] ${darkMode ? "bg-[#282D35] text-white" : "bg-[#EBF2FA]"}`}>
              <img
                src={projectImage1}
                alt={project.title}
                className="h-[120px] w-full rounded-md"
              />
              <div className="info mt-[10px]">
                <h5 className="text-[14px] font-medium">{project.title}</h5>
                <div className="flex justify-between items-center">
                  <Link
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

        <div className="mt-[30px] flex justify-center">
          <Pagination darkMode={darkMode} onPageChange = {handlePageChange} totalItems={filteredProjects.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default Work;
