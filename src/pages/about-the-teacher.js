import React, { useEffect } from "react";
import Layout from "../components/Layout";
import kitty from "../assets/KittyLamCropped.jpg";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import weibo from "../assets/weibo.png";
import youtube from "../assets/youtube.png";

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
            <img
              src={kitty}
              alt="the teacher - Kitty Lam"
              className="aboutTheTeacher__profile"
            />
            <a
              className="aboutTheTeacher__link"
              target="_blank"
              rel="nooopener noreferrer"
              href="https://www.youtube.com/watch?v=Y0wcEym7ZqQ&t=172s&ab_channel=clearEnglishIPA"
            >
              Video interview <img src={youtube} alt="" />
            </a>
            <a
              className="aboutTheTeacher__link"
              target="_blank"
              rel="nooopener noreferrer"
              href="https://www.weibo.com/7499956863/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
            >
              Video interview <img src={weibo} alt="" />
            </a>
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
