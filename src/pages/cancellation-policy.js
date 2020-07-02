import React, { useContext } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import LanguageContext from "../context/LanguageContext";

const CancellationPolicy = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <Head title="cancellation policy" />
      <div className="cancellationPolicy__content">
        <h1 className="cancellationPolicy__title">
          {multiLingualText.cancellationPolicyTitle[language]}
        </h1>
        <div className="cancellationPolicy__list">
          {multiLingualText.cancellationPolicyList[language].map((item) => (
            <div className="cancellationPolicy__policy" key={item}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CancellationPolicy;
