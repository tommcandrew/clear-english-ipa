import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import methodVideo from "../assets/method.mp4";

const TeachingMethod = (props) => {
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
      <Head title="teaching method" />
      <div className="teachingMethod__content">
        <div className="teachingMethod__video">
          <video controls src={methodVideo} type="video/mp4" />
        </div>
        <h1
          className="teachingMethod__title"
          dangerouslySetInnerHTML={{
            __html: multiLingualText.teachingMethodTitle[language],
          }}
        ></h1>
        <div className="teachingMethod__stage">
          <h1 className="teachingMethod__ribbon">
            {multiLingualText.teachingMethodFirstStage[language]}
          </h1>
          <h2
            className="teachingMethod__subtitle--first"
            dangerouslySetInnerHTML={{
              __html: multiLingualText.teachingMethodSubtitleFirst[language],
            }}
          ></h2>
          <div className="teachingMethod__list-wrapper">
            <div className="teachingMethod__decoration--left"></div>
            <ul className="teachingMethod__list">
              {multiLingualText.teachingMethodListFirst[language].map(
                (item) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                    className="teachingMethod__main-item"
                  ></li>
                )
              )}
              <ul className="teachingMethod__sublist">
                {multiLingualText.teachingMethodSubListFirst[language].map(
                  (item) => (
                    <li
                      key={item}
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></li>
                  )
                )}
              </ul>
            </ul>
            <div className="teachingMethod__decoration--right"></div>
          </div>
        </div>
        <div className="teachingMethod__center">
          <div className="teachingMethod__arrow"></div>
        </div>
        <div className="teachingMethod__stage">
          <h1 className="teachingMethod__ribbon">
            {" "}
            {multiLingualText.teachingMethodSecondStage[language]}
          </h1>
          <h2
            className="teachingMethod__subtitle--second"
            dangerouslySetInnerHTML={{
              __html: multiLingualText.teachingMethodSubtitleSecond[language],
            }}
          ></h2>
          <div className="teachingMethod__list-wrapper">
            <div className="teachingMethod__decoration--left"></div>

            <ul className="teachingMethod__list">
              {multiLingualText.teachingMethodListSecond[language].map(
                (item) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                    className="teachingMethod__main-item"
                  ></li>
                )
              )}
            </ul>
            <div className="teachingMethod__decoration--right"></div>
          </div>
        </div>
        <p
          className="teachingMethod__medium"
          dangerouslySetInnerHTML={{
            __html: multiLingualText.teachingMethodMedium[language],
          }}
        ></p>
      </div>
    </Layout>
  );
};

export default TeachingMethod;
