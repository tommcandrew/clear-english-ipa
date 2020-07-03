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
          <div className="contactUs__form-wrapper">
            <form
              className="contactUs__form"
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" placeholder="Your name" />
              <input type="text" name="email" placeholder="Your email" />
              <textarea name="message" rows="15" placeholder="Your message" />
              <input type="submit" className="contact__send" value="SEND" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
