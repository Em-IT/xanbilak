import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Settings.scss";

const Settings = (): JSX.Element => {

  const [lang, setLang] = useState("فارسی");

  // eslint-disable-next-line id-length
  const { t } = useTranslation();

  const changeLanguage = () => {

    const selected = localStorage.getItem("i18nextLng") || "en";
    if (selected === "en") {

      localStorage.setItem("i18nextLng", "fa");
      i18next.changeLanguage("fa");
      // X console.log("fa");
      setLang("فارسی");

    } else {

      localStorage.setItem("i18nextLng", "en");
      i18next.changeLanguage("en");
      // X console.log("en");
      setLang("English");

    }

  };

  return (
    <div className="page-wrapper">
      <div className="settings-box">
        <h2>{ t("settings") }</h2>
        <hr />

        <span>{ t("language") } :</span>
        <br />
        <button onClick={changeLanguage}>
          {lang}
        </button>
      </div>

      <NavBar />
    </div>
  );

};

export default Settings;
