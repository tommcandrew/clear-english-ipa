import React, { useState, useEffect } from "react";
import celtaLogo from "../assets/logo_celta.png";
import MobileMenu from "./mobileMenu";
import generateNavLinks from "../utils/generateNavLinks";

const Header = ({ language }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

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

  const handleSelectLanguage = (e) => {
    const origin = window.location.origin;
    let selectedLang;
    if (e.target.value === "en") {
      selectedLang = "";
    } else {
      selectedLang = `/${e.target.value}`;
    }
    let path;
    if (language === "en") {
      path = window.location.pathname;
    } else {
      path = window.location.pathname.slice(3);
    }
    const newPath = `${origin}${selectedLang}${path}`;
    window.location.href = newPath;
  };

  return (
    <div
      className={`header__wrapper ${
        language === "tc" && "header__wrapper--chinese"
      } ${language === "sc" && "header__wrapper--chinese"}`}
    >
      <div className="header__top"></div>
      <div className="header__middle">
        <div className="header__info">
          <p>Kitty Lam</p>
          <img src={celtaLogo} alt="" />
        </div>
        <select
          className="header__select"
          onChange={handleSelectLanguage}
          value={language}
        >
          <option value="en">English</option>
          <option value="sc">中文 (简体)</option>
          <option value="tc">中文 (繁体)</option>
          <option value="ja">日本語</option>
        </select>
      </div>
      <div className="header__bottom">
        <ul className="header__nav">{generateNavLinks(language)}</ul>
        <div className="header__burger" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} language={language} />
    </div>
  );
};

export default Header;
