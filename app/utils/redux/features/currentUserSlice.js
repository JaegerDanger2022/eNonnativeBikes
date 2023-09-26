import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  logout: null,
};
export const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },

    setLogout: (state) => {
      state.login = initialState.login;
      state.logout = null;
    },
  },
});

export const { setLogin, setLogout } = CurrentUserSlice.actions;
export const login = (state) => state.currentUser.login;
export const logout = (state) => state.currentUser.logout;
