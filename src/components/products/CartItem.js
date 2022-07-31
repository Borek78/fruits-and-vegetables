import React from "react";
import "./Cart.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ name, id, price, totalPrice, quantity }) => {
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        price,
        id,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cartItem">
      <p>{name}</p>
      <p>${price}</p>
      <p>x{quantity}</p>
      <article>Total ${totalPrice}</article>
      <button
        className="cart-actions cartItem-dencrement"
        onClick={decrementItem}
      >
        -
      </button>
      <button
        className="cart-actions cartItem-increment"
        onClick={incrementItem}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;

//

//

//
//
//
//
//
//
//
//

//

//
//

//

//
//
//
//

// import React from "react";
// import { useDispatch } from "react-redux";
// import "./Cart.css";
// import { cartActions } from "./../store/cartSlice";

// const CartItem = ({ name, quantity, total, price, id }) => {
//   const dispatch = useDispatch();

//   const decrementItem = () => {
//     dispatch(cartActions.removeFromCart(id));
//   };

//   const incrementItem = () => {
//     dispatch(
//       cartActions.addToCart({
//         id,
//         price,
//         name,
//       })
//     );
//   };
//   return (
//     <div className="cartItem">
//       <p> {name}</p>
//       <p>${price}</p>
//       <p> x{quantity}</p>
//       <article>Total ${total}</article>
//       <button
//         className="cart-actions cartItem-decrement"
//         onClick={decrementItem}
//       >
//         -
//       </button>
//       <button
//         className="cart-actions cartItem-increment"
//         onClick={incrementItem}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default CartItem;
