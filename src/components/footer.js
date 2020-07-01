import React, { useContext } from "react";
import generateNavLinks from "../utils/generateNavLinks";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="footer__wrapper">
      <ul className="footer__nav">{generateNavLinks()}</ul>
      <div className="footer__contact">
        <div className="footer__email">Email: farbeyondlimit@gmail.com</div>
        <div className="footer__phone">Tel: (852) 9170 7930</div>
      </div>
    </div>
  );
};

export default Footer;
