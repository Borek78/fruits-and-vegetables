import Header from "./Header";
import "./DeliveryDay.css";
import { Link } from "react-router-dom";
import { arrDates } from "../functions/generateDates";
import { v4 as uuidv4 } from "uuid";
import { sleep } from "../functions/sleep";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deliveryActions } from "../store/deliverySlice";

//images
import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";
import smile from "../images/emoji-smile-fill.svg";

const DeliveryDay = () => {
  const dispatch = useDispatch();

  const [deliveryDay, setDeliveryDay] = useState({});
  console.log(deliveryDay);

  //get delivery date from localStorage
  useEffect(() => {
    if (localStorage.getItem("deliveryDay") !== null) {
      const lsParse = JSON.parse(localStorage.getItem("deliveryDay"));
      setDeliveryDay(lsParse);
    }
  }, []);

  // set deliveryDate to localStorage
  useEffect(() => {
    localStorage.setItem("deliveryDay", JSON.stringify(deliveryDay));
  }, [deliveryDay]);

  // dispatch delivery date to store
  useEffect(() => {
    dispatch(deliveryActions.setDeliveryDay(deliveryDay));
  }, [dispatch, deliveryDay]);

  async function noChoice(e) {
    console.log("sraz");
    const deliveryDayLength = Object.keys(deliveryDay).length;
    console.log(deliveryDayLength);

    if (deliveryDayLength === 0) {
      e.preventDefault();
      const x = document.querySelector(".please-make-a-choice");

      x.classList.add("alert-hidden");
      await sleep(4000);
      x.classList.remove("alert-hidden");
    }
  }

  const deliveryTimes = arrDates.map((arrDate) => {
    return (
      <div key={uuidv4()} className={"delivery-day-item " + arrDate.class}>
        <label>{arrDate.weekDay + " " + arrDate.date}</label>
        <input
          type="radio"
          name="button"
          value={arrDate.date}
          checked={arrDate.date === deliveryDay.date}
          onChange={(e) => {
            setDeliveryDay(arrDate);
          }}
        />
      </div>
    );
  });

  return (
    <div className="delivery-day-container">
      <Header />

      <div className="delivery-day">
        <h2>Delivery Day</h2>

        <div className="list-of-delivery-day-items">{deliveryTimes}</div>
      </div>

      <div className="alert please-make-a-choice">
        <img src={smile} alt="smile-emoji" className="smile" />
        <span className="make-your-choice">Pick a day.</span>
      </div>

      <div className="arrows">
        <Link
          to={`/address`}
          onClick={() => {
            noChoice();
          }}
        >
          <img src={left} alt="" className="left-arrow" />
        </Link>
        <Link
          to={`/delivery-time`}
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

export default DeliveryDay;
