import React from "react";
import generateNavLinks from "../utils/generateNavLinks";

const Footer = ({ language }) => {
  return (
    <div
      className={`footer__wrapper ${
        language === "tc" && "footer__wrapper--chinese"
      } ${language === "sc" && "footer__wrapper--chinese"} ${
        language === "ja" && "footer__wrapper--japanese"
      }`}
    >
      <ul className="footer__nav">{generateNavLinks(language)}</ul>
      <div className="footer__contact">
        <div className="footer__email">Email: farbeyondlimit@gmail.com</div>
        <div className="footer__phone">Tel: (852) 9170 7930</div>
      </div>
    </div>
  );
};

export default Footer;
