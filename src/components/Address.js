import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";

import Header from "./Header";
import "./Adress.css";
import { Link } from "react-router-dom";

import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";

const Address = (props) => {
  const { handleChange, handleArrowClick, address } = useForm();

  return (
    <div className="address-container">
      <Header />
      <div className="address">
        <h2>Delivery Address</h2>

        <form className="form-address">
          <div className="form-item">
            <label>First Name</label>
            <input
              className="input-first-name"
              name="firstName"
              type="text"
              onChange={handleChange}
              value={address.firstName}
            />
            <span className="error-message first-name-span"></span>
          </div>

          <div className="form-item">
            <label>Second Name</label>
            <input
              className="second-name"
              name="secondName"
              type="text"
              onChange={handleChange}
              value={address.secondName}
            />

            <span className="error-message second-name-span"></span>
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

            <span className="error-message email-span"></span>
          </div>

          <div className="form-item street">
            <div className="street-name">
              <label>Street</label>
              <input
                className="street-name-input"
                name="streetName"
                type="text"
                onChange={handleChange}
                value={address.streetName}
              />
              <span className="error-message street-name-span"></span>
            </div>

            <div className="street-number">
              <label>No</label>
              <input
                className="street-number-input"
                name="streetNumber"
                type="text"
                onChange={handleChange}
                value={address.streetNumber}
              />
              <span className="error-message street-number-span"></span>
            </div>
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
            <span className="error-message city-span"></span>
          </div>
          <div className="form-item">
            <label>Province - optional</label>
            <input
              className="full-name"
              name="province"
              type="text"
              onChange={handleChange}
              value={address.province}
            />
            <span className="error-message province-span"></span>
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
            <span className="error-message state-span"></span>
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
            <span className="error-message zip-code-span"></span>
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
            onClick={handleArrowClick}
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
