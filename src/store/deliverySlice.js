import { createSlice, current } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",

  initialState: {
    deliveryAddress: {
      firstName: "",
      secondName: "",
      email: "",
      streetName: "",
      streetNumber: "",
      city: "",
      province: "",
      state: "",
      zipCode: "",
    },
    deliveryDay: {},
    deliveryService: "",
    deliveryTime: "",
  },

  reducers: {
    setDelivery(state, action) {
      const delivery = action.payload;

      state = delivery;
    },
    setDeliveryAddress(state, action) {
      const deliveryAddress = action.payload;
      state.deliveryAddress = deliveryAddress;
    },

    setDeliveryDate(state, action) {
      const deliveryDay = action.payload;
      state.deliveryDay = deliveryDay;
    },

    setDeliveryTime(state, action) {
      const deliveryTime = action.payload;
      state.deliveryTime = deliveryTime;
    },

    setDeliveryService(state, action) {
      const deliveryService = action.payload;
      state.deliveryService = deliveryService;
    },
  },
});

export const deliveryActions = deliverySlice.actions;

export default deliverySlice;
