import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";
import multiLingualText from "../assets/multiLingualText";

const ContactUs = (props) => {
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
          <div className="contactUs__form-wrapper">
            <form
              className="contactUs__form"
              name="contact"
              method="POST"
              data-netlify="true"
              action={language === "en" ? `/success` : `/${language}/success`}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                placeholder={multiLingualText.contactUsYourName[language]}
              />
              <input
                type="text"
                name="email"
                placeholder={multiLingualText.contactUsYourEmail[language]}
              />
              <textarea
                name="message"
                rows="15"
                placeholder={multiLingualText.contactUsYourMessage[language]}
              />
              <input
                type="submit"
                className="contact__send"
                value={multiLingualText.contactUsSend[language]}
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
