import React, { useEffect, useId } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("");

  const login = (e) => {
    //e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="login-container">
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

      <form id="borek" className="form" autocomplete="off">
        <input
          className="input-name"
          type="text"
          name="id"
          id="id"
          placeholder="Name"
        />

        <input
          className="input-password"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button className="login-btn" type="submit" onClick={login}>
          Login
        </button>
        <button
          className="signup-btn"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
