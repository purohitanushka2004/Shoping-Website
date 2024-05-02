import React, { useState } from "react";
import "./login.css";
import Logo from "../../Assets/samm.jpg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //some firebase login
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it will create a new user wth email and password
        if (auth) {
          history.push("/"); //if authentication is not empty will redirect you to the amazon page
        }
      })
      .catch((error) => alert(error.message));
    //some firebase login
  };

  return (
    <div className="Login">
      <Link to="/">
        <img className="Login__logo" src={Logo}
          style={{ width: '400px', height: '200px' }}
        />
      </Link>

      <div className="Login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="Login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to SAMM's conditions of use & sale.
          please see our privacy policy,our cookies notice , terms and
          conditions and Interest-based Ads Notice.
        </p>

        <button
          className="Login__registerButton"
          type="submit"
          onClick={register}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
