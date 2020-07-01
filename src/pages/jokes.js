import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Jokes = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios
      .get("/.netlify/functions/getJoke")
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <h1>Jokes</h1>
      <div className="jokes__content">{joke && <p>{joke}</p>}</div>
    </Layout>
  );
};

export default Jokes;
