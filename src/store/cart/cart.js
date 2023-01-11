import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const packCartItem = (info) => {
  const item = {
    itemId: _.uniqueId(),
    info: info,
    amount: 1,
  };
  return item;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartAmount: 0,
    cartPrice: 0,
  },
  reducers: {
    addCartItem(state, action) {
      const cartItems = state.cartItems;
      if (cartItems.length > 0) {
        let equalItemIndex;
        for (let [itemIndex, cartItem] of cartItems.entries()) {
          let isEqual = _.isEqual(cartItem.info, action.payload); 
          if (isEqual) {
            equalItemIndex = itemIndex;
            break;
          }
        }
        if (equalItemIndex !== undefined) {
          cartItems[equalItemIndex].amount += 1;
        } else {
          const cartItem = packCartItem(action.payload);
          cartItems.push(cartItem);
        }
      } else {
        const cartItem = packCartItem(action.payload);
        cartItems.push(cartItem);
      }
      state.cartPrice += +action.payload.price;
      state.cartAmount += 1;
    },
    clearCart(state, action) {
       state.cartItems = [];
       state.cartAmount = 0;
       state.cartPrice = 0;
    },
    incItemAmount(state, action) {
      const cartItems = state.cartItems;
      for (let cartItem of cartItems) {
        if (cartItem.itemId === action.payload) {
          cartItem.amount += 1;
          state.cartPrice += +cartItem.info.price;
          state.cartAmount += 1;
          break;
        }
      }
    },
    decItemAmount(state, action) {
      const cartItems = state.cartItems;
      for (let cartItem of cartItems) {
        if (cartItem.itemId === action.payload) {
          if (cartItem.amount > 1) {
            cartItem.amount -= 1;
            state.cartPrice -= +cartItem.info.price;
            state.cartAmount -= 1;
            break;
          } 
        }
      }
    },
    deleteItem(state, action) {
      let cartItems = state.cartItems;
      for (let [itemIndex, cartItem] of cartItems.entries()) {
        if (cartItem.itemId === action.payload) {
          state.cartPrice -= cartItem.info.price * cartItem.amount;
          state.cartAmount -= cartItem.amount;
          cartItems = cartItems.splice(itemIndex, 1);
          break;
        }
      }
    }
  }
});

export const { addCartItem, clearCart, incItemAmount, decItemAmount, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;