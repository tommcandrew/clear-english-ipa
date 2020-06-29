import React from "react";
import Layout from "../components/layout";
import Head from "../components/head.js";

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className="notFound__wrapper">
        <h1>Page not found.</h1>
      </div>
    </Layout>
  );
};

export default NotFound;
