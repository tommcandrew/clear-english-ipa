import React, { useState, useEffect, useContext } from "react";
import celtaLogo from "../assets/logo_celta.png";
import MobileMenu from "./mobileMenu";
import generateNavLinks from "../utils/generateNavLinks";
import LanguageContext from "../context/LanguageContext";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  useEffect(() => {
    if (window === undefined) {
      return;
    } else {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
          setMobileMenuIsOpen(false);
        }
      });
    }
  }, []);

  return (
    <div className="header__wrapper">
      <div className="header__top"></div>
      <div className="header__middle">
        <div className="header__info">
          <p>Kitty Lam</p>
          <img src={celtaLogo} alt="" />
        </div>
        {/* <select className="header__select">
          <option value="en">English</option>
        </select> */}
        <button
          onClick={() => changeLanguage(language === "en" ? "chSim" : "en")}
          className="header__lang"
        >
          {language === "en" ? "CH-SIM" : "EN"}
        </button>
      </div>
      <div className="header__bottom">
        <ul className="header__nav">{generateNavLinks(language)}</ul>
        <div className="header__burger" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} />
    </div>
  );
};

export default Header;
