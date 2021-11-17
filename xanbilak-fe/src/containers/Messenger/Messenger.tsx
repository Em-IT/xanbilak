import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../../components/NavBar/NavBar";
import "./Messenger.scss";

const Messenger = (): JSX.Element => {

  // eslint-disable-next-line id-length
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <div className="messenger-box" style={{ textAlign: "center" }}>
        <h2>{ t("messenger") }</h2>
        <h3>{ t("comming_soon") }</h3>
      </div>

      <NavBar />
    </div>
  );

};

export default Messenger;
