import React from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const {darkMode} = useOutletContext();
  return (
    <div
    className={`rounded-lg p-[20px] md:p-[50px] md:w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}

    >
      <div className="relative mb-4">
        <h1
          className={`text-[22px] md:text-[32px] font-bold ${
            darkMode ? "text-light-gray" : "text-black"
          }`}
        >
          Contact
        </h1>
        <span
          className="absolute bottom-[18px] md:bottom-[25px] left-[95px] md:left-[140px] h-[2px] w-[80px] md:w-[150px] bg-[#1877F2]"
        ></span>
      </div>
      <div className='flex justify-between flex-col  gap-[20px] md:gap-[50] sm:gap-[50] lf:gap-[50] md:flex-row sm:flex-row lg:flex-row'>
      <div className={` rounded-lg space-y-[2px] px-[10px] py-[10px] flex-1 min-h-[100px] ${darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"}`}>
                <h4 className={`text-gray-600 text-[14px] flex gap-[5px] items-center ${darkMode?"text-light-gray":""}`}>  <span className='text-[#1877F2] text-[22px]'><MdOutlinePhoneInTalk /></span>  Phone:</h4>
                <div className='px-[40px]'>
                <p className={`text-[14px] ${darkMode?"text-light-gray":""}`}>+92 3481921015</p>
                <p className={`text-[14px] ${darkMode?"text-light-gray":""}`}>+92 3451399912</p>
                </div>
              </div>
              <div className={` rounded-lg space-y-[2px] px-[10px] py-[10px] flex-1 min-h-[100px] ${darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"}`}>
              <h4 className={`text-gray-600 text-[14px] flex gap-[5px] items-center ${darkMode?"text-light-gray":""}`}>  <span className='text-[#1877F2] text-[22px]'><MdOutlineMarkEmailUnread /></span> Email:</h4>
              <div className='px-[40px]'>
                <p className={`text-[14px] ${darkMode?"text-light-gray":""}`}>skhan.csit@gmail.com</p>
                </div>
              </div>
      </div>


<div className={` mt-[50px] rounded-lg py-[15px] px-[12px] md:py-[30px] md:px-[20px] ${darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"} `}>
<p className={`text-[14px] md:text-[16px] ${darkMode ? "text-light-gray": "text-dark-gray"}`}>I am always open to discussing <b className='font-medium'>new projects, opportunities in tech world,
partnerships </b> and more so <b className='font-medium'> mentorship.</b> </p>
  <form className='space-y-[20px] mt-[20px]'>
    <div className='flex flex-col'>
      <label htmlFor="name" className='text-[14px] md:text-[16px]'>Name <span>*</span></label>
      <input type="text" className={` pl-[40px] border-b-2 leading-4 md:leading-6 text-[14px] md:text-[16px] outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`}  />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="email" className='text-[14px] md:text-[16px]'>Email <span>*</span></label>
      <input type="email" className={` pl-[40px] border-b-2 leading-4 md:leading-6 text-[14px] md:text-[16px] outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`} />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="message" className='text-[14px] md:text-[16px]'>Message <span>*</span></label>
      <input type="text"className={` pl-[40px] border-b-2 leading-4 md:leading-6 text-[14px] md:text-[16px] outline-none ${darkMode ? "bg-dark-gray border-b-[#21222A] text-gray-300":"bg-[#EBF2FA]"}`}  />
    </div>
<div>
    <button className='border-2  border-[#1877F2] px-[15px] py-[5px] text-[14px] font-medium md:text-[18px] rounded-full flex gap-[5px]'> Send <span className='text-[#1877F2] text-[16px] md:text-[22px]'><FiSend/></span></button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Contact