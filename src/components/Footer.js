import React from "react";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <ul className="footer__nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/teaching-method">Teaching Method</a>
        </li>
        <li>
          <a href="/requirements">Requirements</a>
        </li>
        <li>
          <a href="/tuition-fees">Tuition Fees</a>
        </li>
        <li>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </li>
        <li>
          <a href="/common-mistakes">Common Mistakes</a>
        </li>
        <li>
          <a href="/about-the-teacher">About the teacher</a>
        </li>
        <li>
          <a href="/contact-us">Contact us</a>
        </li>
      </ul>
      <div className="footer__contact">
        <div className="footer__email">Email: farbeyondlimit@gmail.com</div>
        <div className="footer__phone">Tel: (852) 9170 7930</div>
      </div>
    </div>
  );
};

export default Footer;
