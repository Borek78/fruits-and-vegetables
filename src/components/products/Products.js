import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

//images
import garlic from "../../images/garlic.jpg";
import onion from "../../images/onion100.png";
import carrot from "../../images/carrot145.png";
import apple from "../../images/apple190.png";
import peach from "..//../images/peach800-2.jpg";
import Header from "./HeaderProducts";

import right from "../../images/arrow-right-circle-fill.svg";

const FRUTIS_VEGETABLES = [
  {
    id: 1,
    name: "Garlic",
    imgURL: garlic,
    price: 9,
  },

  // {
  //   id: 2,
  //   name: "Onion",
  //   imgURL: onion,
  //   price: 3,
  // },

  // {
  //   id: 3,
  //   name: "Carrot",
  //   imgURL: carrot,
  //   price: 4,
  // },

  // {
  //   id: 4,
  //   name: "Apple",
  //   imgURL: apple,
  //   price: 5,
  // },

  // {
  //   id: 5,
  //   name: "Peach",
  //   imgURL: peach,
  //   price: 7,
  // },
];

const Products = () => {
  const dispatch = useDispatch();
  let total = 0;
  const showCart = useSelector((state) => state.cart.showCart);
  let itemsListS = useSelector((state) => state.cart.itemsList);

  console.log("I am in products");
  console.log(itemsListS);

  // Place store value to a local state
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(itemsListS);
  }, [itemsListS]);

  //get itemsList from local storage and set it to local ItemsList
  // const lsItemsList = JSON.parse(localStorage.getItem("itemsList"));

  // useEffect(() => {
  //   setItemsList(lsItemsList);
  //   dispatch(cartActions.updateItemsList(lsItemsList));
  // }, []);

  //calculate the sum of prices

  itemsListS.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(total);

  return (
    <div>
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
      <div className="total-price-and-order-button">
        <h3 className="total-price">Total: ${total}</h3>

        <Link to={`/address`} className="link-right-arrow">
          <img src={right} alt="" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Products;

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

// const Products = () => {
//   return (
//     <div>
//       <ul className="products-container">
//         {FRUTIS_VEGETABLES.map((product, index) => (
//           <li key={index}>
//             <Product
//               id={product.id}
//               name={product.name}
//               imgURL={product.imgURL}
//               price={product.price}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;
