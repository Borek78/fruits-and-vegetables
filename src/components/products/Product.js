import React, { useEffect, useState } from "react";
import { cartActions } from "../../store/cartSlice";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ name, price, imgURL, id }) => {
  const dispatch = useDispatch();

  function handleCloseSvgClick() {
    console.log("I am in handleCloseSvgClick");
    const closeSvg = document.querySelector(".products .alert");
    console.log(closeSvg);

    closeSvg.classList.remove("alert-show");
  }

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        name,
      })
    );
    handleCloseSvgClick();
  };

  return (
    <div className="card">
      <img src={imgURL} alt="imgURL"></img>
      <h2>{name}</h2>
      <h2>${price}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
