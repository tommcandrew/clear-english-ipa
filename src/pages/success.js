import React, { useEffect } from "react";
import Layout from "../components/layout";
import multiLingualText from "../assets/multiLingualText";

const Success = (props) => {
  const language = props.pageContext.lang;

  useEffect(() => {
    if (!window) {
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Layout language={language}>
      <div className="success__content">
        <p align="center" variant="h5">
          {multiLingualText.successMessage[language]}
        </p>
      </div>
    </Layout>
  );
};

export default Success;
