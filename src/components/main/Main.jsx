import React from "react";
import ShuaibPic from "../../assets/shuaib.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import SocialIcon from "./SocialIcon";
import ContactInfo from "./ContactInfo"



const Main = ({ darkMode }) => {
  const socialLinks = [
    { href: "/", icon: <FaFacebookF /> },
    { href: "/", icon: <FaLinkedinIn /> },
    { href: "/", icon: <VscGithub /> },
    { href: "/", icon: <FaWhatsapp /> },
  ];

  return (
    <main
      className={`rounded-lg w-[330px] lg:px-[26px] xl:px-[30px] ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center justify-center mt-[-40px]">

        {/* Profile Section */}
        <img
          src={ShuaibPic}
          alt="Shuaib Khan"
          className="w-[120px] rounded-lg "
        />

        <h1
          className={`lg:text-[20px] xl:text-[22px] font-semibold mt-[5px] ${
            darkMode ? "text-white" : "text-[#0B0909]"
          }`}
        >
          Shuaib Khan
        </h1>

        <span className={`lg:text-[14px] xl:text-[16px] ${darkMode ? "text-light-gray" : "text-gray-700"}`}>
          Full Stack Web Developer
        </span>


        {/* Social Links */}
        <div className="flex gap-[10px] mt-[10px]">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              href={link.href}
              icon={link.icon}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Contact Info */}
        <div
          className={`rounded-lg w-full mt-[20px] px-[10px] py-[20px] mb-[20px] `}
        >
          <ContactInfo
            icon={<IoPhonePortraitOutline />}
            label="Phone"
            value="03481921015"
            darkMode={darkMode}
          />
          <ContactInfo
            icon={<MdOutlineMarkEmailUnread />}
            label="Email"
            value="skhan.csit@gmail.com"
            darkMode={darkMode}
          />
          <ContactInfo
            icon={<CiLocationArrow1 />}
            label="Location"
            value="Swat, KPK, Pakistan"
            darkMode={darkMode}
          />

          {/* Resume Download Button */}
          <div className="py-[10px] flex justify-center items-center mt-[10px]">
            <button
              className={`flex text-[15px] gap-[5px] items-center justify-center rounded-full py-[14px] px-[24px] xl:text-[18px] lg:text-[17px] ${
                darkMode
                  ? "bg-dark-gray text-light-gray"
                  : "bg-[#1877F2] text-white"
              }`}
            >
              <span className={`xl:text-[20px] lg:text-[18px]`}>
                <IoDownloadOutline />
              </span>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
