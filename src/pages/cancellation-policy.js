import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";

const CancellationPolicy = (props) => {
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
      <Head title="cancellation policy" />
      <div className="cancellationPolicy__content">
        <h1 className="cancellationPolicy__title">
          {multiLingualText.cancellationPolicyTitle[language]}
        </h1>
        <div className="cancellationPolicy__list">
          {multiLingualText.cancellationPolicyList[language].map((item) => (
            <div className="cancellationPolicy__policy" key={item}>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CancellationPolicy;
