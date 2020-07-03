import React, { useContext } from "react";
import Layout from "../components/layout";
import LanguageContext from "../context/LanguageContext";
import multiLingualText from "../assets/multiLingualText";

const Success = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <div className="success__wrapper">
        <p align="center" variant="h5">
          {multiLingualText.success_message[language]}
        </p>
      </div>
    </Layout>
  );
};

export default Success;
