import React from "react";
import { useTranslation } from "react-i18next";
import { OnScrollAnimation } from "../OnScrollAnimation";

import "./info.scss";
import rhomb from "../../assets/resource/rhomb.png";

const Info = ({ titleKey, subtitleKey, featuresKey }) => {
  const { t } = useTranslation();

  const features = featuresKey.map((itemKey, index) => (
    <li key={index}>
      <img className="feature-icon" src={rhomb} alt={t(itemKey)} />
      <span className={"body-1 feature-text"}>{t(itemKey)}</span>
    </li>
  ));

  return (
    <OnScrollAnimation>
      <div className="info-container">
        <div className="wrapper">
          <h1 className="info-title">{t(titleKey)}</h1>
          <div className={"body-1 description"}>{t(subtitleKey)}</div>
        </div>
        <div>
          <h2 className="feature-title">{t("info.feature.title")}</h2>
          <ul className="feature-list">{features}</ul>
        </div>
      </div>
    </OnScrollAnimation>
  );
};

export { Info };
