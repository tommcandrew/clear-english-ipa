import React from "react";
import Header from "./header.js";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout__content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
