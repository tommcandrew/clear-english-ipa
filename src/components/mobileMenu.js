import React, { useContext } from "react";
import generateNavLinks from "../utils/generateNavLinks";
import LanguageContext from "../context/LanguageContext";

const MobileMenu = ({ mobileMenuIsOpen }) => {
  const { language } = useContext(LanguageContext);

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
