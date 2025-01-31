import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Layout = () => {
  const [darkMode, setDarkMode] = React.useState(true);

   React.useEffect(()=>{
    document.body.style.backgroundColor = darkMode ? "#313146" : "#EBF2FA"
   },[darkMode])
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className=" max-w-[1128px] w-[95%] md:w-[90%] m-auto">
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navbar darkMode={darkMode} />
      <div className="flex gap-[10px] flex-col mt-[10px] mb-[50px] sm:flex-col lg:flex-row md:flex-col">
      <Main darkMode={darkMode}  />
      <Outlet context={{darkMode}} />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Layout;
