const SocialIcon = ({ href, icon, darkMode }) => (
  <a
    href={href}
    className={`flex justify-center items-center rounded-md xl:w-[40px] xl:h-[40px] lg:h-[38px] lg:w-[38px] ${
      darkMode ? "bg-dark-gray text-light-gray" : "text-[#1877F2] bg-[#EBF2FA]"
    }`}
  >
    {icon}
  </a>
);

export default SocialIcon;