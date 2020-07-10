import React from "react";
import generateNavLinks from "../utils/generateNavLinks";

const MobileMenu = ({ mobileMenuIsOpen, language }) => {
  return (
    <ul
      className={`mobileMenu__wrapper ${
        mobileMenuIsOpen ? "mobileMenu__wrapper--show" : ""
      }`}
    >
      {generateNavLinks(language)}
    </ul>
  );
};

export default MobileMenu;
