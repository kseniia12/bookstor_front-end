import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import bookSlice from "./slice/bookSlice";
import filterSlice from "./slice/filterSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    book: bookSlice,
    filter: filterSlice,
    cart: cartSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;