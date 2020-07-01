import React from "react";

const MobileMenu = ({ mobileMenuIsOpen }) => {
  return (
    <ul
      className={`mobileMenu__wrapper ${
        mobileMenuIsOpen ? "mobileMenu__wrapper--show" : ""
      }`}
    >
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
  );
};

export default MobileMenu;
