import React from "react";
import { useTranslation } from "react-i18next";
import "./banner.scss";

const Banner = ({ titleKey, subtitleKey, image }) => {
  const { t } = useTranslation();

  return (
    <div className={"banner-container"}>
      <img src={image} alt="banner" />
      <div className="banner-title">{t(titleKey)}</div>
      <div className="banner-subtitle body-2">{t(subtitleKey)}</div>
    </div>
  );
};
export { Banner };
