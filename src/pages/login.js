import React from "react";
import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://optimistic-euler-d70bf7.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  auth
    .login(email.value, password.value, true)
    .then((response) => {
      console.log("Success! Response: " + JSON.stringify({ response }));
    })
    .catch((error) => console.log("Failed :( " + JSON.stringify(error)));
};

const Login = () => {
  return (
    <div className="login__wrapper">
      <form className="login__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
