import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";

const Requirements = (props) => {
  const language = props.pageContext.lang;

  return (
    <Layout language={language}>
      <Head title="requirements" />
      <div className="requirements__content">
        <h1 className="requirements__title">
          {multiLingualText.requirementsTitle[language]}
        </h1>
        <ul className="requirements__list">
          {multiLingualText.requirementsList[language].map((item) => (
            <li
              key={item}
              className="requirements__item"
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
          <ul className="requirements__sublist">
            {multiLingualText.requirementsSublist[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ul>
      </div>
    </Layout>
  );
};

export default Requirements;
