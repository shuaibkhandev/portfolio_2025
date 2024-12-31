import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

const Navbar = ({darkMode}) => {

  return (
    <nav>
      <ul  className={`hidden md:flex ml-auto gap-[10px] justify-center items-center  border-2 rounded-lg w-[380px] py-[10px] px-[10px] ${darkMode ? "bg-[#21222A]" : "bg-white"}`}>
        <li>
        <NavLink
  to="/"
  className={({ isActive }) =>
    `p-2 flex w-[80px] flex-col items-center justify-center rounded-lg text-[14px] 
     ${isActive ? (darkMode ? "bg-[#3E64FF] text-white" : "bg-[#3E64FF] text-white") 
                : (darkMode ? "bg-[#282D35] text-white" : "bg-[#EBF2FA] text-gray-700")}`
  }
>
            <span>
              <AiOutlineHome />
            </span>
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
            to="resume"
            className={({ isActive }) =>
              `p-2 flex w-[80px] flex-col items-center justify-center rounded-lg text-[14px] 
               ${isActive ? (darkMode ? "bg-[#3E64FF] text-white" : "bg-[#3E64FF] text-white") 
                          : (darkMode ? "bg-[#282D35] text-white" : "bg-[#EBF2FA] text-gray-700")}`
            }
          >
            <span>
              <TiDocumentText />
            </span>
            Resume
          </NavLink>
        </li>
        <li>
        <NavLink
            to="work"
            className={({ isActive }) =>
              `p-2 flex w-[80px] flex-col items-center justify-center rounded-lg text-[14px] 
               ${isActive ? (darkMode ? "bg-[#3E64FF] text-white" : "bg-[#3E64FF] text-white") 
                          : (darkMode ? "bg-[#282D35] text-white" : "bg-[#EBF2FA] text-gray-700")}`
            }
          >
            <span>
              <MdWorkOutline />
            </span>
            Work
          </NavLink>
        </li>
        <li>
        <NavLink
            to="contact"
            className={({ isActive }) =>
              `p-2 flex w-[80px] flex-col items-center justify-center rounded-lg text-[14px] 
               ${isActive ? (darkMode ? "bg-[#3E64FF] text-white" : "bg-[#3E64FF] text-white") 
                          : (darkMode ? "bg-[#282D35] text-white" : "bg-[#EBF2FA] text-gray-700")}`
            }
          >
            <span>
              <TiContacts />
            </span>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
