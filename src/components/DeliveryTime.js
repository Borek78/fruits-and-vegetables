import Header from "./Header";
import "./DeliveryTime.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dayTimesArr } from "../functions/dayTimesArr";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { deliveryActions } from "../store/deliverySlice";
import { sleep } from "../functions/sleep";

//images
import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";
import smile from "../images/emoji-smile-fill.svg";

const DeliveryTime = () => {
  const dispatch = useDispatch();

  //import states from store
  const deliveryTimeStore = useSelector((state) => state.delivery.deliveryTime);
  const deliveryDayStore = useSelector((state) => state.delivery.deliveryDay);

  //define local states
  const [deliveryTime, setDeliveryTime] = useState(deliveryTimeStore);
  const [deliveryDay, setDeliveryDay] = useState(deliveryDayStore);
  console.log(deliveryTime);

  //on first render
  useEffect(() => {
    if (localStorage.getItem("deliveryDay") !== null) {
      const lsDeliveryDay = JSON.parse(localStorage.getItem("deliveryDay"));
      console.log(lsDeliveryDay);
      setDeliveryDay(lsDeliveryDay);
    }

    const lsDeliveryTime = JSON.parse(localStorage.getItem("deliveryTime"));
    setDeliveryTime(lsDeliveryTime);
  }, []);

  //when deliveryTime changes
  useEffect(() => {
    dispatch(deliveryActions.setDeliveryTime(deliveryTime));
    localStorage.setItem("deliveryTime", JSON.stringify(deliveryTime));
  }, [deliveryTime, dispatch]);

  async function noChoice(e) {
    const deliveryTimeLength = Object.keys(deliveryDay).length;
    console.log(deliveryTimeLength);
    if (deliveryTime === null) {
      e.preventDefault();
      console.log("vyber time");
      const x = document.querySelector(".please-make-a-choice");

      x.classList.add("show-alert");
      await sleep(4000);
      x.classList.remove("show-alert");
    }
  }

  useEffect(() => {
    dispatch(deliveryActions.setDeliveryTime(deliveryTime));
  }, [dispatch, deliveryTime]);

  const deliveryTimesItems = dayTimesArr.map((dayTimesArrItem) => {
    return (
      <div key={uuidv4()} className="delivery-time-item">
        <label>{dayTimesArrItem}</label>

        <input
          type="radio"
          name="deliveryTime"
          checked={deliveryTime === dayTimesArrItem}
          onChange={(e) => {
            setDeliveryTime(dayTimesArrItem);
          }}
        />
      </div>
    );
  });

  return (
    <div className="delivery-time-container">
      <Header />

      <main className="delivery-time">
        <h2>Delivery Time</h2>
        <div className="delivery-time-item delivery-date">
          <div className="delivery-day">
            {deliveryDay.weekDay + " " + deliveryDay.date}
          </div>
        </div>
        <div className="list-of-delivery-time-items"> {deliveryTimesItems}</div>
        <div className="alert please-make-a-choice">
          <img src={smile} alt="smile-emoji" className="smile" />
          <span className="make-your-choice">Pick a time.</span>
        </div>
      </main>

      <div className="arrows">
        <Link to={`/delivery-day`}>
          <img src={left} alt="" className="left-arrow" />
        </Link>
        <Link
          onClick={(e) => {
            noChoice(e);
          }}
          to={`/delivery-service`}
          className="link-right-arrow"
        >
          <img src={right} alt="" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default DeliveryTime;
