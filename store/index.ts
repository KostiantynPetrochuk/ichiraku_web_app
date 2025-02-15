import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./customSlice";

const store = configureStore({
  reducer: {
    customs: customReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
