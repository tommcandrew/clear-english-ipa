import React, { useContext } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";
import LanguageContext from "../context/LanguageContext";

const ContactUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout>
      <Head title="contact us" />
      <div className="contactUs__content">
        <h1 className="contactUs__title">
          {multiLingualText.contactUsTitle[language]}
        </h1>
        <div className="contactUs__inner">
          <h2>
            {multiLingualText.contactUsEmail[language]} farbeyondlimit@gmail.com
          </h2>
          <h2>{multiLingualText.contactUsTel[language]} (852) 9170 7930</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
