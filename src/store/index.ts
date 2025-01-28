import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import bookSlice from "./slice/bookSlice";
import filterSlice from "./slice/filterSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    book: bookSlice,
    filter: filterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;