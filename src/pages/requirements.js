import React from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";

const Requirements = () => {
  return (
    <Layout>
      <Head title="requirements" />
      <div className="requirements__content">
        <h1 className="requirements__title">Requirements</h1>
        <ul className="requirements__list">
          <li className="requirements__item">
            Classes are open to anyone <strong>aged 10 or above</strong>.
          </li>
          <li className="requirements__item">
            <strong>Good understanding of instructions in English</strong>,
            preferably lower intermediate level or above.
          </li>
          <li className="requirements__item">
            <strong>For online lessons, you will be using:</strong>
          </li>
          <ul className="requirements__sublist">
            <li>Google Document/Tencent Docs</li>
            <li>Skype/Wechat (one-to-one lesssons)</li>
            <li>Zoom (two-to-one/small class lesssons)</li>
          </ul>
        </ul>
      </div>
    </Layout>
  );
};

export default Requirements;
