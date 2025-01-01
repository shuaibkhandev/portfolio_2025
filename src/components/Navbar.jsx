import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


const Navbar = ({darkMode}) => {
const [isOpen, setIsOpen] = useState(false);



  return (
    <nav>

<span onClick={()=> setIsOpen((isOpen)=>!isOpen)} className={` w-[30px] h-[30px] rounded-sm flex justify-center items-center  absolute right-[20px] top-[98px] sm:hidden ${darkMode ? "bg-dark-gray text-light-gray" : "bg-bright-blue text-white"}`}>
  <RxHamburgerMenu/>
</span>

      <ul  className={`z-10 ${isOpen ? "flex" : "hidden"} fixed flex-col sm:flex-row sm:static sm:flex ml-auto gap-[10px] justify-center items-center  border-2 rounded-lg sm:w-[380px] py-[10px] px-[10px] ${darkMode ? "bg-[#21222A]" : "bg-white"}`}>
        <li>
        <NavLink
  to="/"
  className={({ isActive }) =>
    `p-2 flex w-[80px] flex-col items-center justify-center rounded-lg text-[14px] 
     ${isActive ? (darkMode ? "bg-bright-blue text-white" : "bg-bright-blue text-white") 
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
               ${isActive ? (darkMode ? "bg-bright-blue text-white" : "bg-bright-blue text-white") 
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
               ${isActive ? (darkMode ? "bg-bright-blue text-white" : "bg-bright-blue text-white") 
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
               ${isActive ? (darkMode ? "bg-bright-blue text-white" : "bg-bright-blue text-white") 
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
