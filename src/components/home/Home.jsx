import React from "react";
import { useOutletContext } from "react-router-dom";
import { features } from "../../utils/data";
import FeatureCard from "./FeatureCard";

const Home = () => {
  const { darkMode } = useOutletContext();

  return (
    <div
      className={`rounded-lg lg:p-8  xl:p-12 ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
      style={{ width: "calc(100% - 350px)" }}
    >
      {/* About Me Section */}
      <div className="mb-10">
        <h1
          className={`mb-2 relative lg:text-[28px] xl:text-[32px] ${
            darkMode ? "text-white" : "text-dark-blue"
          }`}
        >
          ABOUT ME
          <span
            className={`absolute block w-[150px] h-[2px] bg-[#1877F2] top-5 left-[180px]`}
          ></span>
        </h1>

        <p
          className={`lg:text-[14px] xl:text-[16px] ${
            darkMode ? " text-light-gray" : "text-dark-gray"
          } `}
        >
          I am a Web Developer with a Bachelor’s degree in Computer Science,
          specializing in MERN Stack Development. I began my career as a Web
          Developer at ROZI ACADEMY. Currently, I am working as a frontend React
          developer at United Sol, where I focus on creating dynamic and
          user-friendly web applications. My expertise includes working with
          modern technologies like React, Tailwind CSS, and the Bulletproof
          React architecture, ensuring scalable and maintainable solutions.
        </p>
      </div>

      {/* What I Do Section */}
      <div>
        <h2
          className={`mb-2 lg:text-[20px] xl:text-[22px] font-semibold ${
            darkMode ? "text-white" : "text-dark-blue"
          }`}
        >
          What I do!
        </h2>
        <div className="grid grid-cols-2 gap-5 text-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
