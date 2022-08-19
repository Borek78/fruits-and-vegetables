import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
import { sleep } from "../../functions/sleep";

//images
import garlic from "../../images/garlic.jpg";
import onion from "../../images/onion100.png";
import carrot from "../../images/carrot145.png";
import apple from "../../images/apple190.png";
import peach from "..//../images/peach800-2.jpg";
import Header from "./HeaderProducts";

import right from "../../images/arrow-right-circle-fill.svg";
import smile from "../../images/emoji-smile-fill.svg";
import x from "../../images/x-circle-fill.svg";

const FRUTIS_VEGETABLES = [
  {
    id: 1,
    name: "Garlic",
    imgURL: garlic,
    price: 9,
  },

  {
    id: 2,
    name: "Onion",
    imgURL: onion,
    price: 3,
  },

  {
    id: 3,
    name: "Carrot",
    imgURL: carrot,
    price: 4,
  },

  {
    id: 4,
    name: "Apple",
    imgURL: apple,
    price: 5,
  },

  {
    id: 5,
    name: "Peach",
    imgURL: peach,
    price: 7,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  let total = 0;
  const showCart = useSelector((state) => state.cart.showCart);
  let itemsListS = useSelector((state) => state.cart.itemsList);
  console.log(itemsListS);

  // Place store value to a local state
  const [itemsList, setItemsList] = useState(itemsListS);
  console.log(itemsList);

  useEffect(() => {
    setItemsList(itemsListS);
  }, [itemsListS]);

  //on first render
  useEffect(() => {
    if (localStorage.getItem("itemsList") !== null) {
      const lsItemsList = JSON.parse(localStorage.getItem("itemsList"));
      console.log(lsItemsList);
      setItemsList(lsItemsList);
      dispatch(cartActions.updateItemsList(lsItemsList));
    }
  }, []);

  //when itemsList changes
  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList, dispatch]);

  //calculate the sum of prices

  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  function hideCart() {
    const buttonCart = document.querySelector(".button");
    dispatch(cartActions.setShowCart(false));

    buttonCart.innerHTML = "Show Cart";
    buttonCart.classList.remove("hide-cart");
  }

  async function noChoice(e) {
    console.log("no");
    const itemsListLength = Object.keys(itemsList).length;

    if (itemsListLength === 0) {
      e.preventDefault();
      const x = document.querySelector(".products .alert");
      x.classList.add("alert-show");
    }
  }

  function handleCloseSvgClick() {
    const closeSvg = document.querySelector(".products .alert");

    closeSvg.classList.remove("alert-show");
  }

  return (
    <div className="products">
      <Header />
      <ul className="products-container">
        {FRUTIS_VEGETABLES.map((product, index) => {
          return (
            <li key={index}>
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                imgURL={product.imgURL}
              />
            </li>
          );
        })}
      </ul>

      {showCart && <CartItems />}

      <div className="alert-wrapper">
        <div className="alert">
          <img
            src={x}
            alt="close-svg"
            onClick={handleCloseSvgClick}
            className="close-svg"
          />

          <div className="make-your-choice">
            <div className="text-center">Your cart is empty. </div>
            <div>Pick at least one item.</div>
          </div>
        </div>
      </div>

      <div className="total-price-and-order-button">
        <h3 className="total-price">Total: ${total}</h3>
        <Link
          to={`/address`}
          onClick={(e) => {
            noChoice(e);
            hideCart();
          }}
          className="link-right-arrow"
        >
          <img src={right} alt="" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
