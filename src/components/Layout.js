import React from "react";
import Header from "./header.js";
import Footer from "../components/footer";

const Layout = ({ children, language }) => {
  return (
    <>
      <Header language={language} />
      <div
        className={`layout__content ${
          language === "en" && "layout__content--english"
        } ${language === "chTra" && "layout__content--chinese"} ${
          language === "chSim" && "layout__content--chinese"
        } ${language === "jap" && "layout__content--japanese"}`}
      >
        {children}
      </div>
      <Footer language={language} />
    </>
  );
};

export default Layout;
