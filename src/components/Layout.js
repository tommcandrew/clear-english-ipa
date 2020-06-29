import React from "react";
import Header from "./header.js";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="layout__wrapper">
      <Header />
      <div className="layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
