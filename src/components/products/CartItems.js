import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();

  //import store states
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.itemsList);

  // Place store value to a local state
  const [itemsList, setItemsList] = useState(cartItems);
  console.log(itemsList);

  const length = itemsList.length;
  console.log(length);

  //on first render, get the localStorage and place it in local state

  useEffect(() => {
    const lsItemsList = JSON.parse(localStorage.getItem("itemsList"));
    setItemsList(lsItemsList);
    // dispatch(cartActions.updateItemsList(lsItemsList));
  }, []);

  //when itemsList changes
  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <div className="cart-container">
      {showCart && <h2 className="your-cart">Your Cart</h2>}
      {length === 0 && <p className="empty-cart">Your Cart is Empty</p>}

      <ul>
        {itemsList.map((item) => {
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
