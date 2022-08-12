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
    deliveryDate: "",
  },

  reducers: {
    setDeliveryDay(state, action) {
      const deliveryDay = action.payload;
      state.deliveryDay = deliveryDay;
    },
    setDeliveryAddress(state, action) {
      const deliveryAddress = action.payload;
      state.deliveryAddress = deliveryAddress;
    },

    setDeliveryDate(state, action) {
      const deliveryDate = action.payload;
      state.deliveryDate = deliveryDate;
    },

    setDeliveryTime(state, action) {
      const deliveryTime = action.payload;
      console.log(deliveryTime);
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
