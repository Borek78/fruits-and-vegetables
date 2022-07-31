import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { signUpActions } from "../../store/signUp-Slice";
import { useDispatch } from "react-redux";

const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();

    dispatch(
      signUpActions.signUp({ name: user.name, password: user.password })
    );

    navigate("/after-sign-up");
  };

  return (
    <div className="signup-container">
      <h2 className="h2-authorization">
        <span className="red">F</span>
        <span className="red">r</span>
        <span className="green">u</span>
        <span className="red">i</span>
        <span className="orange">t</span>
        <span className="red">s</span>

        <span className="orange"> a</span>
        <span className="red">n</span>
        <span className="green">d </span>

        <span className="green">V</span>
        <span className="green">e</span>
        <span className="orange">g</span>
        <span className="green">e</span>
        <span className="green">t</span>
        <span className="green">a</span>
        <span className="orange">b</span>
        <span className="red">l</span>
        <span className="green">e</span>
        <span className="green">s</span>
      </h2>

      <form onSubmit={signUpHandler}>
        <div className="name">
          <input
            className="input-name"
            type="text"
            name="id"
            id="id"
            placeholder="idName"
            onChange={(e) => {
              setUser({
                name: e.target.value,
                password: user.password,
                confirmPassword: user.confirmPassword,
              });
            }}
          />
          <span className="sign-up-alert">At least 8 characters please.</span>
        </div>

        <div className="password">
          <input
            className="input-password"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setUser({
                name: user.name,
                password: e.target.value,
                confirmPassword: user.confirmPassword,
              });
            }}
          />
          <span className="sign-up-alert">At least 8 characters please.</span>
          <span className="sign-up-alert display-none">
            Passwords are not identical.
          </span>
        </div>

        <div className="confirm-password">
          <input
            className="input-confirm-password"
            type="password"
            name="password"
            id="password-confirm"
            placeholder="confirm password"
            onChange={(e) => {
              setUser({
                name: user.name,
                password: user.password,
                confirmPassword: e.target.value,
              });
            }}
          />
          <span className="sign-up-alert">At least 8 characters please.</span>
          <span className="sign-up-alert display-none">
            Passwords are not identical.
          </span>
        </div>

        <button className="big-signup-btn">Sign Up</button>
        <button
          className="small-login-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;

//onClick={props.toLogin}

//type="submit"
