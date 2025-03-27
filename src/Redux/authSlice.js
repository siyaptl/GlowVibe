import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("currentUser")) || null, // Persist data
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload)); // Store login data
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser"); // Clear storage on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
