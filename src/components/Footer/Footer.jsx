/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import medium from "../../assets/resource/medium.png";
import twitter from "../../assets/resource/twitter.png";
import pixowl from "../../assets/resource/pixowl.png";
import logo from "../../assets/resource/logo.svg";
import "./footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container-footer">
      <div className="wrapper-footer">
        <div className="footer-logo">
          <a href="#">
            <img className="footer-logo-img" src={logo} alt="sandbox" />
          </a>
        </div>
        <div className="footer-pages">
          <h2>{t("footer.pages.title")}</h2>
          <div className="footer-pages-wrapper">
            <div className="footer-pages-section">
              <a className="footer-link body-2" href="#">
                {t("footer.pages.links.news")}
              </a>

              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.create")}
              </a>
              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.marketplace")}
              </a>

              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.game")}
              </a>
            </div>

            <div className="footer-pages-section">
              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.editor")}
              </a>
              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.whitepaper")}
              </a>

              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.about")}
              </a>

              <a className="footer-link body-2" target="" href="#">
                {t("footer.pages.links.faq")}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h2>{t("footer.social.title")}</h2>
          <div className="footer-social-links">
            <a className="footer-link" href="#">
              <img className="footer-icons" src={medium} alt="medium" />
            </a>
            <a className="footer-link" href="#">
              <img className="footer-icons" src={twitter} alt="twitter" />
            </a>
            <a className="footer-link" href="#">
              <img className="footer-icons" src={pixowl} alt="pixowl" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-cr body-3">{t("footer.copyright")}</div>
    </div>
  );
};

export { Footer };
