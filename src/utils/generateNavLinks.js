import React from "react";
import multiLingualText from "../assets/multiLingualText";
import toKebabCase from "../utils/toKebabCase";

const generateNavLinks = (language) => {
  if (language) {
    return multiLingualText.navList[language].map((item, index) => {
      let part1;
      let part2;
      let path;
      if (language === "en") {
        part1 = "";
      } else {
        part1 = `/${language}`;
      }
      if (multiLingualText.navList["en"][index] === "Home") {
        part2 = "/";
      } else {
        part2 = `/${toKebabCase(multiLingualText.navList["en"][index])}`;
      }
      path = part1 + part2;
      return (
        <li key={item}>
          <a href={path}>{item}</a>
        </li>
      );
    });
  }
};

export default generateNavLinks;
