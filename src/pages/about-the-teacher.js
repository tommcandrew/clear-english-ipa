import React, { useContext } from "react";
import Layout from "../components/Layout";
import kitty from "../assets/KittyLamCropped.jpg";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import LanguageContext from "../context/LanguageContext";

const AboutTheTeacher = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <Head title="about the teacher" />
      <div className="aboutTheTeacher__content">
        <h1 className="aboutTheTeacher__title">About the teacher</h1>
        <div className="aboutTheTeacher__inner">
          <img
            src={kitty}
            alt="the teacher - Kitty Lam"
            className="aboutTheTeacher__kitty"
          />
          <div className="aboutTheTeacher__text">
            {multiLingualText.aboutTheTeacherParas[language].map((para) => (
              <p dangerouslySetInnerHTML={{ __html: para }}></p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutTheTeacher;
