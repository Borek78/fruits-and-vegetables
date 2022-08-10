import cartSlice from "./cartSlice";
import deliverySlice from "./deliverySlice";

//redux-persist
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    delivery: deliverySlice.reducer,
  },
});

export default store;

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
//

//
//

//
//

// import authSlice from "./authSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//     cart: cartSlice.reducer,
//   },
// });

// export default store;
