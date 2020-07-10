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
        } ${language === "tc" && "layout__content--chinese"} ${
          language === "sc" && "layout__content--chinese"
        } ${language === "ja" && "layout__content--japanese"}`}
      >
        {children}
      </div>
      <Footer language={language} />
    </>
  );
};

export default Layout;
