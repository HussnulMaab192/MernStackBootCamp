// action/reducer/store

// reducer are basically componnents
// like setting reducer will controll the settign of all apps-->to change the theme
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer,
  },
});
