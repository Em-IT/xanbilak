import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdSettings } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaListOl } from "react-icons/fa";

const NavBar = (): JSX.Element => {

  // eslint-disable-next-line id-length
  const { t } = useTranslation();

  return (
    <div className="flex flex-row sticky bottom-0 w-full bg-gradient-to-b from-white to-gray-300" style={{height: '75px'}}>
      <Link to={"/"} className="w-1/3 no-underline">
        <div className="flex flex-col justify-center items-center text-gray-700 hover:text-red-700">
          <span>{t("shopping_list")}</span>
          <FaListOl className="hover:text-red-700 w-5 h-5" />
        </div>
      </Link>
      <Link to={"/messenger"} className="w-1/3 no-underline">
        <div className="flex flex-col justify-center items-center text-gray-700 hover:text-blue-700">
          <span>{t("messenger")}</span>
          <TiMessages className="text-blue-700 w-6 h-6" />
        </div>
      </Link>
      <Link to={"/settings"} className="w-1/3 no-underline">
        <div className="flex flex-col justify-center items-center text-gray-700 hover:text-green-700">
          <span>{t("settings")}</span>
          <IoMdSettings className="text-green-700 w-5 h-5" />
        </div>
      </Link>
    </div>
  );

};

export default NavBar;
