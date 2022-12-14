import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },

  reducers: {
    updateItemsList(state, action) {
      const newItemsList = action.payload;
      console.log(newItemsList);

      state.itemsList = newItemsList;
    },

    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },

    addToCart(state, action) {
      console.log("I am in addToCart action");
      state.changed = true;
      const newItem = action.payload;
      console.log(newItem);
      // console.log(current(state.itemsList));

      //existing Item check
      const existingItem = state.itemsList.find((item) => {
        return newItem.id === item.id;
      });

      console.log(existingItem);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
        });

        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      //get the Id of the deleted item
      const removedItemId = action.payload;
      state.changed = true;

      //find the deleted item in ItemsList
      const removedItem = state.itemsList.find((item) => {
        return removedItemId === item.id;
      });

      if (removedItem.quantity === 1) {
        const newItemsList = state.itemsList.filter((item) => {
          return item.id !== removedItemId;
        });
        state.itemsList = newItemsList;
        state.totalQuantity--;
      } else {
        removedItem.quantity--;
        removedItem.totalPrice -= removedItem.price;
      }
    },

    setShowCart(state, action) {
      console.log("ahoj");
      const newCartState = action.payload;
      console.log(newCartState);
      state.showCart = newCartState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

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

// import { createSlice, current } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { itemsList: [], totalQuantity: 0, showCart: false },
//   reducers: {
//     addToCart(state, action) {
//       const newItem = action.payload;
//       console.log(newItem);

//       //check if Item is available
//       const existingItem = state.itemsList.find((item) => {
//         return item.id === newItem.id;
//       });

//       if (existingItem) {
//         existingItem.quantity++;
//         existingItem.totalPrice += newItem.price;
//         console.log(current(existingItem));
//       } else {
//         state.itemsList.push({
//           id: newItem.id,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           name: newItem.name,
//         });
//         state.totalQuantity++;
//       }
//     },

//     removeFromCart(state, action) {
//       const id = action.payload;

//       //check if available
//       const existingItem = state.itemsList.find((item) => {
//         return item.id === id;
//       });

//       if (existingItem.quantity === 1) {
//         state.itemsList = state.itemsList.filter((item) => {
//           return item.id !== id;
//         });

//         state.totalQuantity--;
//       } else {
//         existingItem.quantity--;
//         existingItem.totalPrice -= existingItem.price;
//       }
//     },

//     setShowCart(state) {
//       state.showCart = !state.showCart;
//     },
//   },
// });

// export const cartActions = cartSlice.actions;

// export default cartSlice;
