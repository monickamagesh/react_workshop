// src/redux/config.js
import { configureStore } from "@reduxjs/toolkit";


const counterLogic = (state = 0, action) => {
  switch (action.type) {
    case "Add":
      return state + 1;
    case "Sub":
      return state - 1;
    default:
      return state;
  }
};

const storeMyDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "saveDetails":
      console.log(action.data)
      return action.data; 
    default:
      return state; 
  }
};

export const myStore = configureStore({
  reducer: {
    counter: counterLogic,
    myDetails: storeMyDetailsReducer
  },
});
