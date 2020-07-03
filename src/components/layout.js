import React, { useContext, useEffect } from "react";
import Header from "./header.js";
import Footer from "../components/footer";
import LanguageContext from "../context/LanguageContext";

const Layout = ({ children }) => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <>
      <Header />
      <div
        className={`layout__content ${
          language === "en" && "layout__content--english"
        } ${language === "chTra" && "layout__content--chinese"} ${
          language === "chSim" && "layout__content--chinese"
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
