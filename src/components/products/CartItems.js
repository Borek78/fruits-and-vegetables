import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.itemsList);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cart-container">
      {showCart && <h2 className="your-cart">Your Cart</h2>}
      {totalQuantity === 0 && <p className="empty-cart">Your Cart is Empty</p>}

      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                name={item.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
