import { createSlice, current } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",

  initialState: {
    deliveryAddress: {},
    deliveryDay: {},
    deliveryService: "",
    deliveryTime: "",
  },

  reducers: {
    setDeliveryAddress(state, action) {
      const deliveryAddress = action.payload;
      state.deliveryAddress = deliveryAddress;
      console.log(current(state));
    },

    setDeliveryDate(state, action) {
      const deliveryDay = action.payload;
      state.deliveryDay = deliveryDay;
    },

    setDeliveryTime(state, action) {
      const deliveryTime = action.payload;
      state.deliveryTime = deliveryTime;
      console.log(current(state));
    },

    setDeliveryService(state, action) {
      const deliveryService = action.payload;
      console.log(deliveryService);

      state.deliveryService = deliveryService;
      console.log(state.deliveryService);
    },
  },
});

export const deliveryActions = deliverySlice.actions;

export default deliverySlice;
