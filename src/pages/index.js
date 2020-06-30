import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="index__content">
        <h1 className="index__title">
          We are excellent at teaching adults and young learners (aged 10+):
        </h1>
        <ul>
          <li className="index__item">
            <span className="index__number">1/</span>
            <p>
              to <strong>remove</strong> their <strong>accent</strong>,
              especially if they are from <strong>Asia</strong>.
            </p>
          </li>
          <li className="index__item">
            <span className="index__number">2/</span>
            <p>
              to <strong>correct</strong> their{" "}
              <strong>pronunciation mistakes</strong>.
            </p>
          </li>
          <li className="index__item">
            <span className="index__number">3/</span>
            <p>
              to know the <strong>tricks</strong> to using the{" "}
              <strong>International Phonetic Alphabet (IPA)</strong>.
            </p>
          </li>
          <li className="index__item">
            <span className="index__number">4/</span>
            <p>
              to <strong>write</strong> with <strong>good grammar</strong>,{" "}
              <strong>broad vocabulary</strong> and{" "}
              <strong>effective organisation</strong>.
            </p>
          </li>
          <li className="index__item">
            <span className="index__number">5/</span>
            <p>
              to understand their mistakes with{" "}
              <strong>thorough explanations</strong>.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
