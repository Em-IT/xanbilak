import React from "react";
import whiteLogo from "../../assets/images/logo-white.png";

const MainHeader = (): JSX.Element => (
  <div className="flex flex-row justify-center items-center h-10 text-white bg-gradient-to-b from-my-violet-dark to-my-violet">
    <span className="text-2xl font-bold" style={{fontFamily: "Times"}}>anbilak</span>
    <img src={whiteLogo} alt="Xanbilak Logo" className="w-6" />
  </div>
);

export default MainHeader;
