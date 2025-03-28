import ShuaibPic from "../assets/shuaib.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import CV from "../assets/Shuaib_CV.pdf"

const Main = ({ darkMode }) => {
  return (
    <main
      className={` rounded-lg lg:w-[432px] flex flex-col  lg:px-[32px] md:w-full ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <div className="flex flex-col p-[20px] lg:p-0 items-center justify-center lg:mt-[-40px] md:mt-0">
        <img
          src={ShuaibPic}
          alt="Shuaib Pic"
          className="w-[120px] rounded-lg "
        />
        <h1
          className={`text-[0B0909] text-[18px] md:text-[22px] font-semibold mt-[5px] ${
            darkMode ? "text-white" : "text-[0B0909]"
          }`}
        >
          Shuaib Khan
        </h1>
        <span className={`text-[14px]  md:text-[16px] ${darkMode ? "text-light-gray" : "text-gray-700"}`}>
          Full Stack Web Developer
        </span>

        <div className="flex gap-[7px] md:gap-[10px] mt-[5px] md:mt-[10px]">
          <a
            href="https://www.facebook.com/shuaibdev"
              target="_blank"
            className={` flex justify-center items-center text-[#1877F2]  rounded-md h-[32px] w-[32px] md:w-[40px] md:h-[40px] ${
              darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"
            }`}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/shuaibdev/"
              target="_blank"
            className={` flex justify-center items-center text-[#1877F2]  rounded-md h-[32px] w-[32px] md:w-[40px] md:h-[40px] ${
              darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"
            }`}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/shuaibkhandev"
              target="_blank"
            className={` flex justify-center items-center text-[#1877F2]  rounded-md h-[32px] w-[32px] md:w-[40px] md:h-[40px] ${
              darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"
            }`}
          >
            <VscGithub />
          </a>
          <a
            href="https://wa.me/3451399912?text=Hello!%20I%20am%20interested%20in%20connecting%20with%20you."
            target="_blank"
            className={` flex justify-center items-center text-[#1877F2]  rounded-md h-[32px] w-[32px] md:w-[40px] md:h-[40px] ${
              darkMode ? "bg-dark-gray text-light-gray" : "bg-[#EBF2FA]"
            }`}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div
        className={` rounded-lg w-full  lg:block xl:block  xl:mt-[20px] px-[10px] lg:py-[20px] mb-[20px]${
          darkMode ? "bg-[#21222A]" : "bg-[#EBF2FA]"
        } `}
      >
        <div
          className={`lg:flex hidden items-center border-b-2 gap-[5px] px-[5px] py-[10px] ${
            darkMode ? "border-[#282D35]" : ""
          }`}
        >
          <span
            className={`text-[#1877F2] text-[22px] ${
              darkMode ? "text-gray-medium" : ""
            }`}
          >
            <IoPhonePortraitOutline />
          </span>
          <div className="flex flex-col">
            <span
              className={`text-gray-700 text-[14px] ${
                darkMode ? "text-light-gray" : ""
              }`}
            >
              phone
            </span>
            <span
              className={`${
                darkMode ? "text-light-gray" : ""
              } font-semibold text-[14px]`}
            >
              03481921015
            </span>
          </div>
        </div>
        <div
          className={`lg:flex hidden items-center border-b-2 gap-[5px] px-[5px] py-[10px] ${
            darkMode ? "border-[#282D35]" : ""
          }`}
        >
          <span
            className={`text-[#1877F2] text-[22px] ${
              darkMode ? "text-gray-medium" : ""
            }`}
          >
            <MdOutlineMarkEmailUnread />
          </span>
          <div className="flex flex-col">
            <span
              className={`text-gray-700 text-[14px] ${
                darkMode ? "text-light-gray" : ""
              }`}
            >
              Email
            </span>
            <span
              className={`${
                darkMode ? "text-light-gray" : ""
              } font-semibold text-[14px]`}
            >
              skhan.csit@gmail.com
            </span>
          </div>
        </div>
        <div
          className={`lg:flex hidden items-center border-b-2 gap-[5px] px-[5px] py-[10px] ${
            darkMode ? "border-[#282D35]" : ""
          }`}
        >
          <span
            className={`text-[#1877F2] text-[22px] ${
              darkMode ? "text-gray-medium" : ""
            }`}
          >
            <CiLocationArrow1 />
          </span>
          <div className="flex flex-col ">
            <span
              className={`text-gray-700 text-[14px] ${
                darkMode ? "text-light-gray" : ""
              }`}
            >
              Location
            </span>
            <span
              className={`${
                darkMode ? "text-light-gray" : ""
              } font-semibold text-[14px]`}
            >
              Swat, KPK, Pakistan
            </span>
          </div>
        </div>
        <div className="py-[10px] flex justify-center items-center xl:mt-[10px]">
          <a
          href={CV} 
          target="_blank" 
            className={`flex text-[15px] gap-[5px] items-center justify-center bg-[#1877F2] text-white rounded-full py-[10px] px-[14px] ${
              darkMode ? "bg-dark-gray" : ""
            } `}
          >
            
            <span
              className={`text-[20px] ${
                darkMode ? "text-gray-medium" : "text-white"
              }`}
            >
              <IoDownloadOutline />
            </span>
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
