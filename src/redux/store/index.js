import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { api } from "../api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware),
});
