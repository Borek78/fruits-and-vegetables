import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
import { api } from "../functions/apiFunc";
import { sleep } from "../functions/sleep";

export const signUpFunction = (cart) => {
  return async (dispatch) => {
    //Info - request was send
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    await sleep(1000);

    // Do - send request
    const sendRequest = async () => {
      await api.put(`/cart/`, cart);

      // await fetch(
      //   "http://localhost:3006/cart",
      //   //"https://redux-fruit-and-vegetables-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
      //   { method: "PUT", body: cart }
      // );

      //Info - request was successfull
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request send to database successfully",
          type: "success",
        })
      );
    };

    // Info - request was error
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};
