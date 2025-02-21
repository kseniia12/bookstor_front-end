import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import filterSlice from "./filter/filterSlice";
import bookSlice from "./book/bookSlice";
import cartSlice from "./cart/cartSlice";
import favoritesSlice from "./favorites/favoritesSlice";
import commentsSlice from "./comments/commentsSlice";


const store = configureStore({
  reducer: {
    users: userSlice,
    book: bookSlice,
    filter: filterSlice,
    cart: cartSlice,
    favorites: favoritesSlice,
    comments: commentsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
