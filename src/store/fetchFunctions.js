// import { cartActions } from "./cartSlice";
// import { api } from "../functions/axios";
// import { sleep } from "../functions/sleep";

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchHandler = async () => {
//       const res = api.get("/cart/");
//       const data = await res.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchHandler();
//       dispatch(cartActions.replaceData(cartData));
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Sending Request to Fetch Data Failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     //Info - request was send
//     dispatch(
//       uiActions.showNotification({
//         open: true,
//         message: "Sending Request",
//         type: "warning",
//       })
//     );

//     await sleep(1000);

//     // Do - send request
//     const sendRequest = async () => {
//       await api.put(`/cart/`, cart);

//       // await fetch(
//       //   "http://localhost:3006/cart",
//       //   //"https://redux-fruit-and-vegetables-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
//       //   { method: "PUT", body: cart }
//       // );

//       //Info - request was successfull
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Request send to database successfully",
//           type: "success",
//         })
//       );
//     };

//     // Info - request was error
//     try {
//       await sendRequest();
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Sending Request failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };
