import React, { useEffect } from "react";
import Layout from "../components/Layout";
import kitty from "../assets/KittyLamCropped.jpg";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";

const AboutTheTeacher = (props) => {
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
      <Head title="about the teacher" />
      <div className="aboutTheTeacher__content">
        <h1 className="aboutTheTeacher__title">
          {multiLingualText.aboutTheTeacherTitle[language]}
        </h1>
        <div className="aboutTheTeacher__inner">
          <div className="aboutTheTeacher__kitty">
            <img src={kitty} alt="the teacher - Kitty Lam" />
          </div>
          <div className="aboutTheTeacher__text">
            {multiLingualText.aboutTheTeacherParas[language].map(
              (para, index) => (
                <p dangerouslySetInnerHTML={{ __html: para }} key={index}></p>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutTheTeacher;
