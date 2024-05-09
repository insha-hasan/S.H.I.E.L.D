import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: { loggedIn: false },
  name: "authSlice",
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
