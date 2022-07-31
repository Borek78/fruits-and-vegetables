import React, { useState, useEffect } from "react";
import { ValidateAddress } from "../functions/ValidateAddress";
import { deliveryActions } from "../store/deliverySlice";
import { useDispatch } from "react-redux";

import Header from "./Header";
import "./Adress.css";
import { Link } from "react-router-dom";

import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";

const Address = (props) => {
  const dispatch = useDispatch();
  //prettier-ignore
  const initialValues = { firstName: "", secondName: "", email: "",
    street: "", city: "", province: "", state: "", zipCode: "",
  };
  const [address, setAddress] = useState(initialValues);

  function validateForm(e) {
    if (ValidateAddress()) {
      e.preventDefault();
    }
  }

  console.log(ValidateAddress);

  useEffect(() => {
    dispatch(deliveryActions.setDeliveryAddress(address));
  }, [dispatch, address]);

  function handleChange(e) {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name + " " + value);
    setAddress({ ...address, [name]: value });
  }

  return (
    <div className="address-container">
      <Header />
      <div className="address">
        <h2>Delivery Address</h2>

        <form className="form-address">
          <div className="form-item">
            <label>First Name</label>
            <input
              className="full-name"
              name="firstName"
              type="text"
              onChange={handleChange}
              value={address.firstName}
            />
            <span className="error-message">Empty field.</span>
          </div>

          <div className="form-item">
            <label>Second Name</label>
            <input
              className="full-name"
              name="secondName"
              type="text"
              onChange={handleChange}
              value={address.secondName}
            />
          </div>

          <div className="form-item">
            <label>Email</label>
            <input
              className="email"
              name="email"
              type="text"
              onChange={handleChange}
              value={address.email}
            />
          </div>

          <div className="form-item">
            <label>Street address</label>
            <input
              className="full-name"
              name="street"
              type="text"
              onChange={handleChange}
              value={address.street}
            />
          </div>
          <div className="form-item">
            <label>City</label>
            <input
              className="full-name"
              name="city"
              type="text"
              onChange={handleChange}
              value={address.city}
            />
          </div>
          <div className="form-item">
            <label>Province</label>
            <input
              className="full-name"
              name="province"
              type="text"
              onChange={handleChange}
              value={address.province}
            />
          </div>
          <div className="form-item">
            <label>State</label>
            <input
              className="full-name"
              name="state"
              type="text"
              onChange={handleChange}
              value={address.state}
            />
          </div>
          <div className="form-item">
            <label>Zip Code</label>
            <input
              className="full-name"
              name="zipCode"
              type="text"
              onChange={handleChange}
              value={address.zipCode}
            />
          </div>
        </form>
      </div>
      <div className="arrows-grid">
        <div className="arrows-child-left">
          <Link to={`/`} className="link-left-arrow">
            <img src={left} alt="" className="left-arrow" />
          </Link>
        </div>
        <div className="arrows-child-right">
          <Link
            onClick={(e) => {
              validateForm(e);
            }}
            to={`/delivery-day`}
            className="link-right-arrow"
          >
            <img src={right} alt="" className="right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Address;
