import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import { useStaticQuery, graphql } from "gatsby";
import multiLingualText from "../assets/multiLingualText";

const TuitionFees = (props) => {
  const language = props.pageContext.lang;

  useEffect(() => {
    if (!window) {
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allContentfulTuitionFees {
        edges {
          node {
            stage1First8LessonsPrice
            stage1Second8LessonsPrice
            stage1TrialLessonLength
            stage1TrialLessonPrice
            stage21To1LessonsPrice
            stage22To1LessonsPrice
          }
        }
      }
    }
  `);

  const tuitionFees = data.allContentfulTuitionFees.edges[0].node;

  return (
    <Layout language={language}>
      <Head title="tuition fees" />
      <div className="tuitionFees__content">
        <h1 className="tuitionFees__title">
          {multiLingualText.tuitionFeesTitle[language]}
        </h1>
        <div className="tuitionFees__stage">
          <h2
            className="tuitionFees__subtitle"
            dangerouslySetInnerHTML={{
              __html: multiLingualText.tuitionFeesSubtitleFirst[language],
            }}
          ></h2>
          <p>{multiLingualText.tuitionFeesPara[language]}</p>
          <div className="tuitionFees__trial">
            <strong>{multiLingualText.tuitionFeesTrialLesson[language]}</strong>
            <span>
              HK${tuitionFees.stage1TrialLessonPrice}{" "}
              {multiLingualText.tuitionFees2Hours[language]}
            </span>
          </div>
          <p className="tuitionFees__payments">
            {multiLingualText.tuitionFees2Payments[language]}
          </p>
          <div className="tuitionFees__info tuitionFees__info--first">
            <div>
              <span>
                {multiLingualText.tuitionFeesFirst8Lessons[language]}{" "}
              </span>
              <span>
                {multiLingualText.tuitionFees2HoursPerLesson[language]}
              </span>
            </div>
            <p>
              HK${tuitionFees.stage1First8LessonsPrice}{" "}
              {multiLingualText.tuitionFees16Hours[language]}
            </p>
          </div>
          <div className="tuitionFees__info tuitionFees__info--second">
            <div>
              <span>
                {multiLingualText.tuitionFeesSecond8Lessons[language]}{" "}
              </span>
              <span>
                {multiLingualText.tuitionFees2HoursPerLesson[language]}
              </span>
            </div>
            <p>
              HK${tuitionFees.stage1Second8LessonsPrice}{" "}
              {multiLingualText.tuitionFees16Hours[language]}
            </p>
          </div>
        </div>
        <div className="tuitionFees__stage">
          <h2
            className="tuitionFees__subtitle"
            dangerouslySetInnerHTML={{
              __html: multiLingualText.tuitionFeesSubtitleSecond[language],
            }}
          ></h2>
          <div className="tuitionFees__info">
            <strong>{multiLingualText.tuitionFees1to1[language]}</strong>{" "}
            {/* have separate chinese and english per person string */}
            <p>
              {language === "sc" && "每人"}
              {language === "tc" && "每人"}
              {language === "ja" && "一人当たり"}
              HK$
              {tuitionFees.stage21To1LessonsPrice}
              {language === "en" && "/per person"}{" "}
              {multiLingualText.tuitionFeesPriceInfo[language]}
            </p>
          </div>
          <div className="tuitionFees__info">
            <strong>{multiLingualText.tuitionFees2to1[language]}</strong>{" "}
            <p>
              {language === "sc" && "每人"}
              {language === "tc" && "每人"}
              {language === "ja" && "一人当たり"}
              HK$
              {tuitionFees.stage22To1LessonsPrice}
              {language === "en" && "/per person"}{" "}
              {multiLingualText.tuitionFeesPriceInfo[language]}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TuitionFees;
