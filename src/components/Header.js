import React, { useState, useEffect } from "react";
import celtaLogo from "../assets/logo_celta.png";
import MobileMenu from "./mobileMenu";

const Header = () => {
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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/teaching-method">Teaching Method</a>
          </li>
          <li>
            <a href="/requirements">Requirements</a>
          </li>
          <li>
            <a href="/tuition-fees">Tuition Fees</a>
          </li>
          <li>
            <a href="/cancellation-policy">Cancellation Policy</a>
          </li>
          <li>
            <a href="/common-mistakes">Common Mistakes</a>
          </li>
          <li>
            <a href="/about-the-teacher">About the teacher</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
        </ul>
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
