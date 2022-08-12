import React, { useEffect, useState } from "react";
import { cartActions } from "../../store/cartSlice";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ name, price, imgURL, id }) => {
  const dispatch = useDispatch();
  const itemsListS = useSelector((state) => state.cart.itemsList);
  console.log(itemsListS);

  //place store in local useState
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(itemsListS);
  }, [itemsListS]);

  console.log(itemsList);

  //getItem from localStorage
  useEffect(() => {
    const lsItemsList = JSON.parse(localStorage.getItem("itemsList"));
    setItemsList(lsItemsList);
    dispatch(cartActions.updateItemsList(lsItemsList));
  }, []);

  //place itemsList in localStorage

  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  });

  // //import itemsList form localStorage and place it i local state
  // const itemsListS = JSON.parse(localStorage.getItem("itemsList"));
  // console.log(itemsListS);
  // const [itemsList, setItemsList] = useState([]);
  // useEffect(() => {
  //   setItemsList(itemsListS);
  // }, []);
  // console.log(itemsList);

  // //set localStorage
  // //Place the local state to localStorage
  // useEffect(() => {
  //   console.log(itemsList);
  //   localStorage.setItem("itemsList", JSON.stringify(itemsList));
  // });

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
