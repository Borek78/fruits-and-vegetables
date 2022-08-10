import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deliveryActions } from "./store/deliverySlice";

//Pages
import Address from "./components/Address";

const App = () => {
  const dispatch = useDispatch();

  console.log("I am in App.js");

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("shop"));
    const deliveryAddress = storedState.delivery.deliveryAddress;
    dispatch(deliveryActions.setDeliveryAddress(deliveryAddress));
    console.log("I am in useEffect in App.js");
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Address />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
