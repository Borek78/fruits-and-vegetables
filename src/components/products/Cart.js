import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  console.log(quantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div onClick={toggleCart} className="cartIcon">
      <button className="cart-button">Cart: {quantity} Items</button>
    </div>
  );
};

export default Cart;
