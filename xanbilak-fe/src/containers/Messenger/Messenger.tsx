import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../../components/NavBar/NavBar";

const Messenger = (): JSX.Element => {

  // eslint-disable-next-line id-length
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <div className="text-center" style={{ height: 'calc(100% - 74px)' }}>
        <h2>{ t("messenger") }</h2>
        <h3>{ t("comming_soon") }</h3>
      </div>

      <NavBar />
    </div>
  );

};

export default Messenger;
