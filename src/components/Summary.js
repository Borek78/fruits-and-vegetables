import Header from "./Header";
import { Link } from "react-router-dom";
import "./Summary.css";
import "./Summary-responsive.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

//images
import left from "../images/arrow-left-circle-fill.svg";

const Summary = () => {
  //set local itemsList
  const [itemsList, setItemsList] = useState([]);
  const [address, setAddress] = useState([]);
  const [deliveryDay, setDeliveryDay] = useState({});
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryService, setDeliveryService] = useState("");

  console.log(itemsList);
  console.log(address);
  console.log(deliveryDay);
  console.log(deliveryTime);
  console.log(deliveryService);

  //set local deliveryService

  //on first render
  useEffect(() => {
    const lsItemsList = JSON.parse(localStorage.getItem("itemsList"));
    const lsAddress = JSON.parse(localStorage.getItem("address"));
    const lsDeliveryDay = JSON.parse(localStorage.getItem("deliveryDay"));
    const lsDeliveryTime = JSON.parse(localStorage.getItem("deliveryTime"));
    const lsDeliveryService = JSON.parse(
      localStorage.getItem("deliveryService")
    );

    setItemsList(lsItemsList);
    setAddress(lsAddress);
    setDeliveryDay(lsDeliveryDay);
    setDeliveryTime(lsDeliveryTime);
    setDeliveryService(lsDeliveryService);
  }, []);

  //count subTotal + deliveryCosts
  let subTotal = 0;
  itemsList.forEach((item) => {
    subTotal += item.totalPrice;
  });

  const deliveryCosts = (subTotal) => {
    if (subTotal > 100) {
      return 0;
    } else {
      return 35;
    }
  };

  console.log(deliveryCosts());

  // delete province <div> if no province
  useEffect(() => {
    console.log(address.province);

    if (address.province === "") {
      const prov = document.querySelector(".province");
      prov.classList.add("display-none");
    }
  });

  const cartItems = itemsList.map((cartItem, index) => {
    return (
      <div key={index} className="cart-table-row">
        <div>
          <div>{index + 1}</div>
        </div>
        <div>
          <div>{cartItem.name}</div>
        </div>
        <div>
          <div>{cartItem.price}</div>
        </div>
        <div>
          <div>{cartItem.quantity}</div>
        </div>
        <div>
          <div>{cartItem.totalPrice}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <main className="summary">
        <h1>Summary of your order</h1>

        <div className="address-and-time">
          {/* Delivery Time*/}
          <div className="delivery-time">
            <div className="delivery-time-heading">Delivery Time</div>
            <div>{deliveryDay.date + " " + deliveryDay.weekDay}</div>
            <div>{deliveryTime}</div>
          </div>

          {/* Address*/}
          <div className="delivery-address">
            <div className="heading-delivery-address">Delivery Address</div>
            <div>
              {address.firstName} {address.secondName}
            </div>
            <div>
              {address.streetName} {address.streetNumber}
            </div>
            <div>{address.city}</div>
            <div className="province">{address.province}</div>
            <div>{address.state}</div>
            <div>{address.zipCode}</div>
          </div>
        </div>

        {/* Table Cart*/}

        <div className="cart-table">
          <div className="cart-table-cart-heading">
            <div className=""> Cart</div>
          </div>
          <div className="cart-table-header">
            <div className="cart-wrapper">
              <div className="cart"></div>
            </div>
            <div>
              <div>Name</div>
            </div>
            <div>
              <div>Price</div>
            </div>
            <div>
              <div>Qty</div>
            </div>
            <div>
              <div>Sum</div>
            </div>
          </div>
          {cartItems}
        </div>
        {/* /*subTotal table */}
        <div className="sub-total">
          <div className="white"></div>
          <div className="white"></div>
          <div className="white"></div>
          <div className="the-last-two">
            <div>
              <div>
                <div className="cart-total">Cart:</div>
              </div>
            </div>
            <div>
              <div>{subTotal}$</div>
            </div>
          </div>
        </div>

        {/* Order total*/}
        <div className="order-total">
          <div>
            <div>Cart</div>
          </div>

          <div>
            <div>{subTotal}$</div>
          </div>

          <div>
            <div> Delivery service: {deliveryService}</div>
          </div>

          <div>
            <div>{deliveryCosts()}$</div>
          </div>

          <div className="strong">
            <div>Order Total</div>
          </div>
          <div className="strong">
            <div>{subTotal + deliveryCosts()}$</div>
          </div>
        </div>

        {/*Arrows */}
        <div className="arrows">
          <Link to={`/delivery-service`}>
            <img src={left} alt="" className="left-arrow" />
          </Link>
          <Link to={`/summary`} className="link-right-arrow">
            <button>Place order</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Summary;
