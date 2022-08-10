import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const toProducts = () => {
    navigate("/");
  };

  return (
    <header>
      <nav className="header-container">
        <ul className="header-ul">
          <li className="title">
            <h2 className="header-h2">
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
          </li>
          <li className="li-button">
            <button onClick={toProducts} className="back-to-products">
              Back to Products
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
