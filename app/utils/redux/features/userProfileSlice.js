import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  user_profile_image: "",
  credentials: "",
  usernameTrackerKey: "",
  firstTime: false,
  themeMode: true,
};
export const UserProfileSlice = createSlice({
  name: "user_profile",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.themeMode = action.payload;
    },
    setProfileImage: (state, action) => {
      state.user_profile_image = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setUsernameTrackerKey: (state, action) => {
      state.usernameTrackerKey = action.payload;
    },
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    setFirstTime: (state, action) => {
      state.firstTime = action.payload;
    },
    resetUserProfile: () => {
      return initialState;
    },
  },
});

export const {
  setTheme,
  setProfileImage,
  setUsername,
  setFirstName,
  setLastName,
  setEmail,
  setMobile,
  setFirstTime,
  setCredentials,
  setUsernameTrackerKey,
  resetUserProfile,
} = UserProfileSlice.actions;
// exporting states
export const themeMode = (state) => state.user_profile.themeMode;
export const user_profile_image = (state) =>
  state.user_profile.user_profile_image;
export const credentials = (state) => state.user_profile.credentials;
export const username = (state) => state.user_profile.username;
export const firstName = (state) => state.user_profile.firstName;
export const lastName = (state) => state.user_profile.lastName;
export const email = (state) => state.user_profile.email;
export const mobile = (state) => state.user_profile.mobile;
export const firstTime = (state) => state.user_profile.firstTime;
export const usernameTrackerKey = (state) =>
  state.user_profile.usernameTrackerKey;
