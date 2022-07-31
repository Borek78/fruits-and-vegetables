import React from "react";
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
            <li key={item.index}>
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

// import React from "react";
// import CartItem from "./CartItem";
// import "./Cart.css";
// import { useSelector } from "react-redux";

// const CartItems = () => {
//   const cartItems = useSelector((state) => state.cart.itemsList);
//   const showCart = useSelector((state) => state.cart.showCart);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   console.log(totalQuantity);

//   return (
//     <>
//       <div className="cart-container">
//         <ul>
//           {showCart && <h2 className="your-cart">Your Cart</h2>}
//           {totalQuantity === 0 && (
//             <p className="empty-cart">Your Cart is empty</p>
//           )}
//           {cartItems.map((item) => {
//             return (
//               <li key={item.id}>
//                 <CartItem
//                   id={item.id}
//                   price={item.price}
//                   total={item.totalPrice}
//                   name={item.name}
//                   quantity={item.quantity}
//                 />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default CartItems;
