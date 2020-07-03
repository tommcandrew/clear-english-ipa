import React from "react";
import multiLingualText from "../assets/multiLingualText";
import toKebabCase from "../utils/toKebabCase";

const generateNavLinks = (language) => {
  if (language) {
    return multiLingualText.navList[language].map((item, index) => {
      let path;
      if (multiLingualText.navList["en"][index] === "Home") {
        path = "/";
      } else {
        path = "/" + toKebabCase(multiLingualText.navList["en"][index]);
      }
      return (
        <li key={item}>
          <a href={path}>{item}</a>
        </li>
      );
    });
  }
};

export default generateNavLinks;
