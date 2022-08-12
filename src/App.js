import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

//Pages
import Products from "./components/products/Products";
import Address from "./components/Address";
import DeliveryDay from "./components/DeliveryDay";
import DeliveryTime from "./components/DeliveryTime";
import DeliveryService from "./components/DeliveryService";
import Summary from "./components/Summary";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/address" element={<Address />} />
          <Route path="/delivery-day" element={<DeliveryDay />} />
          <Route path="/delivery-time" element={<DeliveryTime />} />
          <Route path="/delivery-service" element={<DeliveryService />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
