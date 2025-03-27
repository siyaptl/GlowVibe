import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice"; // Import the auth reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // Add the auth reducer
  },
});

export default store;
