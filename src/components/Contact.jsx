import React from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const {darkMode} = useOutletContext();
  return (
    <div
    className={` container rounded-lg p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}

    >
    <h1 className={`mb-[10px] relative text-[32px] before::content-[""] before:block before:w-[150px] before:h-[2px] before:bg-[#1877F2] before:mb-2 before:absolute before:left-[180px] before:top-[20px] ${darkMode ? "text-white" : ""}`}>
        Contact
      </h1>

      <div className='flex justify-between flex-col  gap-[20px] md:gap-[50] sm:gap-[50] lf:gap-[50] md:flex-row sm:flex-row lg:flex-row'>
      <div className={` rounded-lg space-y-[2px] px-[10px] py-[10px] w-[50%] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
                <h4 className={`text-gray-600 text-[14px] flex gap-[5px] items-center ${darkMode?"text-white":""}`}>  <span className='text-[#1877F2] text-[22px]'><MdOutlinePhoneInTalk /></span>  Phone:</h4>
                <div className='px-[40px]'>
                <p className={`text-[14px] ${darkMode?"text-gray-200":""}`}>+92 3481921015</p>
                <p className={`text-[14px] ${darkMode?"text-gray-200":""}`}>+92 3451399912</p>
                </div>
              </div>
              <div className={` rounded-lg space-y-[2px] px-[10px] py-[10px] w-[50%] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"}`}>
              <h4 className={`text-gray-600 text-[14px] flex gap-[5px] items-center ${darkMode?"text-white":""}`}>  <span className='text-[#1877F2] text-[22px]'><MdOutlineMarkEmailUnread /></span> Email:</h4>
              <div className='px-[40px]'>
                <p className={`text-[14px] ${darkMode?"text-gray-200":""}`}>skhan.csit@gmail.com</p>
                </div>
              </div>
      </div>


<div className={` mt-[50px] rounded-lg py-[30px] px-[20px] ${darkMode ? "bg-dark-gray text-white" : "bg-[#EBF2FA]"} `}>
<p className={`${darkMode ? "text-white": ""}`}>I am always open to discussing <b className='font-medium'>new projects, opportunities in tech world,
partnerships </b> and more so <b className='font-medium'> mentorship.</b> </p>
  <form className='space-y-[20px] mt-[20px]'>
    <div className='flex flex-col'>
      <label htmlFor="name">Name <span>*</span></label>
      <input type="text" className={` pl-[40px] border-b-2 outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`}  />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="email">Email <span>*</span></label>
      <input type="email" className={` pl-[40px] border-b-2 outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`} />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="message">Message <span>*</span></label>
      <input type="text"className={` pl-[40px] border-b-2 outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`}  />
    </div>
<div>
    <button className='border-2 border-[#1877F2] px-[15px] py-[5px] font-medium text-[18px] rounded-full flex gap-[5px]'> Send <span className='text-[#1877F2] text-[22px]'><FiSend/></span></button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Contact