import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import thinkingEmoji from "../assets/thinking.png";
import shockedEmoji from "../assets/shocked.png";
import oopsEmoji from "../assets/oops.png";
import email from "../assets/Email.jpg";

const CommonMistakes = (props) => {
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
      <Head title="common mistakes" />
      <div className="commonMistakes__content">
        <div className="commonMistakes__inner">
          <h1 className="commonMistakes__title">
            {multiLingualText.commonMistakesTitle[language]}
          </h1>
          <div className="commonMistakes__list">
            <div className="commonMistakes__subtitle-wrapper">
              <img
                src={thinkingEmoji}
                alt="thinking emoji"
                className="commonMistakes__emoji"
              />
              <h2 className="commonMistakes__subtitle">
                {multiLingualText.commonMistakesSubtitleFirst[language]}
              </h2>
            </div>
            <li>
              <span className="commonMistakes__times">&times;</span>
              Please decide the place which is convenient for you.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>I really
              like the 1980's music and fashion.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              It was the first time I saw a whale.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              Most of the people agreed with me about the problems of global
              warming.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              The police is coming to investigate the incident.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              Amongst all the balloons, I like the one in red colour.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              Could you list out what we have to buy today?
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              I’m quite busy now. Can I call you back 15 minutes later?
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              I’ve spent a lot of effort improving my English.
            </li>
            <li>
              <span className="commonMistakes__times">&times;</span>
              When I was a kid, I had joined a choir for three years.
            </li>
          </div>
          <div className="commonMistakes__list commonMistakes__pron-list">
            <div className="commonMistakes__subtitle-wrapper">
              <img
                src={shockedEmoji}
                alt="shocked emoji"
                className="commonMistakes__emoji"
              />
              <h2 className="commonMistakes__subtitle">
                {multiLingualText.commonMistakesSubtitleSecond[language]}
              </h2>
            </div>
            <li>coupon</li>
            <li>bank account</li>
            <li>popcorn</li>
            <li>supermarket</li>
            <li>jet lag</li>
            <li>vegetable</li>
            <li>comfortable</li>
            <li>considerate</li>
            <li>society</li>
            <li>police</li>
          </div>
          <div className="commonMistakes__more-wrapper">
            <p>{multiLingualText.commonMistakesMore[language]}</p>
            <img
              src={oopsEmoji}
              alt="oops emoji"
              className="commonMistakes__emoji"
            />
          </div>
        </div>
        <h1 className="commonMistakes__ribbon">
          {multiLingualText.commonMistakesCome[language]}
        </h1>
        <div className="commonMistakes__email-wrapper">
          <img src={email} alt="email" />
          <h1
            className="commonMistakes__email"
            dangerouslySetInnerHTML={{
              __html: multiLingualText.commonMistakesEmail[language],
            }}
          ></h1>
        </div>
      </div>
    </Layout>
  );
};

export default CommonMistakes;
