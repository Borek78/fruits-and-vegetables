import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
// import "./App.css";
// import Auth from "./components/Auth";
// import Layout from "./components/Layout";
// import { useSelector } from "react-redux";

// function App() {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   console.log(isLoggedIn);

//   return (
//     <div className="App">
//       {!isLoggedIn && <Auth />}
//       {isLoggedIn && <Layout />}
//     </div>
//   );
// }

// export default App;

// const sendRequest = async () => {
//   //Sent state after Request was send
//   dispatch(
//     uiActions.showNotification({
//       open: true,
//       message: "Sending Request",
//       type: "warning",
//     })
//   );

//   //Send Request
//   const res = await fetch(
//     "https://redux-fruit-and-vegetables-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
//     { method: "PUT", body: JSON.stringify(cart) }
//   );
//   //const data = await res.json();

//   //Send state when request is Successfull
//   dispatch(
//     uiActions.showNotification({
//       open: true,
//       message: "Request send to database successfully",
//       type: "success",
//     })
//   );
// };

// sendRequest().catch(() => {
//   // Send state as Error recived
//   dispatch(
//     uiActions.showNotification({
//       open: true,
//       message: "Sending Request failed",
//       type: "error",
//     })
//   );
// });
