import React from 'react';
import LogoImg from "../assets/logo.png"
import LogoIcon from "../assets/logo icon.png"
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";


const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header className='flex justify-between items-center py-[20px]'>
      <picture>
        <source media='(min-width:650px)' srcSet={LogoImg} />
        <img src={LogoIcon} alt={"Logo"}  className='w-[40px] sm:w-[120px]'/>
      </picture>
        <div className={`mode cursor-pointer rounded-[50%] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex items-center justify-center border-2 ${darkMode ? "bg-[#282D35]":"bg-white"}`}>
            <span className="text-[16px] sm:text-[22px]" onClick={ () => toggleDarkMode()}>{ darkMode ? <span className='text-[#FFCC33]'><FaRegSun /></span>: <MdOutlineDarkMode />}</span>
        </div>
    </header>
  )
}

export default Header