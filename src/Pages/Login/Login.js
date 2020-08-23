import React, { useState } from "react";
import "./Login.css";
import hb from "./hb.jpg";
import authentication from "./authentication.svg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../../fireauth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...

        history.push("/restaurant");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in, redirect to homepage...
        history.push("/restaurant");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login_body">
        <Link to="/">
          <img className="login__logo" src={hb} alt="" />
        </Link>
        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to Hunger Bounce Conditions of Use and
            Privacy Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Hunger Bounce Account
          </button>
        </div>
      </div>
      <img src={authentication} className="authentication" />
    </div>
  );
}

export default Login;
