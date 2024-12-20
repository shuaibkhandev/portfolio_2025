import React from 'react';
import LogoImg from "../assets/logo.png"
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";


const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header className='flex justify-between items-center py-[20px]'>
        <img src={LogoImg} alt="welivesoft logo" className='w-[120px]' />
        <div className={`mode cursor-pointer rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border-2 ${darkMode ? "bg-[#282D35]":"bg-white"}`}>
            <span className="text-[22px]" onClick={ () => toggleDarkMode()}>{ darkMode ? <span className='text-[#FFCC33]'><FaRegSun /></span>: <MdOutlineDarkMode />}</span>
        </div>
    </header>
  )
}

export default Header