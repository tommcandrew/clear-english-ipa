import React from "react";
import Layout from "../components/Layout";
import kitty from "../assets/KittyLamCropped.jpg";

const AboutTheTeacher = () => {
  return (
    <Layout>
      <div className="aboutTheTeacher__content">
        <h1 className="aboutTheTeacher__title">About the teacher</h1>
        <div className="aboutTheTeacher__inner">
          <img
            src={kitty}
            alt="the teacher - Kitty Lam"
            className="aboutTheTeacher__kitty"
          />
          <div className="aboutTheTeacher__text">
            <p>Hi everybody,</p>
            <p>
              I’m a CELTA-qualified teacher, who was born and raised in Hong
              Kong. I went to a local school in Hong Kong when I was young. You
              might wonder how I could remove my very strong Hong Kong accent as
              an adult and can now really speak like a native English speaker.
            </p>
            <p>
              A few years ago, I realised that I spoke English with a very heavy
              Hong Kong accent and couldn’t express myself in English well. So I
              decided to learn how to speak like a native English speaker. It
              was so difficult to find a good teacher. I’ve learned from more
              than 60 native speaking teachers in Hong Kong. When I asked them
              to teach me how to remove my very thick Hong Kong accent, almost
              all of them told me it was impossible because I was an adult. It
              was quite discouraging, but I ignored their comments and pressed
              on. I finally found my way and did it successfully.
            </p>
            <p>
              I think native speaking teachers can spot our mistakes instantly
              when we mispronounce words or when we have a very strong accent.
              They usually ask us to look at how they move their mouth and
              repeat after them. However, we can only see how they move their
              lips, but can’t tell how they move their tongue or which mouth
              muscles they’re using. Very often, the corrections are hopeless.
            </p>
            <p>
              We all have our mother tongue and use a different set of mouth
              muscles to those of English speakers. Native English teachers
              don’t understand how we move our mouth and so can’t pin down our
              problems exactly. After years of hard work, I eventually found the
              tricks to removing accents and correcting mispronunciation. If you
              have the same feelings as me, I think I can help you. You can
              email me and let’s find a suitable time to meet each other over
              the internet. You can tell me what you want help with and see if I
              can be of any assistance.
            </p>
            <p>
              Apart from teaching English learners to remove their accent and
              improve their British pronunciation, I’m also excellent at grammar
              and writing. I believe I can help you express yourself easily and
              make yourself understood. Thank you very much for visiting my
              website.
            </p>
            <p>Kitty Lam, CELTA</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutTheTeacher;
