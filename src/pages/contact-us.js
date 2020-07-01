import React from "react";
import Layout from "../components/Layout";
import Head from "../components/head.js";

const ContactUs = () => {
  return (
    <Layout>
      <Head title="contact us" />
      <div className="contactUs__content">
        <h1 className="contactUs__title">Contact us</h1>
        <div className="contactUs__inner">
          <h2>Email: farbeyondlimit@gmail.com</h2>
          <h2>Tel: (852) 9170 7930</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
