import React from "react";
import { cartActions } from "../../store/cartSlice";
import "./Product.css";
import { useDispatch } from "react-redux";

const Product = ({ name, price, imgURL, id }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        name,
      })
    );
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
// import "./Product.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/cartSlice";

// const Product = ({ name, id, imgURL, price }) => {
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addToCart({
//         name,
//         id,
//         price,
//       })
//     );
//   };

//   return (
//     <div className="card">
//       <img src={imgURL} alt={name} />
//       <h2>{name}</h2>
//       <p>$ {price}</p>
//       <button onClick={addToCart}>Add to cart</button>
//     </div>
//   );
// };

// export default Product;
