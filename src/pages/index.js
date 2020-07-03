import React, { useContext } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import LanguageContext from "../context/LanguageContext";
import students from "../assets/webpage_photo.jpg";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <Head title="home" />
      <div className="index__banner">
        <div className="index__banner-text">
          <p>
            We emphasise{" "}
            <span className="index__big">
              practice
              <br />
            </span>{" "}
            in order to <span className="index__big">speak</span> and{" "}
            <span className="index__big">write</span> like a native British
            speaker.
          </p>
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
