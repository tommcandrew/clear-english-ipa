import React from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import { useStaticQuery, graphql } from "gatsby";

const TuitionFees = () => {
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

  const tutionFees = data.allContentfulProduct.edges[0];

  return (
    <Layout>
      <Head title="tution fees" />
      <div className="tuitionFees__content">
        <h1 className="tuitionFees__title">Tuition Fees</h1>
        <div className="tuitionFees__stage">
          <h2 className="tuitionFees__subtitle">Stage one</h2>
          <p>
            (a maximum of 4 students for online lessons and 5 for face-to-face
            lessons)
          </p>
          <div className="tuitionFees__trial">
            <strong>Trial lesson: </strong>
            <span>HK${tutionFees.stage1TrialLessonPrice} (2 hours)</span>
          </div>
          <p className="tuitionFees__payments">in 2 payments</p>
          <div className="tuitionFees__info">
            <strong>First 8 lessons </strong>&nbsp; (2 hours/lesson):&nbsp;
            <p>HK${tutionFees.stage1First8LessonsPrice} (16 hours)</p>
          </div>
          <div className="tuitionFees__info">
            <strong>Second 8 lessons</strong>&nbsp; (2 hours/lesson):&nbsp;
            <p>HK{tutionFees.stage1Second8LessonsPrice} (16 hours)</p>
          </div>
        </div>
        <div className="tuitionFees__stage">
          <h2 className="tuitionFees__subtitle">Stage two</h2>
          <div className="tuitionFees__info">
            <strong>1-to-1 lessons: </strong>&nbsp;
            <p>
              HK${tutionFees.stage21To1LessonsPrice}/per person (4 lessons x 1.5
              hours, 6 hours in total)
            </p>
          </div>
          <div className="tuitionFees__info">
            <strong>2-to-1 lessons: </strong>&nbsp;
            <p>
              HK{tutionFees.stage22To1LessonsPrice}/per person (4 lessons x 1.5
              hours, 6 hours in total)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TuitionFees;
