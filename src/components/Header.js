import React from "react";
import "../styles/header.scss";
import celtaLogo from "../assets/logo_celta.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__top"></div>
      <div className="header__middle">
        <div className="header__info">
          <p>Kitty Lam</p>
          <img src={celtaLogo} alt="" />
        </div>
        <select className="header__select">
          <option value="en">English</option>
        </select>
      </div>
      <div className="header__bottom">
        <ul className="header__nav">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <div className="header__burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
