import React from "react";
import Layout from "../components/Layout";

const CommonMistakes = () => {
  return (
    <Layout>
      <div className="commonMistakes__content">
        <div className="commonMistakes__inner">
          <h1 className="commonMistakes__title">Common Mistakes</h1>
          <div className="commonMistakes__list">
            <div className="commonMistakes__subtitle-wrapper">
              <span className="commonMistakes__smiley">&#129300;</span>
              <h2 className="commonMistakes__subtitle">
                These are some common mistakes made by English learners. Can you
                correct them?
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
              <span className="commonMistakes__smiley">&#128562;</span>
              <h2 className="commonMistakes__subtitle">
                Here are some commonly mispronounced words by English learners:
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
          <p>
            And there are a lot more ....
            <span className="commonMistakes__smiley commonMistakes__smiley--bottom">
              &#128556;
            </span>
          </p>
        </div>
        <h1 className="commonMistakes__ribbon">
          Come to my lessons and learn more about how to use English correctly!
        </h1>
        <h1 className="commonMistakes__email">
          Email us for an interview and a trial lesson over the internet.
        </h1>
      </div>
    </Layout>
  );
};

export default CommonMistakes;
