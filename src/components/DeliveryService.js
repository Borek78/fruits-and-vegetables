import Header from "./Header";
import "./DeliveryTime.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { deliveryActions } from "../store/deliverySlice";
import "./DeliveryService.css";
import { sleep } from "../functions/sleep";

//images
import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";
import smile from "../images/emoji-smile-fill.svg";

const DeliveryService = () => {
  const dispatch = useDispatch();

  //import state from store
  const deliveryServiceStore = useSelector(
    (state) => state.delivery.deliveryService
  );
  const itemsListStore = useSelector((state) => state.cart.itemsList);
  console.log(itemsListStore);

  let sumOfTotalPrice = 0;

  itemsListStore.forEach((item) => {
    sumOfTotalPrice += item.totalPrice;
  });

  console.log(sumOfTotalPrice);

  //define local state
  const [deliveryService, setDeliveryService] = useState(deliveryServiceStore);

  //on first render

  useEffect(() => {
    const lsDeliveryService = JSON.parse(
      localStorage.getItem("deliveryService")
    );
    setDeliveryService(lsDeliveryService);
  });

  //when deliveryService changes
  useEffect(() => {
    dispatch(deliveryActions.setDeliveryService(deliveryService));
    localStorage.setItem("deliveryService", JSON.stringify(deliveryService));
  }, [dispatch, deliveryService]);

  async function noChoice(e) {
    // const deliveryTimeLength = Object.keys(deliveryDay).length;

    if (deliveryService === "") {
      e.preventDefault();

      const x = document.querySelector(".please-make-a-choice");

      x.classList.add("show-alert");
      await sleep(4000);
      x.classList.remove("show-alert");
    }
  }

  return (
    <div className="delivery-service-container">
      <Header />

      <main className="delivery-service-main">
        <h2>Delivery Service</h2>
        <div className="list-of-delivery-services">
          <div key={uuidv4()} className="delivery-service-item">
            <label>
              Santa Claus - {sumOfTotalPrice <= 100 && "35$."}
              {sumOfTotalPrice > 100 && "0$."}
            </label>
            <input
              type="radio"
              name="deliveryTime"
              checked={deliveryService === "Santa Claus"}
              onChange={(e) => {
                setDeliveryService("Santa Claus");
              }}
            />
          </div>
          <div key={uuidv4()} className="delivery-service-item">
            <label>
              Santa Claus - {sumOfTotalPrice <= 100 && "35$."}
              {sumOfTotalPrice > 100 && "0$."}
            </label>
            <input
              type="radio"
              checked={deliveryService === "Local Witches"}
              name="deliveryTime"
              onChange={(e) => {
                setDeliveryService("Local Witches");
              }}
            />
          </div>
        </div>
        <div className="free-delivery-is-available">
          {sumOfTotalPrice <= 100 &&
            "*free delivery available for orders over 100$."}
          {sumOfTotalPrice > 100 &&
            "*your order is more than 100$ and you are eligible for free delivery"}
        </div>

        <div className="alert please-make-a-choice">
          <img src={smile} alt="smile-emoji" className="smile" />
          <span className="make-your-choice">Pick a service.</span>
        </div>
      </main>

      <div className="arrows">
        <Link to={`/delivery-time`}>
          <img src={left} alt="" className="left-arrow" />
        </Link>
        <Link
          to={`/summary`}
          className="link-right-arrow"
          onClick={(e) => {
            noChoice(e);
          }}
        >
          <img src={right} alt="" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default DeliveryService;
