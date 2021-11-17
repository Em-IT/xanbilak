import React from "react";
import "./MainHeader.scss";
import whiteLogo from "../../assets/images/logo-white.png";

const MainHeader = (): JSX.Element => (
  <div className="main-header">
    <span className="title">anbilak</span>
    <img src={whiteLogo} alt="Xanbilak Logo" className="xanbilak-logo" />
  </div>
);

export default MainHeader;
