const ContactInfo = ({ icon, label, value, darkMode }) => (
  <div
    className={`flex items-center border-b-2 gap-[5px] px-[5px] py-[10px] ${
      darkMode ? "border-gray-medium" : ""
    }`}
  >
    <span
      className={`xl:text-[22px] lg:text-[20px] ${
        darkMode ? "text-gray-medium" : "text-[#1877F2]"
      }`}
    >
      {icon}
    </span>
    <div className="flex flex-col">
      <span
        className={`lg:text-[13px] xl:text-[14px] ${
          darkMode ? "text-light-gray" : "text-gray-700"
        }`}
      >
        {label}
      </span>
      <span
        className={`font-semibold lg:text-[13px] xl:text-[14px] ${
          darkMode ? "text-light-gray" : ""
        }`}
      >
        {value}
      </span>
    </div>
  </div>
);


export default ContactInfo