import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavBar.scss";
import { IoMdSettings } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaListOl } from "react-icons/fa";

const NavBar = (): JSX.Element => {

  // eslint-disable-next-line id-length
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div>
          <span>{t("shopping_list")}</span>
          <FaListOl className="list-icon" />
        </div>
      </Link>
      <Link to={"/messenger"}>
        <div>
          <span>{t("messenger")}</span>
          <TiMessages className="messenger-icon" />
        </div>
      </Link>
      <Link to={"/settings"}>
        <div>
          <span>{t("settings")}</span>
          <IoMdSettings className="setting-icon" />
        </div>
      </Link>
    </div>
  );

};

export default NavBar;
