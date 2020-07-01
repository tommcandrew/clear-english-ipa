import React from "react";
import GoTrue from "gotrue-js";

// Instantiate the GoTrue auth client with an optional configuration

const auth = new GoTrue({
  APIUrl: "https://optimistic-euler-d70bf7.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const password2 = e.target.password2.value;
  if (password === password2) {
    auth
      .signup(email, password)
      .then((response) => console.log("Confirmation email sent", response))
      .catch((error) => console.log("It's an error", error));
  }
};

const Register = () => {
  return (
    <div className="register__wrapper">
      <form className="register__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="password2">Confirm password:</label>
          <input type="password" id="password2" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
