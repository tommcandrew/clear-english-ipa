import React from "react";
import generateNavLinks from "../utils/generateNavLinks";

const Footer = ({ language }) => {
  return (
    <div
      className={`footer__wrapper ${
        language === "chTra" && "footer__wrapper--chinese"
      } ${language === "chSim" && "footer__wrapper--chinese"}`}
    >
      <ul className="footer__nav">{generateNavLinks(language)}</ul>
      <div className="footer__contact">
        <div className="footer__email">Email: farbeyondlimit@gmail.com</div>
        <div className="footer__phone">Tel: (852) 9170 7930</div>
      </div>
      <a href="/admin" className="footer__admin">
        Admin
      </a>
      <div
        className={`footer__japanese ${
          language === "jap" && "footer__japanese--shown"
        }`}
      >
        (日本語版は参考用です。
        正確な契約条件については、英語版を参照してください。)
      </div>
    </div>
  );
};

export default Footer;
