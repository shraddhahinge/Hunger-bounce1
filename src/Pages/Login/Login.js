import React, { useState } from "react";
import "./Login.css";
import hb from "./hb.jpg";
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
    <div className="login__body">
      <div className="login__content">
        <div className="first__half">
          <div className="content__text">
            <h2>One of us?</h2>
            <p>
              If you already have an account, just sign in. We've missed you!💖
            </p>
          </div>
          <div className="content__form">
            <h2>Sign In</h2>
            <form>
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button onClick={login} className="form__submit" type="button">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <Link to="/restaurant">
          <img src={hb} alt="" className="login__logo" />
        </Link>

        <div className="second__half">
          <div className="content__text">
            <h2>New here?</h2>
            <p>
              Sign up and discover your favourite cuisines, dishes and
              restaurants🥂
            </p>
          </div>
          <div className="content__form2">
            <h2>Sign Up</h2>
            <form>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                <span>Generate Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button onClick={register} className="form__submit" type="button">
                Create your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
