
const FeatureCard = ({ icon: Icon, title, description, darkMode }) => {
    return (
      <div
        className={`rounded-md xl:px-4 xl:py-5 lg:px-2 lg:py-4 ${
          darkMode ? "bg-dark-gray" : "bg-[#EBF2FA] "
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className={`text-[22px] ${darkMode ? "text-gray-medium" : "text-bright-blue"}`}>
            <Icon />
          </span>
          <h3
            className={`font-semibold text-[14px] ${
              darkMode ? "text-white" : "text-dark-blue"
            }`}
          >
            {title}
          </h3>
        </div>
        <p className={`text-[14px] ${darkMode ? "text-light-gray" : " text-dark-gray"}`}>
          {description}
        </p>
      </div>
    );
  };
  
export default FeatureCard;  