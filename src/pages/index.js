import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import students from "../assets/students.jpg";

const Home = (props) => {
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
      <Head title="home" />
      <div className="index__banner">
        <div className="index__banner-text">
          <p
            dangerouslySetInnerHTML={{
              __html: multiLingualText.indexBanner[language],
            }}
          ></p>
        </div>
        <img src={students} alt="happy students" />
      </div>
      <div className="index__content">
        <h1
          className="index__title"
          dangerouslySetInnerHTML={{
            __html: multiLingualText.indexTitle[language],
          }}
        ></h1>
        <ul>
          {multiLingualText.indexList[language].map((sentence, index) => (
            <li className="index__item" key={index}>
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
