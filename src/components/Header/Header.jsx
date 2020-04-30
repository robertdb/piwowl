import React from "react";
import topBar from "../../assets/resource/top-bar.png";
import "./header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <a href="#">
        <img src={topBar} alt="voxedit" />
      </a>
      <nav>
        <button>{t("header.cto")}</button>
      </nav>
    </header>
  );
};

export { Header };
