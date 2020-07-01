import React, { useContext } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import LanguageContext from "../context/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <Head title="home" />
      <div className="index__content">
        <h1
          className="index__title"
          dangerouslySetInnerHTML={{
            __html: multiLingualText.indexTitle[language],
          }}
        ></h1>
        <ul>
          {multiLingualText.indexList[language].map((sentence, index) => (
            <li className="index__item">
              <span className="index__number">{index + 1}/</span>
              <p dangerouslySetInnerHTML={{ __html: sentence }}></p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
