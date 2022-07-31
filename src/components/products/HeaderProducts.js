import React from "react";
import Cart from "./Cart";
import "./HeaderProducts.css";

const HeaderProducts = () => {
  return (
    <header>
      <nav className="header-products-container">
        <ul className="header-products-ul">
          <li className="header-products-title">
            <h2 className="header-products-h2">
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

          <li className="cart">
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderProducts;
