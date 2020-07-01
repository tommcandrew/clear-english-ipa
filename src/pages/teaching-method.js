import React from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";

const TeachingMethod = () => {
  return (
    <Layout>
      <Head title="teaching method" />
      <div className="teachingMethod__content">
        <h1 className="teachingMethod__title">
          We adopt a <strong>two-stage</strong> approach:
        </h1>
        <div className="teachingMethod__stage">
          <h1 className="teachingMethod__ribbon">First stage:</h1>
          <h2 className="teachingMethod__subtitle--first">
            Learn how to pronounce English sounds like a native British speaker.
          </h2>
          <div className="teachingMethod__list-wrapper">
            <div className="teachingMethod__decoration--left"></div>
            <ul className="teachingMethod__list">
              <li>
                Learn how to pronounce the <strong>44 English sounds</strong>{" "}
                with the aid of the
                <strong> International Phonetic Alphabet (IPA)</strong>.
              </li>
              <li>
                Enjoy lots of <strong>hands-on practice</strong> and{" "}
                <strong>receive instantaneous corrections</strong> in our
                lessons. All teaching and practice materials are provided in our
                lessons.
              </li>
              <li>
                Experience <strong>a small class</strong> of a maximum of 4
                students for online lessons and 5 for face-to-face lessons.
              </li>
              <li>
                <strong>16 lessons</strong> in total (2 hours for each lesson).
              </li>
              <li>
                Benefit from <strong>revision</strong> in every following lesson
                to help you reinforce your skills. So, practise what you've
                learned after every lesson on your own in order to take full
                advantage of our lessons.
              </li>
              <li>At the end of this stage, you should be able to:</li>
              <ul className="teachingMethod__sublist">
                <li>
                  understand how to{" "}
                  <strong>make all the 44 English sounds</strong> correctly.
                </li>
                <li>
                  <strong>stress words and sentences</strong> like a native
                  British speaker.
                </li>
                <li>
                  know how to <strong>use intonation</strong> like a native
                  British speaker.
                </li>
                <li>
                  <strong>identify your weaknesses</strong> for further
                  improvement.
                </li>
              </ul>
            </ul>
            <div className="teachingMethod__decoration--right"></div>
          </div>
        </div>
        <div className="teachingMethod__center">
          <div className="teachingMethod__arrow"></div>
        </div>
        <div className="teachingMethod__stage">
          <h1 className="teachingMethod__ribbon">Second stage:</h1>
          <h2 className="teachingMethod__subtitle--second">
            Practise to overcome your weaknesses and learn to correct yourself.
          </h2>
          <div className="teachingMethod__list-wrapper">
            <div className="teachingMethod__decoration--left"></div>

            <ul className="teachingMethod__list">
              <li>
                We aim to help you{" "}
                <strong>reduce your reliance on teachers</strong> at this stage.
              </li>
              <li>
                <strong>Practise speaking</strong> around a topic in every
                lesson.
              </li>
              <li>
                We not only{" "}
                <strong>
                  pinpoint your pronunciation and grammatical mistakes
                </strong>
                , but also help you understand how to{" "}
                <strong>correct them by yourself</strong>.
              </li>
              <li>
                You can opt to <strong>do writing</strong> after each lesson and
                email it to us for marking. We will help you correct mistakes by
                yourself in the following lesson.
              </li>
              <li>
                You can learn to <strong>speak colloquially</strong> in a social
                situation such as chatting with your friends, colleagues or
                strangers.
              </li>
              <li>
                We <strong>do revision on your weaknesses</strong> in every
                following lesson to improve your pronunciation and memory of
                words/phrases. On that note, we strongly suggest you spend some
                time revisiting the difficult areas after every lesson so as to
                take full advantage of our lessons.
              </li>
              <li>
                <strong>1-to-1</strong> or <strong>2-to-1 lessons</strong>, 1.5
                hours for each lesson.
              </li>
            </ul>
            <div className="teachingMethod__decoration--right"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeachingMethod;
